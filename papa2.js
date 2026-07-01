const bancoDePreguntas = [
    { id: 0, pregunta: "¿Cual es el lugar de nacimiento del Papa Leon XIV?", opciones: ["Boston", "Chicago", "Washington", "San Francisco"], correcta: 1 },
    { id: 1, pregunta: "¿Cuál es el 2do nombre del Papa Leon XIV?", opciones: ["Robert", "Vincent", "Joseph", "Francis"], correcta: 3 },
    { id: 2, pregunta: "¿Cuantos hermanos tiene el Papa Leon XIV?", opciones: ["Ninguno", "Uno", "Dos", "Tres"], correcta: 2 },
	{ id: 3, pregunta: "¿Cual es la orden religiosa a la que pertenece el Papa Leon XIV?", opciones: ["Jesuita", "Dominico", "Franciscano", "Agustino"], correcta: 3 },
	{ id: 4, pregunta: "¿Que numero de Papa es Leon XIV?", opciones: ["260", "267", "256", "276"], correcta: 1 }, 
	{ id: 5, pregunta: "¿El Papa Leon XIV, en que año fue ordenado como Sacerdote?", opciones: ["1981", "1982", "1983", "1984"], correcta: 1 }, 
	{ id: 6, pregunta: "¿El Papa Leon XIV, en que año obtuvo la nacionalidad peruana?", opciones: ["2015", "2016", "2017", "2018"], correcta: 0 }, 
	{ id: 7, pregunta: "¿El Papa Leon XIV, cuando fue ordenado como Cardenal?", opciones: ["Diciembre 2022", "Enero 2023", "Setiembre 2023", "Enero 2024"], correcta: 2 },
	{ id: 8, pregunta: "¿En que fecha fue elegio como Papa?", opciones: ["8 mayo 2024", "18 junio 2025", "8 mayo 2025", "18 julio 2025"], correcta: 2 }, 
	{ id: 9, pregunta: "¿Que numero de Papa nacido en el continente americano es?", opciones: ["El 1ro", "El 2do", "El 3ro", "El 4to"], correcta: 1 }, 
	{ id: 10, pregunta: "¿El Papa, en que ciudades trabajo en Peru?", opciones: ["Piura, Chulucanas, Lima y Cusco", "Cajamarca, Chulucanas, Pucallpa y Chiclayo", "Piura, Chulucanas, Trujillo y Chiclayo", "Piura, Tumbes, Chulucanas y Cajamarca"], correcta: 2 },
	{ id: 11, pregunta: "¿Como se llama la reunion donde eligen al Papa?", opciones: ["Concilio", "Conclave", "Jubileo", "Junta de cardenales"], correcta: 1 }, 
	{ id: 12, pregunta: "¿Cual es el termino en latin que se usa para avisar que se eligio a un Papa?", opciones: ["Vivat Papam", "Electus Papam", "Magnum Papam", "Habemus Papam"], correcta: 3 },
	{ id: 13, pregunta: "¿Cual es el deporte preferido del Papa Leon XIV?", opciones: ["Tenis", "Futbol", "Basket", "Voley"], correcta: 0 }, 
	{ id: 14, pregunta: "¿De que equipo de Beisbol es seguidor el Papa Leon XIV?", opciones: ["Red Soxs", "White Soxs", "New York Yankies", "Dodgers"], correcta: 1 },
	{ id: 15, pregunta: "¿Cuantos años tiene el Papa Leon XIV?", opciones: ["65", "68", "70", "72"], correcta: 2 },
	{ id: 16, pregunta: "¿El Papa Leon XIV tiene un doctorado en?", opciones: ["Teologia", "Humanidades", "Filosofia", "Derecho Canonico"], correcta: 3 },
	{ id: 17, pregunta: "¿De que diocesis fue Obispo entre los años 2015 y 2023?", opciones: ["Trujillo", "Lima", "Piura", "Chiclayo"], correcta: 3 },
	{ id: 18, pregunta: "¿Cual es el ultimo pais que ha visitado el Papa Leon XIV en 2026?", opciones: ["Argelia", "Turquia", "España", "Italia"], correcta: 2 },
	{ id: 19, pregunta: "¿Por que eligio el nombre de Leon XIV?", opciones: ["Porque le gusta el nombre Leon", "Por el interes en la inteligencia artificial", "Por seguir las enseñanzas de su antecesor", "Por el interes en los trabajadores y la justicia social"], correcta: 3 }
];

