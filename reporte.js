const featureLayerUrl = "https://services8.arcgis.com/2qDHoDLqu6VOlf1y/arcgis/rest/services/service_a460c8ca552247aa85da14fa64d84882/FeatureServer/0";

async function cargarDatos() {
    try {
        const url = `${featureLayerUrl}/query?where=1=1&outFields=*&returnGeometry=false&f=json`;
        const response = await fetch(url);
        const data = await response.json();
        window.datosGlobales = data.features;

        let html = `<table><tr><th>Foto</th><th>Nombre</th><th>Disciplina</th></tr>`;
        for (const f of data.features) {
            const attr = f.attributes;
            // Verificamos si tiene adjuntos para mostrar el icono correcto
            const resp = await fetch(`${featureLayerUrl}/${attr.OBJECTID}/attachments?f=json`);
            const adj = await resp.json();
            const tieneFoto = (adj.attachmentInfos && adj.attachmentInfos.length > 0);
            
            html += `<tr>
                <td>${tieneFoto ? "✅" : "❌"}</td>
                <td>${attr.nombre || 'Sin nombre'}</td>
                <td>${attr.disciplina || 'N/A'}</td>
            </tr>`;
        }
        document.getElementById('tabla-container').innerHTML = html + "</table>";
    } catch (e) { console.error(e); }
}

document.getElementById('btn-generar').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 20;

    for (const f of window.datosGlobales) {
        const attr = f.attributes;
        const objectId = attr.OBJECTID;
        
        // 1. Intentar descargar la imagen real
        try {
            const resp = await fetch(`${featureLayerUrl}/${objectId}/attachments?f=json`);
            const data = await resp.json();

            if (data.attachmentInfos && data.attachmentInfos.length > 0) {
                const imgUrl = `${featureLayerUrl}/${objectId}/attachments/${data.attachmentInfos[0].id}`;
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                
                // 2. Convertir a Base64 (vital para que el PDF la entienda)
                const base64Img = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                
                doc.addImage(base64Img, 'JPEG', 20, y, 30, 30);
            }
        } catch (e) { console.error("Error al obtener la foto:", e); }

        doc.text(`Nombre: ${attr.nombre || 'N/A'}`, 60, y + 10);
        doc.text(`Disciplina: ${attr.disciplina || 'N/A'}`, 60, y + 20);
        y += 40;
    }
    doc.save("Reporte.pdf");
});

cargarDatos();
