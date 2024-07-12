import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { PLATFORM_ID, Directive, Inject, Optional, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i1 from 'primeng/api';

/**
 * Ripple directive adds ripple effect to the host element.
 * @group Components
 */
class Ripple {
    document;
    platformId;
    renderer;
    el;
    zone;
    config;
    constructor(document, platformId, renderer, el, zone, config) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.zone = zone;
        this.config = config;
    }
    animationListener;
    mouseDownListener;
    timeout;
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.config && this.config.ripple) {
                this.zone.runOutsideAngular(() => {
                    this.create();
                    this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
                });
            }
        }
    }
    onMouseDown(event) {
        let ink = this.getInk();
        if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === 'none') {
            return;
        }
        DomHandler.removeClass(ink, 'p-ink-active');
        if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
            let d = Math.max(DomHandler.getOuterWidth(this.el.nativeElement), DomHandler.getOuterHeight(this.el.nativeElement));
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        let offset = DomHandler.getOffset(this.el.nativeElement);
        let x = event.pageX - offset.left + this.document.body.scrollTop - DomHandler.getWidth(ink) / 2;
        let y = event.pageY - offset.top + this.document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
        this.renderer.setStyle(ink, 'top', y + 'px');
        this.renderer.setStyle(ink, 'left', x + 'px');
        DomHandler.addClass(ink, 'p-ink-active');
        this.timeout = setTimeout(() => {
            let ink = this.getInk();
            if (ink) {
                DomHandler.removeClass(ink, 'p-ink-active');
            }
        }, 401);
    }
    getInk() {
        const children = this.el.nativeElement.children;
        for (let i = 0; i < children.length; i++) {
            if (typeof children[i].className === 'string' && children[i].className.indexOf('p-ink') !== -1) {
                return children[i];
            }
        }
        return null;
    }
    resetInk() {
        let ink = this.getInk();
        if (ink) {
            DomHandler.removeClass(ink, 'p-ink-active');
        }
    }
    onAnimationEnd(event) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    }
    create() {
        let ink = this.renderer.createElement('span');
        this.renderer.addClass(ink, 'p-ink');
        this.renderer.appendChild(this.el.nativeElement, ink);
        this.renderer.setAttribute(ink, 'aria-hidden', 'true');
        this.renderer.setAttribute(ink, 'role', 'presentation');
        if (!this.animationListener) {
            this.animationListener = this.renderer.listen(ink, 'animationend', this.onAnimationEnd.bind(this));
        }
    }
    remove() {
        let ink = this.getInk();
        if (ink) {
            this.mouseDownListener && this.mouseDownListener();
            this.animationListener && this.animationListener();
            this.mouseDownListener = null;
            this.animationListener = null;
            DomHandler.removeElement(ink);
        }
    }
    ngOnDestroy() {
        if (this.config && this.config.ripple) {
            this.remove();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Ripple, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.PrimeNGConfig, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: Ripple, isStandalone: true, selector: "[pRipple]", host: { classAttribute: "p-ripple p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Ripple, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pRipple]',
                    standalone: true,
                    host: {
                        class: 'p-ripple p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.PrimeNGConfig, decorators: [{
                    type: Optional
                }] }] });
class RippleModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RippleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: RippleModule, imports: [Ripple], exports: [Ripple] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RippleModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RippleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Ripple],
                    exports: [Ripple]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Ripple, RippleModule };
//# sourceMappingURL=primeng-ripple.mjs.map