let preguntaActual = 0, aciertos = 0, tiempoInicio = null, cronometroInterval = null, preguntasJuego = [];
// SUPABASE Variable global pero sin inicializar aún
const supabaseUrl = 'https://yojalmwhmibubowkxure.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamFsbXdobWlidWJvd2t4dXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTkyMDIsImV4cCI6MjA5Nzc5NTIwMn0.wPmPcHoMLQJZHdmo93ONLhVe3oCeTS3NKO7lZkjtLl0';

document.addEventListener("DOMContentLoaded", () => {
    window.clienteSupabase = supabase.createClient(supabaseUrl, supabaseKey);
    
    crearRueda();
    actualizarRankingBar();
    actualizarCuentaRegresiva();
    actualizarContadorVoluntarios(); 
	actualizarEstadisticasMensajes();
	cargarEstadisticas();
	cargarCarrusel();
});

function actualizarRankingBar() {
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    for (let i = 0; i < 3; i++) {
        const span = document.getElementById(`rank-${i + 1}`);
        if (span) {
            if (ranking[i]) {
                const mins = Math.floor(ranking[i].tiempo / 60);
                const segs = ranking[i].tiempo % 60;
                const tiempoFormateado = `${String(mins).padStart(2,'0')}:${String(segs).padStart(2,'0')}`;
                // Mostramos: 1º Nombre: X aciertos en 00:00
                span.innerText = `${i + 1}º ${ranking[i].nombre}: ${ranking[i].aciertos} aciertos en ${tiempoFormateado}`;
            } else {
                span.innerText = `${i + 1}º: ---`;
            }
        }
    }
}

function crearRueda() {
    const contenedor = document.getElementById('rueda');
    if (!contenedor) return;
    
    // Limpiamos contenido previo
    contenedor.innerHTML = '';
    
    // Obtenemos las dimensiones reales del contenedor
    const rect = contenedor.getBoundingClientRect();
    const centro = rect.width / 2;
    
    // El radio debe ser menor al centro para que las letras no se salgan
    // Restamos el radio de la letra (o la mitad de su tamaño) para centrarla
    const radio = centro - 30; 
    const numLetras = 20;

    for (let i = 0; i < numLetras; i++) {
        const div = document.createElement('div');
        div.className = 'letra';
        
        // Ángulo para distribuir las letras en círculo
        const angulo = (i / numLetras) * 2 * Math.PI - Math.PI / 2;
        
        // Posicionamos basándonos en el centro calculado
        const x = centro + radio * Math.cos(angulo);
        const y = centro + radio * Math.sin(angulo);
        
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.innerText = String.fromCharCode(65 + i);
        
        contenedor.appendChild(div);
    }
}
function iniciarTrivia() {
    preguntasJuego = [...bancoDePreguntas].sort(() => Math.random() - 0.5).slice(0, 20);
    aciertos = 0;
    tiempoInicio = new Date();
    document.querySelector('button[onclick="iniciarTrivia()"]').style.display = 'none'; // Oculta el botón EMPEZAR
    
    cronometroInterval = setInterval(() => {
        const segsTotales = Math.round((new Date() - tiempoInicio) / 1000);
        const mins = Math.floor(segsTotales / 60);
        const segs = segsTotales % 60;
        document.getElementById('timer').innerText = `${String(mins).padStart(2,'0')}:${String(segs).padStart(2,'0')}`;
    }, 1000);
    
    cargarPregunta(0);
}

