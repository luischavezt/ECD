const config = {
    A: { equipos: ["Mexico", "Sudafrica", "Corea del Sur", "Rep. Checa"], partidos: [
        {fecha: "11 junio 14:00 - MEXICO", e1: "Mexico", e2: "Sudafrica"}, {fecha: "11 jun 21:00 - GUADALAJARA", e1: "Corea del Sur", e2: "Rep. Checa"}, {fecha: "18 jun 20:00 - GUADALAJARA", e1: "Mexico", e2: "Corea del Sur"}, {fecha: "18 jun 11:00 - ATLANTA", e1: "Rep. Checa", e2: "Sudafrica"}, {fecha: "24 jun 20:00 - MEXICO", e1: "Mexico", e2: "Rep. Checa"}, {fecha: "24 jun 20:00 - MONTERREY", e1: "Sudafrica", e2: "Corea del Sur"}]},
    B: { equipos: ["Canada", "Bosnia", "Qatar", "Suiza"], partidos: [
        {fecha: "12 jun 14:00 - TORONTO", e1: "Canada", e2: "Bosnia"}, {fecha: "13 jun 14:00 - SAN FRANCISCO", e1: "Qatar", e2: "Suiza"}, {fecha: "18 jun 17:00 - VANCOUVER", e1: "Canada", e2: "Qatar"}, {fecha: "18 jun 14:00 - LOS ANGELES", e1: "Suiza", e2: "Bosnia"}, {fecha: "24 jun 14:00 - VANCOUVER", e1: "Canada", e2: "Suiza"}, {fecha: "24 jun 14:00 - SEATTLE", e1: "Bosnia", e2: "Qatar"}]},
    C: { equipos: ["Brasil", "Marruecos", "Haiti", "Escocia"], partidos: [
        {fecha: "13 jun 17:00 - NEW JEARSEY", e1: "Brasil", e2: "Marruecos"}, {fecha: "13 jun 20:00 - BOSTON", e1: "Haiti", e2: "Escocia"}, {fecha: "19 jun 19:30 - FILADELFIA", e1: "Brasil", e2: "Haiti"}, {fecha: "19 jun 17:00 - BOSTON", e1: "Escocia", e2: "Marruecos"}, {fecha: "24 jun 17:00 - MIAMI", e1: "Brasil", e2: "Escocia"}, {fecha: "24 jun 17:00 - ATLANTA", e1: "Marruecos", e2: "Haiti"}]},
    D: { equipos: ["EEUU", "Paraguay", "Australia", "Turquia"], partidos: [
        {fecha: "12 jun 20:00 - LOS ANGELES", e1: "EEUU", e2: "Paraguay"}, {fecha: "13 jun 23:00 - VANCOUVER", e1: "Australia", e2: "Turquia"}, {fecha: "19 jun 14:00 - SEATTLE", e1: "EEUU", e2: "Australia"}, {fecha: "19 jun 22:00 - SAN FRANCISCO", e1: "Turquia", e2: "Paraguay"}, {fecha: "25 jun 21:00 - LOS ANGELES", e1: "EEUU", e2: "Turquia"}, {fecha: "25 jun 21:00 - SAN FRANCISCO", e1: "Paraguay", e2: "Australia"}]},
    E: { equipos: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"], partidos: [
        {fecha: "14 jun 12:00 - HOUSTON", e1: "Alemania", e2: "Curazao"}, {fecha: "14 jun 18:00 - FILADELFIA", e1: "Costa de Marfil", e2: "Ecuador"}, {fecha: "20 jun 15:00 - TORONTO", e1: "Alemania", e2: "Costa de Marfil"}, {fecha: "20 jun 19:00 - KANSAS CITY", e1: "Ecuador", e2: "Curazao"}, {fecha: "25 jun 15:00 - FILADELFIA", e1: "Alemania", e2: "Ecuador"}, {fecha: "25 jun 15:00 - NEW JERSEY", e1: "Curazao", e2: "Costa de Marfil"}]},
    F: { equipos: ["Paises Bajos", "Japon", "Suecia", "Tunez"], partidos: [
        {fecha: "14 jun 15:00 - DALLAS", e1: "Paises Bajos", e2: "Japon"}, {fecha: "14 jun 21:00 - MONTERREY", e1: "Suecia", e2: "Tunez"}, {fecha: "20 jun 12:00 - HOUSTON", e1: "Paises Bajos", e2: "Suecia"}, {fecha: "20 jun 23:00 - MONTERREY", e1: "Japon", e2: "Tunez"}, {fecha: "25 jun 18:00 - DALLAS", e1: "Paises Bajos", e2: "Tunez"}, {fecha: "25 jun 18:00 - KANSAS CITY", e1: "Japon", e2: "Suecia"}]},
    G: { equipos: ["Belgica", "Egipto", "Iran", "Nueva Zelanda"], partidos: [
        {fecha: "15 jun 14:00 - LOS ANGELES", e1: "Belgica", e2: "Egipto"}, {fecha: "15 jun 20:00 - SEATTLE", e1: "Iran", e2: "Nueva Zelanda"}, {fecha: "21 jun 14:00 - LOS ANGELES", e1: "Belgica", e2: "Iran"}, {fecha: "21 jun 20:00 - VANCOUVER", e1: "Nueva Zelanda", e2: "Egipto"}, {fecha: "26 jun 22:00 - SEATTLE", e1: "Belgica", e2: "Nueva Zelanda"}, {fecha: "26 jun 22:00 - VANCOUVER", e1: "Egipto", e2: "Iran"}]},
    H: { equipos: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"], partidos: [
        {fecha: "15 jun 11:00 - MIAMI", e1: "España", e2: "Cabo Verde"}, {fecha: "15 jun 17:00 - ATLANTA", e1: "Arabia Saudita", e2: "Uruguay"}, {fecha: "21 jun 11:00 - MIAMI", e1: "España", e2: "Arabia Saudita"}, {fecha: "21 jun 17:00 - ATLANTA", e1: "Uruguay", e2: "Cabo Verde"}, {fecha: "26 jun 19:00 - HOUSTON", e1: "España", e2: "Uruguay"}, {fecha: "26 jun 19:00 - GUADALAJARA", e1: "Cabo Verde", e2: "Arabia Saudita"}]},
    I: { equipos: ["Francia", "Senegal", "Irak", "Noruega"], partidos: [
        {fecha: "16 jun 14:00 - NEW JERSEY", e1: "Francia", e2: "Senegal"}, {fecha: "16 jun 17:00 - BOSTON", e1: "Irak", e2: "Noruega"}, {fecha: "22 jun 16:00 - FILADELFIA", e1: "Francia", e2: "Irak"}, {fecha: "22 jun 19:00 - NEW JERSEY", e1: "Noruega", e2: "Senegal"}, {fecha: "26 jun 14:00 - BOSTON", e1: "Francia", e2: "Noruega"}, {fecha: "26 jun 14:00 - TORONTO", e1: "Senegal", e2: "Irak"}]},
    J: { equipos: ["Argentina", "Argelia", "Austria", "Jordania"], partidos: [
        {fecha: "16 jun 20:00 - KANSAS CITY", e1: "Argentina", e2: "Argelia"}, {fecha: "16 jun 23:00 - SAN FRANCISCO", e1: "Austria", e2: "Jordania"}, {fecha: "22 jun 12:00 - DALLAS", e1: "Argentina", e2: "Austria"}, {fecha: "22 jun 22:00 - SAN FRANCISCO", e1: "Jordania", e2: "Argelia"}, {fecha: "27 jun 21:00 - DALLAS", e1: "Argentina", e2: "Jordania"}, {fecha: "27 jun 21:00 - KANSAS CITY", e1: "Argelia", e2: "Austria"}]},
    K: { equipos: ["Portugal", "Congo", "Uzbequistan", "Colombia"], partidos: [
        {fecha: "17 jun 12:00 - HOUSTON", e1: "Portugal", e2: "Congo"}, {fecha: "17 jun 21:00 - MEXICO", e1: "Uzbequistan", e2: "Colombia"}, {fecha: "23 jun 12:00 - HOUSTON", e1: "Portugal", e2: "Uzbequistan"}, {fecha: "23 jun 21:00 - GUADALAJARA", e1: "Congo", e2: "Colombia"}, {fecha: "27 jun 18:30 - MIAMI", e1: "Portugal", e2: "Colombia"}, {fecha: "27 jun 18:30 - ATLANTA", e1: "Congo", e2: "Uzbequistan"}]},
    L: { equipos: ["Inglaterra", "Croacia", "Ghana", "Panama"], partidos: [
        {fecha: "17 jun 15:00 - TORONTO", e1: "Inglaterra", e2: "Croacia"}, {fecha: "17 jun 18:00 - DALLAS", e1: "Ghana", e2: "Panama"}, {fecha: "23 jun 15:00 - BOSTON", e1: "Inglaterra", e2: "Ghana"}, {fecha: "23 jun 18:00 - TORONTO", e1: "Panama", e2: "Croacia"}, {fecha: "27 jun 16:00 - NEW JERSEY", e1: "Inglaterra", e2: "Panama"}, {fecha: "27 jun 16:00 - FILADELFIA", e1: "Croacia", e2: "Ghana"}]}
};

