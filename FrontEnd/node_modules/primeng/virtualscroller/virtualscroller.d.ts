import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { BlockableUI, Footer, Header, PrimeTemplate, ScrollerOptions } from 'primeng/api';
import { Scroller } from 'primeng/scroller';
import { Nullable } from 'primeng/ts-helpers';
import { VirtualScrollerLazyLoadEvent } from './virtualscroller.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/scroller";
/**
 * VirtualScroller is a performant approach to handle huge data efficiently.
 * @group Components
 */
export declare class VirtualScroller implements AfterContentInit, BlockableUI {
    el: ElementRef;
    cd: ChangeDetectorRef;
    /**
     * An array of objects to display.
     * @group Props
     */
    value: any[] | undefined;
    /**
     * Height of an item in the list.
     * @group Props
     */
    itemSize: number | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Max height of the content area in inline mode.
     * @group Props
     */
    scrollHeight: any;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy: boolean | undefined;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    options: ScrollerOptions | undefined;
    /**
     * Threshold in milliseconds to delay lazy loading during scrolling.
     * @group Props
     */
    delay: number;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyLoadEvent} event - custom lazy load event.
     * @group Emits
     */
    onLazyLoad: EventEmitter<VirtualScrollerLazyLoadEvent>;
    header: Header | undefined;
    footer: Footer | undefined;
    templates: Nullable<QueryList<PrimeTemplate>>;
    scroller: Nullable<Scroller>;
    itemTemplate: Nullable<TemplateRef<any>>;
    headerTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    loadingItemTemplate: Nullable<TemplateRef<any>>;
    virtualScrollTimeout: any;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onLazyItemLoad(event: VirtualScrollerLazyLoadEvent): void;
    getBlockableElement(): HTMLElement;
    scrollToIndex(index: number, mode?: ScrollBehavior): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VirtualScroller, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VirtualScroller, "p-virtualScroller", never, { "value": { "alias": "value"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "options": { "alias": "options"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "onLazyLoad": "onLazyLoad"; }, ["header", "footer", "templates"], ["p-header", "p-footer"], false, never>;
    static ngAcceptInputType_itemSize: unknown;
    static ngAcceptInputType_lazy: unknown;
    static ngAcceptInputType_delay: unknown;
}
export declare class VirtualScrollerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<VirtualScrollerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<VirtualScrollerModule, [typeof VirtualScroller], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.ScrollerModule], [typeof VirtualScroller, typeof i2.SharedModule, typeof i3.ScrollerModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<VirtualScrollerModule>;
}
