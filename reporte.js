// Asegúrate de que esta URL sea la correcta de tu Feature Service
const featureLayerUrl = "https://services8.arcgis.com/2qDHoDLqu6VOlf1y/arcgis/rest/services/service_a460c8ca552247aa85da14fa64d84882/FeatureServer/0";

document.getElementById('btn-generar').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Reporte de Participantes", 20, 20);

    let y = 30;
    for (const f of window.datosGlobales) {
        const attr = f.attributes;
        const objectId = attr.OBJECTID;
        
        // 1. Intentar obtener el adjunto
        try {
            const resp = await fetch(`${featureLayerUrl}/${objectId}/attachments?f=json`);
            const data = await resp.json();

            if (data.attachmentInfos && data.attachmentInfos.length > 0) {
                const imgUrl = `${featureLayerUrl}/${objectId}/attachments/${data.attachmentInfos[0].id}`;
                
                // 2. Descargar imagen y convertir a Base64
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                const base64Img = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                
                // 3. Dibujar la imagen en el PDF
                doc.addImage(base64Img, 'JPEG', 20, y, 30, 30);
            }
        } catch (e) {
            console.error("Error al cargar la foto:", e);
        }

        // 4. Dibujar texto
        doc.text(`Nombre: ${attr.nombre}`, 60, y + 10);
        doc.text(`Disciplina: ${attr.disciplina}`, 60, y + 20);
        
        y += 40;
    }
    doc.save("Reporte_Completo.pdf");
});
