import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Message, MessageService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastCloseEvent, ToastItemCloseEvent, ToastPositionType } from './toast.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/icons/check";
import * as i4 from "primeng/icons/infocircle";
import * as i5 from "primeng/icons/timescircle";
import * as i6 from "primeng/icons/exclamationtriangle";
import * as i7 from "primeng/icons/times";
import * as i8 from "primeng/api";
export declare class ToastItem implements AfterViewInit, OnDestroy {
    private zone;
    private config;
    message: Message | null | undefined;
    index: number | null | undefined;
    life: number;
    template: TemplateRef<any> | undefined;
    headlessTemplate: TemplateRef<any> | undefined;
    showTransformOptions: string | undefined;
    hideTransformOptions: string | undefined;
    showTransitionOptions: string | undefined;
    hideTransitionOptions: string | undefined;
    onClose: EventEmitter<ToastItemCloseEvent>;
    containerViewChild: ElementRef | undefined;
    timeout: any;
    constructor(zone: NgZone, config: PrimeNGConfig);
    ngAfterViewInit(): void;
    initTimeout(): void;
    clearTimeout(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onCloseIconClick: (event: Event) => void;
    get closeAriaLabel(): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastItem, "p-toastItem", never, { "message": { "alias": "message"; "required": false; }; "index": { "alias": "index"; "required": false; }; "life": { "alias": "life"; "required": false; }; "template": { "alias": "template"; "required": false; }; "headlessTemplate": { "alias": "headlessTemplate"; "required": false; }; "showTransformOptions": { "alias": "showTransformOptions"; "required": false; }; "hideTransformOptions": { "alias": "hideTransformOptions"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
    static ngAcceptInputType_index: unknown;
    static ngAcceptInputType_life: unknown;
}
/**
 * Toast is used to display messages in an overlay.
 * @group Components
 */
export declare class Toast implements OnInit, AfterContentInit, OnDestroy {
    private document;
    private renderer;
    messageService: MessageService;
    private cd;
    config: PrimeNGConfig;
    /**
     * Key of the message in case message is targeted to a specific toast component.
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
     * The default time to display messages for in milliseconds.
     * @group Props
     */
    life: number;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Inline class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Position of the toast in viewport.
     * @group Props
     */
    get position(): ToastPositionType;
    set position(value: ToastPositionType);
    /**
     * It does not add the new message if there is already a toast displayed with the same content
     * @group Props
     */
    preventOpenDuplicates: boolean;
    /**
     * Displays only once a message with the same content.
     * @group Props
     */
    preventDuplicates: boolean;
    /**
     * Transform options of the show animation.
     * @group Props
     */
    showTransformOptions: string;
    /**
     * Transform options of the hide animation.
     * @group Props
     */
    hideTransformOptions: string;
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
     * Object literal to define styles per screen size.
     * @group Props
     */
    breakpoints: {
        [key: string]: any;
    } | undefined;
    /**
     * Callback to invoke when a message is closed.
     * @param {ToastCloseEvent} event - custom close event.
     * @group Emits
     */
    onClose: EventEmitter<ToastCloseEvent>;
    containerViewChild: ElementRef | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    messageSubscription: Subscription | undefined;
    clearSubscription: Subscription | undefined;
    messages: Message[] | null | undefined;
    messagesArchieve: Message[] | undefined;
    template: TemplateRef<any> | undefined;
    headlessTemplate: TemplateRef<any> | undefined;
    _position: ToastPositionType;
    constructor(document: Document, renderer: Renderer2, messageService: MessageService, cd: ChangeDetectorRef, config: PrimeNGConfig);
    styleElement: any;
    id: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    add(messages: Message[]): void;
    canAdd(message: Message): boolean;
    containsMessage(collection: Message[], message: Message): boolean;
    ngAfterContentInit(): void;
    onMessageClose(event: ToastItemCloseEvent): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    createStyle(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Toast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Toast, "p-toast", never, { "key": { "alias": "key"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "life": { "alias": "life"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "position": { "alias": "position"; "required": false; }; "preventOpenDuplicates": { "alias": "preventOpenDuplicates"; "required": false; }; "preventDuplicates": { "alias": "preventDuplicates"; "required": false; }; "showTransformOptions": { "alias": "showTransformOptions"; "required": false; }; "hideTransformOptions": { "alias": "hideTransformOptions"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "breakpoints": { "alias": "breakpoints"; "required": false; }; }, { "onClose": "onClose"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_life: unknown;
    static ngAcceptInputType_preventOpenDuplicates: unknown;
    static ngAcceptInputType_preventDuplicates: unknown;
}
export declare class ToastModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToastModule, [typeof Toast, typeof ToastItem], [typeof i1.CommonModule, typeof i2.RippleModule, typeof i3.CheckIcon, typeof i4.InfoCircleIcon, typeof i5.TimesCircleIcon, typeof i6.ExclamationTriangleIcon, typeof i7.TimesIcon], [typeof Toast, typeof i8.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToastModule>;
}