const banderas = {
    "Mexico": "mx", "Sudafrica": "za", "Corea del Sur": "kr", "Rep. Checa": "cz",
    "Canada": "ca", "Bosnia": "ba", "Qatar": "qa", "Suiza": "ch",
    "Brasil": "br", "Marruecos": "ma", "Haiti": "ht", "Escocia": "gb-sct",
    "EEUU": "us", "Paraguay": "py", "Australia": "au", "Turquia": "tr",
    "Alemania": "de", "Curazao": "cw", "Costa de Marfil": "ci", "Ecuador": "ec",
    "Paises Bajos": "nl", "Japon": "jp", "Suecia": "se", "Tunez": "tn",
    "Belgica": "be", "Egipto": "eg", "Iran": "ir", "Nueva Zelanda": "nz",
    "España": "es", "Cabo Verde": "cv", "Arabia Saudita": "sa", "Uruguay": "uy",
    "Francia": "fr", "Senegal": "sn", "Irak": "iq", "Noruega": "no",
    "Argentina": "ar", "Argelia": "dz", "Austria": "at", "Jordania": "jo",
    "Portugal": "pt", "Congo": "cg", "Uzbequistan": "uz", "Colombia": "co",
    "Inglaterra": "gb-eng", "Croacia": "hr", "Ghana": "gh", "Panama": "pa"
};

