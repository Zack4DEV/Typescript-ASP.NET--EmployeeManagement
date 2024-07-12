import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ConfirmEventType, Confirmation, ConfirmationService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/icons/times";
import * as i5 from "primeng/icons/check";
import * as i6 from "primeng/api";
/**
 * ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.
 * @group Components
 */
export declare class ConfirmDialog implements AfterContentInit, OnInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private confirmationService;
    zone: NgZone;
    private cd;
    config: PrimeNGConfig;
    private document;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header: string | undefined;
    /**
     * Icon to display next to message.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Message of the confirmation.
     * @group Props
     */
    message: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    get style(): {
        [klass: string]: any;
    } | null | undefined;
    set style(value: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Specify the CSS class(es) for styling the mask element
     * @group Props
     */
    maskStyleClass: string | undefined;
    /**
     * Icon of the accept button.
     * @group Props
     */
    acceptIcon: string | undefined;
    /**
     * Label of the accept button.
     * @group Props
     */
    acceptLabel: string | undefined;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel: string | undefined;
    /**
     * Defines a string that labels the accept button for accessibility.
     * @group Props
     */
    acceptAriaLabel: string | undefined;
    /**
     * Visibility of the accept button.
     * @group Props
     */
    acceptVisible: boolean;
    /**
     * Icon of the reject button.
     * @group Props
     */
    rejectIcon: string | undefined;
    /**
     * Label of the reject button.
     * @group Props
     */
    rejectLabel: string | undefined;
    /**
     * Defines a string that labels the reject button for accessibility.
     * @group Props
     */
    rejectAriaLabel: string | undefined;
    /**
     * Visibility of the reject button.
     * @group Props
     */
    rejectVisible: boolean;
    /**
     * Style class of the accept button.
     * @group Props
     */
    acceptButtonStyleClass: string | undefined;
    /**
     * Style class of the reject button.
     * @group Props
     */
    rejectButtonStyleClass: string | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape: boolean;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask: boolean | undefined;
    /**
     * Determines whether scrolling behavior should be blocked within the component.
     * @group Props
     */
    blockScroll: boolean;
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
     *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key: string | undefined;
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
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * When enabled, can only focus on elements inside the confirm dialog.
     * @group Props
     */
    focusTrap: boolean;
    /**
     * Element to receive the focus when the dialog gets visible.
     * @group Props
     */
    defaultFocus: 'accept' | 'reject' | 'close' | 'none';
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints: any;
    /**
     * Current visible state as a boolean.
     * @group Props
     */
    get visible(): any;
    set visible(value: any);
    /**
     *  Allows getting the position of the component.
     * @group Props
     */
    get position(): string;
    set position(value: string);
    /**
     * Callback to invoke when dialog is hidden.
     * @param {ConfirmEventType} enum - Custom confirm event.
     * @group Emits
     */
    onHide: EventEmitter<ConfirmEventType>;
    footer: Nullable<TemplateRef<any>>;
    contentViewChild: Nullable<ElementRef>;
    templates: QueryList<PrimeTemplate> | undefined;
    ngAfterContentInit(): void;
    headerTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    rejectIconTemplate: Nullable<TemplateRef<any>>;
    acceptIconTemplate: Nullable<TemplateRef<any>>;
    messageTemplate: Nullable<TemplateRef<any>>;
    iconTemplate: Nullable<TemplateRef<any>>;
    headlessTemplate: Nullable<TemplateRef<any>>;
    confirmation: Nullable<Confirmation>;
    _visible: boolean | undefined;
    _style: {
        [klass: string]: any;
    } | null | undefined;
    maskVisible: boolean | undefined;
    documentEscapeListener: any;
    container: Nullable<HTMLDivElement>;
    wrapper: Nullable<HTMLElement>;
    contentContainer: Nullable<HTMLDivElement>;
    subscription: Subscription;
    maskClickListener: Function | null | undefined;
    preWidth: number | undefined;
    _position: string;
    transformOptions: any;
    styleElement: any;
    id: string;
    ariaLabelledBy: string;
    confirmationOptions: Nullable<Confirmation>;
    translationSubscription: Subscription | undefined;
    constructor(el: ElementRef, renderer: Renderer2, confirmationService: ConfirmationService, zone: NgZone, cd: ChangeDetectorRef, config: PrimeNGConfig, document: Document);
    ngOnInit(): void;
    getAriaLabelledBy(): string;
    option(name: string): any;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    getElementToFocus(): any;
    appendContainer(): void;
    restoreAppend(): void;
    enableModality(): void;
    disableModality(): void;
    createStyle(): void;
    close(event: Event): void;
    hide(type?: ConfirmEventType): void;
    moveOnTop(): void;
    getMaskClass(): {
        [key: string]: boolean;
    };
    getPositionClass(): string;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    unbindMaskClickListener(): void;
    onOverlayHide(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    accept(): void;
    reject(): void;
    get acceptButtonLabel(): string;
    get rejectButtonLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialog, "p-confirmDialog", never, { "header": { "alias": "header"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "message": { "alias": "message"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "maskStyleClass": { "alias": "maskStyleClass"; "required": false; }; "acceptIcon": { "alias": "acceptIcon"; "required": false; }; "acceptLabel": { "alias": "acceptLabel"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; "acceptAriaLabel": { "alias": "acceptAriaLabel"; "required": false; }; "acceptVisible": { "alias": "acceptVisible"; "required": false; }; "rejectIcon": { "alias": "rejectIcon"; "required": false; }; "rejectLabel": { "alias": "rejectLabel"; "required": false; }; "rejectAriaLabel": { "alias": "rejectAriaLabel"; "required": false; }; "rejectVisible": { "alias": "rejectVisible"; "required": false; }; "acceptButtonStyleClass": { "alias": "acceptButtonStyleClass"; "required": false; }; "rejectButtonStyleClass": { "alias": "rejectButtonStyleClass"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "dismissableMask": { "alias": "dismissableMask"; "required": false; }; "blockScroll": { "alias": "blockScroll"; "required": false; }; "rtl": { "alias": "rtl"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "key": { "alias": "key"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "focusTrap": { "alias": "focusTrap"; "required": false; }; "defaultFocus": { "alias": "defaultFocus"; "required": false; }; "breakpoints": { "alias": "breakpoints"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, { "onHide": "onHide"; }, ["footer", "templates"], ["p-footer"], false, never>;
    static ngAcceptInputType_acceptVisible: unknown;
    static ngAcceptInputType_rejectVisible: unknown;
    static ngAcceptInputType_closeOnEscape: unknown;
    static ngAcceptInputType_dismissableMask: unknown;
    static ngAcceptInputType_blockScroll: unknown;
    static ngAcceptInputType_rtl: unknown;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_focusTrap: unknown;
}
export declare class ConfirmDialogModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ConfirmDialogModule, [typeof ConfirmDialog], [typeof i1.CommonModule, typeof i2.ButtonModule, typeof i3.RippleModule, typeof i4.TimesIcon, typeof i5.CheckIcon], [typeof ConfirmDialog, typeof i2.ButtonModule, typeof i6.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ConfirmDialogModule>;
}
