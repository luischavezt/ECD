const config = {
    A: { equipos: ["México", "Corea del Sur", "Rep. Checa", "Sudáfrica"], partidos: [
        {e1: "México", e2: "Sudáfrica"}, {e1: "Corea del Sur", e2: "Rep. Checa"},
        {e1: "México", e2: "Corea del Sur"}, {e1: "Rep. Checa", e2: "Sudáfrica"},
        {e1: "México", e2: "Rep. Checa"}, {e1: "Sudáfrica", e2: "Corea del Sur"}
    ]},
    B: { equipos: ["Canadá", "Suiza", "Bosnia", "Qatar"], partidos: [
        {e1: "Canadá", e2: "Bosnia"}, {e1: "Qatar", e2: "Suiza"},
        {e1: "Canadá", e2: "Qatar"}, {e1: "Suiza", e2: "Bosnia"},
        {e1: "Canadá", e2: "Suiza"}, {e1: "Bosnia", e2: "Qatar"}
    ]},
    C: { equipos: ["Brasil", "Marruecos", "Haiti", "Escocia"], partidos: [
        {e1: "Brasil", e2: "Marruecos"}, {e1: "Haiti", e2: "Escocia"},
        {e1: "Brasil", e2: "Haiti"}, {e1: "Escocia", e2: "Marruecos"},
        {e1: "Brasil", e2: "Escocia"}, {e1: "Marruecos", e2: "Haiti"}
    ]},
	D: { equipos: ["EEUU", "Paraguay", "Australia", "Turquia"], partidos: [
        {e1: "EEUU", e2: "Paraguay"}, {e1: "Australia", e2: "Turquia"},
        {e1: "EEUU", e2: "Australia"}, {e1: "Turquia", e2: "Paraguay"},
        {e1: "EEUU", e2: "Turquia"}, {e1: "Paraguay", e2: "Australia"}
    ]},
	E: { equipos: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"], partidos: [
        {e1: "Alemania", e2: "Curazao"}, {e1: "Costa de Marfil", e2: "Ecuador"},
        {e1: "Alemania", e2: "Costa de Marfil"}, {e1: "Ecuador", e2: "Curazao"},
        {e1: "Alemania", e2: "Ecuador"}, {e1: "Curazao", e2: "Costa de Marfil"}
    ]},
	F: { equipos: ["Paises Bajos", "Japon", "Suecia", "Tunez"], partidos: [
        {e1: "Paises Bajos", e2: "Japon"}, {e1: "Suecia", e2: "Tunez"},
        {e1: "Paises Bajos", e2: "Suecia"}, {e1: "Japon", e2: "Tunez"},
        {e1: "Paises Bajos", e2: "Tunez"}, {e1: "Japon", e2: "Suecia"}
    ]}
};

