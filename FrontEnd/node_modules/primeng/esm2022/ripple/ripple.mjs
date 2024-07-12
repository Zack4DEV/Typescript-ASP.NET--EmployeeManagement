import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, Inject, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
/**
 * Ripple directive adds ripple effect to the host element.
 * @group Components
 */
export class Ripple {
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
export class RippleModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3JpcHBsZS9yaXBwbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBaUIsU0FBUyxFQUFjLE1BQU0sRUFBRSxRQUFRLEVBQXFCLFFBQVEsRUFBRSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRXpDOzs7R0FHRztBQVFILE1BQU0sT0FBTyxNQUFNO0lBRWU7SUFDRztJQUNyQjtJQUNEO0lBQ0E7SUFDWTtJQU52QixZQUM4QixRQUFrQixFQUNmLFVBQWUsRUFDcEMsUUFBbUIsRUFDcEIsRUFBYyxFQUNkLElBQVksRUFDQSxNQUFxQjtRQUxkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDQSxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQ3pDLENBQUM7SUFFSixpQkFBaUIsQ0FBZTtJQUVoQyxpQkFBaUIsQ0FBZTtJQUVoQyxPQUFPLENBQU07SUFFYixlQUFlO1FBQ1gsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFB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WixNQUFNLGFBQU4sTUFBTTt3R0FtSE4sWUFBWTs7MkZBQVosWUFBWTtrQkFKeEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ2pCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIE5nTW9kdWxlLCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaW1lTkdDb25maWcgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHsgVm9pZExpc3RlbmVyIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbi8qKlxuICogUmlwcGxlIGRpcmVjdGl2ZSBhZGRzIHJpcHBsZSBlZmZlY3QgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BSaXBwbGVdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLXJpcHBsZSBwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxuICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgKSB7fVxuXG4gICAgYW5pbWF0aW9uTGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIG1vdXNlRG93bkxpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICB0aW1lb3V0OiBhbnk7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBsZXQgaW5rID0gdGhpcy5nZXRJbmsoKTtcbiAgICAgICAgaWYgKCFpbmsgfHwgdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldz8uZ2V0Q29tcHV0ZWRTdHlsZShpbmssIG51bGwpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhpbmssICdwLWluay1hY3RpdmUnKTtcbiAgICAgICAgaWYgKCFEb21IYW5kbGVyLmdldEhlaWdodChpbmspICYmICFEb21IYW5kbGVyLmdldFdpZHRoKGluaykpIHtcbiAgICAgICAgICAgIGxldCBkID0gTWF0aC5tYXgoRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudCksIERvbUhhbmRsZXIuZ2V0T3V0ZXJIZWlnaHQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBpbmsuc3R5bGUuaGVpZ2h0ID0gZCArICdweCc7XG4gICAgICAgICAgICBpbmsuc3R5bGUud2lkdGggPSBkICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBsZXQgeCA9IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQgKyB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gRG9tSGFuZGxlci5nZXRXaWR0aChpbmspIC8gMjtcbiAgICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIG9mZnNldC50b3AgKyB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCAtIERvbUhhbmRsZXIuZ2V0SGVpZ2h0KGluaykgLyAyO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5rLCAndG9wJywgeSArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGluaywgJ2xlZnQnLCB4ICsgJ3B4Jyk7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoaW5rLCAncC1pbmstYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5rID0gdGhpcy5nZXRJbmsoKTtcbiAgICAgICAgICAgIGlmIChpbmspIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGluaywgJ3AtaW5rLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA0MDEpO1xuICAgIH1cblxuICAgIGdldEluaygpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW5baV0uY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJiBjaGlsZHJlbltpXS5jbGFzc05hbWUuaW5kZXhPZigncC1pbmsnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRJbmsoKSB7XG4gICAgICAgIGxldCBpbmsgPSB0aGlzLmdldEluaygpO1xuICAgICAgICBpZiAoaW5rKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGluaywgJ3AtaW5rLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BbmltYXRpb25FbmQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZXZlbnQuY3VycmVudFRhcmdldCwgJ3AtaW5rLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IGluayA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGluaywgJ3AtaW5rJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBpbmspO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbmssICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGluaywgJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oaW5rLCAnYW5pbWF0aW9uZW5kJywgdGhpcy5vbkFuaW1hdGlvbkVuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGV0IGluayA9IHRoaXMuZ2V0SW5rKCk7XG4gICAgICAgIGlmIChpbmspIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIgJiYgdGhpcy5tb3VzZURvd25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lciAmJiB0aGlzLmFuaW1hdGlvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUVsZW1lbnQoaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucmlwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtSaXBwbGVdLFxuICAgIGV4cG9ydHM6IFtSaXBwbGVdXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZU1vZHVsZSB7fVxuIl19