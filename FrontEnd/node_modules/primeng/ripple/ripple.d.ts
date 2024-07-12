import { AfterViewInit, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
/**
 * Ripple directive adds ripple effect to the host element.
 * @group Components
 */
export declare class Ripple implements AfterViewInit, OnDestroy {
    private document;
    private platformId;
    private renderer;
    el: ElementRef;
    zone: NgZone;
    config: PrimeNGConfig;
    constructor(document: Document, platformId: any, renderer: Renderer2, el: ElementRef, zone: NgZone, config: PrimeNGConfig);
    animationListener: VoidListener;
    mouseDownListener: VoidListener;
    timeout: any;
    ngAfterViewInit(): void;
    onMouseDown(event: MouseEvent): void;
    getInk(): any;
    resetInk(): void;
    onAnimationEnd(event: Event): void;
    create(): void;
    remove(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ripple, [null, null, null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Ripple, "[pRipple]", never, {}, {}, never, never, true, never>;
}
export declare class RippleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RippleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RippleModule, never, [typeof Ripple], [typeof Ripple]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RippleModule>;
}
