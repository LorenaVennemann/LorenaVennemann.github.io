/**
 * Transitions-Effekte für Seitenwechsel - Coole Raketen-Animation
 */
interface TransitionConfig {
    duration: number;
    delay: number;
}
declare class PageTransition {
    private config;
    private container;
    private isTransitioning;
    constructor(config?: TransitionConfig);
    /**
     * Initialisiert das Transition-System
     */
    private init;
    /**
     * Erstellt den Container für Transition-Objekte
     */
    private createContainer;
    /**
     * Fügt CSS-Styles hinzu
     */
    private addStyles;
    /**
     * Fügt Event-Listener zu allen internen Links hinzu
     */
    private attachLinkListeners;
    /**
     * Erstellt eine simple aber coole Rakete
     */
    private createRocket;
    /**
     * Startet die Transition-Animation
     */
    private triggerTransition;
    /**
     * Deaktiviert das Transition-System
     */
    destroy(): void;
}
export { PageTransition, TransitionConfig };
//# sourceMappingURL=transitions.d.ts.map