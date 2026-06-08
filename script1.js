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
    "Portugal": "pt", "Congo": "cd", "Uzbequistan": "uz", "Colombia": "co",
    "Inglaterra": "gb-eng", "Croacia": "hr", "Ghana": "gh", "Panama": "pa"
};

function getFlag(nombre) {
    const code = banderas[nombre];
    return code ? `<img src="https://flagcdn.com/w20/${code}.png" style="margin-right:8px; vertical-align:middle; border-radius:2px;">` : '';
}

function inyectarPenales() {
    const partidos = document.querySelectorAll('.partido');
    partidos.forEach(p => {
        const input1 = p.querySelector('input[id$="_v1"], input[id$="_equipo1"]');
        if (input1 && !p.querySelector('.seccion-penales')) {
            let idPartido = input1.id.split('_')[0].replace('p', '');
            if (parseInt(idPartido) >= 73) {
                const divPenales = document.createElement('div');
                divPenales.className = 'seccion-penales';
                divPenales.id = `penales${idPartido}`;
                divPenales.innerHTML = `
                    <span style="font-size: 0.8rem; color: #ffd700;">Penales:</span>
                    <input type="number" class="score-penal" id="p${idPartido}_pen1" value="${localStorage.getItem(`p${idPartido}_pen1`) || ''}" oninput="guardarPenal('${idPartido}')" style="width:30px"> - 
                    <input type="number" class="score-penal" id="p${idPartido}_pen2" value="${localStorage.getItem(`p${idPartido}_pen2`) || ''}" oninput="guardarPenal('${idPartido}')" style="width:30px">
                `;
                p.appendChild(divPenales);
            }
        }
    });
}

function guardarPenal(id) {
    localStorage.setItem(`p${id}_pen1`, document.getElementById(`p${id}_pen1`).value);
    localStorage.setItem(`p${id}_pen2`, document.getElementById(`p${id}_pen2`).value);
    actualizarTodo();
}

function init() {
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(letra => {
        const contenedor = document.getElementById(`partidos${letra}`);
        if (!contenedor) return;
        const grupo = config[letra];
        contenedor.innerHTML = grupo.partidos.map((p, index) => `
            <div class="partido" id="partido${letra}${index}">
                <span class="fecha-partido">${p.fecha}</span>
                <span>${getFlag(p.e1)} ${p.e1}</span>
                <input type="number" class="score" id="p${letra}${index}_v1" data-e1="${p.e1}" data-e2="${p.e2}" value="${localStorage.getItem(`p${letra}${index}_v1`) || ''}">
                <span>-</span>
                <input type="number" class="score" id="p${letra}${index}_v2" data-e1="${p.e1}" data-e2="${p.e2}" value="${localStorage.getItem(`p${letra}${index}_v2`) || ''}">
                <span>${getFlag(p.e2)} ${p.e2}</span>
            </div>
        `).join('');
    });

    document.querySelectorAll('.score16').forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor !== null) input.value = valor;
    });

    inyectarPenales();
    document.querySelectorAll('.seccion-penales').forEach(div => {
        validarEmpate(div.id.replace('penales', ''));
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', actualizarBarraProgreso);
    });

    actualizarTodo();
    actualizarBarraProgreso();
}

