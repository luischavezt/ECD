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

document.addEventListener("DOMContentLoaded", () => {
    crearRueda();
    actualizarRankingBar();
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

// Ejecutar al cargar
actualizarCuentaRegresiva();
