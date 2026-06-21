// Asegúrate de que esta URL sea la correcta después de publicar tu nuevo Survey
const featureLayerUrl = "https://services8.arcgis.com/2qDHoDLqu6VOlf1y/arcgis/rest/services/service_a460c8ca552247aa85da14fa64d84882/FeatureServer/0";

async function cargarDatos() {
    try {
        const url = `${featureLayerUrl}/query?where=1=1&outFields=*&returnGeometry=false&f=json`;
        const response = await fetch(url);
        const data = await response.json();
        
        const features = data.features || [];
        if (features.length === 0) {
            document.getElementById('tabla-container').innerHTML = "No se encontraron registros.";
            return;
        }

        window.datosGlobales = features;

        // 1. Corregido: Agregamos la columna 'Foto' a la tabla
        let html = `<table><tr><th>Foto</th><th>Nombre</th><th>Disciplina</th></tr>`;
        features.forEach(f => {
            const attr = f.attributes;
            const nombre = attr.nombre || attr.Nombres_y_apellidos || 'Sin nombre';
            const disciplina = attr.disciplina || attr.Seleccione_el_deporte_que_le_gusta || 'N/A';
            
            // Indicador visual en la tabla si tiene adjunto
            const tieneFoto = attr.HasAttachments ? "✅" : "❌";
            
            html += `<tr><td>${tieneFoto}</td><td>${nombre}</td><td>${disciplina}</td></tr>`;
        });
        document.getElementById('tabla-container').innerHTML = html + "</table>";
        document.getElementById('btn-generar').style.display = 'block';
        
    } catch (err) {
        document.getElementById('tabla-container').innerHTML = "Error: " + err.message;
    }
}

// Generar PDF
document.getElementById('btn-generar').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text("Reporte de Participantes", 105, 20, { align: "center" });

    let y = 40;

    for (const f of window.datosGlobales) {
        const attr = f.attributes;
        const objectId = attr.OBJECTID;
        const nombre = attr.nombre || 'Sin nombre';
        const disciplina = attr.disciplina || 'N/A';

        // 1. Consultar adjuntos para este ID específico
        const attachmentsUrl = `${featureLayerUrl}/${objectId}/attachments?f=json`;
        
        try {
            const resp = await fetch(attachmentsUrl);
            const data = await resp.json();

            // 2. Si hay adjuntos, descargamos el primero
            if (data.attachmentInfos && data.attachmentInfos.length > 0) {
                const attachmentId = data.attachmentInfos[0].id;
                const imgUrl = `${featureLayerUrl}/${objectId}/attachments/${attachmentId}`;
                
                // Convertir a Base64 para jsPDF
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                const base64Img = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                
                // Dibujar la imagen
                doc.addImage(base64Img, 'JPEG', 20, y, 30, 30);
            }
        } catch (err) {
            console.error("Error procesando adjunto:", err);
        }

        // 3. Dibujar textos
        doc.setFontSize(12);
        doc.text(`Nombre: ${nombre}`, 60, y + 10);
        doc.text(`Disciplina: ${disciplina}`, 60, y + 20);
        
        y += 40;
        if (y > 250) {
            doc.addPage();
            y = 20;
        }
    }
    doc.save("Reporte_Completo.pdf");
});
cargarDatos();
