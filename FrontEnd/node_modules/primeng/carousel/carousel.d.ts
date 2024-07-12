import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Footer, Header, PrimeTemplate } from 'primeng/api';
import { CarouselPageEvent, CarouselResponsiveOptions } from './carousel.interface';
import { PrimeNGConfig } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/icons/chevronright";
import * as i5 from "primeng/icons/chevronleft";
import * as i6 from "primeng/icons/chevrondown";
import * as i7 from "primeng/icons/chevronup";
/**
 * Carousel is a content slider featuring various customization options.
 * @group Components
 */
export declare class Carousel implements AfterContentInit {
    el: ElementRef;
    zone: NgZone;
    cd: ChangeDetectorRef;
    private renderer;
    private document;
    private platformId;
    private config;
    /**
     * Index of the first item.
     * @defaultValue 0
     * @group Props
     */
    get page(): number;
    set page(val: number);
    /**
     * Number of items per page.
     * @defaultValue 1
     * @group Props
     */
    get numVisible(): number;
    set numVisible(val: number);
    /**
     * Number of items to scroll.
     * @defaultValue 1
     * @group Props
     */
    get numScroll(): number;
    set numScroll(val: number);
    /**
     * An array of options for responsive design.
     * @see {CarouselResponsiveOptions}
     * @group Props
     */
    responsiveOptions: CarouselResponsiveOptions[] | undefined;
    /**
     * Specifies the layout of the component.
     * @group Props
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Height of the viewport in vertical layout.
     * @group Props
     */
    verticalViewPortHeight: string;
    /**
     * Style class of main content.
     * @group Props
     */
    contentClass: string;
    /**
     * Style class of the indicator items.
     * @group Props
     */
    indicatorsContentClass: string;
    /**
     * Inline style of the indicator items.
     * @group Props
     */
    indicatorsContentStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the indicators.
     * @group Props
     */
    indicatorStyleClass: string;
    /**
     * Style of the indicators.
     * @group Props
     */
    indicatorStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * An array of objects to display.
     * @defaultValue null
     * @group Props
     */
    get value(): any[];
    set value(val: any[]);
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular: boolean;
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators: boolean;
    /**
     * Whether to display navigation buttons in container.
     * @group Props
     */
    showNavigators: boolean;
    /**
     * Time in milliseconds to scroll items automatically.
     * @group Props
     */
    autoplayInterval: number;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the viewport container.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Callback to invoke after scroll.
     * @param {CarouselPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage: EventEmitter<CarouselPageEvent>;
    itemsContainer: ElementRef | undefined;
    indicatorContent: ElementRef | undefined;
    headerFacet: QueryList<Header> | undefined;
    footerFacet: QueryList<Footer> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    _numVisible: number;
    _numScroll: number;
    _oldNumScroll: number;
    prevState: any;
    defaultNumScroll: number;
    defaultNumVisible: number;
    _page: number;
    _value: any[] | null | undefined;
    carouselStyle: any;
    id: string | undefined;
    totalShiftedItems: any;
    isRemainingItemsAdded: boolean;
    animationTimeout: any;
    translateTimeout: any;
    remainingItems: number;
    _items: any[] | undefined;
    startPos: any;
    documentResizeListener: any;
    clonedItemsForStarting: any[] | undefined;
    clonedItemsForFinishing: any[] | undefined;
    allowAutoplay: boolean | undefined;
    interval: any;
    isCreated: boolean | undefined;
    swipeThreshold: number;
    itemTemplate: TemplateRef<any> | undefined;
    headerTemplate: TemplateRef<any> | undefined;
    footerTemplate: TemplateRef<any> | undefined;
    previousIconTemplate: TemplateRef<any> | undefined;
    nextIconTemplate: TemplateRef<any> | undefined;
    window: Window;
    constructor(el: ElementRef, zone: NgZone, cd: ChangeDetectorRef, renderer: Renderer2, document: Document, platformId: any, config: PrimeNGConfig);
    ngOnChanges(simpleChange: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    createStyle(): void;
    calculatePosition(): void;
    setCloneItems(): void;
    firstIndex(): number;
    lastIndex(): number;
    totalDots(): number;
    totalDotsArray(): any[];
    isVertical(): boolean;
    isCircular(): boolean;
    isAutoplay(): boolean;
    isForwardNavDisabled(): boolean;
    isBackwardNavDisabled(): boolean;
    isEmpty(): boolean;
    navForward(e: MouseEvent | TouchEvent, index?: number): void;
    navBackward(e: MouseEvent | TouchEvent, index?: number): void;
    onDotClick(e: MouseEvent, index: number): void;
    onIndicatorKeydown(event: KeyboardEvent): void;
    onRightKey(): void;
    onLeftKey(): void;
    onHomeKey(): void;
    onEndKey(): void;
    onTabKey(): void;
    findFocusedIndicatorIndex(): number;
    changedFocusedIndicator(prevInd: any, nextInd: any): void;
    step(dir: number, page?: number): void;
    startAutoplay(): void;
    stopAutoplay(changeAllow?: boolean): void;
    isPlaying(): boolean;
    onTransitionEnd(): void;
    onTouchStart(e: TouchEvent): void;
    onTouchMove(e: TouchEvent | MouseEvent): void;
    onTouchEnd(e: TouchEvent): void;
    changePageOnTouch(e: TouchEvent | MouseEvent, diff: number): void;
    ariaPrevButtonLabel(): string;
    ariaSlideLabel(): string;
    ariaNextButtonLabel(): string;
    ariaSlideNumber(value: any): string;
    ariaPageLabel(value: any): string;
    bindDocumentListeners(): void;
    unbindDocumentListeners(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Carousel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Carousel, "p-carousel", never, { "page": { "alias": "page"; "required": false; }; "numVisible": { "alias": "numVisible"; "required": false; }; "numScroll": { "alias": "numScroll"; "required": false; }; "responsiveOptions": { "alias": "responsiveOptions"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "verticalViewPortHeight": { "alias": "verticalViewPortHeight"; "required": false; }; "contentClass": { "alias": "contentClass"; "required": false; }; "indicatorsContentClass": { "alias": "indicatorsContentClass"; "required": false; }; "indicatorsContentStyle": { "alias": "indicatorsContentStyle"; "required": false; }; "indicatorStyleClass": { "alias": "indicatorStyleClass"; "required": false; }; "indicatorStyle": { "alias": "indicatorStyle"; "required": false; }; "value": { "alias": "value"; "required": false; }; "circular": { "alias": "circular"; "required": false; }; "showIndicators": { "alias": "showIndicators"; "required": false; }; "showNavigators": { "alias": "showNavigators"; "required": false; }; "autoplayInterval": { "alias": "autoplayInterval"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, { "onPage": "onPage"; }, ["headerFacet", "footerFacet", "templates"], ["p-header", "p-footer"], false, never>;
    static ngAcceptInputType_circular: unknown;
    static ngAcceptInputType_showIndicators: unknown;
    static ngAcceptInputType_showNavigators: unknown;
    static ngAcceptInputType_autoplayInterval: unknown;
}
export declare class CarouselModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CarouselModule, [typeof Carousel], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.RippleModule, typeof i4.ChevronRightIcon, typeof i5.ChevronLeftIcon, typeof i6.ChevronDownIcon, typeof i7.ChevronUpIcon], [typeof i1.CommonModule, typeof Carousel, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CarouselModule>;
}
