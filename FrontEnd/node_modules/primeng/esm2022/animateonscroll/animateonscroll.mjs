import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, Input, NgModule, Inject, PLATFORM_ID, booleanAttribute, numberAttribute } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
/**
 * AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling.
 * @group Components
 */
export class AnimateOnScroll {
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
export class AnimateOnScrollModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZW9uc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FuaW1hdGVvbnNjcm9sbC9hbmltYXRlb25zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQUUsUUFBUSxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVF6Qzs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sZUFBZTtJQTJDTTtJQUNHO0lBQ3JCO0lBQ0Q7SUFDQTtJQTlDWDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ00sSUFBSSxDQUFpQztJQUM5Qzs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNvQyxTQUFTLENBQXFCO0lBQ3JFOzs7T0FHRztJQUNxQyxJQUFJLEdBQVksSUFBSSxDQUFDO0lBRTdELFFBQVEsQ0FBbUM7SUFFM0MsYUFBYSxDQUFNO0lBRW5CLGdCQUFnQixHQUFZLEtBQUssQ0FBQztJQUVsQyxjQUFjLENBQU07SUFFcEIsb0JBQW9CLENBQTJCO0lBRS9DLFlBQzhCLFFBQWtCLEVBQ2YsVUFBZSxFQUNwQyxJQUFnQixFQUNqQixFQUFjLEVBQ2QsUUFBbUI7UUFKQSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lB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QkFDdEM7aUJBQ0o7OzBCQTRDUSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsV0FBVzttSEF2Q2QsVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtpQyxTQUFTO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFLRyxJQUFJO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFOztBQWtJMUMsTUFBTSxPQUFPLHFCQUFxQjt1R0FBckIscUJBQXFCO3dHQUFyQixxQkFBcUIsaUJBaEtyQixlQUFlLGFBNEpkLFlBQVksYUE1SmIsZUFBZTt3R0FnS2YscUJBQXFCLFlBSnBCLFlBQVk7OzJGQUliLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5qZWN0LCBQTEFURk9STV9JRCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuXG5pbnRlcmZhY2UgQW5pbWF0ZU9uU2Nyb2xsT3B0aW9ucyB7XG4gICAgcm9vdD86IEhUTUxFbGVtZW50O1xuICAgIHJvb3RNYXJnaW4/OiBzdHJpbmc7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuaW1hdGVPblNjcm9sbCBpcyB1c2VkIHRvIGFwcGx5IGFuaW1hdGlvbnMgdG8gZWxlbWVudHMgd2hlbiBlbnRlcmluZyBvciBsZWF2aW5nIHRoZSB2aWV3cG9ydCBkdXJpbmcgc2Nyb2xsaW5nLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcEFuaW1hdGVPblNjcm9sbF0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLWFuaW1hdGVvbnNjcm9sbF0nOiAndHJ1ZSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFuaW1hdGVPblNjcm9sbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgdG8gZGVmaW5lIHRoZSBDU1MgY2xhc3MgZm9yIGVudGVyIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbnRlckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgdG8gZGVmaW5lIHRoZSBDU1MgY2xhc3MgZm9yIGxlYXZlIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsZWF2ZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSByb290IG9wdGlvbiBvZiB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgQVBJLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHJvb3Q6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJvb3RNYXJnaW4gb3B0aW9uIG9mIHRoZSBJbnRlcnNlY3Rpb25PYnNlcnZlciBBUEkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcm9vdE1hcmdpbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgdGhyZXNob2xkIG9wdGlvbiBvZiB0aGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgQVBJXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdGhyZXNob2xkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGluaXRpYWwgcnVuLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBvbmNlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZDtcblxuICAgIHJlc2V0T2JzZXJ2ZXI6IGFueTtcblxuICAgIGlzT2JzZXJ2ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFuaW1hdGlvblN0YXRlOiBhbnk7XG5cbiAgICBhbmltYXRpb25FbmRMaXN0ZW5lcjogVm9pZEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsIHRoaXMuZW50ZXJDbGFzcyA/ICcwJyA6ICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZEludGVyc2VjdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgb3B0aW9ucygpOiBBbmltYXRlT25TY3JvbGxPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvb3Q6IHRoaXMucm9vdCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46IHRoaXMucm9vdE1hcmdpbixcbiAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBiaW5kSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JzZXJ2ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuaXNJbnRlcnNlY3RpbmcgPyB0aGlzLmVudGVyKCkgOiB0aGlzLmxlYXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc09ic2VydmVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCksIDApO1xuXG4gICAgICAgIC8vIFJlc2V0XG5cbiAgICAgICAgdGhpcy5yZXNldE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IDAgJiYgIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0aGlzLmVudGVyQ2xhc3MgPyAnMCcgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVNdWx0aXBsZUNsYXNzZXModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIFt0aGlzLmVudGVyQ2xhc3MsIHRoaXMubGVhdmVDbGFzc10pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRPYnNlcnZlci51bm9ic2VydmUodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAuLi50aGlzLm9wdGlvbnMsIHRocmVzaG9sZDogMCB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblN0YXRlICE9PSAnZW50ZXInICYmIHRoaXMuZW50ZXJDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVNdWx0aXBsZUNsYXNzZXModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMubGVhdmVDbGFzcyk7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZE11bHRpcGxlQ2xhc3Nlcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5lbnRlckNsYXNzKTtcblxuICAgICAgICAgICAgdGhpcy5vbmNlICYmIHRoaXMudW5iaW5kSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2VudGVyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxlYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TdGF0ZSAhPT0gJ2xlYXZlJyAmJiB0aGlzLmxlYXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0aGlzLmVudGVyQ2xhc3MgPyAnMCcgOiAnJztcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlTXVsdGlwbGVDbGFzc2VzKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCB0aGlzLmVudGVyQ2xhc3MpO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRNdWx0aXBsZUNsYXNzZXModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMubGVhdmVDbGFzcyk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEFuaW1hdGlvbkV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdsZWF2ZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kQW5pbWF0aW9uRXZlbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYW5pbWF0aW9uRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZU11bHRpcGxlQ2xhc3Nlcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgW3RoaXMuZW50ZXJDbGFzcywgdGhpcy5sZWF2ZUNsYXNzXSk7XG4gICAgICAgICAgICAgICAgIXRoaXMub25jZSAmJiB0aGlzLnJlc2V0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRBbmltYXRpb25FdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kQW5pbWF0aW9uRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25FbmRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmRMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRJbnRlcnNlY3Rpb25PYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcj8udW5vYnNlcnZlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZXNldE9ic2VydmVyPy51bm9ic2VydmUodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlzT2JzZXJ2ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRBbmltYXRpb25FdmVudHMoKTtcbiAgICAgICAgdGhpcy51bmJpbmRJbnRlcnNlY3Rpb25PYnNlcnZlcigpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQW5pbWF0ZU9uU2Nyb2xsXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBbmltYXRlT25TY3JvbGxdXG59KVxuZXhwb3J0IGNsYXNzIEFuaW1hdGVPblNjcm9sbE1vZHVsZSB7fVxuIl19