function mostrarSeccion(idSeccion, btnElement) {
    // 1. Ocultar todas las secciones
    document.querySelectorAll('.grupo, .seccion').forEach(el => el.classList.add('oculto'));
    
    // 2. Controlar botones de limpieza
    const contenedorBotones = document.getElementById('contenedor-botones-limpieza');
    if (idSeccion === 'bienvenida') contenedorBotones.classList.add('oculto');
    else contenedorBotones.classList.remove('oculto');
    
    // 3. Controlar visibilidad del contenedor de exportación
    const contenedorExport = document.getElementById('contenedor-exportacion');
    const fasesEliminatorias = ['fase16vos', 'fase8vos', 'fase4tos'];
    
    if (fasesEliminatorias.includes(idSeccion)) {
        contenedorExport.classList.remove('oculto');
    } else {
        contenedorExport.classList.add('oculto');
    }
    
    // 4. Mostrar la sección seleccionada
    document.getElementById(idSeccion).classList.remove('oculto');
    
    // 5. Gestión de clases activas en el menú
    document.querySelectorAll('.scroll-container button').forEach(btn => btn.classList.remove('active'));
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
    const tbody = document.getElementById(`tabla${letra}`)?.querySelector('tbody');
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
        const pen1 = parseInt(document.getElementById(`p${i}_pen1`)?.value);
        const pen2 = parseInt(document.getElementById(`p${i}_pen2`)?.value);
        const el1 = document.getElementById(`equipo${(i - 73) * 2 + 1}`)?.innerHTML;
        const el2 = document.getElementById(`equipo${(i - 73) * 2 + 2}`)?.innerHTML;
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2)) {
            if (v1 > v2) target.innerHTML = el1;
            else if (v2 > v1) target.innerHTML = el2;
            else if (v1 === v2 && !isNaN(pen1) && !isNaN(pen2)) target.innerHTML = (pen1 > pen2) ? el1 : el2;
            else target.innerHTML = "Ganador P" + i;
        }
    }

    const mapas = { 89:[74,77], 90:[73,75], 91:[76,78], 92:[79,80], 93:[83,84], 94:[81,82], 95:[86,88], 96:[85,87], 97:[89,90], 98:[93,94], 99:[91,92], 100:[95,96], 101:[97,98], 102:[99,100] };
    for (let i = 89; i <= 102; i++) {
        const n1 = document.getElementById(`ganador${mapas[i][0]}`)?.innerHTML;
        const n2 = document.getElementById(`ganador${mapas[i][1]}`)?.innerHTML;
        const v1 = parseInt(document.getElementById(`p${i}_equipo1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_equipo2`)?.value);
        const pen1 = parseInt(document.getElementById(`p${i}_pen1`)?.value);
        const pen2 = parseInt(document.getElementById(`p${i}_pen2`)?.value);
        const target = document.getElementById(`ganador${i}`);
        if (target && n1 && n2 && !n1.includes("Ganador") && !n2.includes("Ganador")) {
            if (!isNaN(v1) && !isNaN(v2)) {
                if (v1 > v2) target.innerHTML = n1;
                else if (v2 > v1) target.innerHTML = n2;
                else if (v1 === v2 && !isNaN(pen1) && !isNaN(pen2)) target.innerHTML = (pen1 > pen2) ? n1 : n2;
                else target.innerHTML = "Ganador P" + i;
            } else target.innerHTML = "Ganador P" + i;
        }
    }

    const nF1 = document.getElementById('ganador101')?.innerHTML;
    const nF2 = document.getElementById('ganador102')?.innerHTML;
    const vF1 = parseInt(document.getElementById('p104_equipo1')?.value);
    const vF2 = parseInt(document.getElementById('p104_equipo2')?.value);
    const pF1 = parseInt(document.getElementById('p104_pen1')?.value);
    const pF2 = parseInt(document.getElementById('p104_pen2')?.value);
    const secCampeon = document.getElementById('seccionCampeon');
    const targetCampeon = document.getElementById('nombreCampeon');
    
    if (nF1 && nF2 && !nF1.includes("Ganador") && !nF2.includes("Ganador") && !isNaN(vF1) && !isNaN(vF2)) {
        let ganador = (vF1 > vF2) ? nF1 : (vF2 > vF1) ? nF2 : (vF1 === vF2 && !isNaN(pF1) && !isNaN(pF2)) ? (pF1 > pF2 ? nF1 : nF2) : "";
        if (ganador) { targetCampeon.innerHTML = ganador; secCampeon.classList.remove('oculto'); }
        else secCampeon.classList.add('oculto');
    } else secCampeon.classList.add('oculto');
}

function actualizarTodo() {
    const tablas = {};
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(l => tablas[l] = calcular(l));
    const mapping = [['equipo1','A',1],['equipo2','B',1],['equipo3','E',0],['equipo4','B',2],['equipo5','F',0],['equipo6','C',1],['equipo7','C',0],['equipo8','F',1],['equipo9','I',0],['equipo10','A',2],['equipo11','E',1],['equipo12','I',1],['equipo13','A',0],['equipo14','C',2],['equipo15','L',0],['equipo16','D',2],['equipo17','D',0],['equipo18','E',2],['equipo19','G',0],['equipo20','F',2],['equipo21','K',1],['equipo22','L',1],['equipo23','H',0],['equipo24','J',1],['equipo25','B',0],['equipo26','G',2],['equipo27','J',0],['equipo28','H',1],['equipo29','K',0],['equipo30','H',2],['equipo31','D',1],['equipo32','G',1]];
    mapping.forEach(([id, grupo, idx]) => { 
        const el = document.getElementById(id); 
        if (el && tablas[grupo] && tablas[grupo][idx]) el.innerHTML = `${getFlag(tablas[grupo][idx][0])} ${tablas[grupo][idx][0]}`;
    });
    actualizarGanadores();
}

