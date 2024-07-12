import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, booleanAttribute, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from 'primeng/api';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { CheckIcon } from 'primeng/icons/check';
import { TimesIcon } from 'primeng/icons/times';
import * as i3 from 'primeng/autofocus';
import { AutoFocusModule } from 'primeng/autofocus';

const TRISTATECHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TriStateCheckbox),
    multi: true
};
/**
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 * @group Components
 */
class TriStateCheckbox {
    cd;
    config;
    constructor(cd, config) {
        this.cd = cd;
        this.config = config;
    }
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Name of the component.
     * @group Props
     */
    name;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
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
     * Label of the checkbox.
     * @group Props
     */
    label;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * Specifies the icon for checkbox true value.
     * @group Props
     */
    checkboxTrueIcon;
    /**
     * Specifies the icon for checkbox false value.
     * @group Props
     */
    checkboxFalseIcon;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Callback to invoke on value change.
     * @param {TriStateCheckboxChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    templates;
    checkIconTemplate;
    uncheckIconTemplate;
    focused;
    value;
    onModelChange = () => { };
    onModelTouched = () => { };
    onClick(event, input) {
        if (!this.disabled && !this.readonly) {
            this.toggle(event);
            this.focused = true;
            input.focus();
        }
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.toggle(event);
            event.preventDefault();
        }
    }
    toggle(event) {
        if (this.value == null || this.value == undefined)
            this.value = true;
        else if (this.value == true)
            this.value = false;
        else if (this.value == false)
            this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'checkicon':
                    this.checkIconTemplate = item.template;
                    break;
                case 'uncheckicon':
                    this.uncheckIconTemplate = item.template;
                    break;
            }
        });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cd.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: TriStateCheckbox, selector: "p-triStateCheckbox", inputs: { disabled: ["disabled", "disabled", booleanAttribute], name: "name", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", variant: "variant", tabindex: ["tabindex", "tabindex", numberAttribute], inputId: "inputId", style: "style", styleClass: "styleClass", label: "label", readonly: ["readonly", "readonly", booleanAttribute], checkboxTrueIcon: "checkboxTrueIcon", checkboxFalseIcon: "checkboxFalseIcon", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { onChange: "onChange" }, host: { classAttribute: "p-element" }, providers: [TRISTATECHECKBOX_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div
            [ngStyle]="style"
            [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused, 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' }"
            [class]="styleClass"
            (click)="onClick($event, input)"
            [attr.data-pc-name]="'tristatecheckbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [name]="name"
                    [attr.tabindex]="tabindex"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    (keydown)="onKeyDown($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    inputmode="none"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="value === true" [ngClass]="{ 'p-highlight': value != null, 'p-disabled': disabled, 'p-focus': focused }">
                <ng-container *ngIf="value === true">
                    <span *ngIf="checkboxTrueIcon" [ngClass]="checkboxTrueIcon" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'"></span>
                    <ng-container *ngIf="!checkboxTrueIcon">
                        <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.data-pc-section]="'checkIcon'" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="value === false">
                    <span *ngIf="checkboxFalseIcon" [ngClass]="checkboxFalseIcon" class="p-checkbox-icon" [attr.data-pc-section]="'uncheckIcon'"></span>
                    <ng-container *ngIf="!checkboxFalseIcon">
                        <TimesIcon [styleClass]="'p-checkbox-icon'" *ngIf="!uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'" />
                        <span class="p-checkbox-icon" *ngIf="uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'">
                            <ng-template *ngTemplateOutlet="uncheckIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event, input)" [ngClass]="{ 'p-checkbox-label-active': value != null, 'p-disabled': disabled, 'p-checkbox-label-focus': focused }" *ngIf="label" [attr.for]="inputId">{{ label }}</label>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i3.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-triStateCheckbox',
                    template: `
        <div
            [ngStyle]="style"
            [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused, 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' }"
            [class]="styleClass"
            (click)="onClick($event, input)"
            [attr.data-pc-name]="'tristatecheckbox'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    [name]="name"
                    [attr.tabindex]="tabindex"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    (keydown)="onKeyDown($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    inputmode="none"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="value === true" [ngClass]="{ 'p-highlight': value != null, 'p-disabled': disabled, 'p-focus': focused }">
                <ng-container *ngIf="value === true">
                    <span *ngIf="checkboxTrueIcon" [ngClass]="checkboxTrueIcon" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'"></span>
                    <ng-container *ngIf="!checkboxTrueIcon">
                        <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.data-pc-section]="'checkIcon'" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.data-pc-section]="'checkIcon'">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="value === false">
                    <span *ngIf="checkboxFalseIcon" [ngClass]="checkboxFalseIcon" class="p-checkbox-icon" [attr.data-pc-section]="'uncheckIcon'"></span>
                    <ng-container *ngIf="!checkboxFalseIcon">
                        <TimesIcon [styleClass]="'p-checkbox-icon'" *ngIf="!uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'" />
                        <span class="p-checkbox-icon" *ngIf="uncheckIconTemplate" [attr.data-pc-section]="'uncheckIcon'">
                            <ng-template *ngTemplateOutlet="uncheckIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event, input)" [ngClass]="{ 'p-checkbox-label-active': value != null, 'p-disabled': disabled, 'p-checkbox-label-focus': focused }" *ngIf="label" [attr.for]="inputId">{{ label }}</label>
    `,
                    providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], name: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], variant: [{
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
            }], label: [{
                type: Input
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], checkboxTrueIcon: [{
                type: Input
            }], checkboxFalseIcon: [{
                type: Input
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], onChange: [{
                type: Output
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class TriStateCheckboxModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckboxModule, declarations: [TriStateCheckbox], imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon], exports: [TriStateCheckbox, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckboxModule, imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TriStateCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule, AutoFocusModule, CheckIcon, TimesIcon],
                    exports: [TriStateCheckbox, SharedModule],
                    declarations: [TriStateCheckbox]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TRISTATECHECKBOX_VALUE_ACCESSOR, TriStateCheckbox, TriStateCheckboxModule };
//# sourceMappingURL=primeng-tristatecheckbox.mjs.map
