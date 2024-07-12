import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Footer, Header, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/focustrap";
import * as i3 from "primeng/button";
import * as i4 from "primeng/ripple";
import * as i5 from "primeng/icons/times";
import * as i6 from "primeng/icons/windowmaximize";
import * as i7 from "primeng/icons/windowminimize";
import * as i8 from "primeng/api";
/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
export declare class Dialog implements AfterContentInit, OnInit, OnDestroy {
    private document;
    private platformId;
    el: ElementRef;
    renderer: Renderer2;
    zone: NgZone;
    private cd;
    config: PrimeNGConfig;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header: string | undefined;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable: boolean;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable: boolean;
    /**
     * Defines the left offset of dialog.
     * @group Props
     * @deprecated positionLeft property is deprecated.
     */
    get positionLeft(): number;
    set positionLeft(_positionLeft: number);
    /**
     * Defines the top offset of dialog.
     * @group Props
     * @deprecated positionTop property is deprecated.
     */
    get positionTop(): number;
    set positionTop(_positionTop: number);
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle: any;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass: string | undefined;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal: boolean;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask: boolean;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl: boolean;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable: boolean;
    /**
     * Defines if the component is responsive.
     * @group Props
     * @deprecated Responsive property is deprecated.
     */
    get responsive(): boolean;
    set responsive(_responsive: boolean);
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints: any;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass: string | undefined;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle: string | undefined;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader: boolean;
    /**
     * Defines the breakpoint of the component responsive.
     * @group Props
     * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
     */
    get breakpoint(): number;
    set breakpoint(_breakpoint: number);
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll: boolean;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX: number;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY: number;
    /**
     * When enabled, first focusable element receives focus on show.
     * @group Props
     */
    focusOnShow: boolean;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable: boolean;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport: boolean;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap: boolean;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon: string | undefined;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel: string | undefined;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex: string;
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon: string | undefined;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon: string | undefined;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * Inline style of the component.
     * @group Props
     */
    get style(): any;
    set style(value: any);
    /**
     * Position of the dialog.
     * @group Props
     */
    get position(): 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    set position(value: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright');
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit: EventEmitter<MouseEvent>;
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd: EventEmitter<MouseEvent>;
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd: EventEmitter<DragEvent>;
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize: EventEmitter<any>;
    headerFacet: QueryList<Header> | undefined;
    footerFacet: QueryList<Footer> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    headerViewChild: Nullable<ElementRef>;
    contentViewChild: Nullable<ElementRef>;
    footerViewChild: Nullable<ElementRef>;
    headerTemplate: Nullable<TemplateRef<any>>;
    contentTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    maximizeIconTemplate: Nullable<TemplateRef<any>>;
    closeIconTemplate: Nullable<TemplateRef<any>>;
    minimizeIconTemplate: Nullable<TemplateRef<any>>;
    headlessTemplate: Nullable<TemplateRef<any>>;
    _visible: boolean;
    maskVisible: boolean | undefined;
    container: Nullable<HTMLDivElement>;
    wrapper: Nullable<HTMLElement>;
    dragging: boolean | undefined;
    ariaLabelledBy: string;
    documentDragListener: VoidListener;
    documentDragEndListener: VoidListener;
    resizing: boolean | undefined;
    documentResizeListener: VoidListener;
    documentResizeEndListener: VoidListener;
    documentEscapeListener: VoidListener;
    maskClickListener: VoidListener;
    lastPageX: number | undefined;
    lastPageY: number | undefined;
    preventVisibleChangePropagation: boolean | undefined;
    maximized: boolean | undefined;
    preMaximizeContentHeight: number | undefined;
    preMaximizeContainerWidth: number | undefined;
    preMaximizeContainerHeight: number | undefined;
    preMaximizePageX: number | undefined;
    preMaximizePageY: number | undefined;
    id: string;
    _style: any;
    _position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    originalStyle: any;
    transformOptions: any;
    styleElement: any;
    private window;
    get maximizeLabel(): string;
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, zone: NgZone, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    getAriaLabelledBy(): string;
    focus(focusParentElement?: any): void;
    close(event: Event): void;
    enableModality(): void;
    disableModality(): void;
    maximize(): void;
    unbindMaskClickListener(): void;
    moveOnTop(): void;
    createStyle(): void;
    initDrag(event: MouseEvent): void;
    onDrag(event: MouseEvent): void;
    endDrag(event: DragEvent): void;
    resetPosition(): void;
    center(): void;
    initResize(event: MouseEvent): void;
    onResize(event: MouseEvent): void;
    resizeEnd(event: MouseEvent): void;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    bindDocumentDragListener(): void;
    unbindDocumentDragListener(): void;
    bindDocumentDragEndListener(): void;
    unbindDocumentDragEndListener(): void;
    bindDocumentResizeListeners(): void;
    unbindDocumentResizeListeners(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    appendContainer(): void;
    restoreAppend(): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    onContainerDestroy(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Dialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Dialog, "p-dialog", never, { "header": { "alias": "header"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "positionLeft": { "alias": "positionLeft"; "required": false; }; "positionTop": { "alias": "positionTop"; "required": false; }; "contentStyle": { "alias": "contentStyle"; "required": false; }; "contentStyleClass": { "alias": "contentStyleClass"; "required": false; }; "modal": { "alias": "modal"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "dismissableMask": { "alias": "dismissableMask"; "required": false; }; "rtl": { "alias": "rtl"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "breakpoints": { "alias": "breakpoints"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "maskStyleClass": { "alias": "maskStyleClass"; "required": false; }; "maskStyle": { "alias": "maskStyle"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "minX": { "alias": "minX"; "required": false; }; "minY": { "alias": "minY"; "required": false; }; "focusOnShow": { "alias": "focusOnShow"; "required": false; }; "maximizable": { "alias": "maximizable"; "required": false; }; "keepInViewport": { "alias": "keepInViewport"; "required": false; }; "focusTrap": { "alias": "focusTrap"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "closeIcon": { "alias": "closeIcon"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "closeTabindex": { "alias": "closeTabindex"; "required": false; }; "minimizeIcon": { "alias": "minimizeIcon"; "required": false; }; "maximizeIcon": { "alias": "maximizeIcon"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "style": { "alias": "style"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; "visibleChange": "visibleChange"; "onResizeInit": "onResizeInit"; "onResizeEnd": "onResizeEnd"; "onDragEnd": "onDragEnd"; "onMaximize": "onMaximize"; }, ["headerFacet", "footerFacet", "templates"], ["p-header", "*", "p-footer"], false, never>;
    static ngAcceptInputType_draggable: unknown;
    static ngAcceptInputType_resizable: unknown;
    static ngAcceptInputType_modal: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
    static ngAcceptInputType_dismissableMask: unknown;
    static ngAcceptInputType_rtl: unknown;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_showHeader: unknown;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_minX: unknown;
    static ngAcceptInputType_minY: unknown;
    static ngAcceptInputType_focusOnShow: unknown;
    static ngAcceptInputType_maximizable: unknown;
    static ngAcceptInputType_keepInViewport: unknown;
    static ngAcceptInputType_focusTrap: unknown;
}
export declare class DialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DialogModule, [typeof Dialog], [typeof i1.CommonModule, typeof i2.FocusTrapModule, typeof i3.ButtonModule, typeof i4.RippleModule, typeof i5.TimesIcon, typeof i6.WindowMaximizeIcon, typeof i7.WindowMinimizeIcon], [typeof Dialog, typeof i8.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DialogModule>;
}
