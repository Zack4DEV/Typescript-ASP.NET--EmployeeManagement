import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, numberAttribute, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i2 from 'primeng/autofocus';
import { AutoFocusModule } from 'primeng/autofocus';

const INPUTSWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitch),
    multi: true
};
/**
 * InputSwitch is used to select a boolean value.
 * @group Components
 */
class InputSwitch {
    cd;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the input element.
     * @group Props
     */
    inputId;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * Value in checked state.
     * @group Props
     */
    trueValue = true;
    /**
     * Value in unchecked state.
     * @group Props
     */
    falseValue = false;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Callback to invoke when the on value change.
     * @param {InputSwitchChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    input;
    modelValue = false;
    focused = false;
    onModelChange = () => { };
    onModelTouched = () => { };
    constructor(cd) {
        this.cd = cd;
    }
    onClick(event) {
        if (!this.disabled && !this.readonly) {
            this.modelValue = this.checked() ? this.falseValue : this.trueValue;
            this.onModelChange(this.modelValue);
            this.onChange.emit({
                originalEvent: event,
                checked: this.modelValue
            });
            this.input.nativeElement.focus();
        }
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(value) {
        this.modelValue = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    checked() {
        return this.modelValue === this.trueValue;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputSwitch, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: InputSwitch, selector: "p-inputSwitch", inputs: { style: "style", styleClass: "styleClass", tabindex: ["tabindex", "tabindex", numberAttribute], inputId: "inputId", name: "name", disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], trueValue: "trueValue", falseValue: "falseValue", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { onChange: "onChange" }, host: { classAttribute: "p-element" }, providers: [INPUTSWITCH_VALUE_ACCESSOR], viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: `
        <div
            [ngClass]="{ 'p-inputswitch p-component': true, 'p-inputswitch-checked': checked(), 'p-disabled': disabled, 'p-focus': focused }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onClick($event)"
            [attr.data-pc-name]="'inputswitch'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    role="switch"
                    [checked]="checked()"
                    [disabled]="disabled"
                    [attr.aria-checked]="checked()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.name]="name"
                    [attr.tabindex]="tabindex"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <span class="p-inputswitch-slider" [attr.data-pc-section]="'slider'"></span>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:\"\";top:50%}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.AutoFocus, selector: "[pAutoFocus]", inputs: ["autofocus"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputSwitch, decorators: [{
            type: Component,
            args: [{ selector: 'p-inputSwitch', template: `
        <div
            [ngClass]="{ 'p-inputswitch p-component': true, 'p-inputswitch-checked': checked(), 'p-disabled': disabled, 'p-focus': focused }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onClick($event)"
            [attr.data-pc-name]="'inputswitch'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    role="switch"
                    [checked]="checked()"
                    [disabled]="disabled"
                    [attr.aria-checked]="checked()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.name]="name"
                    [attr.tabindex]="tabindex"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <span class="p-inputswitch-slider" [attr.data-pc-section]="'slider'"></span>
        </div>
    `, providers: [INPUTSWITCH_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:\"\";top:50%}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], tabindex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], inputId: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], trueValue: [{
                type: Input
            }], falseValue: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], onChange: [{
                type: Output
            }], input: [{
                type: ViewChild,
                args: ['input']
            }] } });
class InputSwitchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputSwitchModule, declarations: [InputSwitch], imports: [CommonModule, AutoFocusModule], exports: [InputSwitch] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputSwitchModule, imports: [CommonModule, AutoFocusModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AutoFocusModule],
                    exports: [InputSwitch],
                    declarations: [InputSwitch]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { INPUTSWITCH_VALUE_ACCESSOR, InputSwitch, InputSwitchModule };
//# sourceMappingURL=primeng-inputswitch.mjs.map
