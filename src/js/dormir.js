class DormirAnimation {
    constructor() {
      this.stars = [];
      for (let i = 0; i < 100; i++) {
        this.stars.push({
          x: random(width),
          y: random(height),
          size: random(1, 3),
          brightness: random(100, 255),
        });
      }
    }
  
    display() {
      background(50, 50, 100);
      noStroke();
      for (let star of this.stars) {
        fill(255, star.brightness);
        ellipse(star.x, star.y, star.size, star.size);
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