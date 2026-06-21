// URL de tu Feature Service
const featureLayerUrl = "https://services8.arcgis.com/2qDHoDLqu6VOlf1y/arcgis/rest/services/service_a460c8ca552247aa85da14fa64d84882/FeatureServer/0";

async function cargarDatos() {
    try {
        const url = `${featureLayerUrl}/query?where=1=1&outFields=*&returnGeometry=false&f=json`;
        const response = await fetch(url);
        const data = await response.json();
        
        window.datosGlobales = data.features || [];
        let html = `<table><tr><th>Foto</th><th>Nombre</th><th>Disciplina</th></tr>`;
        
        for (const f of window.datosGlobales) {
            const attr = f.attributes;
            // Verificamos si tiene adjuntos (la API nos lo dice en los atributos)
            const tieneFoto = attr.HasAttachments ? "✅" : "❌";
            
            html += `<tr>
                <td>${tieneFoto}</td>
                <td>${attr.nombre || 'Sin nombre'}</td>
                <td>${attr.disciplina || 'N/A'}</td>
            </tr>`;
        }
        document.getElementById('tabla-container').innerHTML = html + "</table>";
        document.getElementById('btn-generar').style.display = 'block';
    } catch (err) {
        console.error("Error cargando tabla:", err);
    }
}

document.getElementById('btn-generar').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Reporte de Participantes", 105, 20, { align: "center" });

    let y = 40;
    for (const f of window.datosGlobales) {
        const objectId = f.attributes.OBJECTID;
        
        // 1. Obtener info del adjunto
        try {
            const resp = await fetch(`${featureLayerUrl}/${objectId}/attachments?f=json`);
            const data = await resp.json();

            if (data.attachmentInfos && data.attachmentInfos.length > 0) {
                const imgUrl = `${featureLayerUrl}/${objectId}/attachments/${data.attachmentInfos[0].id}`;
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                
                // 2. Convertir a Base64 para jsPDF
                const base64Img = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                
                doc.addImage(base64Img, 'JPEG', 20, y, 30, 30);
            }
        } catch (e) { console.error("Error imagen:", e); }

        // 3. Escribir texto
        doc.setFontSize(12);
        doc.text(`Nombre: ${f.attributes.nombre || 'N/A'}`, 60, y + 10);
        doc.text(`Disciplina: ${f.attributes.disciplina || 'N/A'}`, 60, y + 20);
        
        y += 40;
        if (y > 250) { doc.addPage(); y = 20; }
    }
    doc.save("Reporte_Completo.pdf");
});

cargarDatos();
