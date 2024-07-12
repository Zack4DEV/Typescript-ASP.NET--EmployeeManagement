import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Message, MessageService, PrimeTemplate } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/icons/check";
import * as i4 from "primeng/icons/infocircle";
import * as i5 from "primeng/icons/timescircle";
import * as i6 from "primeng/icons/exclamationtriangle";
import * as i7 from "primeng/icons/times";
/**
 * Messages is used to display alerts inline.
 * @group Components
 */
export declare class Messages implements AfterContentInit, OnDestroy {
    messageService: MessageService;
    el: ElementRef;
    cd: ChangeDetectorRef;
    private config;
    /**
     * An array of messages to display.
     * @group Props
     */
    set value(messages: Message[]);
    /**
     * Defines if message box can be closed by the click icon.
     * @group Props
     */
    closable: boolean;
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
     * Whether displaying services messages are enabled.
     * @group Props
     */
    enableService: boolean;
    /**
     * Id to match the key of the message to enable scoping in service based messaging.
     * @group Props
     */
    key: string | undefined;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    escape: boolean;
    /**
     * Severity level of the message.
     * @group Props
     */
    severity: string | undefined;
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
     * This function is executed when the value changes.
     * @param {Message[]} value - messages value.
     * @group Emits
     */
    valueChange: EventEmitter<Message[]>;
    /**
     * This function is executed when a message is closed.
     * @param {Message} value - Closed message.
     * @group Emits
     */
    onClose: EventEmitter<Message>;
    templates: QueryList<PrimeTemplate> | undefined;
    messages: Message[] | null | undefined;
    messageSubscription: Subscription | undefined;
    clearSubscription: Subscription | undefined;
    timerSubscriptions: Subscription[];
    contentTemplate: TemplateRef<any> | undefined;
    constructor(messageService: MessageService, el: ElementRef, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterContentInit(): void;
    hasMessages(): boolean;
    clear(): void;
    removeMessage(i: number): void;
    get icon(): string | null;
    get closeAriaLabel(): string;
    ngOnDestroy(): void;
    private startMessageLifes;
    private startMessageLife;
    static ɵfac: i0.ɵɵFactoryDeclaration<Messages, [{ optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Messages, "p-messages", never, { "value": { "alias": "value"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "enableService": { "alias": "enableService"; "required": false; }; "key": { "alias": "key"; "required": false; }; "escape": { "alias": "escape"; "required": false; }; "severity": { "alias": "severity"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; }, { "valueChange": "valueChange"; "onClose": "onClose"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_enableService: unknown;
    static ngAcceptInputType_escape: unknown;
}
export declare class MessagesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MessagesModule, [typeof Messages], [typeof i1.CommonModule, typeof i2.RippleModule, typeof i3.CheckIcon, typeof i4.InfoCircleIcon, typeof i5.TimesCircleIcon, typeof i6.ExclamationTriangleIcon, typeof i7.TimesIcon], [typeof Messages]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MessagesModule>;
}
