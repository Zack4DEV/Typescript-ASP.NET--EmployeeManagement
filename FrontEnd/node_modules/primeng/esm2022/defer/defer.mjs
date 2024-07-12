import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ContentChild, Directive, EventEmitter, Inject, NgModule, Output, PLATFORM_ID, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Defer postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
 * @group Components
 */
export class DeferredLoader {
    document;
    platformId;
    el;
    renderer;
    viewContainer;
    cd;
    /**
     * Callback to invoke when deferred content is loaded.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onLoad = new EventEmitter();
    template;
    documentScrollListener;
    view;
    window;
    constructor(document, platformId, el, renderer, viewContainer, cd) {
        this.document = document;
        this.platformId = platformId;
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.window = this.document.defaultView;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.shouldLoad()) {
                this.load();
            }
            if (!this.isLoaded()) {
                this.documentScrollListener = this.renderer.listen(this.window, 'scroll', () => {
                    if (this.shouldLoad()) {
                        this.load();
                        this.documentScrollListener && this.documentScrollListener();
                        this.documentScrollListener = null;
                    }
                });
            }
        }
    }
    shouldLoad() {
        if (this.isLoaded()) {
            return false;
        }
        else {
            let rect = this.el.nativeElement.getBoundingClientRect();
            let docElement = this.document.documentElement;
            let winHeight = docElement.clientHeight;
            return winHeight >= rect.top;
        }
    }
    load() {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
        this.cd.detectChanges();
    }
    isLoaded() {
        return this.view != null && isPlatformBrowser(this.platformId);
    }
    ngOnDestroy() {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DeferredLoader, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: DeferredLoader, selector: "[pDefer]", outputs: { onLoad: "onLoad" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DeferredLoader, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pDefer]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }], propDecorators: { onLoad: [{
                type: Output
            }], template: [{
                type: ContentChild,
                args: [TemplateRef]
            }] } });
export class DeferModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DeferModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: DeferModule, declarations: [DeferredLoader], imports: [CommonModule], exports: [DeferredLoader] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DeferModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DeferModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [DeferredLoader],
                    declarations: [DeferredLoader]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZGVmZXIvZGVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQW9DLFlBQVksRUFBRSxTQUFTLEVBQStCLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFhLE1BQU0sRUFBRSxXQUFXLEVBQWEsV0FBVyxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7QUFFak87OztHQUdHO0FBT0gsTUFBTSxPQUFPLGNBQWM7SUFpQk87SUFDRztJQUN0QjtJQUNBO0lBQ0E7SUFDQztJQXJCWjs7OztPQUlHO0lBQ08sTUFBTSxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO0lBRXZDLFFBQVEsQ0FBK0I7SUFFbEUsc0JBQXNCLENBQXFCO0lBRTNDLElBQUksQ0FBaUM7SUFFckMsTUFBTSxDQUFTO0lBRWYsWUFDOEIsUUFBa0IsRUFDZixVQUFlLEVBQ3JDLEVBQWMsRUFDZCxRQUFtQixFQUNuQixhQUErQixFQUM5QixFQUFxQjtRQUxILGFBQVEsR0FBUixRQUFRLENBQVU7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3JDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUU3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBcUIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7b0JBQzNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDWixJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNsQixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDekQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDL0MsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUV4QyxPQUFPLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBNEIsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQzt1R0F6RVEsY0FBYyxrQkFpQlgsUUFBUSxhQUNSLFdBQVc7MkZBbEJkLGNBQWMsNEpBUVQsV0FBVzs7MkZBUmhCLGNBQWM7a0JBTjFCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLElBQUksRUFBRTt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7aUJBQ0o7OzBCQWtCUSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsV0FBVzt5SkFaYixNQUFNO3NCQUFmLE1BQU07Z0JBRW9CLFFBQVE7c0JBQWxDLFlBQVk7dUJBQUMsV0FBVzs7QUF5RTdCLE1BQU0sT0FBTyxXQUFXO3VHQUFYLFdBQVc7d0dBQVgsV0FBVyxpQkFqRlgsY0FBYyxhQTZFYixZQUFZLGFBN0ViLGNBQWM7d0dBaUZkLFdBQVcsWUFKVixZQUFZOzsyRkFJYixXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBOZ01vZHVsZSwgT25EZXN0cm95LCBPdXRwdXQsIFBMQVRGT1JNX0lELCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG4vKipcbiAqIERlZmVyIHBvc3Rwb25lcyB0aGUgbG9hZGluZyB0aGUgY29udGVudCB0aGF0IGlzIGluaXRpYWxseSBub3QgaW4gdGhlIHZpZXdwb3J0IHVudGlsIGl0IGJlY29tZXMgdmlzaWJsZSBvbiBzY3JvbGwuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRGVmZXJdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRGVmZXJyZWRMb2FkZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGRlZmVycmVkIGNvbnRlbnQgaXMgbG9hZGVkLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Mb2FkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAgIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcjogTnVsbGFibGU8RnVuY3Rpb24+O1xuXG4gICAgdmlldzogTnVsbGFibGU8RW1iZWRkZWRWaWV3UmVmPGFueT4+O1xuXG4gICAgd2luZG93OiBXaW5kb3c7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3IGFzIFdpbmRvdztcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRMb2FkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50U2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLndpbmRvdywgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkTG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lciAmJiB0aGlzLmRvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZExvYWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGRvY0VsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCB3aW5IZWlnaHQgPSBkb2NFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgcmV0dXJuIHdpbkhlaWdodCA+PSByZWN0LnRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSBhcyBUZW1wbGF0ZVJlZjxhbnk+KTtcbiAgICAgICAgdGhpcy5vbkxvYWQuZW1pdCgpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBpc0xvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldyAhPSBudWxsICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RlZmVycmVkTG9hZGVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEZWZlcnJlZExvYWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgRGVmZXJNb2R1bGUge31cbiJdfQ==