class EliminarStressAnimation {
    constructor() {
      this.waves = [];
    }
  
    display() {
      background(150, 200, 100);
      noFill();
      stroke(255, 150);
      strokeWeight(2);
      for (let i = 0; i < 10; i++) {
        beginShape();
        for (let x = 0; x < width; x += 10) {
          let y = height / 2 + sin(x * 0.01 + frameCount * 0.05 + i) * 50;
          vertex(x, y);
        }
        endShape();
      }
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