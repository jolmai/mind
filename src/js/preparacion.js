class PreparacionAnimation {
  constructor() {
    this.angle = 0;
  }

  display() {
    background(100, 150, 200);
    noStroke();
    fill(255, 200);
    this.angle += 0.02;
    let x = width / 2 + cos(this.angle) * 100;
    let y = height / 2 + sin(this.angle) * 100;
    ellipse(x, y, 50, 50);

    if (typeof startTime !== 'undefined' && typeof duration !== 'undefined') {
      let elapsed = millis() - startTime;
      let remaining = max(0, duration - elapsed);
      let seconds = floor(remaining / 1000);
      fill(255);
      textSize(24);
      text(`Tiempo: ${seconds}s`, width - 120, 30);
    }
  }
}