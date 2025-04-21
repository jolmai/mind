class ConcentracionAnimation {
    constructor() {
      this.angle = 0;
    }
  
    display() {
      background(100, 100, 200);
      noFill();
      stroke(255, 150);
      strokeWeight(2);
      translate(width / 2, height / 2);
      rotate(this.angle);
      for (let i = 0; i < 10; i++) {
        ellipse(0, 0, 100 + i * 20, 100 + i * 20);
      }
      this.angle += 0.01;
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