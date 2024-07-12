import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 * @group Components
 */
export declare class ScrollPanel implements AfterViewInit, AfterContentInit, OnDestroy {
    private platformId;
    el: ElementRef;
    zone: NgZone;
    cd: ChangeDetectorRef;
    private document;
    private renderer;
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
     * Step factor to scroll the content while pressing the arrow keys.
     * @group Props
     */
    step: number;
    containerViewChild: ElementRef | undefined;
    contentViewChild: ElementRef | undefined;
    xBarViewChild: ElementRef | undefined;
    yBarViewChild: ElementRef | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    scrollYRatio: number | undefined;
    scrollXRatio: number | undefined;
    timeoutFrame: any;
    initialized: boolean;
    lastPageY: number | undefined;
    lastPageX: number | undefined;
    isXBarClicked: boolean;
    isYBarClicked: boolean;
    contentTemplate: TemplateRef<any> | undefined;
    lastScrollLeft: number;
    lastScrollTop: number;
    orientation: string;
    timer: any;
    contentId: string | undefined;
    windowResizeListener: VoidFunction | null | undefined;
    contentScrollListener: VoidFunction | null | undefined;
    mouseEnterListener: VoidFunction | null | undefined;
    xBarMouseDownListener: VoidFunction | null | undefined;
    yBarMouseDownListener: VoidFunction | null | undefined;
    documentMouseMoveListener: Nullable<(event?: any) => void>;
    documentMouseUpListener: Nullable<(event?: any) => void>;
    constructor(platformId: any, el: ElementRef, zone: NgZone, cd: ChangeDetectorRef, document: Document, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    calculateContainerHeight(): void;
    moveBar(): void;
    onScroll(event: any): void;
    onKeyDown(event: any): void;
    onKeyUp(): void;
    repeat(bar: any, step: any): void;
    setTimer(bar: any, step: any): void;
    clearTimer(): void;
    bindDocumentMouseListeners(): void;
    unbindDocumentMouseListeners(): void;
    onYBarMouseDown(e: MouseEvent): void;
    onXBarMouseDown(e: MouseEvent): void;
    onDocumentMouseMove(e: MouseEvent): void;
    onMouseMoveForXBar(e: MouseEvent): void;
    onMouseMoveForYBar(e: MouseEvent): void;
    /**
     * Scrolls the top location to the given value.
     * @param scrollTop
     * @group Method
     */
    scrollTop(scrollTop: number): void;
    onFocus(event: any): void;
    onBlur(): void;
    onDocumentMouseUp(e: Event): void;
    requestAnimationFrame(f: VoidFunction): void;
    unbindListeners(): void;
    ngOnDestroy(): void;
    /**
     * Refreshes the position and size of the scrollbar.
     * @group Method
     */
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollPanel, "p-scrollPanel", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "step": { "alias": "step"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_step: unknown;
}
export declare class ScrollPanelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollPanelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ScrollPanelModule, [typeof ScrollPanel], [typeof i1.CommonModule], [typeof ScrollPanel]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ScrollPanelModule>;
}