function getFlag(nombre) {
    const code = banderas[nombre];
    return code ? `<img src="https://flagcdn.com/w20/${code}.png" style="margin-right:8px; vertical-align:middle; border-radius:2px;">` : '';
}

function init() {
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(letra => {
        const contenedor = document.getElementById(`partidos${letra}`);
        if (!contenedor) return;
        const grupo = config[letra];
        contenedor.innerHTML = grupo.partidos.map((p, index) => `
            <div class="partido">
                <span class="fecha-partido">${p.fecha}</span>
                <span>${getFlag(p.e1)} ${p.e1}</span>
                <input type="number" class="score" id="p${letra}${index}_v1" data-e1="${p.e1}" data-e2="${p.e2}" value="${localStorage.getItem(`p${letra}${index}_v1`) || ''}">
                <span>-</span>
                <input type="number" class="score" id="p${letra}${index}_v2" data-e1="${p.e1}" data-e2="${p.e2}" value="${localStorage.getItem(`p${letra}${index}_v2`) || ''}">
                <span>${getFlag(p.e2)} ${p.e2}</span>
            </div>
        `).join('');
    });

    const inputs16 = document.querySelectorAll('.score16');
    inputs16.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor !== null) input.value = valor;
    });

    // 1. Agregar el evento de escucha a TODOS los inputs (grupos y fases)
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', () => {
            actualizarBarraProgreso();
        });
    });

    // 2. Ejecutar las funciones iniciales
    actualizarTodo();
    actualizarBarraProgreso(); // Inicializa la barra al cargar
}

function mostrarSeccion(idSeccion, btnElement) {
    const todos = document.querySelectorAll('.grupo, .seccion');
    todos.forEach(el => el.classList.add('oculto'));
    const contenedorBotones = document.getElementById('contenedor-botones-limpieza');
    if (idSeccion === 'bienvenida') {
        contenedorBotones.classList.add('oculto');
    } else {
        contenedorBotones.classList.remove('oculto');
    }
    document.getElementById(idSeccion).classList.remove('oculto');
    const botones = document.querySelectorAll('.scroll-container button');
    botones.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
}

