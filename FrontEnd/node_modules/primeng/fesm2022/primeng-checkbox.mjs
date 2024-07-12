import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, booleanAttribute, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import * as i1 from 'primeng/api';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import * as i3 from 'primeng/autofocus';
import { AutoFocusModule } from 'primeng/autofocus';
import { CheckIcon } from 'primeng/icons/check';
import { ObjectUtils } from 'primeng/utils';

const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
/**
 * Checkbox is an extension to standard checkbox element with theming.
 * @group Components
 */
class Checkbox {
    cd;
    injector;
    config;
    /**
     * Value of the checkbox.
     * @group Props
     */
    value;
    /**
     * Name of the checkbox group.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Allows to select a boolean value instead of multiple values.
     * @group Props
     */
    binary;
    /**
     * Label of the checkbox.
     * @group Props
     */
    label;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
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
     * Style class of the label.
     * @group Props
     */
    labelStyleClass;
    /**
     * Form control value.
     * @group Props
     */
    formControl;
    /**
     * Icon class of the checkbox icon.
     * @group Props
     */
    checkboxIcon;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that checkbox must be checked before submitting the form.
     * @group Props
     */
    required;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
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
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * Callback to invoke on value change.
     * @param {CheckboxChangeEvent} event - Custom value change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when the receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when the loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    inputViewChild;
    templates;
    checkboxIconTemplate;
    model;
    onModelChange = () => { };
    onModelTouched = () => { };
    focused = false;
    constructor(cd, injector, config) {
        this.cd = cd;
        this.injector = injector;
        this.config = config;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'icon':
                    this.checkboxIconTemplate = item.template;
                    break;
            }
        });
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.updateModel(event);
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel(event) {
        let newModelValue;
        /*
         * When `formControlName` or `formControl` is used - `writeValue` is not called after control changes.
         * Otherwise it is causing multiple references to the actual value: there is one array reference inside the component and another one in the control value.
         * `selfControl` is the source of truth of references, it is made to avoid reference loss.
         * */
        const selfControl = this.injector.get(NgControl, null, { optional: true, self: true });
        const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.model;
        if (!this.binary) {
            if (this.checked())
                newModelValue = currentModelValue.filter((val) => !ObjectUtils.equals(val, this.value));
            else
                newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
            this.onModelChange(newModelValue);
            this.model = newModelValue;
            if (this.formControl) {
                this.formControl.setValue(newModelValue);
            }
        }
        else {
            newModelValue = this.checked() ? this.falseValue : this.trueValue;
            this.model = newModelValue;
            this.onModelChange(newModelValue);
        }
        this.onChange.emit({ checked: newModelValue, originalEvent: event });
    }
    handleChange(event) {
        if (!this.readonly) {
            this.updateModel(event);
        }
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit(event);
        this.onModelTouched();
    }
    focus() {
        this.inputViewChild.nativeElement.focus();
    }
    writeValue(model) {
        this.model = model;
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        setTimeout(() => {
            this.disabled = val;
            this.cd.markForCheck();
        });
    }
    checked() {
        return this.binary ? this.model === this.trueValue : ObjectUtils.contains(this.value, this.model);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Checkbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: Checkbox, selector: "p-checkbox", inputs: { value: "value", name: "name", disabled: ["disabled", "disabled", booleanAttribute], binary: ["binary", "binary", booleanAttribute], label: "label", ariaLabelledBy: "ariaLabelledBy", ariaLabel: "ariaLabel", tabindex: ["tabindex", "tabindex", numberAttribute], inputId: "inputId", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass", formControl: "formControl", checkboxIcon: "checkboxIcon", readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], autofocus: ["autofocus", "autofocus", booleanAttribute], trueValue: "trueValue", falseValue: "falseValue", variant: "variant" }, outputs: { onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur" }, host: { classAttribute: "p-element" }, providers: [CHECKBOX_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "inputViewChild", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-checkbox p-component': true,
                'p-checkbox-checked': checked(),
                'p-checkbox-disabled': disabled,
                'p-checkbox-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'checkbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [value]="value"
                    [attr.name]="name"
                    [checked]="checked()"
                    [attr.tabindex]="tabindex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [attr.required]="required"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    (change)="handleChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div
                class="p-checkbox-box"
                [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }"
                (click)="onClick($event, input, true)"
                [attr.data-p-highlight]="checked()"
                [attr.data-p-disabled]="disabled"
                [attr.data-p-focused]="focused"
                [attr.data-pc-section]="'input'"
            >
                <ng-container *ngIf="checked()">
                    <ng-container *ngIf="!checkboxIconTemplate">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <span *ngIf="checkboxIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'icon'">
                        <ng-template *ngTemplateOutlet="checkboxIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <label
            (click)="onClick($event, input, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
        >
            {{ label }}</label
        >
    `, isInline: true, styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i3.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Checkbox, decorators: [{
            type: Component,
            args: [{ selector: 'p-checkbox', template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-checkbox p-component': true,
                'p-checkbox-checked': checked(),
                'p-checkbox-disabled': disabled,
                'p-checkbox-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'checkbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [value]="value"
                    [attr.name]="name"
                    [checked]="checked()"
                    [attr.tabindex]="tabindex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [attr.required]="required"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    (change)="handleChange($event)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div
                class="p-checkbox-box"
                [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }"
                (click)="onClick($event, input, true)"
                [attr.data-p-highlight]="checked()"
                [attr.data-p-disabled]="disabled"
                [attr.data-p-focused]="focused"
                [attr.data-pc-section]="'input'"
            >
                <ng-container *ngIf="checked()">
                    <ng-container *ngIf="!checkboxIconTemplate">
                        <span *ngIf="checkboxIcon" class="p-checkbox-icon" [ngClass]="checkboxIcon" [attr.data-pc-section]="'icon'"></span>
                        <CheckIcon *ngIf="!checkboxIcon" [styleClass]="'p-checkbox-icon'" [attr.data-pc-section]="'icon'" />
                    </ng-container>
                    <span *ngIf="checkboxIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'icon'">
                        <ng-template *ngTemplateOutlet="checkboxIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <label
            (click)="onClick($event, input, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
        >
            {{ label }}</label
        >
    `, providers: [CHECKBOX_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: i1.PrimeNGConfig }], propDecorators: { value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], binary: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], label: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], tabindex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], inputId: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], labelStyleClass: [{
                type: Input
            }], formControl: [{
                type: Input
            }], checkboxIcon: [{
                type: Input
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], trueValue: [{
                type: Input
            }], falseValue: [{
                type: Input
            }], variant: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], inputViewChild: [{
                type: ViewChild,
                args: ['input']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class CheckboxModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: CheckboxModule, declarations: [Checkbox], imports: [CommonModule, AutoFocusModule, CheckIcon], exports: [Checkbox, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CheckboxModule, imports: [CommonModule, AutoFocusModule, CheckIcon, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AutoFocusModule, CheckIcon],
                    exports: [Checkbox, SharedModule],
                    declarations: [Checkbox]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule };
//# sourceMappingURL=primeng-checkbox.mjs.map
