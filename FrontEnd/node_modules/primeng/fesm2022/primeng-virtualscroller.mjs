import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChild, ContentChildren, ViewChild, NgModule } from '@angular/core';
import * as i2 from 'primeng/api';
import { Header, Footer, PrimeTemplate, SharedModule } from 'primeng/api';
import * as i3 from 'primeng/scroller';
import { ScrollerModule } from 'primeng/scroller';

/**
 * VirtualScroller is a performant approach to handle huge data efficiently.
 * @group Components
 */
class VirtualScroller {
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
class VirtualScrollerModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { VirtualScroller, VirtualScrollerModule };
//# sourceMappingURL=primeng-virtualscroller.mjs.map
