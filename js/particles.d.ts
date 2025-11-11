
interface ParticleProperties {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

declare class Particle implements ParticleProperties {
    private canvas;
    private ctx;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
    
    update(): void;
    
    draw(): void;
}

declare class ParticleSystem {
    private particleCount;
    private canvas;
    private ctx;
    private particles;
    private animationId;
    constructor(canvasId: string, particleCount?: number);
    
    private initCanvas;
    
    private createParticles;
   
    private connectParticles;
    
    private animate;
    
    private setupEventListeners;
    
    start(): void;
    
    stop(): void;
}
export { ParticleSystem, Particle, ParticleProperties };
