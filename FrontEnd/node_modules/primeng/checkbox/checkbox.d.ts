import { ChangeDetectorRef, ElementRef, EventEmitter, Injector, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { PrimeTemplate, PrimeNGConfig } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { CheckboxChangeEvent } from './checkbox.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/autofocus";
import * as i3 from "primeng/icons/check";
import * as i4 from "primeng/api";
export declare const CHECKBOX_VALUE_ACCESSOR: any;
/**
 * Checkbox is an extension to standard checkbox element with theming.
 * @group Components
 */
export declare class Checkbox implements ControlValueAccessor {
    cd: ChangeDetectorRef;
    private readonly injector;
    config: PrimeNGConfig;
    /**
     * Value of the checkbox.
     * @group Props
     */
    value: any;
    /**
     * Name of the checkbox group.
     * @group Props
     */
    name: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Allows to select a boolean value instead of multiple values.
     * @group Props
     */
    binary: boolean | undefined;
    /**
     * Label of the checkbox.
     * @group Props
     */
    label: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId: string | undefined;
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
     * Style class of the label.
     * @group Props
     */
    labelStyleClass: string | undefined;
    /**
     * Form control value.
     * @group Props
     */
    formControl: FormControl | undefined;
    /**
     * Icon class of the checkbox icon.
     * @group Props
     */
    checkboxIcon: string | undefined;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * When present, it specifies that checkbox must be checked before submitting the form.
     * @group Props
     */
    required: boolean | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Value in checked state.
     * @group Props
     */
    trueValue: any;
    /**
     * Value in unchecked state.
     * @group Props
     */
    falseValue: any;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Callback to invoke on value change.
     * @param {CheckboxChangeEvent} event - Custom value change event.
     * @group Emits
     */
    onChange: EventEmitter<CheckboxChangeEvent>;
    /**
     * Callback to invoke when the receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<Event>;
    /**
     * Callback to invoke when the loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<Event>;
    inputViewChild: Nullable<ElementRef>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    checkboxIconTemplate: TemplateRef<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    focused: boolean;
    constructor(cd: ChangeDetectorRef, injector: Injector, config: PrimeNGConfig);
    ngAfterContentInit(): void;
    onClick(event: any, checkbox: any, focus: boolean): void;
    updateModel(event: any): void;
    handleChange(event: any): void;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    focus(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    checked(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Checkbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Checkbox, "p-checkbox", never, { "value": { "alias": "value"; "required": false; }; "name": { "alias": "name"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "binary": { "alias": "binary"; "required": false; }; "label": { "alias": "label"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "labelStyleClass": { "alias": "labelStyleClass"; "required": false; }; "formControl": { "alias": "formControl"; "required": false; }; "checkboxIcon": { "alias": "checkboxIcon"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "trueValue": { "alias": "trueValue"; "required": false; }; "falseValue": { "alias": "falseValue"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, { "onChange": "onChange"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_binary: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class CheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CheckboxModule, [typeof Checkbox], [typeof i1.CommonModule, typeof i2.AutoFocusModule, typeof i3.CheckIcon], [typeof Checkbox, typeof i4.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CheckboxModule>;
}
