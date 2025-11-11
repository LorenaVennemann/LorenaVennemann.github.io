declare class TypeWriter {
    private element;
    private text;
    private speed;
    private delay;
    private charIndex;
    private timeoutId;
    constructor(element: HTMLElement, text: string, speed?: number, delay?: number);
    
    start(): void;
   
    private type;
    
    stop(): void;
    
    reset(): void;
}

declare class ScrollIndicatorManager {
    private indicator;
    constructor(indicatorSelector?: string);
  
    private init;
  
    private updateVisibility;
   
    show(): void;
    
    hide(): void;
}

declare function initIndexPage(): void;
export { TypeWriter, ScrollIndicatorManager, initIndexPage };