function limpiarScores() {
    if (confirm("¿Estás seguro de que quieres borrar todos los marcadores?")) {
        localStorage.clear();
        document.querySelectorAll('input').forEach(i => i.value = "");
        actualizarTodo();
        alert("Resultados borrados.");
    }
}

function limpiarInputsDeElemento(elemento) {
    elemento.querySelectorAll('input').forEach(input => { input.value = ""; localStorage.removeItem(input.id); });
    elemento.querySelectorAll('[id^="ganador"]').forEach(span => span.innerText = "Ganador P" + span.id.replace('ganador', ''));
    if (elemento.id === 'seccionCampeon') document.getElementById('nombreCampeon').innerText = "";
}

function limpiarGrupoActual() {
    let seccionVisible = document.querySelector('.seccion:not(.oculto), .grupo:not(.oculto)');
    if (!seccionVisible) { alert("Selecciona una sección."); return; }
    const idActual = seccionVisible.id;
    if (confirm(`¿Borrar ${idActual} y fases posteriores?`)) {
        const jerarquia = { 'fase16vos': ['fase16vos','fase8vos','fase4tos','seccionCampeon'], 'fase8vos': ['fase8vos','fase4tos','seccionCampeon'], 'fase4tos': ['fase4tos','seccionCampeon'] };
        if (idActual.startsWith('grupo')) limpiarInputsDeElemento(seccionVisible);
        else (jerarquia[idActual] || [idActual]).forEach(id => { const el = document.getElementById(id); if (el) limpiarInputsDeElemento(el); });
        actualizarTodo();
    }
}

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('score') || e.target.classList.contains('score16')) {
        localStorage.setItem(e.target.id, e.target.value);
        validarEmpate(e.target.id.split('_')[0].replace('p', ''));
        actualizarTodo();
        actualizarBarraProgreso();
    }
});

function actualizarBarraProgreso() {
    const barra = document.getElementById('barra-progreso');
    const campeon = document.getElementById('nombreCampeon');
    
    // 1. Si ya hay un campeón, terminamos al 100%
    if (campeon && campeon.innerText.trim() !== "" && !campeon.innerText.includes("Ganador")) {
        barra.style.width = "100%";
        barra.innerText = "100%";
        return;
    }

    // 2. Seleccionamos SOLO los inputs que NO son de penales
    // Los inputs de penales tienen la clase 'score-penal', los excluimos con :not
    const inputs = document.querySelectorAll('.partido input[type="number"]:not(.score-penal)');
    
    // Filtramos solo los que tienen valor
    const llenos = Array.from(inputs).filter(i => i.value !== "").length;
    
    // Calculamos el porcentaje
    const total = inputs.length;
    const porcentaje = total > 0 ? Math.round((llenos / total) * 100) : 0;
    
    barra.style.width = porcentaje + "%";
    barra.innerText = porcentaje + "%";
}

function validarEmpate(id) {
    const i1 = document.getElementById(`p${id}_v1`) || document.getElementById(`p${id}_equipo1`);
    const i2 = document.getElementById(`p${id}_v2`) || document.getElementById(`p${id}_equipo2`);
    const cont = document.getElementById(`penales${id}`);
    if (cont) cont.style.display = (i1?.value !== "" && i2?.value !== "" && i1?.value === i2?.value) ? "flex" : "none";
}

window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('splash-screen')?.classList.add('ocultar-splash'), 2000);
    inyectarPenales();
    actualizarTodo();
});

