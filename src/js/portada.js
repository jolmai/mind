function setup() {
    const portada = document.getElementById('olas');
    const canvas = createCanvas(portada.offsetWidth, portada.offsetHeight);
    canvas.parent('olas');
    noStroke();
  }
  
  function draw() {

    background(245, 245, 250);
  
    for (let i = 0; i < height; i += 10) {
      let waveAlpha = map(sin(frameCount * 0.02 + i * 0.05), -1, 1, 50, 150);
      fill(0, 100, 255, waveAlpha);
      beginShape();
      for (let x = 0; x < width; x += 10) {
        let y = i + map(noise(x * 0.01, i * 0.01, frameCount * 0.02), 0, 1, -20, 20);
        vertex(x, y);
      }
      vertex(width, height);
      vertex(0, height);
      endShape(CLOSE);
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }