import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { PLATFORM_ID, numberAttribute, booleanAttribute, Directive, Inject, Input, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';

/**
 * AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling.
 * @group Components
 */
class AnimateOnScroll {
    document;
    platformId;
    host;
    el;
    renderer;
    /**
     * Selector to define the CSS class for enter animation.
     * @group Props
     */
    enterClass;
    /**
     * Selector to define the CSS class for leave animation.
     * @group Props
     */
    leaveClass;
    /**
     * Specifies the root option of the IntersectionObserver API.
     * @group Props
     */
    root;
    /**
     * Specifies the rootMargin option of the IntersectionObserver API.
     * @group Props
     */
    rootMargin;
    /**
     * Specifies the threshold option of the IntersectionObserver API
     * @group Props
     */
    threshold;
    /**
     * Whether the scroll event listener should be removed after initial run.
     * @group Props
     */
    once = true;
    observer;
    resetObserver;
    isObserverActive = false;
    animationState;
    animationEndListener;
    constructor(document, platformId, host, el, renderer) {
        this.document = document;
        this.platformId = platformId;
        this.host = host;
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.setStyle(this.host.nativeElement, 'opacity', this.enterClass ? '0' : '');
        }
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.bindIntersectionObserver();
        }
    }
    get options() {
        return {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };
    }
    bindIntersectionObserver() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (this.isObserverActive) {
                if (entry.boundingClientRect.top > 0) {
                    entry.isIntersecting ? this.enter() : this.leave();
                }
            }
            else if (entry.isIntersecting) {
                this.enter();
            }
            this.isObserverActive = true;
        }, this.options);
        setTimeout(() => this.observer.observe(this.host.nativeElement), 0);
        // Reset
        this.resetObserver = new IntersectionObserver(([entry]) => {
            if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
                this.host.nativeElement.style.opacity = this.enterClass ? '0' : '';
                DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
                this.resetObserver.unobserve(this.host.nativeElement);
            }
            this.animationState = undefined;
        }, { ...this.options, threshold: 0 });
    }
    enter() {
        if (this.animationState !== 'enter' && this.enterClass) {
            this.host.nativeElement.style.opacity = '';
            DomHandler.removeMultipleClasses(this.host.nativeElement, this.leaveClass);
            DomHandler.addMultipleClasses(this.host.nativeElement, this.enterClass);
            this.once && this.unbindIntersectionObserver();
            this.bindAnimationEvents();
            this.animationState = 'enter';
        }
    }
    leave() {
        if (this.animationState !== 'leave' && this.leaveClass) {
            this.host.nativeElement.style.opacity = this.enterClass ? '0' : '';
            DomHandler.removeMultipleClasses(this.host.nativeElement, this.enterClass);
            DomHandler.addMultipleClasses(this.host.nativeElement, this.leaveClass);
            this.bindAnimationEvents();
            this.animationState = 'leave';
        }
    }
    bindAnimationEvents() {
        if (!this.animationEndListener) {
            this.animationEndListener = this.renderer.listen(this.host.nativeElement, 'animationend', () => {
                DomHandler.removeMultipleClasses(this.host.nativeElement, [this.enterClass, this.leaveClass]);
                !this.once && this.resetObserver.observe(this.host.nativeElement);
                this.unbindAnimationEvents();
            });
        }
    }
    unbindAnimationEvents() {
        if (this.animationEndListener) {
            this.animationEndListener();
            this.animationEndListener = null;
        }
    }
    unbindIntersectionObserver() {
        this.observer?.unobserve(this.host.nativeElement);
        this.resetObserver?.unobserve(this.host.nativeElement);
        this.isObserverActive = false;
    }
    ngOnDestroy() {
        this.unbindAnimationEvents();
        this.unbindIntersectionObserver();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScroll, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.1", type: AnimateOnScroll, selector: "[pAnimateOnScroll]", inputs: { enterClass: "enterClass", leaveClass: "leaveClass", root: "root", rootMargin: "rootMargin", threshold: ["threshold", "threshold", numberAttribute], once: ["once", "once", booleanAttribute] }, host: { properties: { "class.p-animateonscroll": "true" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScroll, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pAnimateOnScroll]',
                    host: {
                        '[class.p-animateonscroll]': 'true'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ElementRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { enterClass: [{
                type: Input
            }], leaveClass: [{
                type: Input
            }], root: [{
                type: Input
            }], rootMargin: [{
                type: Input
            }], threshold: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], once: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
class AnimateOnScrollModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScrollModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScrollModule, declarations: [AnimateOnScroll], imports: [CommonModule], exports: [AnimateOnScroll] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScrollModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateOnScrollModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [AnimateOnScroll],
                    declarations: [AnimateOnScroll]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AnimateOnScroll, AnimateOnScrollModule };
//# sourceMappingURL=primeng-animateonscroll.mjs.map
