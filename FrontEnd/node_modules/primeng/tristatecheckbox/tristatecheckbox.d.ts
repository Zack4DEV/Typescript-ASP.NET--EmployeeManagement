import { ChangeDetectorRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { TriStateCheckboxChangeEvent } from './tristatecheckbox.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/autofocus";
import * as i4 from "primeng/icons/check";
import * as i5 from "primeng/icons/times";
export declare const TRISTATECHECKBOX_VALUE_ACCESSOR: any;
/**
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 * @group Components
 */
export declare class TriStateCheckbox implements ControlValueAccessor {
    private cd;
    config: PrimeNGConfig;
    constructor(cd: ChangeDetectorRef, config: PrimeNGConfig);
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Name of the component.
     * @group Props
     */
    name: string | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
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
     * Label of the checkbox.
     * @group Props
     */
    label: string | undefined;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * Specifies the icon for checkbox true value.
     * @group Props
     */
    checkboxTrueIcon: string | undefined;
    /**
     * Specifies the icon for checkbox false value.
     * @group Props
     */
    checkboxFalseIcon: string | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Callback to invoke on value change.
     * @param {TriStateCheckboxChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<TriStateCheckboxChangeEvent>;
    templates: QueryList<PrimeTemplate>;
    checkIconTemplate: Nullable<TemplateRef<any>>;
    uncheckIconTemplate: Nullable<TemplateRef<any>>;
    focused: Nullable<boolean>;
    value: Nullable<boolean>;
    onModelChange: Function;
    onModelTouched: Function;
    onClick(event: Event, input: HTMLInputElement): void;
    onKeyDown(event: KeyboardEvent): void;
    toggle(event: Event): void;
    ngAfterContentInit(): void;
    onFocus(): void;
    onBlur(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TriStateCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TriStateCheckbox, "p-triStateCheckbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "label": { "alias": "label"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "checkboxTrueIcon": { "alias": "checkboxTrueIcon"; "required": false; }; "checkboxFalseIcon": { "alias": "checkboxFalseIcon"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "onChange": "onChange"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class TriStateCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TriStateCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TriStateCheckboxModule, [typeof TriStateCheckbox], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.AutoFocusModule, typeof i4.CheckIcon, typeof i5.TimesIcon], [typeof TriStateCheckbox, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TriStateCheckboxModule>;
}