function cargarPregunta(index) {
    preguntaActual = index;
    const data = preguntasJuego[index];
    document.getElementById('pregunta').innerText = `Pregunta ${index + 1}: ${data.pregunta}`;
    
    // Resaltar círculo
    document.querySelectorAll('.letra').forEach((el, i) => {
        el.classList.toggle('resaltada', i === index);
    });

    const divOpciones = document.getElementById('opciones');
    divOpciones.innerHTML = ''; // SOLO borra las opciones antiguas
    document.getElementById('mensaje').innerHTML = '';
    
    data.opciones.forEach((opcion, i) => {
        const btn = document.createElement('button');
        btn.innerText = opcion;
        btn.onclick = () => verificarRespuesta(i, data.correcta, btn);
        divOpciones.appendChild(btn);
    });
}

function verificarRespuesta(seleccionada, correcta, btnElement) {
    document.querySelectorAll('#opciones button').forEach(b => b.disabled = true);
    btnElement.classList.add('seleccionada');
    
    const esCorrecto = (seleccionada === correcta);
    if (esCorrecto) aciertos++;
    
    // --- ESTA ES LA PARTE QUE DEBES AÑADIR/CAMBIAR ---
    // Seleccionamos la bolita actual (la que está resaltada)
    const bolitaActual = document.querySelector('.letra.resaltada');
    if (bolitaActual) {
        bolitaActual.classList.remove('resaltada'); // Quitamos el resaltado de "en curso"
        // Añadimos una clase permanente según el resultado
        bolitaActual.classList.add(esCorrecto ? 'correcta' : 'incorrecta');
    }
    // --------------------------------------------------

    const divMensaje = document.getElementById('mensaje');
    divMensaje.innerHTML = `<p style="color: ${esCorrecto ? 'green' : 'red'}; font-weight:bold">${esCorrecto ? '¡CORRECTO!' : 'INCORRECTO'}</p>`;
    if (!esCorrecto) divMensaje.innerHTML += `<p>La respuesta era: <strong>${preguntasJuego[preguntaActual].opciones[correcta]}</strong></p>`;

    const btnSiguiente = document.createElement('button');
    btnSiguiente.innerText = "Siguiente Pregunta";
    btnSiguiente.onclick = () => {
        if (preguntaActual + 1 < preguntasJuego.length) cargarPregunta(preguntaActual + 1);
        else finalizarJuego();
    };
    divMensaje.appendChild(btnSiguiente);
}

function finalizarJuego() {
    clearInterval(cronometroInterval);
    const totalSeg = Math.round((new Date() - tiempoInicio) / 1000);
    const nombre = prompt("¡Trivia terminada! Ingresa tu apodo:");
    
    let ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    
    // Guardamos nombre, aciertos y tiempo
    ranking.push({ 
        nombre: nombre || "Anónimo", 
        aciertos: aciertos, 
        tiempo: totalSeg 
    });

    // Lógica de ordenamiento: 
    // 1. Mayor cantidad de aciertos
    // 2. Si hay empate, menor tiempo
    ranking.sort((a, b) => {
        if (b.aciertos !== a.aciertos) {
            return b.aciertos - a.aciertos;
        }
        return a.tiempo - b.tiempo;
    });

    localStorage.setItem('ranking', JSON.stringify(ranking.slice(0, 3)));
    
    actualizarRankingBar();
    
    document.getElementById('pregunta').innerText = "¡Juego Terminado!";
    document.getElementById('opciones').innerHTML = '';
    document.getElementById('mensaje').innerHTML = `<button onclick="location.reload()">Jugar de nuevo</button>`;
}

function alternarSeccion() {
    const seccion = document.getElementById('seccion-alojamiento');
    // Obtenemos el radio button que el usuario acaba de seleccionar
    const seleccion = document.querySelector('input[name="alojamiento"]:checked');

    // Si seleccionó 'si', mostramos el formulario. En cualquier otro caso, lo ocultamos.
    if (seleccion && seleccion.value === 'si') {
        seccion.style.display = 'block';
    } else {
        seccion.style.display = 'none';
    }
}

