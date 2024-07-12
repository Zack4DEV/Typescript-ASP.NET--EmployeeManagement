import { AfterContentInit, ChangeDetectorRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { InputOtpChangeEvent } from './inputotp.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/inputtext";
import * as i4 from "primeng/autofocus";
export declare const INPUT_OTP_VALUE_ACCESSOR: any;
/**
 * Input Otp is used to enter one time passwords.
 * @group Components
 */
export declare class InputOtp implements AfterContentInit {
    cd: ChangeDetectorRef;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @group Props
     */
    invalid: boolean;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly: boolean;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | null;
    /**
     * Number of characters to initiate.
     * @group Props
     */
    length: number;
    /**
     * Mask pattern.
     * @group Props
     */
    mask: boolean;
    /**
     * When present, it specifies that an input field is integer-only.
     * @group Props
     */
    integerOnly: boolean;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Callback to invoke on value change.
     * @group Emits
     */
    onChange: EventEmitter<InputOtpChangeEvent>;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<Event>;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<Event>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    inputTemplate: Nullable<TemplateRef<any>>;
    tokens: any;
    onModelChange: Function;
    onModelTouched: Function;
    value: any;
    get inputMode(): string;
    get inputType(): string;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    getToken(index: any): any;
    getTemplateEvents(index: any): {
        input: (event: any) => void;
        keydown: (event: any) => void;
        focus: (event: any) => void;
        blur: (event: any) => void;
        paste: (event: any) => void;
    };
    onInput(event: any, index: any): void;
    updateModel(event: any): void;
    writeValue(value: any): void;
    updateTokens(): void;
    getModelValue(i: number): any;
    getAutofocus(i: number): boolean;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    moveToPrev(event: any): void;
    moveToNext(event: any): void;
    findNextInput(element: any): any;
    findPrevInput(element: any): any;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    onKeyDown(event: any): void;
    onPaste(event: any): void;
    getRange(n: number): number[];
    trackByFn(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOtp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputOtp, "p-inputOtp", never, { "invalid": { "alias": "invalid"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "length": { "alias": "length"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; "integerOnly": { "alias": "integerOnly"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "onChange": "onChange"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class InputOtpModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOtpModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputOtpModule, [typeof InputOtp], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.InputTextModule, typeof i4.AutoFocusModule], [typeof InputOtp, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputOtpModule>;
}
