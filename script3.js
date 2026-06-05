const config = {
    A: { equipos: ["Mexico", "Sudafrica", "Corea del Sur", "Rep. Checa"], partidos: [
        {fecha: "11 jun 14:00", e1: "Mexico", e2: "Sudafrica"}, {fecha: "11 jun 21:00", e1: "Corea del Sur", e2: "Rep. Checa"}, {fecha: "18 jun 20:00", e1: "Mexico", e2: "Corea del Sur"}, {fecha: "18 jun 11:00", e1: "Rep. Checa", e2: "Sudafrica"}, {fecha: "24 jun 20:00", e1: "Mexico", e2: "Rep. Checa"}, {fecha: "24 jun 20:00", e1: "Sudafrica", e2: "Corea del Sur"}]},
    B: { equipos: ["Canada", "Bosnia", "Qatar", "Suiza"], partidos: [
        {fecha: "12 jun 14:00", e1: "Canada", e2: "Bosnia"}, {fecha: "13 jun 14:00", e1: "Qatar", e2: "Suiza"}, {fecha: "18 jun 17:00", e1: "Canada", e2: "Qatar"}, {fecha: "18 jun 14:00", e1: "Suiza", e2: "Bosnia"}, {fecha: "24 jun 14:00", e1: "Canada", e2: "Suiza"}, {fecha: "24 jun 14:00", e1: "Bosnia", e2: "Qatar"}]},
    C: { equipos: ["Brasil", "Marruecos", "Haiti", "Escocia"], partidos: [
        {fecha: "13 jun 17:00", e1: "Brasil", e2: "Marruecos"}, {fecha: "13 jun 20:00", e1: "Haiti", e2: "Escocia"}, {fecha: "19 jun 19:30", e1: "Brasil", e2: "Haiti"}, {fecha: "19 jun 17:00", e1: "Escocia", e2: "Marruecos"}, {fecha: "24 jun 17:00", e1: "Brasil", e2: "Escocia"}, {fecha: "24 jun 17:00", e1: "Marruecos", e2: "Haiti"}]},
    D: { equipos: ["EEUU", "Paraguay", "Australia", "Turquia"], partidos: [
        {fecha: "12 jun 20:00", e1: "EEUU", e2: "Paraguay"}, {fecha: "13 jun 23:00", e1: "Australia", e2: "Turquia"}, {fecha: "19 jun 14:00", e1: "EEUU", e2: "Australia"}, {fecha: "19 jun 22:00", e1: "Turquia", e2: "Paraguay"}, {fecha: "25 jun 21:00", e1: "EEUU", e2: "Turquia"}, {fecha: "25 jun 21:00", e1: "Paraguay", e2: "Australia"}]},
    E: { equipos: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"], partidos: [
        {fecha: "14 jun 12:00", e1: "Alemania", e2: "Curazao"}, {fecha: "14 jun 18:00", e1: "Costa de Marfil", e2: "Ecuador"}, {fecha: "20 jun 15:00", e1: "Alemania", e2: "Costa de Marfil"}, {fecha: "20 jun 19:00", e1: "Ecuador", e2: "Curazao"}, {fecha: "25 jun 15:00", e1: "Alemania", e2: "Ecuador"}, {fecha: "25 jun 15:00", e1: "Curazao", e2: "Costa de Marfil"}]},
    F: { equipos: ["Paises Bajos", "Japon", "Suecia", "Tunez"], partidos: [
        {fecha: "14 jun 15:00", e1: "Paises Bajos", e2: "Japon"}, {fecha: "14 jun 21:00", e1: "Suecia", e2: "Tunez"}, {fecha: "20 jun 12:00", e1: "Paises Bajos", e2: "Suecia"}, {fecha: "20 jun 23:00", e1: "Japon", e2: "Tunez"}, {fecha: "25 jun 18:00", e1: "Paises Bajos", e2: "Tunez"}, {fecha: "25 jun 18:00", e1: "Japon", e2: "Suecia"}]},
    G: { equipos: ["Belgica", "Egipto", "Iran", "Nueva Zelanda"], partidos: [
        {fecha: "15 jun 14:00", e1: "Belgica", e2: "Egipto"}, {fecha: "15 jun 20:00", e1: "Iran", e2: "Nueva Zelanda"}, {fecha: "21 jun 14:00", e1: "Belgica", e2: "Iran"}, {fecha: "21 jun 20:00", e1: "Nueva Zelanda", e2: "Egipto"}, {fecha: "26 jun 22:00", e1: "Belgica", e2: "Nueva Zelanda"}, {fecha: "26 jun 22:00", e1: "Egipto", e2: "Iran"}]},
    H: { equipos: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"], partidos: [
        {fecha: "15 jun 11:00", e1: "España", e2: "Cabo Verde"}, {fecha: "15 jun 17:00", e1: "Arabia Saudita", e2: "Uruguay"}, {fecha: "21 jun 11:00", e1: "España", e2: "Arabia Saudita"}, {fecha: "21 jun 17:00", e1: "Uruguay", e2: "Cabo Verde"}, {fecha: "26 jun 19:00", e1: "España", e2: "Uruguay"}, {fecha: "26 jun 19:00", e1: "Cabo Verde", e2: "Arabia Saudita"}]},
    I: { equipos: ["Francia", "Senegal", "Irak", "Noruega"], partidos: [
        {fecha: "16 jun 14:00", e1: "Francia", e2: "Senegal"}, {fecha: "16 jun 17:00", e1: "Irak", e2: "Noruega"}, {fecha: "22 jun 16:00", e1: "Francia", e2: "Irak"}, {fecha: "22 jun 19:00", e1: "Noruega", e2: "Senegal"}, {fecha: "26 jun 14:00", e1: "Francia", e2: "Noruega"}, {fecha: "26 jun 14:00", e1: "Senegal", e2: "Irak"}]},
    J: { equipos: ["Argentina", "Argelia", "Austria", "Jordania"], partidos: [
        {fecha: "16 jun 20:00", e1: "Argentina", e2: "Argelia"}, {fecha: "16 jun 23:00", e1: "Austria", e2: "Jordania"}, {fecha: "22 jun 12:00", e1: "Argentina", e2: "Austria"}, {fecha: "22 jun 22:00", e1: "Jordania", e2: "Argelia"}, {fecha: "27 jun 21:00", e1: "Argentina", e2: "Jordania"}, {fecha: "27 jun 21:00", e1: "Argelia", e2: "Austria"}]},
    K: { equipos: ["Portugal", "Congo", "Uzbequistan", "Colombia"], partidos: [
        {fecha: "17 jun 12:00", e1: "Portugal", e2: "Congo"}, {fecha: "17 jun 21:00", e1: "Uzbequistan", e2: "Colombia"}, {fecha: "23 jun 12:00", e1: "Portugal", e2: "Uzbequistan"}, {fecha: "23 jun 21:00", e1: "Congo", e2: "Colombia"}, {fecha: "27 jun 18:30", e1: "Portugal", e2: "Colombia"}, {fecha: "27 jun 18:30", e1: "Congo", e2: "Uzbequistan"}]},
    L: { equipos: ["Inglaterra", "Croacia", "Ghana", "Panama"], partidos: [
        {fecha: "17 jun 15:00", e1: "Inglaterra", e2: "Croacia"}, {fecha: "17 jun 18:00", e1: "Ghana", e2: "Panama"}, {fecha: "23 jun 15:00", e1: "Inglaterra", e2: "Ghana"}, {fecha: "23 jun 18:00", e1: "Panama", e2: "Croacia"}, {fecha: "27 jun 16:00", e1: "Inglaterra", e2: "Panama"}, {fecha: "27 jun 16:00", e1: "Croacia", e2: "Ghana"}]}
};