function calcular(letra) {
    let stats = {};
    config[letra].equipos.forEach(e => stats[e] = { pts: 0, dg: 0 });
    const contenedorPartidos = document.getElementById(`partidos${letra}`);
    if (!contenedorPartidos) return [];
    const inputs = contenedorPartidos.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i += 2) {
        let val1 = inputs[i].value, val2 = inputs[i+1].value;
        if (val1 !== "" && val2 !== "") {
            let e1 = inputs[i].dataset.e1, e2 = inputs[i].dataset.e2;
            let g1 = parseInt(val1), g2 = parseInt(val2);
            if (g1 > g2) stats[e1].pts += 3;
            else if (g2 > g1) stats[e2].pts += 3;
            else { stats[e1].pts += 1; stats[e2].pts += 1; }
            stats[e1].dg += (g1 - g2); stats[e2].dg += (g2 - g1);
        }
    }
    let sorted = Object.entries(stats).sort((a,b) => b[1].pts - a[1].pts || b[1].dg - a[1].dg);
    const tabla = document.getElementById(`tabla${letra}`);
    const tbody = tabla ? tabla.querySelector('tbody') : null;
    if(tbody) {
        tbody.innerHTML = sorted.map((e, i) => `
            <tr>
                <td>${i+1}</td>
                <td>${getFlag(e[0])} ${e[0]}</td>
                <td>${e[1].pts}</td>
                <td>${e[1].dg}</td>
            </tr>
        `).join('');
    }
    return sorted;
}

function actualizarGanadores() {
    for (let i = 73; i <= 88; i++) {
        const v1 = parseInt(document.getElementById(`p${i}_v1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_v2`)?.value);
        const el1 = document.getElementById(`equipo${(i - 73) * 2 + 1}`)?.innerHTML;
        const el2 = document.getElementById(`equipo${(i - 73) * 2 + 2}`)?.innerHTML;
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2)) target.innerHTML = (v1 > v2) ? el1 : el2;
    }
    const mapas = {
        89: [74, 77], 90: [73, 75], 91: [76, 78], 92: [79, 80], 93: [83, 84], 94: [81, 82], 95: [86, 88], 96: [85, 87],
        97: [89, 90], 98: [93, 94], 99: [91, 92], 100: [95, 96], 101: [97, 98], 102: [99, 100]
    };
    for (let i = 89; i <= 102; i++) {
        const n1 = document.getElementById(`ganador${mapas[i][0]}`)?.innerHTML;
        const n2 = document.getElementById(`ganador${mapas[i][1]}`)?.innerHTML;
        const v1 = parseInt(document.getElementById(`p${i}_equipo1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_equipo2`)?.value);
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2) && n1 && n2 && !n1.includes("Ganador") && !n2.includes("Ganador")) {
            target.innerHTML = (v1 > v2) ? n1 : n2;
        }
    }
    const nF1 = document.getElementById('ganador101')?.innerHTML;
    const nF2 = document.getElementById('ganador102')?.innerHTML;
    const vF1 = parseInt(document.getElementById('p104_equipo1')?.value);
    const vF2 = parseInt(document.getElementById('p104_equipo2')?.value);
    const secCampeon = document.getElementById('seccionCampeon');
    const targetCampeon = document.getElementById('nombreCampeon');
    if (!isNaN(vF1) && !isNaN(vF2) && nF1 && nF2 && !nF1.includes("Ganador") && !nF2.includes("Ganador")) {
        targetCampeon.innerHTML = (vF1 > vF2) ? nF1 : nF2;
        secCampeon.classList.remove('oculto');
    } else {
        secCampeon.classList.add('oculto');
    }
}

