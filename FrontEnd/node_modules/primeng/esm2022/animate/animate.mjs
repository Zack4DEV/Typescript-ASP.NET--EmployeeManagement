import { CommonModule } from '@angular/common';
import { Directive, Input, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
/**
 * Animate manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load.
 * @group Components
 */
export class Animate {
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
    observer;
    timeout;
    constructor(host, el, renderer) {
        this.host = host;
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        console.log('pAnimate directive is deprecated in 16.7.0 and will be removed in the future. Use pAnimateOnScroll directive instead');
    }
    ngAfterViewInit() {
        this.bindIntersectionObserver();
    }
    bindIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };
        this.observer = new IntersectionObserver((el) => this.isVisible(el), options);
        this.observer.observe(this.host.nativeElement);
    }
    isVisible(element) {
        const [intersectionObserverEntry] = element;
        intersectionObserverEntry.isIntersecting ? this.enter() : this.leave();
    }
    enter() {
        this.host.nativeElement.style.visibility = 'visible';
        DomHandler.addClass(this.host.nativeElement, this.enterClass);
    }
    leave() {
        DomHandler.removeClass(this.host.nativeElement, this.enterClass);
        if (this.leaveClass) {
            DomHandler.addClass(this.host.nativeElement, this.leaveClass);
        }
        const animationDuration = this.host.nativeElement.style.animationDuration || 500;
        this.timeout = setTimeout(() => {
            this.host.nativeElement.style.visibility = 'hidden';
        }, animationDuration);
    }
    unbindIntersectionObserver() {
        if (this.observer) {
            this.observer.unobserve(this.host.nativeElement);
        }
    }
    ngOnDestroy() {
        this.unbindIntersectionObserver();
        clearTimeout(this.timeout);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Animate, deps: [{ token: i0.ElementRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: Animate, selector: "[pAnimate]", inputs: { enterClass: "enterClass", leaveClass: "leaveClass" }, host: { properties: { "class.p-animate": "true" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Animate, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pAnimate]',
                    host: {
                        '[class.p-animate]': 'true'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { enterClass: [{
                type: Input
            }], leaveClass: [{
                type: Input
            }] } });
export class AnimateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: AnimateModule, declarations: [Animate], imports: [CommonModule], exports: [Animate] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AnimateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Animate],
                    declarations: [Animate]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hbmltYXRlL2FuaW1hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBRSxRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBQ3pDOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxPQUFPO0lBaUJKO0lBQ0Q7SUFDQTtJQWxCWDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFFeEMsUUFBUSxDQUFtQztJQUUzQyxPQUFPLENBQU07SUFFYixZQUNZLElBQWdCLEVBQ2pCLEVBQWMsRUFDZCxRQUFtQjtRQUZsQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzNCLENBQUM7SUFFSixRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzSEFBc0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUF3QjtRQUNwQixNQUFNLE9BQU8sR0FBRztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEdBQUc7U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxTQUFTLENBQUMsT0FBb0M7UUFDMUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzVDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNyRCxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELEtBQUs7UUFDRCxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFvQixDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUVELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQztRQUVqRixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDeEQsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDBCQUEwQjtRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzt1R0F6RVEsT0FBTzsyRkFBUCxPQUFPOzsyRkFBUCxPQUFPO2tCQU5uQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0YsbUJBQW1CLEVBQUUsTUFBTTtxQkFDOUI7aUJBQ0o7Z0lBTVksVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLOztBQXVFVixNQUFNLE9BQU8sYUFBYTt1R0FBYixhQUFhO3dHQUFiLGFBQWEsaUJBakZiLE9BQU8sYUE2RU4sWUFBWSxhQTdFYixPQUFPO3dHQWlGUCxhQUFhLFlBSlosWUFBWTs7MkZBSWIsYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG4vKipcbiAqIEFuaW1hdGUgbWFuYWdlcyBQcmltZUZsZXggQ1NTIGNsYXNzZXMgZGVjbGFyYXRpdmVseSB0byBkdXJpbmcgZW50ZXIvbGVhdmUgYW5pbWF0aW9ucyBvbiBzY3JvbGwgb3Igb24gcGFnZSBsb2FkLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcEFuaW1hdGVdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1hbmltYXRlXSc6ICd0cnVlJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgdG8gZGVmaW5lIHRoZSBDU1MgY2xhc3MgZm9yIGVudGVyIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbnRlckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgdG8gZGVmaW5lIHRoZSBDU1MgY2xhc3MgZm9yIGxlYXZlIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsZWF2ZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbiAgICB0aW1lb3V0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwQW5pbWF0ZSBkaXJlY3RpdmUgaXMgZGVwcmVjYXRlZCBpbiAxNi43LjAgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiBVc2UgcEFuaW1hdGVPblNjcm9sbCBkaXJlY3RpdmUgaW5zdGVhZCcpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG5cbiAgICBiaW5kSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDEuMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVsKSA9PiB0aGlzLmlzVmlzaWJsZShlbCksIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlzVmlzaWJsZShlbGVtZW50OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pIHtcbiAgICAgICAgY29uc3QgW2ludGVyc2VjdGlvbk9ic2VydmVyRW50cnldID0gZWxlbWVudDtcbiAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5pc0ludGVyc2VjdGluZyA/IHRoaXMuZW50ZXIoKSA6IHRoaXMubGVhdmUoKTtcbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5lbnRlckNsYXNzIGFzIHN0cmluZyk7XG4gICAgfVxuXG4gICAgbGVhdmUoKSB7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZW50ZXJDbGFzcyBhcyBzdHJpbmcpO1xuICAgICAgICBpZiAodGhpcy5sZWF2ZUNsYXNzKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCB0aGlzLmxlYXZlQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0sIGFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICB1bmJpbmRJbnRlcnNlY3Rpb25PYnNlcnZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZEludGVyc2VjdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQW5pbWF0ZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQW5pbWF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0ZU1vZHVsZSB7fVxuIl19