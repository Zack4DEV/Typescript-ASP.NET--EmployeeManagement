import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/api";
import * as i4 from "primeng/icons/times";
/**
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 * @group Components
 */
export declare class Sidebar implements AfterViewInit, AfterContentInit, OnDestroy {
    private document;
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    config: PrimeNGConfig;
    /**
     *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Whether to block scrolling of the document when sidebar is active.
     * @group Props
     */
    blockScroll: boolean;
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
     * Aria label of the close icon.
     * @group Props
     */
    ariaCloseLabel: string | undefined;
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
     * Whether an overlay mask is displayed behind the sidebar.
     * @group Props
     */
    modal: boolean;
    /**
     * Whether to dismiss sidebar on click of the mask.
     * @group Props
     */
    dismissible: boolean;
    /**
     * Whether to display the close icon.
     * @group Props
     */
    showCloseIcon: boolean;
    /**
     * Specifies if pressing escape key should hide the sidebar.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible(): boolean;
    set visible(val: boolean);
    /**
     * Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".
     * @group Props
     */
    get position(): string;
    set position(value: string);
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    get fullScreen(): boolean;
    set fullScreen(value: boolean);
    templates: QueryList<PrimeTemplate> | undefined;
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
     * Callback to invoke when dialog visibility is changed.
     * @param {boolean} value - Visible value.
     * @group Emits
     */
    visibleChange: EventEmitter<boolean>;
    initialized: boolean | undefined;
    _visible: boolean | undefined;
    _position: string;
    _fullScreen: boolean;
    container: Nullable<HTMLDivElement>;
    transformOptions: any;
    mask: Nullable<HTMLDivElement>;
    maskClickListener: VoidListener;
    documentEscapeListener: VoidListener;
    animationEndListener: VoidListener;
    contentTemplate: Nullable<TemplateRef<any>>;
    headerTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    closeIconTemplate: Nullable<TemplateRef<any>>;
    headlessTemplate: Nullable<TemplateRef<any>>;
    constructor(document: Document, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    onKeyDown(event: KeyboardEvent): void;
    show(): void;
    hide(emit?: boolean): void;
    close(event: Event): void;
    enableModality(): void;
    disableModality(): void;
    destroyModal(): void;
    onAnimationStart(event: any): void;
    onAnimationEnd(event: any): void;
    appendContainer(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    unbindMaskClickListener(): void;
    unbindGlobalListeners(): void;
    unbindAnimationEndListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Sidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Sidebar, "p-sidebar", never, { "appendTo": { "alias": "appendTo"; "required": false; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaCloseLabel": { "alias": "ariaCloseLabel"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "modal": { "alias": "modal"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "showCloseIcon": { "alias": "showCloseIcon"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "position": { "alias": "position"; "required": false; }; "fullScreen": { "alias": "fullScreen"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; "visibleChange": "visibleChange"; }, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_modal: unknown;
    static ngAcceptInputType_dismissible: unknown;
    static ngAcceptInputType_showCloseIcon: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
}
export declare class SidebarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SidebarModule, [typeof Sidebar], [typeof i1.CommonModule, typeof i2.RippleModule, typeof i3.SharedModule, typeof i4.TimesIcon], [typeof Sidebar, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SidebarModule>;
}