function iniciarExportacion() {
    const selector = document.getElementById('selectorFase');
    const fase = selector ? selector.value : '4tos';
    const canvasExport = document.getElementById('canvas-export');
    const contenido = document.getElementById('contenido-canvas');

    if (!canvasExport || !contenido) return;

    // Función auxiliar para obtener datos de un bloque HTML específico
    const getFila = (pId, e1Id, e2Id, score1Id, score2Id) => {
        const n1 = document.getElementById(e1Id)?.innerText || 'TBD';
        const n2 = document.getElementById(e2Id)?.innerText || 'TBD';
        const v1 = document.getElementById(score1Id)?.value || '0';
        const v2 = document.getElementById(score2Id)?.value || '0';
        return `<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0; color: #fff; font-size: 16px;">
            <span style="width: 150px; text-align: right;">${n1}</span>
            <span style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 5px; margin: 0 15px; color: #DAF527; font-weight: bold;">${v1} - ${v2}</span>
            <span style="width: 150px; text-align: left;">${n2}</span>
        </div>`;
    };

    let html = `<h2 style="color: #DAF527; text-align: center;">${fase.toUpperCase()}</h2>`;

    if (fase === '16vos') {
        for(let i=73; i<=88; i++) {
            let e1Idx = (i - 73) * 2 + 1;
            let e2Idx = (i - 73) * 2 + 2;
            html += getFila(`partido${i}`, `equipo${e1Idx}`, `equipo${e2Idx}`, `p${i}_v1`, `p${i}_v2`);
        }
    } else if (fase === '8vos') {
        // CORRECCIÓN: Leer exactamente los IDs que tienes en tu HTML para 8vos
        for(let i=89; i<=96; i++) {
            html += getFila(`partido${i}`, `ganador${(i===89?74:i===90?73:i===91?76:i===92?79:i===93?83:i===94?81:i===95?86:i===96?85:0)}`, 
                                          `ganador${(i===89?77:i===90?75:i===91?78:i===92?80:i===93?84:i===94?82:i===95?88:i===96?87:0)}`, 
                                          `p${i}_equipo1`, `p${i}_equipo2`);
        }
    } else {
        // 4tos, Semis y Final (Sin cambios, ya funcionaban)
        html += getFila('p97', 'ganador89', 'ganador90', 'p97_equipo1', 'p97_equipo2');
        html += getFila('p98', 'ganador93', 'ganador94', 'p98_equipo1', 'p98_equipo2');
        html += getFila('p99', 'ganador91', 'ganador92', 'p99_equipo1', 'p99_equipo2');
        html += getFila('p100', 'ganador95', 'ganador96', 'p100_equipo1', 'p100_equipo2');
        html += `<h3 style="color:#888; text-align:center;">Semifinal</h3>`;
        html += getFila('p101', 'ganador97', 'ganador98', 'p101_equipo1', 'p101_equipo2');
        html += getFila('p102', 'ganador99', 'ganador100', 'p102_equipo1', 'p102_equipo2');
        html += `<h3 style="color:#888; text-align:center;">Final</h3>`;
        html += getFila('p104', 'ganador101', 'ganador102', 'p104_equipo1', 'p104_equipo2');
    }

    contenido.innerHTML = html;
    canvasExport.style.display = 'block';

    setTimeout(() => {
        html2canvas(canvasExport, { backgroundColor: "#0a192f", scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Resultados_${fase}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            canvasExport.style.display = 'none';
        });
    }, 500);
}

