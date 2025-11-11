/**
 * Transitions-Effekte für Seitenwechsel - Coole Raketen-Animation
 */
class PageTransition {
    constructor(config = { duration: 800, delay: 200 }) {
        this.config = config;
        this.container = null;
        this.isTransitioning = false;
        this.init();
    }
    /**
     * Initialisiert das Transition-System
     */
    init() {
        this.createContainer();
        this.attachLinkListeners();
        this.addStyles();
    }
    /**
     * Erstellt den Container für Transition-Objekte
     */
    createContainer() {
        this.container = document.createElement('div');
        this.container.id = 'transition-container';
        this.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        `;
        document.body.appendChild(this.container);
    }
    /**
     * Fügt CSS-Styles hinzu
     */
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rocketFly {
                0% {
                    transform: translate(-200px, 0) rotate(-45deg);
                    opacity: 0;
                }
                5% {
                    opacity: 1;
                }
                95% {
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(100vw + 200px), -100vh) rotate(-45deg);
                    opacity: 0;
                }
            }

            @keyframes rocketTrail {
                0%, 100% {
                    transform: scaleX(1);
                    opacity: 0.6;
                }
                50% {
                    transform: scaleX(1.2);
                    opacity: 0.9;
                }
            }

            .rocket-container {
                position: absolute;
                animation: rocketFly 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }

            .page-fade {
                animation: fadeOut 0.3s ease-out forwards;
            }

            @keyframes fadeOut {
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    /**
     * Fügt Event-Listener zu allen internen Links hinzu
     */
    attachLinkListeners() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            const link = target.closest('a');
            if (!link)
                return;
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
                return;
            }
            if (link.hostname === window.location.hostname || !link.hostname) {
                e.preventDefault();
                this.triggerTransition(href);
            }
        });
    }
    /**
     * Erstellt eine simple aber coole Rakete
     */
    createRocket() {
        return `
            <div style="position: relative; width: 120px; height: 120px;">
                <!-- Rauch-Trail -->
                <div style="
                    position: absolute;
                    left: -80px;
                    top: 50%;
                    width: 100px;
                    height: 30px;
                    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.3), rgba(0, 204, 255, 0.5));
                    border-radius: 50%;
                    filter: blur(10px);
                    animation: rocketTrail 0.15s ease-in-out infinite;
                    transform: translateY(-50%);
                "></div>
                
                <!-- Raketen-Body -->
                <div style="
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 60px;
                    height: 20px;
                    background: linear-gradient(135deg, #00ff88, #00ccff);
                    border-radius: 0 10px 10px 0;
                    box-shadow: 0 0 30px rgba(0, 255, 136, 0.8), 0 0 50px rgba(0, 204, 255, 0.5);
                ">
                    <!-- Raketen-Spitze -->
                    <div style="
                        position: absolute;
                        right: -10px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 0;
                        height: 0;
                        border-left: 15px solid #00ccff;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        filter: drop-shadow(0 0 10px rgba(0, 204, 255, 0.8));
                    "></div>
                    
                    <!-- Fenster -->
                    <div style="
                        position: absolute;
                        left: 15px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 12px;
                        height: 12px;
                        background: rgba(255, 255, 255, 0.3);
                        border-radius: 50%;
                        border: 2px solid rgba(255, 255, 255, 0.6);
                    "></div>
                    
                    <!-- Flamme -->
                    <div style="
                        position: absolute;
                        left: -20px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 25px;
                        height: 8px;
                        background: linear-gradient(90deg, #ff6b35, #ffd700, transparent);
                        border-radius: 50%;
                        filter: blur(3px);
                        animation: rocketTrail 0.1s ease-in-out infinite;
                    "></div>
                </div>
            </div>
        `;
    }
    /**
     * Startet die Transition-Animation
     */
    triggerTransition(targetUrl) {
        if (this.isTransitioning || !this.container)
            return;
        this.isTransitioning = true;
        // Erstelle Rakete
        const rocket = document.createElement('div');
        rocket.className = 'rocket-container';
        rocket.innerHTML = this.createRocket();
        // Zufällige vertikale Position
        const randomY = Math.random() * 60 + 20; // 20% - 80%
        rocket.style.cssText = `
            left: -150px;
            top: ${randomY}vh;
        `;
        this.container.appendChild(rocket);
        // Fade-out der Seite
        setTimeout(() => {
            document.body.classList.add('page-fade');
        }, 100);
        // Navigation
        setTimeout(() => {
            window.location.href = targetUrl;
        }, this.config.delay);
        // Cleanup
        setTimeout(() => {
            rocket.remove();
            this.isTransitioning = false;
        }, this.config.duration);
    }
    /**
     * Deaktiviert das Transition-System
     */
    destroy() {
        if (this.container) {
            this.container.remove();
            this.container = null;
        }
    }
}
// Export
export { PageTransition };
// Auto-Initialisierung
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PageTransition({ duration: 800, delay: 200 });
    });
}
else {
    new PageTransition({ duration: 800, delay: 200 });
}
//# sourceMappingURL=transitions.js.map