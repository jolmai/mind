class RitmoCardiacoAnimation {
    constructor() {
      this.heartbeat = 0;
      this.heartRate = 0.1;
      this.startTime = millis();
      this.duration = 5 * 60 * 1000; 
    }
  
    display() {
      background(200, 100, 150);
      noStroke();
      fill(255, 150);
  
      this.heartbeat += this.heartRate;
      let size = 100 + sin(this.heartbeat) * 20;
      ellipse(width / 2, height / 2, size, size);
  
      if (this.heartRate > 0.01) {
        this.heartRate -= 0.0001;
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