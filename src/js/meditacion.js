let currentMode = null;
let binauralSounds = [];
let animations = [];
let startTime;
let duration;
let isPaused = false;
let backButton;
let volumeSlider; // variable global para el slider

function preload() {
  // Cargar los sonidos binaurales para cada modo
  binauralSounds[0] = loadSound('../assets/estudiar24hz.mp3');
  binauralSounds[1] = loadSound('../assets/ritmo6hz.mp3');
  binauralSounds[2] = loadSound('../assets/dormir(2hz).mp3');
  binauralSounds[3] = loadSound('../assets/estres8hz.mp3');
  binauralSounds[4] = loadSound('../assets/concentracion.mp3');
}

function setup() {
  const cnv = createCanvas(800, 600);
  cnv.parent('canvas-container');

  textSize(20);
  textAlign(CENTER, CENTER);

  animations[0] = new PreparacionAnimation();
  animations[1] = new RitmoCardiacoAnimation();
  animations[2] = new DormirAnimation();
  animations[3] = new EliminarStressAnimation();
  animations[4] = new ConcentracionAnimation();


  backButton = createButton('Volver al Menú');
  backButton.parent('canvas-container'); 
  backButton.position(10, 10); 
  backButton.style('position', 'absolute');
  backButton.style('top', '10px');
  backButton.style('left', '10px');
  backButton.mousePressed(goBackToMenu);
  backButton.hide();


  volumeSlider = createSlider(0, 1, 1, 0.01);
  volumeSlider.parent('canvas-container');
  volumeSlider.style('position', 'absolute');
  volumeSlider.style('bottom', '10px');
  volumeSlider.style('left', '50%');
  volumeSlider.style('transform', 'translateX(-50%)');
}

function draw() {
  background(30);

  if (currentMode === null) {
    drawMenu();
    backButton.hide(); 
  } else {
    const vol = volumeSlider.value();
    binauralSounds[currentMode].setVolume(vol);
    animations[currentMode].display();
    checkTime();
    backButton.show();
  }
}

function drawMenu() {
  fill(255);
  text("Selecciona un modo de meditación:", width / 2, height / 2 - 100);
  text("1. Preparación para estudiar (24hz)", width / 2, height / 2 - 50);
  text("2. Bajar el ritmo cardíaco (6hz)", width / 2, height / 2);
  text("3. Dormir (2hz)", width / 2, height / 2 + 50);
  text("4. Eliminar estrés (8hz)", width / 2, height / 2 + 100);
  text("5. Potenciar la concentración (16hz)", width / 2, height / 2 + 150);
}

function keyPressed() {
  if (currentMode === null) {
    if (key === '1') startMode(0, 3);
    if (key === '2') startMode(1, 5); 
    if (key === '3') startMode(2, 10); 
    if (key === '4') startMode(3, 7); 
    if (key === '5') startMode(4, 6); 
  }

  if (currentMode !== null) {
    if (key === '+' || key === '=') { 
      animations[currentMode].adjustVolume(0.1);
    }
    if (key === '-' || key === '_') {
      animations[currentMode].adjustVolume(-0.1);
    }
  }
}

function startMode(mode, minutes) {
  currentMode = mode;
  startTime = millis();
  duration = minutes * 60 * 1000;
  binauralSounds[mode].loop();
}

function checkTime() {
  if (millis() - startTime > duration) {
    stopMode();
  }
}

function stopMode() {
  binauralSounds[currentMode].stop();
  currentMode = null;
}

function togglePause() {
  if (currentMode !== null) {
    if (isPaused) {
      binauralSounds[currentMode].play();
      isPaused = false;
    } else {
      binauralSounds[currentMode].pause();
      isPaused = true;
    }
  }
}

function goBackToMenu() {
  if (currentMode !== null) {
    binauralSounds[currentMode].stop();
    currentMode = null;
  }
}
function stopMeditacion() {
  if (currentSound) {
      currentSound.stop();
  }
  currentMode = null;
  currentSound = null;


  const meditacionActiva = document.getElementById('meditacion-activa');
  meditacionActiva.innerHTML = '';
}
document.querySelectorAll('.btn-meditacion').forEach(button => {
  button.addEventListener('click', () => {
      const mode = parseInt(button.getAttribute('data-mode'));
      const duration = [3, 5, 10, 7, 6][mode];
      startMode(mode, duration);
  });
});

document.getElementById('stop-meditacion').addEventListener('click', stopMeditacion);