function init() {
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach(letra => {
        const contenedor = document.getElementById(`partidos${letra}`);
        config[letra].partidos.forEach((p, i) => {
            // Asignamos IDs únicos como: score_A_0_e1, score_A_0_e2, etc.
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

    // RESTAURAR DATOS GUARDADOS
    document.querySelectorAll('.score').forEach(input => {
        const guardado = localStorage.getItem(input.id);
        if (guardado !== null) {
            input.value = guardado;
        }
    });

    // Calcular tablas iniciales al cargar
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach(letra => calcular(letra));
    actualizarGanadores();
}

function calcular(letra) {
    let stats = {};
    config[letra].equipos.forEach(e => stats[e] = { pts: 0, dg: 0 });
    const inputs = document.querySelectorAll(`.${letra}`);
    for (let i = 0; i < inputs.length; i += 2) {
        let e1 = inputs[i].dataset.e1, e2 = inputs[i].dataset.e2;
        let val1 = inputs[i].value, val2 = inputs[i+1].value;
        if (val1 !== "" && val2 !== "") {
            let g1 = parseInt(val1), g2 = parseInt(val2);
            if (g1 > g2) stats[e1].pts += 3; else if (g2 > g1) stats[e2].pts += 3; else { stats[e1].pts += 1; stats[e2].pts += 1; }
            stats[e1].dg += (g1 - g2); stats[e2].dg += (g2 - g1);
        }
    }
    let sorted = Object.entries(stats).sort((a,b) => b[1].pts - a[1].pts || b[1].dg - a[1].dg);
    const tbody = document.querySelector(`#tabla${letra} tbody`);
    if(tbody) tbody.innerHTML = sorted.map((e, i) => `<tr><td>${i+1}</td><td>${e[0]}</td><td>${e[1].pts}</td><td>${e[1].dg}</td></tr>`).join('');
    return sorted;
}

function actualizarGanadores() {
    // Obtener valores
    const p73v1 = parseInt(document.getElementById('p73_v1').value);
    const p73v2 = parseInt(document.getElementById('p73_v2').value);
    const p74v1 = parseInt(document.getElementById('p74_v1').value);
    const p74v2 = parseInt(document.getElementById('p74_v2').value);
	const p75v1 = parseInt(document.getElementById('p75_v1').value);
    const p75v2 = parseInt(document.getElementById('p75_v2').value);
    const p76v1 = parseInt(document.getElementById('p76_v1').value);
    const p76v2 = parseInt(document.getElementById('p76_v2').value);
	const p77v1 = parseInt(document.getElementById('p77_v1').value);
    const p77v2 = parseInt(document.getElementById('p77_v2').value);
    const p78v1 = parseInt(document.getElementById('p78_v1').value);
    const p78v2 = parseInt(document.getElementById('p78_v2').value);

    // Leer nombres actuales de los spans
    const n73_1 = document.getElementById('equipo1').innerText;
    const n73_2 = document.getElementById('equipo2').innerText;
    const n74_1 = document.getElementById('equipo3').innerText;
    const n74_2 = document.getElementById('equipo4').innerText;
	const n75_1 = document.getElementById('equipo5').innerText;
    const n75_2 = document.getElementById('equipo6').innerText;
    const n76_1 = document.getElementById('equipo7').innerText;
    const n76_2 = document.getElementById('equipo8').innerText;
	const n77_1 = document.getElementById('equipo9').innerText;
    const n77_2 = document.getElementById('equipo10').innerText;
    const n78_1 = document.getElementById('equipo11').innerText;
    const n78_2 = document.getElementById('equipo12').innerText;

    if (!isNaN(p73v1) && !isNaN(p73v2)) document.getElementById('ganador73').innerText = (p73v1 > p73v2) ? n73_1 : n73_2;
    if (!isNaN(p74v1) && !isNaN(p74v2)) document.getElementById('ganador74').innerText = (p74v1 > p74v2) ? n74_1 : n74_2;
	if (!isNaN(p75v1) && !isNaN(p75v2)) document.getElementById('ganador75').innerText = (p75v1 > p75v2) ? n75_1 : n75_2;
    if (!isNaN(p76v1) && !isNaN(p76v2)) document.getElementById('ganador76').innerText = (p76v1 > p76v2) ? n76_1 : n76_2;
	if (!isNaN(p77v1) && !isNaN(p77v2)) document.getElementById('ganador77').innerText = (p77v1 > p77v2) ? n77_1 : n77_2;
    if (!isNaN(p78v1) && !isNaN(p78v2)) document.getElementById('ganador78').innerText = (p78v1 > p78v2) ? n78_1 : n78_2;
}

document.addEventListener('input', (e) => {
	// 1. Guardar en localStorage
    if (e.target.classList.contains('score')) {
        localStorage.setItem(e.target.id || e.target.dataset.partido + e.target.dataset.e1, e.target.value);
    }
    // CORRECCIÓN: Se incluyó calcular('F')
    let tablaA = calcular('A');
    let tablaB = calcular('B');
    let tablaC = calcular('C'); 
	let tablaD = calcular('D'); 
	let tablaE = calcular('E'); 
	let tablaF = calcular('F'); 
    
    // Solo actualizar si el elemento existe en el HTML
    if(document.getElementById('equipo1')) document.getElementById('equipo1').innerText = tablaA[0][0];
    if(document.getElementById('equipo2')) document.getElementById('equipo2').innerText = tablaB[1][0];
    if(document.getElementById('equipo3')) document.getElementById('equipo3').innerText = tablaA[1][0];
    if(document.getElementById('equipo4')) document.getElementById('equipo4').innerText = tablaB[0][0];
	if(document.getElementById('equipo5')) document.getElementById('equipo5').innerText = tablaC[0][0];
    if(document.getElementById('equipo6')) document.getElementById('equipo6').innerText = tablaD[1][0];
    if(document.getElementById('equipo7')) document.getElementById('equipo7').innerText = tablaC[1][0];
    if(document.getElementById('equipo8')) document.getElementById('equipo8').innerText = tablaD[0][0];
	if(document.getElementById('equipo9')) document.getElementById('equipo9').innerText = tablaE[0][0];
    if(document.getElementById('equipo10')) document.getElementById('equipo10').innerText = tablaF[1][0];
    if(document.getElementById('equipo11')) document.getElementById('equipo11').innerText = tablaE[1][0];
    if(document.getElementById('equipo12')) document.getElementById('equipo12').innerText = tablaF[0][0];
    
    actualizarGanadores();
});

function mostrarSeccion() {
    const valor = document.getElementById('selectorGrupo').value;
    const secciones = ['grupoA', 'grupoB', 'grupoC', 'grupoD', 'grupoE', 'grupoF', 'fase16vos', 'fase8vos'];
    
    secciones.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.classList.add('oculto');
    });
    
    if (valor && document.getElementById(valor)) {
        document.getElementById(valor).classList.remove('oculto');
    }
}

init();

function mostrarSeccion() {
    const valor = document.getElementById('selectorGrupo').value;
    
    // Agregamos 'fase8vos' a la lista de secciones a gestionar
    const secciones = ['grupoA', 'grupoB', 'grupoC', 'grupoD', 'grupoE', 'grupoF', 'fase16vos', 'fase8vos'];
    
    // Ocultar todas las secciones
    secciones.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.classList.add('oculto');
        }
    });
    
    // Mostrar la seleccionada
    if (valor && document.getElementById(valor)) {
        document.getElementById(valor).classList.remove('oculto');
    }
}