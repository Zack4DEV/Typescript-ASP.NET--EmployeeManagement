import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, NgModule, Output, ViewChild, ViewEncapsulation, booleanAttribute, numberAttribute } from '@angular/core';
import { Footer, Header, PrimeTemplate, SharedModule } from 'primeng/api';
import { ScrollerModule } from 'primeng/scroller';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/scroller";
/**
 * VirtualScroller is a performant approach to handle huge data efficiently.
 * @group Components
 */
export class VirtualScroller {
    el;
    cd;
    /**
     * An array of objects to display.
     * @group Props
     */
    value;
    /**
     * Height of an item in the list.
     * @group Props
     */
    itemSize;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Max height of the content area in inline mode.
     * @group Props
     */
    scrollHeight;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    options;
    /**
     * Threshold in milliseconds to delay lazy loading during scrolling.
     * @group Props
     */
    delay = 250;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyLoadEvent} event - custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    header;
    footer;
    templates;
    scroller;
    itemTemplate;
    headerTemplate;
    footerTemplate;
    loadingItemTemplate;
    virtualScrollTimeout;
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'loadingItem':
                    this.loadingItemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    onLazyItemLoad(event) {
        if (this.virtualScrollTimeout) {
            clearTimeout(this.virtualScrollTimeout);
        }
        this.virtualScrollTimeout = setTimeout(() => {
            this.onLazyLoad.emit({
                ...event,
                rows: event.last - event.first,
                forceUpdate: () => this.cd.detectChanges()
            });
        }, this.delay);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    scrollToIndex(index, mode) {
        this.scroller?.scrollToIndex(index, mode);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: VirtualScroller, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: VirtualScroller, selector: "p-virtualScroller", inputs: { value: "value", itemSize: ["itemSize", "itemSize", numberAttribute], style: "style", styleClass: "styleClass", scrollHeight: "scrollHeight", lazy: ["lazy", "lazy", booleanAttribute], options: "options", delay: ["delay", "delay", numberAttribute] }, outputs: { onLazyLoad: "onLazyLoad" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "header", first: true, predicate: Header, descendants: true }, { propertyName: "footer", first: true, predicate: Footer, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }], ngImport: i0, template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'virtualscroller'" [attr.data-pc-section]="'root'">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content" [attr.data-pc-section]="'content'">
                <p-scroller #scroller [items]="value" styleClass="p-virtualscroller-list" [style]="{ height: scrollHeight }" [itemSize]="itemSize" [lazy]="lazy" (onLazyLoad)="onLazyItemLoad($event)" [options]="options">
                    <ng-template pTemplate="item" let-item let-scrollerOptions="options">
                        <div [ngStyle]="{ height: itemSize + 'px' }" class="p-virtualscroller-item">
                            <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: { $implicit: item, options: scrollerOptions }"></ng-container>
                        </div>
                    </ng-template>
                </p-scroller>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate" [attr.data-pc-section]="'footer'">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i3.Scroller, selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: VirtualScroller, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-virtualScroller',
                    template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'virtualscroller'" [attr.data-pc-section]="'root'">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content" [attr.data-pc-section]="'content'">
                <p-scroller #scroller [items]="value" styleClass="p-virtualscroller-list" [style]="{ height: scrollHeight }" [itemSize]="itemSize" [lazy]="lazy" (onLazyLoad)="onLazyItemLoad($event)" [options]="options">
                    <ng-template pTemplate="item" let-item let-scrollerOptions="options">
                        <div [ngStyle]="{ height: itemSize + 'px' }" class="p-virtualscroller-item">
                            <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: { $implicit: item, options: scrollerOptions }"></ng-container>
                        </div>
                    </ng-template>
                </p-scroller>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate" [attr.data-pc-section]="'footer'">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { value: [{
                type: Input
            }], itemSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], lazy: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], options: [{
                type: Input
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], onLazyLoad: [{
                type: Output
            }], header: [{
                type: ContentChild,
                args: [Header]
            }], footer: [{
                type: ContentChild,
                args: [Footer]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }] } });
