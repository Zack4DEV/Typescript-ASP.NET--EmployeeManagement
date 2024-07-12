import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { booleanAttribute, Directive, Input, HostListener, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';

/**
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 * @group Components
 */
class StyleClass {
    el;
    renderer;
    zone;
    constructor(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
    }
    /**
     * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
     * @group Props
     */
    selector;
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     * @deprecated Use enterFromClass instead
     */
    set enterClass(value) {
        this._enterClass = value;
        console.warn('enterClass is deprecated, use enterFromClass instead');
    }
    get enterClass() {
        return this._enterClass;
    }
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     */
    enterFromClass;
    /**
     * Style class to add during enter animation.
     * @group Props
     */
    enterActiveClass;
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     */
    enterToClass;
    /**
     * Style class to add when item begins to get hidden.
     * @group Props
     * @deprecated Use leaveFromClass instead
     */
    set leaveClass(value) {
        this._leaveClass = value;
        console.warn('leaveClass is deprecated, use leaveFromClass instead');
    }
    get leaveClass() {
        return this._leaveClass;
    }
    /**
     * Style class to add when item begins to get hidden.
     * @group Props
     */
    leaveFromClass;
    /**
     * Style class to add during leave animation.
     * @group Props
     */
    leaveActiveClass;
    /**
     * Style class to add when leave animation is completed.
     * @group Props
     */
    leaveToClass;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @group Props
     */
    hideOnOutsideClick;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     * @group Props
     */
    toggleClass;
    /**
     * Whether to trigger leave animation when escape key pressed.
     * @group Props
     */
    hideOnEscape;
    eventListener;
    documentClickListener;
    documentKeydownListener;
    target;
    enterListener;
    leaveListener;
    animating;
    _enterClass;
    _leaveClass;
    clickListener() {
        this.target = this.resolveTarget();
        if (this.toggleClass) {
            this.toggle();
        }
        else {
            if (this.target.offsetParent === null)
                this.enter();
            else
                this.leave();
        }
    }
    toggle() {
        if (DomHandler.hasClass(this.target, this.toggleClass))
            DomHandler.removeClass(this.target, this.toggleClass);
        else
            DomHandler.addClass(this.target, this.toggleClass);
    }
    enter() {
        if (this.enterActiveClass) {
            if (!this.animating) {
                this.animating = true;
                if (this.enterActiveClass === 'slidedown') {
                    this.target.style.height = '0px';
                    DomHandler.removeClass(this.target, 'hidden');
                    this.target.style.maxHeight = this.target.scrollHeight + 'px';
                    DomHandler.addClass(this.target, 'hidden');
                    this.target.style.height = '';
                }
                DomHandler.addClass(this.target, this.enterActiveClass);
                if (this.enterClass || this.enterFromClass) {
                    DomHandler.removeClass(this.target, this.enterClass || this.enterFromClass);
                }
                this.enterListener = this.renderer.listen(this.target, 'animationend', () => {
                    DomHandler.removeClass(this.target, this.enterActiveClass);
                    if (this.enterToClass) {
                        DomHandler.addClass(this.target, this.enterToClass);
                    }
                    this.enterListener && this.enterListener();
                    if (this.enterActiveClass === 'slidedown') {
                        this.target.style.maxHeight = '';
                    }
                    this.animating = false;
                });
            }
        }
        else {
            if (this.enterClass || this.enterFromClass) {
                DomHandler.removeClass(this.target, this.enterClass || this.enterFromClass);
            }
            if (this.enterToClass) {
                DomHandler.addClass(this.target, this.enterToClass);
            }
        }
        if (this.hideOnOutsideClick) {
            this.bindDocumentClickListener();
        }
        if (this.hideOnEscape) {
            this.bindDocumentKeydownListener();
        }
    }
    leave() {
        if (this.leaveActiveClass) {
            if (!this.animating) {
                this.animating = true;
                DomHandler.addClass(this.target, this.leaveActiveClass);
                if (this.leaveClass || this.leaveFromClass) {
                    DomHandler.removeClass(this.target, this.leaveClass || this.leaveFromClass);
                }
                this.leaveListener = this.renderer.listen(this.target, 'animationend', () => {
                    DomHandler.removeClass(this.target, this.leaveActiveClass);
                    if (this.leaveToClass) {
                        DomHandler.addClass(this.target, this.leaveToClass);
                    }
                    this.leaveListener && this.leaveListener();
                    this.animating = false;
                });
            }
        }
        else {
            if (this.leaveClass || this.leaveFromClass) {
                DomHandler.removeClass(this.target, this.leaveClass || this.leaveFromClass);
            }
            if (this.leaveToClass) {
                DomHandler.addClass(this.target, this.leaveToClass);
            }
        }
        if (this.hideOnOutsideClick) {
            this.unbindDocumentClickListener();
        }
        if (this.hideOnEscape) {
            this.unbindDocumentKeydownListener();
        }
    }
    resolveTarget() {
        if (this.target) {
            return this.target;
        }
        switch (this.selector) {
            case '@next':
                return this.el.nativeElement.nextElementSibling;
            case '@prev':
                return this.el.nativeElement.previousElementSibling;
            case '@parent':
                return this.el.nativeElement.parentElement;
            case '@grandparent':
                return this.el.nativeElement.parentElement.parentElement;
            default:
                return document.querySelector(this.selector);
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, 'click', (event) => {
                if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue('position') === 'static')
                    this.unbindDocumentClickListener();
                else if (this.isOutsideClick(event))
                    this.leave();
            });
        }
    }
    bindDocumentKeydownListener() {
        if (!this.documentKeydownListener) {
            this.zone.runOutsideAngular(() => {
                this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, 'keydown', (event) => {
                    const { key, keyCode, which, type } = event;
                    if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue('position') === 'static')
                        this.unbindDocumentKeydownListener();
                    if (this.isVisible() && key === 'Escape' && keyCode === 27 && which === 27)
                        this.leave();
                });
            });
        }
    }
    isVisible() {
        return this.target.offsetParent !== null;
    }
    isOutsideClick(event) {
        return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    unbindDocumentKeydownListener() {
        if (this.documentKeydownListener) {
            this.documentKeydownListener();
            this.documentKeydownListener = null;
        }
    }
    ngOnDestroy() {
        this.target = null;
        if (this.eventListener) {
            this.eventListener();
        }
        this.unbindDocumentClickListener();
        this.unbindDocumentKeydownListener();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StyleClass, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.1", type: StyleClass, selector: "[pStyleClass]", inputs: { selector: ["pStyleClass", "selector"], enterClass: "enterClass", enterFromClass: "enterFromClass", enterActiveClass: "enterActiveClass", enterToClass: "enterToClass", leaveClass: "leaveClass", leaveFromClass: "leaveFromClass", leaveActiveClass: "leaveActiveClass", leaveToClass: "leaveToClass", hideOnOutsideClick: ["hideOnOutsideClick", "hideOnOutsideClick", booleanAttribute], toggleClass: "toggleClass", hideOnEscape: ["hideOnEscape", "hideOnEscape", booleanAttribute] }, host: { listeners: { "click": "clickListener($event)" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StyleClass, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pStyleClass]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }], propDecorators: { selector: [{
                type: Input,
                args: ['pStyleClass']
            }], enterClass: [{
                type: Input
            }], enterFromClass: [{
                type: Input
            }], enterActiveClass: [{
                type: Input
            }], enterToClass: [{
                type: Input
            }], leaveClass: [{
                type: Input
            }], leaveFromClass: [{
                type: Input
            }], leaveActiveClass: [{
                type: Input
            }], leaveToClass: [{
                type: Input
            }], hideOnOutsideClick: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], toggleClass: [{
                type: Input
            }], hideOnEscape: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], clickListener: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
class StyleClassModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StyleClassModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: StyleClassModule, declarations: [StyleClass], imports: [CommonModule], exports: [StyleClass] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StyleClassModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StyleClassModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [StyleClass],
                    declarations: [StyleClass]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { StyleClass, StyleClassModule };
//# sourceMappingURL=primeng-styleclass.mjs.map
