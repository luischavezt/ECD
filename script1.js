const config = {
    A: { equipos: ["Mexico", "Sudafrica", "Corea del Sur", "Rep. Checa"], partidos: [{e1: "Mexico", e2: "Sudafrica"}, {e1: "Corea del Sur", e2: "Rep. Checa"}, {e1: "Mexico", e2: "Corea del Sur"}, {e1: "Rep. Checa", e2: "Sudafrica"}, {e1: "Mexico", e2: "Rep. Checa"}, {e1: "Sudafrica", e2: "Corea del Sur"}]},
    B: { equipos: ["Canada", "Bosnia", "Qatar", "Suiza"], partidos: [{e1: "Canada", e2: "Bosnia"}, {e1: "Qatar", e2: "Suiza"}, {e1: "Canada", e2: "Qatar"}, {e1: "Suiza", e2: "Bosnia"}, {e1: "Canada", e2: "Suiza"}, {e1: "Bosnia", e2: "Qatar"}]},
    C: { equipos: ["Brasil", "Marruecos", "Haiti", "Escocia"], partidos: [{e1: "Brasil", e2: "Marruecos"}, {e1: "Haiti", e2: "Escocia"}, {e1: "Brasil", e2: "Haiti"}, {e1: "Escocia", e2: "Marruecos"}, {e1: "Brasil", e2: "Escocia"}, {e1: "Marruecos", e2: "Haiti"}]},
    D: { equipos: ["EEUU", "Paraguay", "Australia", "Turquia"], partidos: [{e1: "EEUU", e2: "Paraguay"}, {e1: "Australia", e2: "Turquia"}, {e1: "EEUU", e2: "Australia"}, {e1: "Turquia", e2: "Paraguay"}, {e1: "EEUU", e2: "Turquia"}, {e1: "Paraguay", e2: "Australia"}]},
    E: { equipos: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"], partidos: [{e1: "Alemania", e2: "Curazao"}, {e1: "Costa de Marfil", e2: "Ecuador"}, {e1: "Alemania", e2: "Costa de Marfil"}, {e1: "Ecuador", e2: "Curazao"}, {e1: "Alemania", e2: "Ecuador"}, {e1: "Curazao", e2: "Costa de Marfil"}]},
    F: { equipos: ["Paises Bajos", "Japon", "Suecia", "Tunez"], partidos: [{e1: "Paises Bajos", e2: "Japon"}, {e1: "Suecia", e2: "Tunez"}, {e1: "Paises Bajos", e2: "Suecia"}, {e1: "Japon", e2: "Tunez"}, {e1: "Paises Bajos", e2: "Tunez"}, {e1: "Japon", e2: "Suecia"}]},
    G: { equipos: ["Belgica", "Egipto", "Iran", "Nueva Zelanda"], partidos: [{e1: "Belgica", e2: "Egipto"}, {e1: "Iran", e2: "Nueva Zelanda"}, {e1: "Belgica", e2: "Iran"}, {e1: "Nueva Zelanda", e2: "Egipto"}, {e1: "Belgica", e2: "Nueva Zelanda"}, {e1: "Egipto", e2: "Iran"}]},
    H: { equipos: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"], partidos: [{e1: "España", e2: "Cabo Verde"}, {e1: "Arabia Saudita", e2: "Uruguay"}, {e1: "España", e2: "Arabia Saudita"}, {e1: "Uruguay", e2: "Cabo Verde"}, {e1: "España", e2: "Uruguay"}, {e1: "Cabo Verde", e2: "Arabia Saudita"}]},
    I: { equipos: ["Francia", "Senegal", "Irak", "Noruega"], partidos: [{e1: "Francia", e2: "Senegal"}, {e1: "Irak", e2: "Noruega"}, {e1: "Francia", e2: "Irak"}, {e1: "Noruega", e2: "Senegal"}, {e1: "Francia", e2: "Noruega"}, {e1: "Senegal", e2: "Irak"}]},
    J: { equipos: ["Argentina", "Argelia", "Austria", "Jordania"], partidos: [{e1: "Argentina", e2: "Argelia"}, {e1: "Austria", e2: "Jordania"}, {e1: "Argentina", e2: "Austria"}, {e1: "Jordania", e2: "Argelia"}, {e1: "Argentina", e2: "Jordania"}, {e1: "Argelia", e2: "Austria"}]},
    K: { equipos: ["Portugal", "Congo", "Uzbequistan", "Colombia"], partidos: [{e1: "Portugal", e2: "Congo"}, {e1: "Uzbequistan", e2: "Colombia"}, {e1: "Portugal", e2: "Uzbequistan"}, {e1: "Congo", e2: "Colombia"}, {e1: "Portugal", e2: "Colombia"}, {e1: "Congo", e2: "Uzbequistan"}]},
    L: { equipos: ["Inglaterra", "Croacia", "Ghana", "Panama"], partidos: [{e1: "Inglaterra", e2: "Croacia"}, {e1: "Ghana", e2: "Panama"}, {e1: "Inglaterra", e2: "Ghana"}, {e1: "Panama", e2: "Croacia"}, {e1: "Inglaterra", e2: "Panama"}, {e1: "Croacia", e2: "Ghana"}]}
};

function init() {
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(letra => {
        const contenedor = document.getElementById(`partidos${letra}`);
        if(!contenedor) return;
        config[letra].partidos.forEach((p, i) => {
            contenedor.innerHTML += `
                <div class="partido">
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
    // 1. 16vos
    for (let i = 73; i <= 88; i++) {
        const v1 = parseInt(document.getElementById(`p${i}_v1`)?.value);
        const v2 = parseInt(document.getElementById(`p${i}_v2`)?.value);
        const el1 = document.getElementById(`equipo${(i - 73) * 2 + 1}`)?.innerText;
        const el2 = document.getElementById(`equipo${(i - 73) * 2 + 2}`)?.innerText;
        const target = document.getElementById(`ganador${i}`);
        if (target && !isNaN(v1) && !isNaN(v2)) target.innerText = (v1 > v2) ? el1 : el2;
    }
    // 2. 8vos a Semis
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
        if (target && !isNaN(v1) && !isNaN(v2) && n1 !== "..." && n2 !== "...") {
            target.innerText = (v1 > v2) ? n1 : n2;
        }
    }
    // 3. Final y Campeón
    const nF1 = document.getElementById('ganador101')?.innerText;
    const nF2 = document.getElementById('ganador102')?.innerText;
    const vF1 = parseInt(document.getElementById('p104_equipo1')?.value);
    const vF2 = parseInt(document.getElementById('p104_equipo2')?.value);
    
    const secCampeon = document.getElementById('seccionCampeon');
    const targetCampeon = document.getElementById('nombreCampeon');
    
    // Verificamos si hay un ganador y ambos scores están llenos
    if (!isNaN(vF1) && !isNaN(vF2) && nF1 && nF2 && nF1 !== "..." && nF2 !== "...") {
        targetCampeon.innerText = (vF1 > vF2) ? nF1 : nF2;
        secCampeon.classList.remove('oculto'); // Mostramos la sección verde
    } else {
        secCampeon.classList.add('oculto');    // Ocultamos si no está la final
    }
}

function actualizarTodo() {
    const tablas = {};
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach(l => tablas[l] = calcular(l));
    const mapping = [['equipo1', 'A', 1], ['equipo2', 'B', 1], ['equipo3', 'E', 0], ['equipo4', 'B', 2], ['equipo5', 'F', 0], ['equipo6', 'C', 1], ['equipo7', 'C', 0], ['equipo8', 'F', 1], ['equipo9', 'I', 0], ['equipo10', 'A', 2], ['equipo11', 'E', 1], ['equipo12', 'I', 1], ['equipo13', 'A', 0], ['equipo14', 'C', 2], ['equipo15', 'L', 0], ['equipo16', 'D', 2], ['equipo17', 'D', 0], ['equipo18', 'E', 2], ['equipo19', 'G', 0], ['equipo20', 'F', 2], ['equipo21', 'K', 1], ['equipo22', 'L', 1], ['equipo23', 'H', 0], ['equipo24', 'J', 1], ['equipo25', 'B', 0], ['equipo26', 'G', 2], ['equipo27', 'J', 0], ['equipo28', 'H', 1], ['equipo29', 'K', 0], ['equipo30', 'H', 2], ['equipo31', 'D', 1], ['equipo32', 'G', 1]];
    mapping.forEach(([id, grupo, idx]) => { const el = document.getElementById(id); if (el && tablas[grupo] && tablas[grupo][idx]) el.innerText = tablas[grupo][idx][0]; });
    actualizarGanadores();
}

document.addEventListener('input', (e) => {
    if (e.target.classList.contains('score') || e.target.classList.contains('score16')) {
        localStorage.setItem(e.target.id, e.target.value);
        actualizarTodo();
    }
});

function mostrarSeccion() {
    const valor = document.getElementById('selectorGrupo').value;
    const secciones = ['grupoA', 'grupoB', 'grupoC', 'grupoD', 'grupoE', 'grupoF', 'grupoG', 'grupoH', 'grupoI', 'grupoJ', 'grupoK', 'grupoL', 'fase16vos', 'fase8vos', 'fase4tos'];
    secciones.forEach(id => document.getElementById(id)?.classList.add('oculto'));
    document.getElementById(valor)?.classList.remove('oculto');
}

init();