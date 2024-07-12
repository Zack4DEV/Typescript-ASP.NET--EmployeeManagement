import { CommonModule } from '@angular/common';
import { Directive, HostListener, Input, NgModule, booleanAttribute } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
/**
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 * @group Components
 */
export class StyleClass {
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
export class StyleClassModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVjbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zdHlsZWNsYXNzL3N0eWxlY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWdDLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxVQUFVO0lBRVI7SUFDQTtJQUNDO0lBSFosWUFDVyxFQUFjLEVBQ2QsUUFBbUIsRUFDbEIsSUFBWTtRQUZiLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDckIsQ0FBQztJQUNKOzs7T0FHRztJQUNtQixRQUFRLENBQXFCO0lBQ25EOzs7O09BSUc7SUFDSCxJQUFhLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDRDs7O09BR0c7SUFDTSxjQUFjLENBQXFCO0lBQzVDOzs7T0FHRztJQUNNLGdCQUFnQixDQUFxQjtJQUM5Qzs7O09BR0c7SUFDTSxZQUFZLENBQXFCO0lBQzFDOzs7O09BSUc7SUFDSCxJQUFhLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FB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VSwrWUFxRUMsZ0JBQWdCLDhFQVVoQixnQkFBZ0I7OzJGQS9FM0IsVUFBVTtrQkFOdEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtpQkFDSjs0SEFXeUIsUUFBUTtzQkFBN0IsS0FBSzt1QkFBQyxhQUFhO2dCQU1QLFVBQVU7c0JBQXRCLEtBQUs7Z0JBV0csY0FBYztzQkFBdEIsS0FBSztnQkFLRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csWUFBWTtzQkFBcEIsS0FBSztnQkFNTyxVQUFVO3NCQUF0QixLQUFLO2dCQVdHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS2tDLGtCQUFrQjtzQkFBekQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLN0IsV0FBVztzQkFBbkIsS0FBSztnQkFLa0MsWUFBWTtzQkFBbkQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFxQnRDLGFBQWE7c0JBRFosWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBeUxyQyxNQUFNLE9BQU8sZ0JBQWdCO3VHQUFoQixnQkFBZ0I7d0dBQWhCLGdCQUFnQixpQkE1UmhCLFVBQVUsYUF3UlQsWUFBWSxhQXhSYixVQUFVO3dHQTRSVixnQkFBZ0IsWUFKZixZQUFZOzsyRkFJYixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3JCLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBOZ01vZHVsZSwgTmdab25lLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFZvaWRMaXN0ZW5lciB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG4vKipcbiAqIFN0eWxlQ2xhc3MgbWFuYWdlcyBjc3MgY2xhc3NlcyBkZWNsYXJhdGl2ZWx5IHRvIGR1cmluZyBlbnRlci9sZWF2ZSBhbmltYXRpb25zIG9yIGp1c3QgdG8gdG9nZ2xlIGNsYXNzZXMgb24gYW4gZWxlbWVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BTdHlsZUNsYXNzXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlQ2xhc3MgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICAgICkge31cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciB0byBkZWZpbmUgdGhlIHRhcmdldCBlbGVtZW50LiBBdmFpbGFibGUgc2VsZWN0b3JzIGFyZSAnQG5leHQnLCAnQHByZXYnLCAnQHBhcmVudCcgYW5kICdAZ3JhbmRwYXJlbnQnLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgncFN0eWxlQ2xhc3MnKSBzZWxlY3Rvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIHRvIGFkZCB3aGVuIGl0ZW0gYmVnaW5zIHRvIGdldCBkaXNwbGF5ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGVudGVyRnJvbUNsYXNzIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgZW50ZXJDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2VudGVyQ2xhc3MgPSB2YWx1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKCdlbnRlckNsYXNzIGlzIGRlcHJlY2F0ZWQsIHVzZSBlbnRlckZyb21DbGFzcyBpbnN0ZWFkJyk7XG4gICAgfVxuICAgIGdldCBlbnRlckNsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50ZXJDbGFzcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3MgdG8gYWRkIHdoZW4gaXRlbSBiZWdpbnMgdG8gZ2V0IGRpc3BsYXllZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbnRlckZyb21DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIHRvIGFkZCBkdXJpbmcgZW50ZXIgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVudGVyQWN0aXZlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyB0byBhZGQgd2hlbiBpdGVtIGJlZ2lucyB0byBnZXQgZGlzcGxheWVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVudGVyVG9DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIHRvIGFkZCB3aGVuIGl0ZW0gYmVnaW5zIHRvIGdldCBoaWRkZW4uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGxlYXZlRnJvbUNsYXNzIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgbGVhdmVDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlQ2xhc3MgPSB2YWx1ZTtcbiAgICAgICAgY29uc29sZS53YXJuKCdsZWF2ZUNsYXNzIGlzIGRlcHJlY2F0ZWQsIHVzZSBsZWF2ZUZyb21DbGFzcyBpbnN0ZWFkJyk7XG4gICAgfVxuICAgIGdldCBsZWF2ZUNsYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVhdmVDbGFzcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3MgdG8gYWRkIHdoZW4gaXRlbSBiZWdpbnMgdG8gZ2V0IGhpZGRlbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsZWF2ZUZyb21DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIHRvIGFkZCBkdXJpbmcgbGVhdmUgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxlYXZlQWN0aXZlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyB0byBhZGQgd2hlbiBsZWF2ZSBhbmltYXRpb24gaXMgY29tcGxldGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxlYXZlVG9DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gdHJpZ2dlciBsZWF2ZSBhbmltYXRpb24gd2hlbiBvdXRzaWRlIG9mIHRoZSBlbGVtZW50IGlzIGNsaWNrZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGhpZGVPbk91dHNpZGVDbGljazogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyB3aGVuIG5vIGVudGVyLWxlYXZlIGFuaW1hdGlvbiBpcyByZXF1aXJlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB0b2dnbGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gdHJpZ2dlciBsZWF2ZSBhbmltYXRpb24gd2hlbiBlc2NhcGUga2V5IHByZXNzZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGhpZGVPbkVzY2FwZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGV2ZW50TGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIGRvY3VtZW50Q2xpY2tMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgZW50ZXJMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgbGVhdmVMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgYW5pbWF0aW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgX2VudGVyQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIF9sZWF2ZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgY2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLnJlc29sdmVUYXJnZXQoKTtcblxuICAgICAgICBpZiAodGhpcy50b2dnbGVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgodGhpcy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFBhcmVudCA9PT0gbnVsbCkgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmxlYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmIChEb21IYW5kbGVyLmhhc0NsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLnRvZ2dsZUNsYXNzIGFzIHN0cmluZykpIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMudG9nZ2xlQ2xhc3MgYXMgc3RyaW5nKTtcbiAgICAgICAgZWxzZSBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLnRvZ2dsZUNsYXNzIGFzIHN0cmluZyk7XG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmVudGVyQWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRlckFjdGl2ZUNsYXNzID09PSAnc2xpZGVkb3duJykge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUubWF4SGVpZ2h0ID0gKHRoaXMudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMudGFyZ2V0LCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5lbnRlckFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRlckNsYXNzIHx8IHRoaXMuZW50ZXJGcm9tQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5lbnRlckNsYXNzIHx8IHRoaXMuZW50ZXJGcm9tQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMudGFyZ2V0LCAnYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmVudGVyQWN0aXZlQ2xhc3MgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW50ZXJUb0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmVudGVyVG9DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlckxpc3RlbmVyICYmIHRoaXMuZW50ZXJMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudGVyQWN0aXZlQ2xhc3MgPT09ICdzbGlkZWRvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbnRlckNsYXNzIHx8IHRoaXMuZW50ZXJGcm9tQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmVudGVyQ2xhc3MgfHwgdGhpcy5lbnRlckZyb21DbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVudGVyVG9DbGFzcykge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZW50ZXJUb0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGVPbk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oaWRlT25Fc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50S2V5ZG93bkxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGVhdmVBY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlYXZlQ2xhc3MgfHwgdGhpcy5sZWF2ZUZyb21DbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmxlYXZlQ2xhc3MgfHwgdGhpcy5sZWF2ZUZyb21DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5sZWF2ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy50YXJnZXQsICdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMubGVhdmVBY3RpdmVDbGFzcyBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWF2ZVRvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMubGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYXZlTGlzdGVuZXIgJiYgdGhpcy5sZWF2ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZWF2ZUNsYXNzIHx8IHRoaXMubGVhdmVGcm9tQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmxlYXZlQ2xhc3MgfHwgdGhpcy5sZWF2ZUZyb21DbGFzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxlYXZlVG9DbGFzcykge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMubGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGVPbk91dHNpZGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGVPbkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEtleWRvd25MaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzb2x2ZVRhcmdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJ0BuZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY2FzZSAnQHByZXYnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY2FzZSAnQHBhcmVudCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICBjYXNlICdAZ3JhbmRwYXJlbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzT3V0c2lkZUNsaWNrKGV2ZW50KSkgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRLZXlkb3duTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudEtleWRvd25MaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQsICdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5LCBrZXlDb2RlLCB3aGljaCwgdHlwZSB9ID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykgdGhpcy51bmJpbmREb2N1bWVudEtleWRvd25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUoKSAmJiBrZXkgPT09ICdFc2NhcGUnICYmIGtleUNvZGUgPT09IDI3ICYmIHdoaWNoID09PSAyNykgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBpc091dHNpZGVDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZWwubmF0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGV2ZW50LnRhcmdldCkgJiYgIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmICEodGhpcy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNvbnRhaW5zKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRLZXlkb3duTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50S2V5ZG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50S2V5ZG93bkxpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRLZXlkb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1N0eWxlQ2xhc3NdLFxuICAgIGRlY2xhcmF0aW9uczogW1N0eWxlQ2xhc3NdXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlQ2xhc3NNb2R1bGUge31cbiJdfQ==