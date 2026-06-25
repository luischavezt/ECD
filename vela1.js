// 1. Inicialización de Supabase
const supabaseClient = supabase.createClient(
    'https://yojalmwhmibubowkxure.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamFsbXdobWlidWJvd2t4dXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTkyMDIsImV4cCI6MjA5Nzc5NTIwMn0.wPmPcHoMLQJZHdmo93ONLhVe3oCeTS3NKO7lZkjtLl0'
);

// Elementos del DOM
const btnPreparar = document.getElementById('btnPreparar');
const contenedorVela = document.getElementById('contenedorVela');
const llamaVisual = document.getElementById('llamaVisual');
const mensajeEstado = document.getElementById('mensajeEstado');

// Variable de control
let peticionLista = false;

// 2. Lógica del Botón: Enviar a Supabase y ArcGIS
btnPreparar.addEventListener('click', async () => {
    const datos = {
        nombres: document.getElementById('nombres').value,
        tipo: document.getElementById('tipoPeticion').value,
        peticion: document.getElementById('peticion').value,
        ciudad: document.getElementById('ciudad').value
    };

    if (!datos.nombres) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    mensajeEstado.textContent = "Procesando...";

    try {
        // A. Envío a Supabase
        const { error } = await supabaseClient
            .from('Peticiones')
            .insert([{ 
                nombres: datos.nombres, 
                tipo_peticion: datos.tipo, 
                peticion: datos.peticion, 
                ciudad: datos.ciudad 
            }]);

        if (error) throw error;

        // B. Envío a ArcGIS Online
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                await enviarAarcGIS(datos, position.coords.latitude, position.coords.longitude);
            }, (err) => {
                console.error("Error geolocalización:", err);
                alert("Se registró en Supabase, pero no se pudo obtener tu ubicación para ArcGIS.");
            });
        }

        peticionLista = true;
        // Mostramos el contenedor de la vela ahora que se envió el mensaje
        contenedorVela.style.display = 'block'; 
        
        mensajeEstado.textContent = "Petición registrada. ¡Haz clic en la velita para encenderla!";
        mensajeEstado.style.color = "#000";
    } catch (err) {
        mensajeEstado.textContent = "Error: " + err.message;
    }
});

// 3. Función de envío a ArcGIS
async function enviarAarcGIS(data, lat, lon) {
    const url = "https://services.arcgis.com/cV76LyXeQIKRCTNC/arcgis/rest/services/survey123_b76d59fd842e4d3daf2427e7c99fab6d/FeatureServer/0/addFeatures";
    
    const feature = {
        geometry: { x: lon, y: lat, spatialReference: { wkid: 4326 } },
        attributes: {
            nombre_y_apellido: data.nombres,
            tipo_de_peticion: data.tipo,
            peticion: data.peticion,
            ciudad: data.ciudad
        }
    };

    const params = new URLSearchParams();
    params.append("f", "json");
    params.append("features", JSON.stringify([feature]));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params
        });
        const result = await response.json();
        console.log("Respuesta ArcGIS:", result);
    } catch (error) {
        console.error("Error conectando con ArcGIS:", error);
    }
}

// 4. Lógica de Encendido Visual
const encender = () => {
    if (peticionLista) {
        // 1. Limpiar clases previas
        llamaVisual.classList.remove('color-salud', 'color-familia', 'color-trabajo', 'llama-encendida');
        
        // 2. Forzar un pequeño retraso para que la animación de escala se note
        setTimeout(() => {
            const tipo = document.getElementById('tipoPeticion').value;
            llamaVisual.classList.add('llama-encendida'); // Aplica el brillo y el tamaño
            
            if (tipo === 'Salud') llamaVisual.classList.add('color-salud');
            else if (tipo === 'Familia') llamaVisual.classList.add('color-familia');
            else if (tipo === 'Trabajo') llamaVisual.classList.add('color-trabajo');
        }, 50);

        mensajeEstado.textContent = "¡Tu luz ha sido encendida!";
    }
};

contenedorVela.addEventListener('click', encender);
contenedorVela.addEventListener('touchstart', (e) => { e.preventDefault(); encender(); });

// 5. Contador de caracteres
window.actualizarContador = function(textarea) {
    const contador = document.getElementById('contador');
    const longitud = textarea.value.length;
    contador.textContent = `${longitud} / 100 caracteres`;
    contador.style.color = (longitud >= 100) ? "red" : "#888";
};