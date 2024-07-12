import { ChangeDetectorRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ToggleButtonChangeEvent } from './togglebutton.interface';
import { Nullable } from 'primeng/ts-helpers';
import { PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/api";
import * as i4 from "primeng/autofocus";
export declare const TOGGLEBUTTON_VALUE_ACCESSOR: any;
/**
 * ToggleButton is used to select a boolean value using a button.
 * @group Components
 */
export declare class ToggleButton implements ControlValueAccessor {
    cd: ChangeDetectorRef;
    /**
     * Label for the on state.
     * @group Props
     */
    onLabel: string | undefined;
    /**
     * Label for the off state.
     * @group Props
     */
    offLabel: string | undefined;
    /**
     * Icon for the on state.
     * @group Props
     */
    onIcon: string | undefined;
    /**
     * Icon for the off state.
     * @group Props
     */
    offIcon: string | undefined;
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
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: any;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos: 'left' | 'right';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Callback to invoke on value change.
     * @param {ToggleButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<ToggleButtonChangeEvent>;
    templates: QueryList<PrimeTemplate>;
    iconTemplate: Nullable<TemplateRef<any>>;
    checked: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    toggle(event: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    get hasOnLabel(): boolean;
    get hasOffLabel(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleButton, "p-toggleButton", never, { "onLabel": { "alias": "onLabel"; "required": false; }; "offLabel": { "alias": "offLabel"; "required": false; }; "onIcon": { "alias": "onIcon"; "required": false; }; "offIcon": { "alias": "offIcon"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "onChange": "onChange"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class ToggleButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToggleButtonModule, [typeof ToggleButton], [typeof i1.CommonModule, typeof i2.RippleModule, typeof i3.SharedModule, typeof i4.AutoFocusModule], [typeof ToggleButton, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToggleButtonModule>;
}
