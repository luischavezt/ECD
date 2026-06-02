// =======================================================
// LÓGICA GRUPO A
// =======================================================
function calcularGrupoA() {
    let equipos = {
        "México":          { nombre: "🇲🇽 México", pts: 0, pj: 0, dg: 0 },
        "Sudáfrica":       { nombre: "🇿🇦 Sudáfrica", pts: 0, pj: 0, dg: 0 },
        "Corea del Sur":   { nombre: "🇰🇷 Corea del Sur", pts: 0, pj: 0, dg: 0 },
        "República Checa": { nombre: "🇨🇿 Rep. Checa", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_m1_mex = document.getElementById("m1_mex").value; let g_m1_rsa = document.getElementById("m1_rsa").value;
    if (g_m1_mex !== "" && g_m1_rsa !== "") { procesarPartido(equipos, "México", "Sudáfrica", g_m1_mex, g_m1_rsa); }

    let g_m2_kor = document.getElementById("m2_kor").value; let g_m2_cze = document.getElementById("m2_cze").value;
    if (g_m2_kor !== "" && g_m2_cze !== "") { procesarPartido(equipos, "Corea del Sur", "República Checa", g_m2_kor, g_m2_cze); }

    // Jornada 2
    let g_m3_mex = document.getElementById("m3_mex").value; let g_m3_kor = document.getElementById("m3_kor").value;
    if (g_m3_mex !== "" && g_m3_kor !== "") { procesarPartido(equipos, "México", "Corea del Sur", g_m3_mex, g_m3_kor); }

    let g_m4_cze = document.getElementById("m4_cze").value; let g_m4_rsa = document.getElementById("m4_rsa").value;
    if (g_m4_cze !== "" && g_m4_rsa !== "") { procesarPartido(equipos, "República Checa", "Sudáfrica", g_m4_cze, g_m4_rsa); }

    // Jornada 3
    let g_m5_mex = document.getElementById("m5_mex").value; let g_m5_cze = document.getElementById("m5_cze").value;
    if (g_m5_mex !== "" && g_m5_cze !== "") { procesarPartido(equipos, "México", "República Checa", g_m5_mex, g_m5_cze); }

    let g_m6_rsa = document.getElementById("m6_rsa").value; let g_m6_kor = document.getElementById("m6_kor").value;
    if (g_m6_rsa !== "" && g_m6_kor !== "") { procesarPartido(equipos, "Sudáfrica", "Corea del Sur", g_m6_rsa, g_m6_kor); }

    renderizarTabla(equipos, ".tabla-posiciones:not(.tabla-b) tbody");
}

// =======================================================
// LÓGICA GRUPO B
// =======================================================
function calcularGrupoB() {
    let equipos = {
        "Canadá":  { nombre: "🇨🇦 Canadá", pts: 0, pj: 0, dg: 0 },
        "Bosnia":  { nombre: "🇧🇦 Bosnia", pts: 0, pj: 0, dg: 0 },
        "Qatar":   { nombre: "🇶🇦 Qatar", pts: 0, pj: 0, dg: 0 },
        "Suiza":   { nombre: "🇨🇭 Suiza", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mb1_can = document.getElementById("mb1_can").value; let g_mb1_bih = document.getElementById("mb1_bih").value;
    if (g_mb1_can !== "" && g_mb1_bih !== "") { procesarPartido(equipos, "Canadá", "Bosnia", g_mb1_can, g_mb1_bih); }

    let g_mb2_qat = document.getElementById("mb2_qat").value; let g_mb2_sui = document.getElementById("mb2_sui").value;
    if (g_mb2_qat !== "" && g_mb2_sui !== "") { procesarPartido(equipos, "Qatar", "Suiza", g_mb2_qat, g_mb2_sui); }

    // Jornada 2
    let g_mb3_can = document.getElementById("mb3_can").value; let g_mb3_qat = document.getElementById("mb3_qat").value;
    if (g_mb3_can !== "" && g_mb3_qat !== "") { procesarPartido(equipos, "Canadá", "Qatar", g_mb3_can, g_mb3_qat); }

    let g_mb4_sui = document.getElementById("mb4_sui").value; let g_mb4_bih = document.getElementById("mb4_bih").value;
    if (g_mb4_sui !== "" && g_mb4_bih !== "") { procesarPartido(equipos, "Suiza", "Bosnia", g_mb4_sui, g_mb4_bih); }

    // Jornada 3
    let g_mb5_can = document.getElementById("mb5_can").value; let g_mb5_sui = document.getElementById("mb5_sui").value;
    if (g_mb5_can !== "" && g_mb5_sui !== "") { procesarPartido(equipos, "Canadá", "Suiza", g_mb5_can, g_mb5_sui); }

    let g_mb6_bih = document.getElementById("mb6_bih").value; let g_mb6_qat = document.getElementById("mb6_qat").value;
    if (g_mb6_bih !== "" && g_mb6_qat !== "") { procesarPartido(equipos, "Bosnia", "Qatar", g_mb6_bih, g_mb6_qat); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-b tbody");
}

// =======================================================
// LÓGICA GRUPO C
// =======================================================
function calcularGrupoC() {
    let equipos = {
        "Brasil":    { nombre: "🇧🇷 Brasil", pts: 0, pj: 0, dg: 0 },
        "Marruecos": { nombre: "🇲🇦 Marruecos", pts: 0, pj: 0, dg: 0 },
        "Haití":     { nombre: "🇭🇹 Haití", pts: 0, pj: 0, dg: 0 },
        "Escocia":   { nombre: "󠁧󠁢󠁳🇪 Escocia", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mc1_bra = document.getElementById("mc1_bra").value; let g_mc1_mar = document.getElementById("mc1_mar").value;
    if (g_mc1_bra !== "" && g_mc1_mar !== "") { procesarPartido(equipos, "Brasil", "Marruecos", g_mc1_bra, g_mc1_mar); }

    let g_mc2_hai = document.getElementById("mc2_hai").value; let g_mc2_sco = document.getElementById("mc2_sco").value;
    if (g_mc2_hai !== "" && g_mc2_sco !== "") { procesarPartido(equipos, "Haití", "Escocia", g_mc2_hai, g_mc2_sco); }

    // Jornada 2
    let g_mc3_bra = document.getElementById("mc3_bra").value; let g_mc3_hai = document.getElementById("mc3_hai").value;
    if (g_mc3_bra !== "" && g_mc3_hai !== "") { procesarPartido(equipos, "Brasil", "Haití", g_mc3_bra, g_mc3_hai); }

    let g_mc4_sco = document.getElementById("mc4_sco").value; let g_mc4_mar = document.getElementById("mc4_mar").value;
    if (g_mc4_sco !== "" && g_mc4_mar !== "") { procesarPartido(equipos, "Escocia", "Marruecos", g_mc4_sco, g_mc4_mar); }

    // Jornada 3
    let g_mc5_sco = document.getElementById("mc5_sco").value; let g_mc5_bra = document.getElementById("mc5_bra").value;
    if (g_mc5_sco !== "" && g_mc5_bra !== "") { procesarPartido(equipos, "Escocia", "Brasil", g_mc5_sco, g_mc5_bra); }

    let g_mc6_mar = document.getElementById("mc6_mar").value; let g_mc6_hai = document.getElementById("mc6_hai").value;
    if (g_mc6_mar !== "" && g_mc6_hai !== "") { procesarPartido(equipos, "Marruecos", "Haití", g_mc6_mar, g_mc6_hai); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-c tbody");
}

// =======================================================
// LÓGICA GRUPO D
// =======================================================
function calcularGrupoD() {
    let equipos = {
        "Estados Unidos": { nombre: "🇺🇸 EE. UU.", pts: 0, pj: 0, dg: 0 },
        "Paraguay":       { nombre: "🇵🇾 Paraguay", pts: 0, pj: 0, dg: 0 },
        "Australia":      { nombre: "🇦🇺 Australia", pts: 0, pj: 0, dg: 0 },
        "Turquía":        { nombre: "🇹🇷 Turquía", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_md1_usa = document.getElementById("md1_usa").value; let g_md1_par = document.getElementById("md1_par").value;
    if (g_md1_usa !== "" && g_md1_par !== "") { procesarPartido(equipos, "Estados Unidos", "Paraguay", g_md1_usa, g_md1_par); }

    let g_md2_aus = document.getElementById("md2_aus").value; let g_md2_tur = document.getElementById("md2_tur").value;
    if (g_md2_aus !== "" && g_md2_tur !== "") { procesarPartido(equipos, "Australia", "Turquía", g_md2_aus, g_md2_tur); }

    // Jornada 2
    let g_md3_usa = document.getElementById("md3_usa").value; let g_md3_aus = document.getElementById("md3_aus").value;
    if (g_md3_usa !== "" && g_md3_aus !== "") { procesarPartido(equipos, "Estados Unidos", "Australia", g_md3_usa, g_md3_aus); }

    let g_md4_tur = document.getElementById("md4_tur").value; let g_md4_par = document.getElementById("md4_par").value;
    if (g_md4_tur !== "" && g_md4_par !== "") { procesarPartido(equipos, "Turquía", "Paraguay", g_md4_tur, g_md4_par); }

    // Jornada 3
    let g_md5_usa = document.getElementById("md5_usa").value; let g_md5_tur = document.getElementById("md5_tur").value;
    if (g_md5_usa !== "" && g_md5_tur !== "") { procesarPartido(equipos, "Estados Unidos", "Turquía", g_md5_usa, g_md5_tur); }

    let g_md6_par = document.getElementById("md6_par").value; let g_md6_aus = document.getElementById("md6_aus").value;
    if (g_md6_par !== "" && g_md6_aus !== "") { procesarPartido(equipos, "Paraguay", "Australia", g_md6_par, g_md6_aus); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-d tbody");
}

// =======================================================
// LÓGICA GRUPO E
// =======================================================
function calcularGrupoE() {
    let equipos = {
        "Alemania":        { nombre: "🇩🇪 Alemania", pts: 0, pj: 0, dg: 0 },
        "Curazao":         { nombre: "🇨🇼 Curazao", pts: 0, pj: 0, dg: 0 },
        "Costa de Marfil": { nombre: "🇨🇮 Costa de Marfil", pts: 0, pj: 0, dg: 0 },
        "Ecuador":         { nombre: "🇪🇨 Ecuador", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_me1_ger = document.getElementById("me1_ger").value; let g_me1_cuw = document.getElementById("me1_cuw").value;
    if (g_me1_ger !== "" && g_me1_cuw !== "") { procesarPartido(equipos, "Alemania", "Curazao", g_me1_ger, g_me1_cuw); }

    let g_me2_civ = document.getElementById("me2_civ").value; let g_me2_ecu = document.getElementById("me2_ecu").value;
    if (g_me2_civ !== "" && g_me2_ecu !== "") { procesarPartido(equipos, "Costa de Marfil", "Ecuador", g_me2_civ, g_me2_ecu); }

    // Jornada 2
    let g_me3_ger = document.getElementById("me3_ger").value; let g_me3_civ = document.getElementById("me3_civ").value;
    if (g_me3_ger !== "" && g_me3_civ !== "") { procesarPartido(equipos, "Alemania", "Costa de Marfil", g_me3_ger, g_me3_civ); }

    let g_me4_ecu = document.getElementById("me4_ecu").value; let g_me4_cuw = document.getElementById("me4_cuw").value;
    if (g_me4_ecu !== "" && g_me4_cuw !== "") { procesarPartido(equipos, "Ecuador", "Curazao", g_me4_ecu, g_me4_cuw); }

    // Jornada 3
    let g_me5_ecu = document.getElementById("me5_ecu").value; let g_me5_ger = document.getElementById("me5_ger").value;
    if (g_me5_ecu !== "" && g_me5_ger !== "") { procesarPartido(equipos, "Ecuador", "Alemania", g_me5_ecu, g_me5_ger); }

    let g_me6_cuw = document.getElementById("me6_cuw").value; let g_me6_civ = document.getElementById("me6_civ").value;
    if (g_me6_cuw !== "" && g_me6_civ !== "") { procesarPartido(equipos, "Curazao", "Costa de Marfil", g_me6_cuw, g_me6_civ); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-e tbody");
}

// =======================================================
// LÓGICA GRUPO F
// =======================================================
function calcularGrupoF() {
    let equipos = {
        "Países Bajos": { nombre: "🇳🇱 Países Bajos", pts: 0, pj: 0, dg: 0 },
        "Japón":        { nombre: "🇯🇵 Japón", pts: 0, pj: 0, dg: 0 },
        "Suecia":       { nombre: "🇸🇪 Suecia", pts: 0, pj: 0, dg: 0 },
        "Túnez":        { nombre: "🇹🇳 Túnez", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mf1_ned = document.getElementById("mf1_ned").value; let g_mf1_jpn = document.getElementById("mf1_jpn").value;
    if (g_mf1_ned !== "" && g_mf1_jpn !== "") { procesarPartido(equipos, "Países Bajos", "Japón", g_mf1_ned, g_mf1_jpn); }

    let g_mf2_swe = document.getElementById("mf2_swe").value; let g_mf2_tun = document.getElementById("mf2_tun").value;
    if (g_mf2_swe !== "" && g_mf2_tun !== "") { procesarPartido(equipos, "Suecia", "Túnez", g_mf2_swe, g_mf2_tun); }

    // Jornada 2
    let g_mf3_ned = document.getElementById("mf3_ned").value; let g_mf3_swe = document.getElementById("mf3_swe").value;
    if (g_mf3_ned !== "" && g_mf3_swe !== "") { procesarPartido(equipos, "Países Bajos", "Suecia", g_mf3_ned, g_mf3_swe); }

    let g_mf4_tun = document.getElementById("mf4_tun").value; let g_mf4_jpn = document.getElementById("mf4_jpn").value;
    if (g_mf4_tun !== "" && g_mf4_jpn !== "") { procesarPartido(equipos, "Túnez", "Japón", g_mf4_tun, g_mf4_jpn); }

    // Jornada 3
    let g_mf5_tun = document.getElementById("mf5_tun").value; let g_mf5_ned = document.getElementById("mf5_ned").value;
    if (g_mf5_tun !== "" && g_mf5_ned !== "") { procesarPartido(equipos, "Túnez", "Países Bajos", g_mf5_tun, g_mf5_ned); }

    let g_mf6_jpn = document.getElementById("mf6_jpn").value; let g_mf6_swe = document.getElementById("mf6_swe").value;
    if (g_mf6_jpn !== "" && g_mf6_swe !== "") { procesarPartido(equipos, "Japón", "Suecia", g_mf6_jpn, g_mf6_swe); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-f tbody");
}

// =======================================================
// LÓGICA GRUPO G
// =======================================================
function calcularGrupoG() {
    let equipos = {
        "Bélgica":       { nombre: "🇧🇪 Bélgica", pts: 0, pj: 0, dg: 0 },
        "Egipto":        { nombre: "🇪🇬 Egipto", pts: 0, pj: 0, dg: 0 },
        "Irán":          { nombre: "🇮🇷 Irán", pts: 0, pj: 0, dg: 0 },
        "Nueva Zelanda": { nombre: "🇳🇿 Nueva Zelanda", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mg1_bel = document.getElementById("mg1_bel").value; let g_mg1_egy = document.getElementById("mg1_egy").value;
    if (g_mg1_bel !== "" && g_mg1_egy !== "") { procesarPartido(equipos, "Bélgica", "Egipto", g_mg1_bel, g_mg1_egy); }

    let g_mg2_irn = document.getElementById("mg2_irn").value; let g_mg2_nzl = document.getElementById("mg2_nzl").value;
    if (g_mg2_irn !== "" && g_mg2_nzl !== "") { procesarPartido(equipos, "Irán", "Nueva Zelanda", g_mg2_irn, g_mg2_nzl); }

    // Jornada 2
    let g_mg3_bel = document.getElementById("mg3_bel").value; let g_mg3_irn = document.getElementById("mg3_irn").value;
    if (g_mg3_bel !== "" && g_mg3_irn !== "") { procesarPartido(equipos, "Bélgica", "Irán", g_mg3_bel, g_mg3_irn); }

    let g_mg4_nzl = document.getElementById("mg4_nzl").value; let g_mg4_egy = document.getElementById("mg4_egy").value;
    if (g_mg4_nzl !== "" && g_mg4_egy !== "") { procesarPartido(equipos, "Nueva Zelanda", "Egipto", g_mg4_nzl, g_mg4_egy); }

    // Jornada 3
    let g_mg5_nzl = document.getElementById("mg5_nzl").value; let g_mg5_bel = document.getElementById("mg5_bel").value;
    if (g_mg5_nzl !== "" && g_mg5_bel !== "") { procesarPartido(equipos, "Nueva Zelanda", "Bélgica", g_mg5_nzl, g_mg5_bel); }

    let g_mg6_egy = document.getElementById("mg6_egy").value; let g_mg6_irn = document.getElementById("mg6_irn").value;
    if (g_mg6_egy !== "" && g_mg6_irn !== "") { procesarPartido(equipos, "Egipto", "Irán", g_mg6_egy, g_mg6_irn); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-g tbody");
}

// =======================================================
// LÓGICA GRUPO H
// =======================================================
function calcularGrupoH() {
    let equipos = {
        "España":         { nombre: "🇪🇸 España", pts: 0, pj: 0, dg: 0 },
        "Cabo Verde":     { nombre: "🇨🇻 Cabo Verde", pts: 0, pj: 0, dg: 0 },
        "Arabia Saudita": { nombre: "🇸🇦 Arabia Saudí", pts: 0, pj: 0, dg: 0 },
        "Uruguay":        { nombre: "🇺🇾 Uruguay", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mh1_esp = document.getElementById("mh1_esp").value; let g_mh1_cpv = document.getElementById("mh1_cpv").value;
    if (g_mh1_esp !== "" && g_mh1_cpv !== "") { procesarPartido(equipos, "España", "Cabo Verde", g_mh1_esp, g_mh1_cpv); }

    let g_mh2_ksa = document.getElementById("mh2_ksa").value; let g_mh2_uru = document.getElementById("mh2_uru").value;
    if (g_mh2_ksa !== "" && g_mh2_uru !== "") { procesarPartido(equipos, "Arabia Saudita", "Uruguay", g_mh2_ksa, g_mh2_uru); }

    // Jornada 2
    let g_mh3_esp = document.getElementById("mh3_esp").value; let g_mh3_ksa = document.getElementById("mh3_ksa").value;
    if (g_mh3_esp !== "" && g_mh3_ksa !== "") { procesarPartido(equipos, "España", "Arabia Saudita", g_mh3_esp, g_mh3_ksa); }

    let g_mh4_uru = document.getElementById("mh4_uru").value; let g_mh4_cpv = document.getElementById("mh4_cpv").value;
    if (g_mh4_uru !== "" && g_mh4_cpv !== "") { procesarPartido(equipos, "Uruguay", "Cabo Verde", g_mh4_uru, g_mh4_cpv); }

    // Jornada 3
    let g_mh5_uru = document.getElementById("mh5_uru").value; let g_mh5_esp = document.getElementById("mh5_esp").value;
    if (g_mh5_uru !== "" && g_mh5_esp !== "") { procesarPartido(equipos, "Uruguay", "España", g_mh5_uru, g_mh5_esp); }

    let g_mh6_cpv = document.getElementById("mh6_cpv").value; let g_mh6_ksa = document.getElementById("mh6_ksa").value;
    if (g_mh6_cpv !== "" && g_mh6_ksa !== "") { procesarPartido(equipos, "Cabo Verde", "Arabia Saudita", g_mh6_cpv, g_mh6_ksa); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-h tbody");
}

// =======================================================
// LÓGICA GRUPO I
// =======================================================
function calcularGrupoI() {
    let equipos = {
        "Francia": { nombre: "🇫🇷 Francia", pts: 0, pj: 0, dg: 0 },
        "Senegal": { nombre: "🇸🇳 Senegal", pts: 0, pj: 0, dg: 0 },
        "Irak":    { nombre: "🇮🇶 Irak", pts: 0, pj: 0, dg: 0 },
        "Noruega": { nombre: "🇳🇴 Noruega", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mi1_fra = document.getElementById("mi1_fra").value; let g_mi1_sen = document.getElementById("mi1_sen").value;
    if (g_mi1_fra !== "" && g_mi1_sen !== "") { procesarPartido(equipos, "Francia", "Senegal", g_mi1_fra, g_mi1_sen); }

    let g_mi2_irq = document.getElementById("mi2_irq").value; let g_mi2_nor = document.getElementById("mi2_nor").value;
    if (g_mi2_irq !== "" && g_mi2_nor !== "") { procesarPartido(equipos, "Irak", "Noruega", g_mi2_irq, g_mi2_nor); }

    // Jornada 2
    let g_mi3_fra = document.getElementById("mi3_fra").value; let g_mi3_irq = document.getElementById("mi3_irq").value;
    if (g_mi3_fra !== "" && g_mi3_irq !== "") { procesarPartido(equipos, "Francia", "Irak", g_mi3_fra, g_mi3_irq); }

    let g_mi4_nor = document.getElementById("mi4_nor").value; let g_mi4_sen = document.getElementById("mi4_sen").value;
    if (g_mi4_nor !== "" && g_mi4_sen !== "") { procesarPartido(equipos, "Noruega", "Senegal", g_mi4_nor, g_mi4_sen); }

    // Jornada 3
    let g_mi5_nor = document.getElementById("mi5_nor").value; let g_mi5_fra = document.getElementById("mi5_fra").value;
    if (g_mi5_nor !== "" && g_mi5_fra !== "") { procesarPartido(equipos, "Noruega", "Francia", g_mi5_nor, g_mi5_fra); }

    let g_mi6_sen = document.getElementById("mi6_sen").value; let g_mi6_irq = document.getElementById("mi6_irq").value;
    if (g_mi6_sen !== "" && g_mi6_irq !== "") { procesarPartido(equipos, "Senegal", "Irak", g_mi6_sen, g_mi6_irq); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-i tbody");
}

// =======================================================
// LÓGICA GRUPO J
// =======================================================
function calcularGrupoJ() {
    let equipos = {
        "Argentina": { nombre: "🇦🇷 Argentina", pts: 0, pj: 0, dg: 0 },
        "Argelia":   { nombre: "🇩🇿 Argelia", pts: 0, pj: 0, dg: 0 },
        "Austria":   { nombre: "🇦🇹 Austria", pts: 0, pj: 0, dg: 0 },
        "Jordania":  { nombre: "🇯🇴 Jordania", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mj1_arg = document.getElementById("mj1_arg").value; let g_mj1_alg = document.getElementById("mj1_alg").value;
    if (g_mj1_arg !== "" && g_mj1_alg !== "") { procesarPartido(equipos, "Argentina", "Argelia", g_mj1_arg, g_mj1_alg); }

    let g_mj2_aut = document.getElementById("mj2_aut").value; let g_mj2_jor = document.getElementById("mj2_jor").value;
    if (g_mj2_aut !== "" && g_mj2_jor !== "") { procesarPartido(equipos, "Austria", "Jordania", g_mj2_aut, g_mj2_jor); }

    // Jornada 2
    let g_mj3_arg = document.getElementById("mj3_arg").value; let g_mj3_aut = document.getElementById("mj3_aut").value;
    if (g_mj3_arg !== "" && g_mj3_aut !== "") { procesarPartido(equipos, "Argentina", "Austria", g_mj3_arg, g_mj3_aut); }

    let g_mj4_jor = document.getElementById("mj4_jor").value; let g_mj4_alg = document.getElementById("mj4_alg").value;
    if (g_mj4_jor !== "" && g_mj4_alg !== "") { procesarPartido(equipos, "Jordania", "Argelia", g_mj4_jor, g_mj4_alg); }

    // Jornada 3
    let g_mj5_jor = document.getElementById("mj5_jor").value; let g_mj5_arg = document.getElementById("mj5_arg").value;
    if (g_mj5_jor !== "" && g_mj5_arg !== "") { procesarPartido(equipos, "Jordania", "Argentina", g_mj5_jor, g_mj5_arg); }

    let g_mj6_alg = document.getElementById("mj6_alg").value; let g_mj6_aut = document.getElementById("mj6_aut").value;
    if (g_mj6_alg !== "" && g_mj6_aut !== "") { procesarPartido(equipos, "Argelia", "Austria", g_mj6_alg, g_mj6_aut); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-j tbody");
}

// =======================================================
// LÓGICA GRUPO K
// =======================================================
function calcularGrupoK() {
    let equipos = {
        "Portugal":   { nombre: "🇵🇹 Portugal", pts: 0, pj: 0, dg: 0 },
        "RD Congo":   { nombre: "🇨🇩 RD Congo", pts: 0, pj: 0, dg: 0 },
        "Uzbekistán": { nombre: "🇺🇿 Uzbekistán", pts: 0, pj: 0, dg: 0 },
        "Colombia":   { nombre: "🇨🇴 Colombia", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_mk1_por = document.getElementById("mk1_por").value; let g_mk1_cod = document.getElementById("mk1_cod").value;
    if (g_mk1_por !== "" && g_mk1_cod !== "") { procesarPartido(equipos, "Portugal", "RD Congo", g_mk1_por, g_mk1_cod); }

    let g_mk2_uzb = document.getElementById("mk2_uzb").value; let g_mk2_col = document.getElementById("mk2_col").value;
    if (g_mk2_uzb !== "" && g_mk2_col !== "") { procesarPartido(equipos, "Uzbekistán", "Colombia", g_mk2_uzb, g_mk2_col); }

    // Jornada 2
    let g_mk3_por = document.getElementById("mk3_por").value; let g_mk3_uzb = document.getElementById("mk3_uzb").value;
    if (g_mk3_por !== "" && g_mk3_uzb !== "") { procesarPartido(equipos, "Portugal", "Uzbekistán", g_mk3_por, g_mk3_uzb); }

    let g_mk4_col = document.getElementById("mk4_col").value; let g_mk4_cod = document.getElementById("mk4_cod").value;
    if (g_mk4_col !== "" && g_mk4_cod !== "") { procesarPartido(equipos, "Colombia", "RD Congo", g_mk4_col, g_mk4_cod); }

    // Jornada 3
    let g_mk5_col = document.getElementById("mk5_col").value; let g_mk5_por = document.getElementById("mk5_por").value;
    if (g_mk5_col !== "" && g_mk5_por !== "") { procesarPartido(equipos, "Colombia", "Portugal", g_mk5_col, g_mk5_por); }

    let g_mk6_cod = document.getElementById("mk6_cod").value; let g_mk6_uzb = document.getElementById("mk6_uzb").value;
    if (g_mk6_cod !== "" && g_mk6_uzb !== "") { procesarPartido(equipos, "RD Congo", "Uzbekistán", g_mk6_cod, g_mk6_uzb); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-k tbody");
}

// =======================================================
// LÓGICA GRUPO L
// =======================================================
function calcularGrupoL() {
    let equipos = {
        "Inglaterra": { nombre: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", pts: 0, pj: 0, dg: 0 },
        "Croacia":    { nombre: "🇭🇷 Croacia", pts: 0, pj: 0, dg: 0 },
        "Ghana":      { nombre: "🇬🇭 Ghana", pts: 0, pj: 0, dg: 0 },
        "Panamá":     { nombre: "🇵🇦 Panamá", pts: 0, pj: 0, dg: 0 }
    };

    // Jornada 1
    let g_ml1_eng = document.getElementById("ml1_eng").value; let g_ml1_cro = document.getElementById("ml1_cro").value;
    if (g_ml1_eng !== "" && g_ml1_cro !== "") { procesarPartido(equipos, "Inglaterra", "Croacia", g_ml1_eng, g_ml1_cro); }

    let g_ml2_gha = document.getElementById("ml2_gha").value; let g_ml2_pan = document.getElementById("ml2_pan").value;
    if (g_ml2_gha !== "" && g_ml2_pan !== "") { procesarPartido(equipos, "Ghana", "Panamá", g_ml2_gha, g_ml2_pan); }

    // Jornada 2
    let g_ml3_eng = document.getElementById("ml3_eng").value; let g_ml3_gha = document.getElementById("ml3_gha").value;
    if (g_ml3_eng !== "" && g_ml3_gha !== "") { procesarPartido(equipos, "Inglaterra", "Ghana", g_ml3_eng, g_ml3_gha); }

    let g_ml4_pan = document.getElementById("ml4_pan").value; let g_ml4_cro = document.getElementById("ml4_cro").value;
    if (g_ml4_pan !== "" && g_ml4_cro !== "") { procesarPartido(equipos, "Panamá", "Croacia", g_ml4_pan, g_ml4_cro); }

    // Jornada 3
    let g_ml5_pan = document.getElementById("ml5_pan").value; let g_ml5_eng = document.getElementById("ml5_eng").value;
    if (g_ml5_pan !== "" && g_ml5_eng !== "") { procesarPartido(equipos, "Panamá", "Inglaterra", g_ml5_pan, g_ml5_eng); }

    let g_ml6_cro = document.getElementById("ml6_cro").value; let g_ml6_gha = document.getElementById("ml6_gha").value;
    if (g_ml6_cro !== "" && g_ml6_gha !== "") { procesarPartido(equipos, "Croacia", "Ghana", g_ml6_cro, g_ml6_gha); }

    renderizarTabla(equipos, ".tabla-posiciones.tabla-l tbody");
}

// =======================================================
// LÓGICA DE ELIMINATORIAS DIRECTAS (16AVOS)
// =======================================================
function cargarClasificados16avos() {
    // Aquí programaremos la recolección automática de los primeros y segundos lugares.
    // Ejemplo inicial para pruebas visuales:
    // document.getElementById("f16_p1_loc").innerText = "Argentina";
}

function calcular16avos() {
    // Aquí controlaremos quién gana cada llave de eliminación directa.
    // Al ser eliminación directa, recuerda que si empatan en goles se necesitarán penales.
}

// =======================================================
// FUNCIONES AUXILIARES DE PROCESAMIENTO Y RENDERIZADO
// =======================================================
function procesarPartido(equipos, local, visitante, gLoc, gVis) {
    gLoc = parseInt(gLoc);
    gVis = parseInt(gVis);
    
    equipos[local].pj += 1;
    equipos[visitante].pj += 1;
    equipos[local].dg += (gLoc - gVis);
    equipos[visitante].dg += (gVis - gLoc);

    if (gLoc > gVis) { equipos[local].pts += 3; }
    else if (gVis > gLoc) { equipos[visitante].pts += 3; }
    else { equipos[local].pts += 1; equipos[visitante].pts += 1; }
}

function renderizarTabla(equipos, selectorTbody) {
    let listaEquipos = Object.values(equipos);
    listaEquipos.sort((a, b) => (b.pts !== a.pts) ? b.pts - a.pts : b.dg - a.dg);

    let tablaCuerpo = document.querySelector(selectorTbody);
    tablaCuerpo.innerHTML = ""; 

    listaEquipos.forEach((equipo, indice) => {
        let posicion = indice + 1;
        let claseFila = (posicion <= 2) ? 'class="clasificado"' : '';
        let fila = `
            <tr ${claseFila}>
                <td>${posicion}</td>
                <td class="text-left ${posicion <= 2 ? 'font-bold' : ''}">${equipo.nombre}</td>
                <td>${equipo.pts}</td>
                <td>${equipo.pj}</td>
                <td>${equipo.dg > 0 ? '+' + equipo.dg : equipo.dg}</td>
            </tr>
        `;
        tablaCuerpo.innerHTML += fila;
    });
}

// Lógica de navegación corregida para alternar Grupo A, B y C
function cambiarGrupo() {
    let grupoSeleccionado = document.getElementById("select-grupo").value;
    
    // 1. Ocultamos TODOS los contenedores existentes (Grupos A al L y Fase Final)
    document.getElementById("grupo-a").classList.remove("active");
    document.getElementById("grupo-b").classList.remove("active");
    document.getElementById("grupo-c").classList.remove("active");
    document.getElementById("grupo-d").classList.remove("active");
    document.getElementById("grupo-e").classList.remove("active");
    document.getElementById("grupo-f").classList.remove("active");
    document.getElementById("grupo-g").classList.remove("active");
    document.getElementById("grupo-h").classList.remove("active");
    document.getElementById("grupo-i").classList.remove("active");
    document.getElementById("grupo-j").classList.remove("active");
    document.getElementById("grupo-k").classList.remove("active");
    document.getElementById("grupo-l").classList.remove("active");
    document.getElementById("fase-final").classList.remove("active"); // Asegura que se oculte si cambias a un grupo
    
    // 2. Mostramos la sección que el usuario seleccionó en el menú desplegable
    document.getElementById(grupoSeleccionado).classList.add("active");
    
    // 3. Ejecutamos el recálculo automático correspondiente
    if (grupoSeleccionado === "grupo-a") { calcularGrupoA(); }
    else if (grupoSeleccionado === "grupo-b") { calcularGrupoB(); }
    else if (grupoSeleccionado === "grupo-c") { calcularGrupoC(); }
    else if (grupoSeleccionado === "grupo-d") { calcularGrupoD(); }
    else if (grupoSeleccionado === "grupo-e") { calcularGrupoE(); }
    else if (grupoSeleccionado === "grupo-f") { calcularGrupoF(); }
    else if (grupoSeleccionado === "grupo-g") { calcularGrupoG(); }
    else if (grupoSeleccionado === "grupo-h") { calcularGrupoH(); }
    else if (grupoSeleccionado === "grupo-i") { calcularGrupoI(); }
    else if (grupoSeleccionado === "grupo-j") { calcularGrupoJ(); }
    else if (grupoSeleccionado === "grupo-k") { calcularGrupoK(); }
    else if (grupoSeleccionado === "grupo-l") { calcularGrupoL(); }
    else if (grupoSeleccionado === "fase-final") { 
        cargarClasificados16avos(); // Aquí es donde se actualizarán los nombres calculados
    }
}