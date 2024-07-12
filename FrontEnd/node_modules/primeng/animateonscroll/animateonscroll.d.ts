import { AfterViewInit, ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
interface AnimateOnScrollOptions {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
}
/**
 * AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling.
 * @group Components
 */
export declare class AnimateOnScroll implements OnInit, AfterViewInit {
    private document;
    private platformId;
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
    /**
     * Specifies the root option of the IntersectionObserver API.
     * @group Props
     */
    root: HTMLElement | undefined | null;
    /**
     * Specifies the rootMargin option of the IntersectionObserver API.
     * @group Props
     */
    rootMargin: string | undefined;
    /**
     * Specifies the threshold option of the IntersectionObserver API
     * @group Props
     */
    threshold: number | undefined;
    /**
     * Whether the scroll event listener should be removed after initial run.
     * @group Props
     */
    once: boolean;
    observer: IntersectionObserver | undefined;
    resetObserver: any;
    isObserverActive: boolean;
    animationState: any;
    animationEndListener: VoidFunction | undefined;
    constructor(document: Document, platformId: any, host: ElementRef, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get options(): AnimateOnScrollOptions;
    bindIntersectionObserver(): void;
    enter(): void;
    leave(): void;
    bindAnimationEvents(): void;
    unbindAnimationEvents(): void;
    unbindIntersectionObserver(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnimateOnScroll, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AnimateOnScroll, "[pAnimateOnScroll]", never, { "enterClass": { "alias": "enterClass"; "required": false; }; "leaveClass": { "alias": "leaveClass"; "required": false; }; "root": { "alias": "root"; "required": false; }; "rootMargin": { "alias": "rootMargin"; "required": false; }; "threshold": { "alias": "threshold"; "required": false; }; "once": { "alias": "once"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_threshold: unknown;
    static ngAcceptInputType_once: unknown;
}
export declare class AnimateOnScrollModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AnimateOnScrollModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AnimateOnScrollModule, [typeof AnimateOnScroll], [typeof i1.CommonModule], [typeof AnimateOnScroll]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AnimateOnScrollModule>;
}
export {};