function actualizarCuentaRegresiva() {
    const fechaVisita = new Date('2026-11-04T00:00:00');
    const hoy = new Date();

    // Eliminar horas para comparar solo fechas
    const fechaActual = new Date(
        hoy.getFullYear(),
        hoy.getMonth(),
        hoy.getDate()
    );

    const fechaPapa = new Date(
        fechaVisita.getFullYear(),
        fechaVisita.getMonth(),
        fechaVisita.getDate()
    );

    const diferenciaDias = Math.floor(
        (fechaPapa - fechaActual) / (1000 * 60 * 60 * 24)
    );

    const countdown = document.getElementById('countdown');

    if (diferenciaDias > 0) {
        // Faltan días
        countdown.style.color = '';
        countdown.innerText = `${diferenciaDias} días`;
    }
    else if (diferenciaDias === 0) {
        // Hoy llega
        countdown.style.color = 'green';
        countdown.innerText = '🟢 Hoy llega el Papa';
    }
    else {
        // Ya llegó
        const diasEnPeru = Math.abs(diferenciaDias);

        countdown.style.color = 'cyan';

        countdown.innerText =
            diasEnPeru === 1
                ? '1 día en Perú'
                : `${diasEnPeru} días en Perú`;
    }
}

async function registrarVoluntario(event) {
    event.preventDefault();

    const form = document.getElementById('formulario-voluntario');
    const formData = new FormData(form);

    const { error } = await window.clienteSupabase
      .from('Voluntarios')
      .insert([
        {
          nombre_completo: formData.get('nombre'),
          dni: formData.get('dni'),
          correo: formData.get('correo'),
          celular: formData.get('celular'),
          procedencia: formData.get('procedencia'),
          edad: parseInt(formData.get('edad'))
        }
      ]);

    if (error) {
      alert('Error al inscribirse: ' + error.message);
    } else {
      form.reset();
      document.getElementById('mensaje-exito').style.display = 'block';
      
      // --- ESTO ES LO NUEVO ---
      actualizarContadorVoluntarios(); 
    }
}

async function actualizarContadorVoluntarios() {
    // .count({ head: true, count: 'exact' }) es la forma más rápida de obtener el total
    const { count, error } = await window.clienteSupabase
        .from('Voluntarios')
        .select('*', { count: 'exact', head: true });

    if (!error) {
        document.getElementById('total-voluntarios').innerText = count;
    } else {
        console.error("Error al contar:", error);
    }
}

async function registrarMensaje(event) {
    event.preventDefault();

    const fileInput = document.getElementById('usuario-foto');
    let fotoUrl = null; // Empezamos sin URL

    // 1. Solo intentamos subir la foto SI el usuario seleccionó una
    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileName = `foto_${Date.now()}_${file.name}`;
        
        const { error: uploadError } = await window.clienteSupabase.storage
            .from('fotos-bienvenida')
            .upload(fileName, file);

        if (uploadError) {
            alert('Error al subir la foto: ' + uploadError.message);
            return; // Detenemos si hubo error real al subir
        }

        // Obtener la URL pública
        const { data: publicUrlData } = window.clienteSupabase.storage
            .from('fotos-bienvenida')
            .getPublicUrl(fileName);
        fotoUrl = publicUrlData.publicUrl;
    }

    // 2. Guardar el registro en la tabla (usando minúsculas: 'mensajes')
    const { error: insertError } = await window.clienteSupabase
        .from('Mensajes') 
        .insert([{
            nombre_apellido: document.getElementById('usuario-nombre').value,
            distrito: document.getElementById('distrito').value,
            parroquia: document.getElementById('parroquia').value,
            grupo_etareo: document.getElementById('grupo-etareo').value,
            mensaje: document.getElementById('usuario-mensaje').value,
            autorizo_mensaje: document.getElementById('autorizacion').checked,
            autorizo_foto: document.getElementById('autorizacionfoto').checked,
            foto_url: fotoUrl // Si no hubo foto, guardará 'null' correctamente
        }]);

    if (insertError) {
        alert('Error al guardar mensaje: ' + insertError.message);
    } else {
        const mensajeExito = document.getElementById('mensaje-exito-form');
        mensajeExito.style.display = 'block';
        document.getElementById('formulario-mensaje').reset();
        
        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 5000);
    }
}