function init() {
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(letra => {
        const contenedor = document.getElementById(`partidos${letra}`);
        if(!contenedor) return;
        config[letra].partidos.forEach((p, i) => {
            contenedor.innerHTML += `
                <div class="partido">
                    <span class="fecha-partido">${p.fecha}</span>
                    <span>${p.e1}</span>
                    <input type="number" id="score_${letra}_${i}_1" class="score ${letra}" data-partido="${i}" data-e1="${p.e1}" data-e2="${p.e2}">
                    <span>-</span>
                    <input type="number" id="score_${letra}_${i}_2" class="score ${letra}" data-partido="${i}" data-e1="${p.e1}" data-e2="${p.e2}">
                    <span>${p.e2}</span>
                </div>
            `;
        });
    });

    document.querySelectorAll('.score, .score16').forEach(input => {
        const guardado = localStorage.getItem(input.id);
        if (guardado !== null) input.value = guardado;
    });

    actualizarTodo();
    mostrarSeccion('grupoA'); // Por defecto al cargar
}

function mostrarSeccion(idSeccion, btnElement) {
    // 1. Ocultar secciones
    const todos = document.querySelectorAll('.grupo, .seccion, .seccion-campeon');
    todos.forEach(el => el.classList.add('oculto'));
    document.getElementById(idSeccion)?.classList.remove('oculto');

    // 2. Manejar la clase "active" en los botones
    const botones = document.querySelectorAll('.scroll-container button');
    botones.forEach(btn => btn.classList.remove('active'));
    
    // Si pasamos el botón, lo marcamos
    if (btnElement) {
        btnElement.classList.add('active');
    }
}

function calcular(letra) {
    let stats = {};
    config[letra].equipos.forEach(e => stats[e] = { pts: 0, dg: 0 });
    const inputs = document.querySelectorAll(`.score.${letra}`);
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
        tbody.innerHTML = sorted.map((e, i) => `<tr><td>${i+1}</td><td>${e[0]}</td><td>${e[1].pts}</td><td>${e[1].dg}</td></tr>`).join('');
    }
    return sorted;
}

