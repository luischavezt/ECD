// URL de tu Feature Service
const featureLayerUrl = "https://services8.arcgis.com/2qDHoDLqu6VOlf1y/arcgis/rest/services/service_a460c8ca552247aa85da14fa64d84882/FeatureServer/0";

async function cargarDatos() {
    try {
        const response = await fetch(`${featureLayerUrl}/query?where=1=1&outFields=*&returnGeometry=false&f=json`);
        const data = await response.json();
        window.datosGlobales = data.features;

        let html = `<table><tr><th>Foto</th><th>Nombre</th><th>Disciplina</th></tr>`;
        for (const f of data.features) {
            // Verificamos si tiene adjuntos mediante el atributo HasAttachments
            const tieneFoto = f.attributes.HasAttachments ? "✅" : "❌";
            html += `<tr><td>${tieneFoto}</td><td>${f.attributes.nombre}</td><td>${f.attributes.disciplina}</td></tr>`;
        }
        document.getElementById('tabla-container').innerHTML = html + "</table>";
    } catch (e) { console.error("Error al cargar:", e); }
}

document.getElementById('btn-generar').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 20;

    for (const f of window.datosGlobales) {
        const objectId = f.attributes.OBJECTID;
        
        // 1. Intentar obtener el ID del adjunto
        try {
            const resp = await fetch(`${featureLayerUrl}/${objectId}/attachments?f=json`);
            const data = await resp.json();

            if (data.attachmentInfos && data.attachmentInfos.length > 0) {
                // 2. Descargar la imagen
                const imgUrl = `${featureLayerUrl}/${objectId}/attachments/${data.attachmentInfos[0].id}`;
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                
                // 3. Convertir a Base64 para que el PDF la acepte
                const base64Img = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                doc.addImage(base64Img, 'JPEG', 20, y, 30, 30);
            }
        } catch (e) { console.error("Error cargando foto:", e); }

        doc.text(`Nombre: ${f.attributes.nombre}`, 60, y + 10);
        doc.text(`Disciplina: ${f.attributes.disciplina}`, 60, y + 20);
        y += 40;
    }
    doc.save("Reporte_Completo.pdf");
});

cargarDatos();