async function actualizarEstadisticasMensajes() {
    // Contamos el total de mensajes
    const { count: totalMensajes, error: errorMensajes } = await window.clienteSupabase
        .from('Mensajes')
        .select('*', { count: 'exact', head: true });

    // Contamos solo los que tienen foto (donde foto_url NO es null)
    const { count: totalFotos, error: errorFotos } = await window.clienteSupabase
        .from('Mensajes')
        .select('*', { count: 'exact', head: true })
        .not('foto_url', 'is', null);

    if (!errorMensajes) {
        document.getElementById('total-mensajes').innerText = totalMensajes || 0;
    }
    if (!errorFotos) {
        document.getElementById('total-fotos').innerText = totalFotos || 0;
    }
}

async function mostrarMensajesEnPagina() {
    const contenedor = document.getElementById('contenedor-mensajesb');
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    
    // 1. Consultar datos a Supabase
    const { data, error } = await window.clienteSupabase
        .from('Mensajes')
        .select('nombre_apellido, mensaje')
        .order('created_at', { ascending: false }); // Opcional: los más recientes primero

    if (error) {
        alert("Error al cargar los mensajes: " + error.message);
        return;
    }

    // 2. Limpiar tabla antes de mostrar nuevos datos
    cuerpoTabla.innerHTML = '';

    // 3. Llenar tabla
    if (data.length === 0) {
        cuerpoTabla.innerHTML = '<tr><td colspan="2" style="text-align:center;">Aún no hay mensajes</td></tr>';
    } else {
        data.forEach(item => {
            const fila = `<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: gold;">${item.nombre_apellido}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: gray;">${item.mensaje}</td>
            </tr>`;
            cuerpoTabla.innerHTML += fila;
        });
    }

    // 4. Mostrar el contenedor
    contenedor.style.display = 'block';
}

async function cargarEstadisticas() {
  const { data, error } = await window.clienteSupabase.rpc('obtener_estadisticas');

  if (error) {
    console.error("Error al obtener estadísticas:", error);
    return;
  }

  if (data && data.length > 0) {
    const s = data[0]; 
    
    // Estos IDs son los que me indicaste que tienes en tu HTML
    document.getElementById('distrito-top').innerText = s.distrito_top || "---";
    document.getElementById('distrito-count').innerText = (s.distrito_total || 0) + " mensajes";
    
    document.getElementById('edad-top').innerText = s.edad_top ? s.edad_top + " años" : "---";
    document.getElementById('edad-count').innerText = (s.edad_total || 0) + " mensajes";
  }
}

async function cargarCarrusel() {
    // 1. Consulta a Supabase
    const { data, error } = await window.clienteSupabase
        .from('Mensajes')
        .select('foto_url')
        .not('foto_url', 'is', null)
        .order('id', { ascending: false });

    if (error) {
        console.error("Error al cargar fotos:", error);
        return;
    }

    const contenedor = document.getElementById('swiper-contenedor-fotos');
    if (!contenedor) return;
    
    // Limpiamos contenido previo
    contenedor.innerHTML = '';
    
    // 2. Generar el HTML de cada slide
    data.forEach(item => {
		const slide = document.createElement('div');
		slide.className = 'swiper-slide';
		
		// --- ESTA ES LA NUEVA LÍNEA CON EL ENLACE ---
		slide.innerHTML = `
			<a href="${item.foto_url}" target="_blank">
				<img src="${item.foto_url}" alt="Foto enviada">
			</a>
		`; 
		
		contenedor.appendChild(slide);
	});

    // 3. Inicializar Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper(".mySwiper", {
            loop: true, // Esto hace que el movimiento sea infinito
            autoplay: { 
                delay: 2500, 
                disableOnInteraction: false 
            },
            pagination: { 
                el: ".swiper-pagination", 
                clickable: true 
            },
            // Configuración responsiva
            breakpoints: {
                320: {
                    slidesPerView: 2, // 2 fotos en celulares
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3, // 3 fotos en tablets
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 4, // 4 fotos en PC
                    spaceBetween: 20
                }
            }
        });
    }
}

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

// Ejecutar al cargar
actualizarCuentaRegresiva();
