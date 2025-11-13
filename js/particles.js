
class Particle {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
 
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > this.canvas.width)
            this.x = 0;
        if (this.x < 0)
            this.x = this.canvas.width;
        if (this.y > this.canvas.height)
            this.y = 0;
        if (this.y < 0)
            this.y = this.canvas.height;
    }

    draw() {
    this.ctx.fillStyle = `rgba(231, 76, 60, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

class ParticleSystem {
    constructor(canvasId, particleCount = 80) {
        this.particleCount = particleCount;
        this.particles = [];
        this.animationId = null;
       
        this.animate = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            this.connectParticles();
            this.animationId = requestAnimationFrame(this.animate);
        };
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            throw new Error(`Canvas with id "${canvasId}" not found`);
        }
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Could not get 2D context from canvas');
        }
        this.ctx = ctx;
        this.initCanvas();
        this.createParticles();
        this.setupEventListeners();
    }
  
    initCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
  
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas, this.ctx));
        }
    }
   
    connectParticles() {
        const maxDistance = 120;
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < maxDistance) {
                    const opacity = 0.12 * (1 - distance / maxDistance);
                    this.ctx.strokeStyle = `rgba(231, 76, 60, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.initCanvas();
            this.createParticles();
        });
    }
  
    start() {
        if (!this.animationId) {
            this.animate();
        }
    }
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}
export { ParticleSystem, Particle };
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('particles-canvas');
        if (canvas) {
            const particleSystem = new ParticleSystem('particles-canvas', 80);
            particleSystem.start();
        }
    });
}
else {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const particleSystem = new ParticleSystem('particles-canvas', 80);
        particleSystem.start();
    }
}