function actualizarGanadores() {
    for (let i = 73; i <= 88; i++) {
        const v1 = parseInt(document.getElementById(`p${i}_v1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_v2`)?.value);
        const el1 = document.getElementById(`equipo${(i - 73) * 2 + 1}`)?.innerText;
        const el2 = document.getElementById(`equipo${(i - 73) * 2 + 2}`)?.innerText;
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2)) target.innerText = (v1 > v2) ? el1 : el2;
    }
    const mapas = {
        89: [74, 77], 90: [73, 75], 91: [76, 78], 92: [79, 80], 93: [83, 84], 94: [81, 82], 95: [86, 88], 96: [85, 87],
        97: [89, 90], 98: [93, 94], 99: [91, 92], 100: [95, 96], 101: [97, 98], 102: [99, 100]
    };
    for (let i = 89; i <= 102; i++) {
        const n1 = document.getElementById(`ganador${mapas[i][0]}`)?.innerText;
        const n2 = document.getElementById(`ganador${mapas[i][1]}`)?.innerText;
        const v1 = parseInt(document.getElementById(`p${i}_equipo1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_equipo2`)?.value);
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2) && n1 && n2 && n1 !== "Ganador P" + mapas[i][0] && n2 !== "Ganador P" + mapas[i][1]) {
            target.innerText = (v1 > v2) ? n1 : n2;
        }
    }
    const nF1 = document.getElementById('ganador101')?.innerText;
    const nF2 = document.getElementById('ganador102')?.innerText;
    const vF1 = parseInt(document.getElementById('p104_equipo1')?.value);
    const vF2 = parseInt(document.getElementById('p104_equipo2')?.value);
    const secCampeon = document.getElementById('seccionCampeon');
    const targetCampeon = document.getElementById('nombreCampeon');
    if (!isNaN(vF1) && !isNaN(vF2) && nF1 && nF2 && nF1.includes("Ganador") == false && nF2.includes("Ganador") == false) {
        targetCampeon.innerText = (vF1 > vF2) ? nF1 : nF2;
        secCampeon.classList.remove('oculto');
    } else {
        secCampeon.classList.add('oculto');
    }
}

function actualizarTodo() {
    const tablas = {};
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(l => tablas[l] = calcular(l));
    const mapping = [['equipo1', 'A', 1], ['equipo2', 'B', 1], ['equipo3', 'E', 0], ['equipo4', 'B', 2], ['equipo5', 'F', 0], ['equipo6', 'C', 1], ['equipo7', 'C', 0], ['equipo8', 'F', 1], ['equipo9', 'I', 0], ['equipo10', 'A', 2], ['equipo11', 'E', 1], ['equipo12', 'I', 1], ['equipo13', 'A', 0], ['equipo14', 'C', 2], ['equipo15', 'L', 0], ['equipo16', 'D', 2], ['equipo17', 'D', 0], ['equipo18', 'E', 2], ['equipo19', 'G', 0], ['equipo20', 'F', 2], ['equipo21', 'K', 1], ['equipo22', 'L', 1], ['equipo23', 'H', 0], ['equipo24', 'J', 1], ['equipo25', 'B', 0], ['equipo26', 'G', 2], ['equipo27', 'J', 0], ['equipo28', 'H', 1], ['equipo29', 'K', 0], ['equipo30', 'H', 2], ['equipo31', 'D', 1], ['equipo32', 'G', 1]];
    mapping.forEach(([id, grupo, idx]) => { const el = document.getElementById(id); if (el && tablas[grupo] && tablas[grupo][idx]) el.innerText = tablas[grupo][idx][0]; });
    actualizarGanadores();
}

function limpiarScores() {
    if (confirm("¿Estás seguro de que quieres borrar todos los marcadores?")) {
        // 1. Limpiar localStorage
        localStorage.clear();
        
        // 2. Limpiar todos los inputs de la pantalla
        document.querySelectorAll('.score, .score16').forEach(input => {
            input.value = "";
        });
        
        // 3. Ejecutar la actualización para que las tablas se vacíen
        actualizarTodo();
        
        // 4. Opcional: mostrar mensaje o recargar valores
        alert("Resultados borrados.");
    }
}

function limpiarGrupoActual() {
    // Buscamos secciones que sean grupos O fases finales
    const secciones = document.querySelectorAll('.grupo, .seccion');
    let seccionVisible = null;

    secciones.forEach(sec => {
        if (!sec.classList.contains('oculto')) {
            seccionVisible = sec;
        }
    });

    if (seccionVisible) {
        const idSeccion = seccionVisible.id; // ej: "grupoA" o "fase16vos"
        
        if (confirm(`¿Estás seguro de borrar los resultados de esta sección?`)) {
            // Limpiar los inputs dentro de esa sección específica
            const inputs = seccionVisible.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = "";
                localStorage.removeItem(input.id);
            });

            // Recalcular todo
            actualizarTodo();
            alert(`Resultados de ${idSeccion} borrados.`);
        }
    } else {
        alert("Por favor, selecciona una sección primero.");
    }
}

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('score') || e.target.classList.contains('score16')) {
        localStorage.setItem(e.target.id, e.target.value);
        actualizarTodo();
    }
});

init();