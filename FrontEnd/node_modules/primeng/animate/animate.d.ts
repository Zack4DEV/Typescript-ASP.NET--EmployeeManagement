import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Animate manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load.
 * @group Components
 */
export declare class Animate implements OnInit, AfterViewInit {
    private host;
    el: ElementRef;
    renderer: Renderer2;
    /**
     * Selector to define the CSS class for enter animation.
     * @group Props
     */
    enterClass: string | undefined;
    /**
     * Selector to define the CSS class for leave animation.
     * @group Props
     */
    leaveClass: string | undefined;
    observer: IntersectionObserver | undefined;
    timeout: any;
    constructor(host: ElementRef, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    bindIntersectionObserver(): void;
    isVisible(element: IntersectionObserverEntry[]): void;
    enter(): void;
    leave(): void;
    unbindIntersectionObserver(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Animate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Animate, "[pAnimate]", never, { "enterClass": { "alias": "enterClass"; "required": false; }; "leaveClass": { "alias": "leaveClass"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class AnimateModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AnimateModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AnimateModule, [typeof Animate], [typeof i1.CommonModule], [typeof Animate]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AnimateModule>;
}
