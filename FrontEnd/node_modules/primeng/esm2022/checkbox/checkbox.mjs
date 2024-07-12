import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, NgModule, numberAttribute, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { CheckIcon } from 'primeng/icons/check';
import { ObjectUtils } from 'primeng/utils';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/autofocus";
export const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
/**
 * Checkbox is an extension to standard checkbox element with theming.
 * @group Components
 */
export class Checkbox {
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
export class CheckboxModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFVBQVUsRUFFVixLQUFLLEVBQ0wsUUFBUSxFQUNSLGVBQWUsRUFDZixNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFpQixNQUFNLGFBQWEsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRzVDLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBQ0Y7OztHQUdHO0FBK0VILE1BQU0sT0FBTyxRQUFRO0lBdUlOO0lBQ1U7SUFDVjtJQXhJWDs7O09BR0c7SUFDTSxLQUFLLENBQU07SUFDcEI7OztPQUdHO0lBQ00sSUFBSSxDQUFxQjtJQUNsQzs7O09BR0c7SUFDcUMsUUFBUSxDQUFzQjtJQUN0RTs7O09BR0c7SUFDcUMsTUFBTSxDQUFzQjtJQUNwRTs7O09BR0c7SUFDTSxL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S0UsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxTQUFTO3NCQUFoRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUs3QixTQUFTO3NCQUFqQixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQU1JLFFBQVE7c0JBQWpCLE1BQU07Z0JBTUcsT0FBTztzQkFBaEIsTUFBTTtnQkFNRyxNQUFNO3NCQUFmLE1BQU07Z0JBRWEsY0FBYztzQkFBakMsU0FBUzt1QkFBQyxPQUFPO2dCQUVjLFNBQVM7c0JBQXhDLGVBQWU7dUJBQUMsYUFBYTs7QUE0SGxDLE1BQU0sT0FBTyxjQUFjO3VHQUFkLGNBQWM7d0dBQWQsY0FBYyxpQkF0UGQsUUFBUSxhQWtQUCxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsYUFsUHpDLFFBQVEsRUFtUEcsWUFBWTt3R0FHdkIsY0FBYyxZQUpiLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUM5QixZQUFZOzsyRkFHdkIsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztvQkFDakMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIGJvb2xlYW5BdHRyaWJ1dGUsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEluamVjdG9yLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIG51bWJlckF0dHJpYnV0ZSxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSwgUHJpbWVOR0NvbmZpZyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEF1dG9Gb2N1c01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXV0b2ZvY3VzJztcbmltcG9ydCB7IENoZWNrSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvY2hlY2snO1xuaW1wb3J0IHsgTnVsbGFibGUgfSBmcm9tICdwcmltZW5nL3RzLWhlbHBlcnMnO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IENoZWNrYm94Q2hhbmdlRXZlbnQgfSBmcm9tICcuL2NoZWNrYm94LmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQ2hlY2tib3ggaXMgYW4gZXh0ZW5zaW9uIHRvIHN0YW5kYXJkIGNoZWNrYm94IGVsZW1lbnQgd2l0aCB0aGVtaW5nLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgJ3AtY2hlY2tib3ggcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwLWNoZWNrYm94LWNoZWNrZWQnOiBjaGVja2VkKCksXG4gICAgICAgICAgICAgICAgJ3AtY2hlY2tib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAncC1jaGVja2JveC1mb2N1c2VkJzogZm9jdXNlZCxcbiAgICAgICAgICAgICAgICAncC12YXJpYW50LWZpbGxlZCc6IHZhcmlhbnQgPT09ICdmaWxsZWQnIHx8IGNvbmZpZy5pbnB1dFN0eWxlKCkgPT09ICdmaWxsZWQnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIFtjbGFzc109XCJzdHlsZUNsYXNzXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcGMtbmFtZV09XCInY2hlY2tib3gnXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCIncm9vdCdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInaGlkZGVuSW5wdXRXcmFwcGVyJ1wiIFthdHRyLmRhdGEtcC1oaWRkZW4tYWNjZXNzaWJsZV09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJpbnB1dElkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImNoZWNrZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25JbnB1dEZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidoaWRkZW5JbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICBwQXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncC1oaWdobGlnaHQnOiBjaGVja2VkKCksICdwLWRpc2FibGVkJzogZGlzYWJsZWQsICdwLWZvY3VzJzogZm9jdXNlZCB9XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQsIGlucHV0LCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWhpZ2hsaWdodF09XCJjaGVja2VkKClcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtcC1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWZvY3VzZWRdPVwiZm9jdXNlZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidpbnB1dCdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGVja2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGVja2JveEljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGVja2JveEljb25cIiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cImNoZWNrYm94SWNvblwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInaWNvbidcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uICpuZ0lmPVwiIWNoZWNrYm94SWNvblwiIFtzdHlsZUNsYXNzXT1cIidwLWNoZWNrYm94LWljb24nXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidpY29uJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoZWNrYm94SWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2ljb24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjaGVja2JveEljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQsIGlucHV0LCB0cnVlKVwiXG4gICAgICAgICAgICBbY2xhc3NdPVwibGFiZWxTdHlsZUNsYXNzXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3AtY2hlY2tib3gtbGFiZWwnOiB0cnVlLCAncC1jaGVja2JveC1sYWJlbC1hY3RpdmUnOiBjaGVja2VkKCksICdwLWRpc2FibGVkJzogZGlzYWJsZWQsICdwLWNoZWNrYm94LWxhYmVsLWZvY3VzJzogZm9jdXNlZCB9XCJcbiAgICAgICAgICAgICpuZ0lmPVwibGFiZWxcIlxuICAgICAgICAgICAgW2F0dHIuZm9yXT1cImlucHV0SWRcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidsYWJlbCdcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyBsYWJlbCB9fTwvbGFiZWxcbiAgICAgICAgPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGNoZWNrYm94IGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBlbGVtZW50IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQWxsb3dzIHRvIHNlbGVjdCBhIGJvb2xlYW4gdmFsdWUgaW5zdGVhZCBvZiBtdWx0aXBsZSB2YWx1ZXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGJpbmFyeTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY2hlY2tib3guXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBFc3RhYmxpc2hlcyByZWxhdGlvbnNoaXBzIGJldHdlZW4gdGhlIGNvbXBvbmVudCBhbmQgbGFiZWwocykgd2hlcmUgaXRzIHZhbHVlIHNob3VsZCBiZSBvbmUgb3IgbW9yZSBlbGVtZW50IElEcy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGVmaW5lIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRhYmJpbmcgb3JkZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVyIG9mIHRoZSBmb2N1cyBpbnB1dCB0byBtYXRjaCBhIGxhYmVsIGRlZmluZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBsYWJlbC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsYWJlbFN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBGb3JtIGNvbnRyb2wgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEljb24gY2xhc3Mgb2YgdGhlIGNoZWNrYm94IGljb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY2hlY2tib3hJY29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGNhbm5vdCBiZSBlZGl0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgY2hlY2tib3ggbXVzdCBiZSBjaGVja2VkIGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXF1aXJlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgZ2V0IGZvY3VzIG9uIGxvYWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGF1dG9mb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBWYWx1ZSBpbiBjaGVja2VkIHN0YXRlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRydWVWYWx1ZTogYW55ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBWYWx1ZSBpbiB1bmNoZWNrZWQgc3RhdGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmFsc2VWYWx1ZTogYW55ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBpbnB1dCB2YXJpYW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmFyaWFudDogJ2ZpbGxlZCcgfCAnb3V0bGluZWQnID0gJ291dGxpbmVkJztcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gdmFsdWUgY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7Q2hlY2tib3hDaGFuZ2VFdmVudH0gZXZlbnQgLSBDdXN0b20gdmFsdWUgY2hhbmdlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPENoZWNrYm94Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSByZWNlaXZlcyBmb2N1cy5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIEJyb3dzZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBsb3NlcyBmb2N1cy5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIEJyb3dzZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBOdWxsYWJsZTxRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4+O1xuXG4gICAgY2hlY2tib3hJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBtb2RlbDogYW55O1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgKSB7fVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCwgY2hlY2tib3gsIGZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCk7XG5cbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICBjaGVja2JveC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWwoZXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld01vZGVsVmFsdWU7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogV2hlbiBgZm9ybUNvbnRyb2xOYW1lYCBvciBgZm9ybUNvbnRyb2xgIGlzIHVzZWQgLSBgd3JpdGVWYWx1ZWAgaXMgbm90IGNhbGxlZCBhZnRlciBjb250cm9sIGNoYW5nZXMuXG4gICAgICAgICAqIE90aGVyd2lzZSBpdCBpcyBjYXVzaW5nIG11bHRpcGxlIHJlZmVyZW5jZXMgdG8gdGhlIGFjdHVhbCB2YWx1ZTogdGhlcmUgaXMgb25lIGFycmF5IHJlZmVyZW5jZSBpbnNpZGUgdGhlIGNvbXBvbmVudCBhbmQgYW5vdGhlciBvbmUgaW4gdGhlIGNvbnRyb2wgdmFsdWUuXG4gICAgICAgICAqIGBzZWxmQ29udHJvbGAgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBvZiByZWZlcmVuY2VzLCBpdCBpcyBtYWRlIHRvIGF2b2lkIHJlZmVyZW5jZSBsb3NzLlxuICAgICAgICAgKiAqL1xuICAgICAgICBjb25zdCBzZWxmQ29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0PE5nQ29udHJvbCB8IG51bGw+KE5nQ29udHJvbCwgbnVsbCwgeyBvcHRpb25hbDogdHJ1ZSwgc2VsZjogdHJ1ZSB9KTtcblxuICAgICAgICBjb25zdCBjdXJyZW50TW9kZWxWYWx1ZSA9IHNlbGZDb250cm9sICYmICF0aGlzLmZvcm1Db250cm9sID8gc2VsZkNvbnRyb2wudmFsdWUgOiB0aGlzLm1vZGVsO1xuXG4gICAgICAgIGlmICghdGhpcy5iaW5hcnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQoKSkgbmV3TW9kZWxWYWx1ZSA9IGN1cnJlbnRNb2RlbFZhbHVlLmZpbHRlcigodmFsKSA9PiAhT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgdGhpcy52YWx1ZSkpO1xuICAgICAgICAgICAgZWxzZSBuZXdNb2RlbFZhbHVlID0gY3VycmVudE1vZGVsVmFsdWUgPyBbLi4uY3VycmVudE1vZGVsVmFsdWUsIHRoaXMudmFsdWVdIDogW3RoaXMudmFsdWVdO1xuXG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UobmV3TW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3TW9kZWxWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG5ld01vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TW9kZWxWYWx1ZSA9IHRoaXMuY2hlY2tlZCgpID8gdGhpcy5mYWxzZVZhbHVlIDogdGhpcy50cnVlVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3TW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZShuZXdNb2RlbFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGNoZWNrZWQ6IG5ld01vZGVsVmFsdWUsIG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbklucHV0Qmx1cihldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbmFyeSA/IHRoaXMubW9kZWwgPT09IHRoaXMudHJ1ZVZhbHVlIDogT2JqZWN0VXRpbHMuY29udGFpbnModGhpcy52YWx1ZSwgdGhpcy5tb2RlbCk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEF1dG9Gb2N1c01vZHVsZSwgQ2hlY2tJY29uXSxcbiAgICBleHBvcnRzOiBbQ2hlY2tib3gsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ2hlY2tib3hdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94TW9kdWxlIHt9XG4iXX0=