export class VirtualScrollerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: VirtualScrollerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: VirtualScrollerModule, declarations: [VirtualScroller], imports: [CommonModule, SharedModule, ScrollerModule], exports: [VirtualScroller, SharedModule, ScrollerModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: VirtualScrollerModule, imports: [CommonModule, SharedModule, ScrollerModule, SharedModule, ScrollerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: VirtualScrollerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule, ScrollerModule],
                    exports: [VirtualScroller, SharedModule, ScrollerModule],
                    declarations: [VirtualScroller]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbHNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3ZpcnR1YWxzY3JvbGxlci92aXJ0dWFsc2Nyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFSCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFtQixZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEcsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUc1RDs7O0dBR0c7QUE4QkgsTUFBTSxPQUFPLGVBQWU7SUFtRWI7SUFDQTtJQW5FWDs7O09BR0c7SUFDTSxLQUFLLENBQW9CO0lBQ2xDOzs7T0FHRztJQUNvQyxRQUFRLENBQXFCO0lBQ3BFOzs7T0FHRztJQUNNLEtBQUssQ0FBOEM7SUFDNUQ7OztPQUdHO0lBQ00sVUFBVSxDQUFxQjtJQUN4Qzs7O09BR0c7SUFDTSxZQUFZLENBQU07SUFDM0I7OztPQUdHO0lBQ3FDLElBQUksQ0FBc0I7SUFDbEU7OztPQUdHO0lBQ00sT0FBTyxDQUE4QjtJQUM5Qzs7O09BR0c7SUFDb0MsS0FBSyxHQUFXLEdBQUcsQ0FBQztJQUMzRDs7OztPQUlHO0lBQ08sVUFBVSxHQUErQyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztJQUU5RixNQUFNLENBQXFCO0lBRTNCLE1BQU0sQ0FBcUI7SUFFakIsU0FBUyxDQUFxQztJQUV2RCxRQUFRLENBQXFCO0lBRXBELFlBQVksQ0FB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QUFFO2dCQUs3QixPQUFPO3NCQUFmLEtBQUs7Z0JBS2lDLEtBQUs7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQU0zQixVQUFVO3NCQUFuQixNQUFNO2dCQUVlLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTTtnQkFFRSxNQUFNO3NCQUEzQixZQUFZO3VCQUFDLE1BQU07Z0JBRVksU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhO2dCQUVQLFFBQVE7c0JBQTlCLFNBQVM7dUJBQUMsVUFBVTs7QUF1RXpCLE1BQU0sT0FBTyxxQkFBcUI7dUdBQXJCLHFCQUFxQjt3R0FBckIscUJBQXFCLGlCQTdIckIsZUFBZSxhQXlIZCxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUF6SDNDLGVBQWUsRUEwSEcsWUFBWSxFQUFFLGNBQWM7d0dBRzlDLHFCQUFxQixZQUpwQixZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFDekIsWUFBWSxFQUFFLGNBQWM7OzJGQUc5QyxxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3JELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN4RCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBib29sZWFuQXR0cmlidXRlLFxuICAgIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2NrYWJsZVVJLCBGb290ZXIsIEhlYWRlciwgUHJpbWVUZW1wbGF0ZSwgU2Nyb2xsZXJPcHRpb25zLCBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTY3JvbGxlciwgU2Nyb2xsZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3Njcm9sbGVyJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxlckxhenlMb2FkRXZlbnQgfSBmcm9tICcuL3ZpcnR1YWxzY3JvbGxlci5pbnRlcmZhY2UnO1xuLyoqXG4gKiBWaXJ0dWFsU2Nyb2xsZXIgaXMgYSBwZXJmb3JtYW50IGFwcHJvYWNoIHRvIGhhbmRsZSBodWdlIGRhdGEgZWZmaWNpZW50bHkuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdmlydHVhbFNjcm9sbGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLXZpcnR1YWxzY3JvbGxlciBwLWNvbXBvbmVudCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIid2aXJ0dWFsc2Nyb2xsZXInXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdmlydHVhbHNjcm9sbGVyLWhlYWRlclwiICpuZ0lmPVwiaGVhZGVyIHx8IGhlYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImhlYWRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2NvbnRlbnQgY2xhc3M9XCJwLXZpcnR1YWxzY3JvbGxlci1jb250ZW50XCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidjb250ZW50J1wiPlxuICAgICAgICAgICAgICAgIDxwLXNjcm9sbGVyICNzY3JvbGxlciBbaXRlbXNdPVwidmFsdWVcIiBzdHlsZUNsYXNzPVwicC12aXJ0dWFsc2Nyb2xsZXItbGlzdFwiIFtzdHlsZV09XCJ7IGhlaWdodDogc2Nyb2xsSGVpZ2h0IH1cIiBbaXRlbVNpemVdPVwiaXRlbVNpemVcIiBbbGF6eV09XCJsYXp5XCIgKG9uTGF6eUxvYWQpPVwib25MYXp5SXRlbUxvYWQoJGV2ZW50KVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cIml0ZW1cIiBsZXQtaXRlbSBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7IGhlaWdodDogaXRlbVNpemUgKyAncHgnIH1cIiBjbGFzcz1cInAtdmlydHVhbHNjcm9sbGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbSA/IGl0ZW1UZW1wbGF0ZSA6IGxvYWRpbmdJdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtLCBvcHRpb25zOiBzY3JvbGxlck9wdGlvbnMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wLXNjcm9sbGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC12aXJ0dWFsc2Nyb2xsZXItZm9vdGVyXCIgKm5nSWY9XCJmb290ZXIgfHwgZm9vdGVyVGVtcGxhdGVcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2Zvb3RlcidcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsU2Nyb2xsZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBCbG9ja2FibGVVSSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkaXNwbGF5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgYW4gaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBpdGVtU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE1heCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgYXJlYSBpbiBpbmxpbmUgbW9kZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGlmIGRhdGEgaXMgbG9hZGVkIGFuZCBpbnRlcmFjdGVkIHdpdGggaW4gbGF6eSBtYW5uZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxhenk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byB1c2UgdGhlIHNjcm9sbGVyIGZlYXR1cmUuIFRoZSBwcm9wZXJ0aWVzIG9mIHNjcm9sbGVyIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBsaWtlIGFuIG9iamVjdCBpbiBpdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25zOiBTY3JvbGxlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGhyZXNob2xkIGluIG1pbGxpc2Vjb25kcyB0byBkZWxheSBsYXp5IGxvYWRpbmcgZHVyaW5nIHNjcm9sbGluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBkZWxheTogbnVtYmVyID0gMjUwO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBpbiBsYXp5IG1vZGUgdG8gbG9hZCBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0ge1ZpcnR1YWxTY3JvbGxlckxhenlMb2FkRXZlbnR9IGV2ZW50IC0gY3VzdG9tIGxhenkgbG9hZCBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25MYXp5TG9hZDogRXZlbnRFbWl0dGVyPFZpcnR1YWxTY3JvbGxlckxhenlMb2FkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxWaXJ0dWFsU2Nyb2xsZXJMYXp5TG9hZEV2ZW50PigpO1xuXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIGhlYWRlcjogSGVhZGVyIHwgdW5kZWZpbmVkO1xuXG4gICAgQENvbnRlbnRDaGlsZChGb290ZXIpIGZvb3RlcjogRm9vdGVyIHwgdW5kZWZpbmVkO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IE51bGxhYmxlPFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPj47XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxlcicpIHNjcm9sbGVyOiBOdWxsYWJsZTxTY3JvbGxlcj47XG5cbiAgICBpdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgbG9hZGluZ0l0ZW1UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICB2aXJ0dWFsU2Nyb2xsVGltZW91dDogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgICkge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgKHRoaXMudGVtcGxhdGVzIGFzIFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbG9hZGluZ0l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTGF6eUl0ZW1Mb2FkKGV2ZW50OiBWaXJ0dWFsU2Nyb2xsZXJMYXp5TG9hZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGxUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy52aXJ0dWFsU2Nyb2xsVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAgcm93czogPG51bWJlcj5ldmVudC5sYXN0IC0gPG51bWJlcj5ldmVudC5maXJzdCxcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZTogKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9XG5cbiAgICBnZXRCbG9ja2FibGVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIG1vZGU/OiBTY3JvbGxCZWhhdmlvcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbGVyPy5zY3JvbGxUb0luZGV4KGluZGV4LCBtb2RlKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBTY3JvbGxlck1vZHVsZV0sXG4gICAgZXhwb3J0czogW1ZpcnR1YWxTY3JvbGxlciwgU2hhcmVkTW9kdWxlLCBTY3JvbGxlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVmlydHVhbFNjcm9sbGVyXVxufSlcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsU2Nyb2xsZXJNb2R1bGUge31cbiJdfQ==