function actualizarTodo() {
    const tablas = {};
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(l => tablas[l] = calcular(l));
    const mapping = [
        ['equipo1', 'A', 1], ['equipo2', 'B', 1], ['equipo3', 'E', 0], ['equipo4', 'B', 2],
        ['equipo5', 'F', 0], ['equipo6', 'C', 1], ['equipo7', 'C', 0], ['equipo8', 'F', 1],
        ['equipo9', 'I', 0], ['equipo10', 'A', 2], ['equipo11', 'E', 1], ['equipo12', 'I', 1],
        ['equipo13', 'A', 0], ['equipo14', 'C', 2], ['equipo15', 'L', 0], ['equipo16', 'D', 2],
        ['equipo17', 'D', 0], ['equipo18', 'E', 2], ['equipo19', 'G', 0], ['equipo20', 'F', 2],
        ['equipo21', 'K', 1], ['equipo22', 'L', 1], ['equipo23', 'H', 0], ['equipo24', 'J', 1],
        ['equipo25', 'B', 0], ['equipo26', 'G', 2], ['equipo27', 'J', 0], ['equipo28', 'H', 1],
        ['equipo29', 'K', 0], ['equipo30', 'H', 2], ['equipo31', 'D', 1], ['equipo32', 'G', 1]
    ];
    mapping.forEach(([id, grupo, idx]) => { 
        const el = document.getElementById(id); 
        if (el && tablas[grupo] && tablas[grupo][idx]) {
            const nombreEquipo = tablas[grupo][idx][0];
            el.innerHTML = `${getFlag(nombreEquipo)} ${nombreEquipo}`;
        } 
    });
    actualizarGanadores();
}

function limpiarScores() {
    if (confirm("¿Estás seguro de que quieres borrar todos los marcadores?")) {
        localStorage.clear();
        document.querySelectorAll('.score, .score16').forEach(input => input.value = "");
        actualizarTodo();
        alert("Resultados borrados.");
    }
}

function limpiarGrupoActual() {
    const secciones = document.querySelectorAll('.seccion, .grupo');
    let seccionVisible = null;
    secciones.forEach(sec => { if (!sec.classList.contains('oculto')) seccionVisible = sec; });
    if (!seccionVisible) { alert("Por favor, selecciona una sección primero."); return; }
    const jerarquiaFases = [
        { id: 'fase16vos', subfases: ['fase16vos', 'fase8vos', 'fase4tos', 'seccionCampeon'] },
        { id: 'fase8vos', subfases: ['fase8vos', 'fase4tos', 'seccionCampeon'] },
        { id: 'fase4tos', subfases: ['fase4tos', 'seccionCampeon'] }
    ];
    const idActual = seccionVisible.id;
    if (confirm(`¿Estás seguro de borrar los resultados de ${idActual} y todas las fases posteriores?`)) {
        if (idActual.startsWith('grupo')) {
            limpiarInputsDeElemento(seccionVisible);
        } else {
            const fase = jerarquiaFases.find(f => f.id === idActual);
            if (fase) fase.subfases.forEach(idSub => { const el = document.getElementById(idSub); if (el) limpiarInputsDeElemento(el); });
        }
        actualizarTodo();
        alert(`Sección ${idActual} y siguientes limpiadas.`);
    }
}

function limpiarInputsDeElemento(elemento) {
    elemento.querySelectorAll('input').forEach(input => { input.value = ""; localStorage.removeItem(input.id); });
    elemento.querySelectorAll('[id^="ganador"]').forEach(span => {
        const idNum = span.id.replace('ganador', '');
        span.innerText = "Ganador P" + idNum;
    });
    const nombreCampeon = document.getElementById('nombreCampeon');
    if (nombreCampeon && elemento.id === 'seccionCampeon') nombreCampeon.innerText = "";
}

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('score') || e.target.classList.contains('score16')) {
        localStorage.setItem(e.target.id, e.target.value);
        actualizarTodo();
    }
});

function actualizarBarraProgreso() {
    // Seleccionamos todos los inputs de tipo "score"
    const todosLosInputs = document.querySelectorAll('input[type="number"]');
    const total = todosLosInputs.length;
    
    // Contamos cuántos tienen algún valor escrito
    let llenos = 0;
    todosLosInputs.forEach(input => {
        if (input.value !== "" && input.value !== null) {
            llenos++;
        }
    });

    const porcentaje = Math.round((llenos / total) * 100);
    
    const barra = document.getElementById('barra-progreso');
    barra.style.width = porcentaje + "%";
    barra.innerText = porcentaje + "%";
}

window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');

    // Espera 3 segundos
    setTimeout(() => {
        splash.classList.add('ocultar-splash');
    }, 3000);
});
init();
