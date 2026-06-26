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

// NUEVO: Instancia de audio (asegúrate de que el archivo 'encender.mp3' esté en la misma carpeta)
const audioVela = new Audio('encender.mp3');

// Variables de control
let ubicacionCapturada = null;

// 2. Lógica de Encendido: Captura ubicación al hacer clic en la vela
const encenderVela = async () => {
    // Reproducir sonido al hacer clic
    audioVela.currentTime = 0; 
    audioVela.play().catch(e => console.log("Audio esperando interacción", e));

    mensajeEstado.textContent = "Obteniendo tu ubicación...";
    
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
        });

        ubicacionCapturada = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };

        // Efecto visual
        const tipo = document.getElementById('tipoPeticion').value;
        llamaVisual.classList.remove('color-salud', 'color-familia', 'color-trabajo', 'llama-encendida');
        llamaVisual.classList.add('llama-encendida');
        
        if (tipo === 'Salud') llamaVisual.classList.add('color-salud');
        else if (tipo === 'Familia') llamaVisual.classList.add('color-familia');
        else if (tipo === 'Trabajo') llamaVisual.classList.add('color-trabajo');

        mensajeEstado.textContent = "¡Vela encendida! Ahora presiona 'Enviar Peticion'.";
    } catch (err) {
        console.error("Error ubicación:", err);
        mensajeEstado.textContent = "Error al obtener ubicación. Por favor, acepta los permisos.";
    }
};

contenedorVela.addEventListener('click', encenderVela);

// 3. Lógica del Botón: Guardar en Supabase y ArcGIS
btnPreparar.addEventListener('click', async () => {
    if (!ubicacionCapturada) {
        alert("Primero debes encender la vela haciendo clic sobre ella.");
        return;
    }

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

    mensajeEstado.textContent = "Enviando información...";

    try {
        // Guardar en ambos
        await Promise.all([
            supabaseClient.from('Peticiones').insert([{ 
                nombres: datos.nombres, 
                tipo_peticion: datos.tipo, 
                peticion: datos.peticion, 
                ciudad: datos.ciudad 
            }]),
            enviarAarcGIS(datos, ubicacionCapturada.lat, ubicacionCapturada.lon)
        ]);
        
        mensajeEstado.textContent = "¡Registro exitoso! Tu petición ha sido enviada.";
        btnPreparar.disabled = true; // Deshabilitar para evitar duplicados

    } catch (err) {
        console.error("Error en el envío:", err);
        mensajeEstado.textContent = "Error: " + (err.message || "No se pudo completar el envío.");
    }
});

// 4. Función de envío a ArcGIS
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

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
    });
    
    return await response.json();
}

// 5. Contador de caracteres
window.actualizarContador = function(textarea) {
    const contador = document.getElementById('contador');
    const longitud = textarea.value.length;
    contador.textContent = `${longitud} / 100 caracteres`;
    contador.style.color = (longitud >= 100) ? "red" : "#888";
};