import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Confirmation, ConfirmationService, OverlayService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/api";
/**
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 * @group Components
 */
export declare class ConfirmPopup implements AfterContentInit, OnDestroy {
    el: ElementRef;
    private confirmationService;
    renderer: Renderer2;
    private cd;
    config: PrimeNGConfig;
    overlayService: OverlayService;
    private document;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key: string | undefined;
    /**
     * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
     * @group Props
     */
    defaultFocus: string;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions: string;
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
     * Defines if the component is visible.
     * @group Props
     */
    get visible(): any;
    set visible(value: any);
    templates: QueryList<PrimeTemplate> | undefined;
    container: Nullable<HTMLDivElement>;
    subscription: Subscription;
    confirmation: Nullable<Confirmation>;
    contentTemplate: Nullable<TemplateRef<any>>;
    acceptIconTemplate: Nullable<TemplateRef<any>>;
    rejectIconTemplate: Nullable<TemplateRef<any>>;
    headlessTemplate: Nullable<TemplateRef<any>>;
    _visible: boolean | undefined;
    documentClickListener: VoidListener;
    documentResizeListener: VoidListener;
    scrollHandler: Nullable<ConnectedOverlayScrollHandler>;
    private window;
    constructor(el: ElementRef, confirmationService: ConfirmationService, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig, overlayService: OverlayService, document: Document);
    ngAfterContentInit(): void;
    onEscapeKeydown(event: KeyboardEvent): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    getElementToFocus(): any;
    align(): void;
    hide(): void;
    accept(): void;
    reject(): void;
    onOverlayClick(event: MouseEvent): void;
    bindListeners(): void;
    unbindListeners(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    onWindowResize(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    unsubscribeConfirmationSubscriptions(): void;
    onContainerDestroy(): void;
    restoreAppend(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmPopup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmPopup, "p-confirmPopup", never, { "key": { "alias": "key"; "required": false; }; "defaultFocus": { "alias": "defaultFocus"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, ["templates"], never, false, never>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
}
export declare class ConfirmPopupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmPopupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ConfirmPopupModule, [typeof ConfirmPopup], [typeof i1.CommonModule, typeof i2.ButtonModule, typeof i3.SharedModule], [typeof ConfirmPopup, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ConfirmPopupModule>;
}
