
class TypeWriter {
    constructor(element, text, speed = 150, delay = 500) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.delay = delay;
        this.charIndex = 0;
        this.timeoutId = null;
      
        this.type = () => {
            if (this.charIndex < this.text.length) {
                this.element.textContent += this.text.charAt(this.charIndex);
                this.charIndex++;
                this.timeoutId = window.setTimeout(this.type, this.speed);
            }
        };
    }
 
    start() {
        setTimeout(() => this.type(), this.delay);
    }
  
    stop() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
   
    reset() {
        this.stop();
        this.charIndex = 0;
        this.element.textContent = '';
    }
}

class ScrollIndicatorManager {
    constructor(indicatorSelector = '.scroll-indicator') {
        this.indicator = document.querySelector(indicatorSelector);
        this.init();
    }
    
    init() {
        if (!this.indicator)
            return;
        window.addEventListener('load', () => {
            this.updateVisibility();
        });
        window.addEventListener('resize', () => {
            this.updateVisibility();
        });
    }
  
    updateVisibility() {
        if (!this.indicator)
            return;
        const hasScroll = document.body.scrollHeight > window.innerHeight;
        this.indicator.style.display = hasScroll ? '' : 'none';
    }
   
    show() {
        if (this.indicator) {
            this.indicator.style.display = '';
        }
    }
    
    hide() {
        if (this.indicator) {
            this.indicator.style.display = 'none';
        }
    }
}

function initIndexPage() {
    new ScrollIndicatorManager('.scroll-indicator');
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const typewriter = new TypeWriter(typedElement, 'Welcome to my Portfolio', 150, 500);
        typewriter.start();
    }
}
export { TypeWriter, ScrollIndicatorManager, initIndexPage };
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndexPage);
}
else {
    initIndexPage();
}
