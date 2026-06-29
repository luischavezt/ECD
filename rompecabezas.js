// Inicialización del cliente Supabase (usando nombre diferente para evitar conflicto)
const supabaseClient = supabase.createClient('https://yojalmwhmibubowkxure.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamFsbXdobWlidWJvd2t4dXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTkyMDIsImV4cCI6MjA5Nzc5NTIwMn0.wPmPcHoMLQJZHdmo93ONLhVe3oCeTS3NKO7lZkjtLl0');

const ROWS = 3;
const COLS = 3;
const container = document.getElementById('game-container');
const previewImage = document.getElementById('preview-image');
const timerDisplay = document.getElementById('timer');
const resetBtn = document.getElementById('reset-btn');
const restartBtn = document.getElementById('restart-btn');
const nameModal = document.getElementById('name-modal');
const winScreen = document.getElementById('win-screen');
const timeReport = document.getElementById('time-report');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const scoresList = document.getElementById('scores-list');
let pieces = [];
let startTime;
let timerInterval;
let gameActive = false;
let finalTimeMs = 0;
let currentImageUrl = '';

function getNewImageUrl() {
    const misImagenes = ['https://luischavezt.github.io/ECD/imagenes/dis1.jpg', 'https://luischavezt.github.io/ECD/imagenes/dis2.jpg', 
                         'https://luischavezt.github.io/ECD/imagenes/dis3.jpg', 'https://luischavezt.github.io/ECD/imagenes/dis4.jpg',
                        'https://luischavezt.github.io/ECD/imagenes/dis5.jpg', 'https://luischavezt.github.io/ECD/imagenes/dis6.jpg'];
    return misImagenes[Math.floor(Math.random() * misImagenes.length)];
}

function initGame(changeImage = true) {
    // Limpiar piezas previas asegurando que el DOM esté listo
    document.querySelectorAll('.piece').forEach(p => p.remove());
    pieces = [];
    nameModal.style.display = 'none';
    winScreen.style.display = 'none';
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
    gameActive = false;
    
    if (changeImage || !currentImageUrl) currentImageUrl = getNewImageUrl();
    
    const img = new Image();
    img.src = currentImageUrl;
    img.onload = () => {
        previewImage.style.backgroundImage = `url('${currentImageUrl}')`;
        
        const contWidth = container.offsetWidth; 
        const pieceSize = contWidth / ROWS;
        
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.style.position = 'absolute';
                piece.style.width = `${pieceSize}px`;
                piece.style.height = `${pieceSize}px`;
                piece.style.backgroundImage = `url('${currentImageUrl}')`;
                piece.style.backgroundSize = `${contWidth}px ${contWidth}px`;
                piece.style.backgroundPosition = `-${c * pieceSize}px -${r * pieceSize}px`;
                piece.style.zIndex = "5"; 
                
                piece.dataset.correctX = c * pieceSize;
                piece.dataset.correctY = r * pieceSize;
                
                piece.style.left = `${Math.floor(Math.random() * (contWidth - pieceSize))}px`;
                piece.style.top = `${Math.floor(Math.random() * (contWidth - pieceSize))}px`;
                
                setupDragAndDrop(piece);
                container.appendChild(piece);
                pieces.push(piece);
            }
        }
    };
    renderLeaderboard();
}

function setupDragAndDrop(piece) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    const startDrag = (e) => {
        if (nameModal.style.display === 'flex' || winScreen.style.display === 'flex') return;
        piece.setPointerCapture(e.pointerId);
        if (!gameActive) { startTimer(); gameActive = true; }
        isDragging = true;
        piece.style.zIndex = "10";
        startX = e.clientX - (parseFloat(piece.dataset.translateX) || 0);
        startY = e.clientY - (parseFloat(piece.dataset.translateY) || 0);
    };
    const drag = (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        piece.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };
    const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        piece.style.zIndex = "2";
        try { piece.releasePointerCapture(e.pointerId); } catch(err) {}
        const finalLeft = parseFloat(piece.style.left) + currentX;
        const finalTop = parseFloat(piece.style.top) + currentY;
        const correctX = parseFloat(piece.dataset.correctX);
        const correctY = parseFloat(piece.dataset.correctY);
        if (Math.abs(finalLeft - correctX) < 30 && Math.abs(finalTop - correctY) < 30) {
            piece.style.left = `${correctX}px`;
            piece.style.top = `${correctY}px`;
        } else {
            piece.style.left = `${finalLeft}px`;
            piece.style.top = `${finalTop}px`;
        }
        piece.style.transform = `translate(0px, 0px)`;
        piece.dataset.translateX = 0;
        piece.dataset.translateY = 0;
        currentX = 0; currentY = 0;
        checkVictory();
    };
    piece.addEventListener('pointerdown', startDrag);
    piece.addEventListener('pointermove', drag);
    piece.addEventListener('pointerup', stopDrag);
    piece.addEventListener('pointercancel', stopDrag);
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        finalTimeMs = Date.now() - startTime;
        const totalSeconds = Math.floor(finalTimeMs / 1000);
        timerDisplay.textContent = `${Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`;
    }, 1000);
}

function checkVictory() {
    const allCorrect = pieces.every(p => Math.abs(parseFloat(p.style.left) - parseFloat(p.dataset.correctX)) < 5 && Math.abs(parseFloat(p.style.top) - parseFloat(p.dataset.correctY)) < 5);
    if (allCorrect && gameActive) {
        clearInterval(timerInterval);
        gameActive = false;
        timeReport.textContent = `Tiempo: ${timerDisplay.textContent}`;
        nameModal.style.display = 'flex';
    }
}

async function saveScore() {
    const { error } = await supabaseClient.from('records').insert([{ name: playerNameInput.value.trim() || "Anónimo", time_ms: finalTimeMs }]);
    if (!error) { nameModal.style.display = 'none'; winScreen.style.display = 'flex'; renderLeaderboard(); }
}

async function renderLeaderboard() {
    const { data } = await supabaseClient.from('records').select('name, time_ms').order('time_ms', { ascending: true }).limit(3);
    const items = scoresList.querySelectorAll('.score-item');
    items.forEach((item, index) => {
        if (data && data[index]) {
            const s = Math.floor(data[index].time_ms / 1000);
            item.innerHTML = `${index + 1}° ${data[index].name}: <span>${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}</span>`;
        } else { item.innerHTML = `${index + 1}°: <span>--:--</span>`; }
    });
}

resetBtn.addEventListener('click', () => initGame(true));
restartBtn.addEventListener('click', () => initGame(true));
saveScoreBtn.addEventListener('click', saveScore);
window.onload = () => initGame(true);