function calcularEstadisticas() {
    let stats = {};
    let golesPorGrupo = {};
    let golesTotales = 0;

    // 1. Inicialización de grupos
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(letra => {
        golesPorGrupo[letra] = 0;
    });

    // 2. Procesamiento de partidos
    const todosLosInputs = document.querySelectorAll('input[type="number"]:not(.score-penal)');
    for (let i = 0; i < todosLosInputs.length; i += 2) {
        let in1 = todosLosInputs[i], in2 = todosLosInputs[i+1];
        if (!in1 || !in2) continue;
        let v1 = parseInt(in1.value) || 0, v2 = parseInt(in2.value) || 0;
        let sumaPartido = v1 + v2;
        golesTotales += sumaPartido;

        let contenedorGrupo = in1.closest('[id^="grupo"]');
        if (contenedorGrupo) {
            let letra = contenedorGrupo.id.replace('grupo', '');
            if (golesPorGrupo.hasOwnProperty(letra)) golesPorGrupo[letra] += sumaPartido;
        }

        let contenedor = in1.closest('.partido') || in1.parentElement;
        let spans = Array.from(contenedor.querySelectorAll('span')).map(s => s.innerText.trim());
        let equipos = spans.filter(n => n.length > 2 && !n.includes(':') && !n.includes('2026') && !n.includes('Ganador'));

        if (equipos.length >= 2) {
            let e1 = equipos[0], e2 = equipos[1];
            if (!stats[e1]) stats[e1] = { v: 0, e: 0, g: 0, gr: 0, pj: 0 };
            if (!stats[e2]) stats[e2] = { v: 0, e: 0, g: 0, gr: 0, pj: 0 };
            stats[e1].pj++; stats[e2].pj++;
            stats[e1].g += v1; stats[e1].gr += v2;
            stats[e2].g += v2; stats[e2].gr += v1;
            if (v1 > v2) { stats[e1].v++; } else if (v2 > v1) { stats[e2].v++; } else { stats[e1].e++; stats[e2].e++; }
        }
    }

    // 3. Actualizar DOM simple
    Object.keys(golesPorGrupo).forEach(letra => {
        let el = document.getElementById(`goles-grupo${letra}-val`);
        if (el) el.innerText = golesPorGrupo[letra];
    });
    const elTotal = document.getElementById('goles-totales-val');
    if (elTotal) elTotal.innerText = golesTotales;

    // 4. Lógica de estadísticas
    const nombres = Object.keys(stats);
    
    // Función para obtener Top 3 de forma completa
    const getTop3 = (crit, tipo) => {
        return nombres
            .filter(n => stats[n].pj > 0)
            .sort((a, b) => {
                let valA = stats[a][crit] / stats[a].pj;
                let valB = stats[b][crit] / stats[b].pj;
                return tipo === 'max' ? valB - valA : valA - valB;
            })
            .slice(0, 3)
            .map(n => ({
                nombre: n, 
                val: `${(stats[n][crit] / stats[n].pj).toFixed(2)} (${stats[n][crit]})`, 
                pj: stats[n].pj 
            }));
    };

    // Función estándar para categorías únicas (Victorias/Empates)
    const getTop = (crit, tipo) => {
        let filtrados = nombres.filter(n => stats[n].pj > 0);
        let vals = filtrados.map(n => stats[n][crit]);
        let target = tipo === 'max' ? Math.max(...vals) : Math.min(...vals);
        let lista = filtrados.filter(n => stats[n][crit] === target);
        return { 
            nombres: lista.join(', '), 
            val: stats[lista[0]][crit], 
            pj: stats[lista[0]].pj 
        };
    };

    // Función para llenar filas
    const setRow = (idN, idV, idP, data) => {
        document.getElementById(idN).innerText = data.nombres;
        document.getElementById(idV).innerText = data.val;
        document.getElementById(idP).innerText = data.pj;
    };

    const setTop3Row = (idN, idV, idP, dataArray) => {
        document.getElementById(idN).innerHTML = dataArray.map(d => d.nombre).join('<br>');
        document.getElementById(idV).innerHTML = dataArray.map(d => d.val).join('<br>');
        document.getElementById(idP).innerHTML = dataArray.map(d => d.pj).join('<br>');
    };

    // Asignaciones
    setRow('stat-wins-name', 'stat-wins-val', 'stat-wins-pj', getTop('v', 'max'));
    setRow('stat-wins-min-name', 'stat-wins-min-val', 'stat-wins-min-pj', getTop('v', 'min'));
    setRow('stat-draws-name', 'stat-draws-val', 'stat-draws-pj', getTop('e', 'max'));

    // Top 3 de Goles (Marcados y Recibidos)
    setTop3Row('stat-goals-name', 'stat-goals-val', 'stat-goals-pj', getTop3('g', 'max'));
    setTop3Row('stat-goals-min-name', 'stat-goals-min-val', 'stat-goals-min-pj', getTop3('g', 'min'));
    setTop3Row('stat-goals-rec-name', 'stat-goals-rec-val', 'stat-goals-rec-pj', getTop3('gr', 'max'));
    setTop3Row('stat-goals-rec-min-name', 'stat-goals-rec-min-val', 'stat-goals-rec-min-pj', getTop3('gr', 'min'));
}

init();