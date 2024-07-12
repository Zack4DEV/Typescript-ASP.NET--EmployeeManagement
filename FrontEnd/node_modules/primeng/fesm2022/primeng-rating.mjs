import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, signal, booleanAttribute, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from 'primeng/api';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { BanIcon } from 'primeng/icons/ban';
import { StarIcon } from 'primeng/icons/star';
import { StarFillIcon } from 'primeng/icons/starfill';
import { DomHandler } from 'primeng/dom';
import { UniqueComponentId } from 'primeng/utils';
import * as i3 from 'primeng/autofocus';
import { AutoFocusModule } from 'primeng/autofocus';

const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Rating),
    multi: true
};
/**
 * Rating is an extension to standard radio button element with theming.
 * @group Components
 */
class Rating {
    cd;
    config;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When present, changing the value is not possible.
     * @group Props
     */
    readonly;
    /**
     * Number of stars.
     * @group Props
     */
    stars = 5;
    /**
     * When specified a cancel icon is displayed to allow removing the value.
     * @group Props
     */
    cancel = true;
    /**
     * Style class of the on icon.
     * @group Props
     */
    iconOnClass;
    /**
     * Inline style of the on icon.
     * @group Props
     */
    iconOnStyle;
    /**
     * Style class of the off icon.
     * @group Props
     */
    iconOffClass;
    /**
     * Inline style of the off icon.
     * @group Props
     */
    iconOffStyle;
    /**
     * Style class of the cancel icon.
     * @group Props
     */
    iconCancelClass;
    /**
     * Inline style of the cancel icon.
     * @group Props
     */
    iconCancelStyle;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Emitted on value change.
     * @param {RatingRateEvent} value - Custom rate event.
     * @group Emits
     */
    onRate = new EventEmitter();
    /**
     * Emitted when the rating is cancelled.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onCancel = new EventEmitter();
    /**
     * Emitted when the rating receives focus.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Emitted when the rating loses focus.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    templates;
    onIconTemplate;
    offIconTemplate;
    cancelIconTemplate;
    value;
    onModelChange = () => { };
    onModelTouched = () => { };
    starsArray;
    isFocusVisibleItem = true;
    focusedOptionIndex = signal(-1);
    name;
    constructor(cd, config) {
        this.cd = cd;
        this.config = config;
    }
    ngOnInit() {
        this.name = this.name || UniqueComponentId();
        this.starsArray = [];
        for (let i = 0; i < this.stars; i++) {
            this.starsArray[i] = i;
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'onicon':
                    this.onIconTemplate = item.template;
                    break;
                case 'officon':
                    this.offIconTemplate = item.template;
                    break;
                case 'cancelicon':
                    this.cancelIconTemplate = item.template;
                    break;
            }
        });
    }
    onOptionClick(event, value) {
        if (!this.readonly && !this.disabled) {
            this.onOptionSelect(event, value);
            this.isFocusVisibleItem = false;
            const firstFocusableEl = DomHandler.getFirstFocusableElement(event.currentTarget, '');
            firstFocusableEl && DomHandler.focus(firstFocusableEl);
        }
    }
    onOptionSelect(event, value) {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
    }
    onChange(event, value) {
        this.onOptionSelect(event, value);
        this.isFocusVisibleItem = true;
    }
    onInputBlur(event) {
        this.focusedOptionIndex.set(-1);
        this.onBlur.emit(event);
    }
    onInputFocus(event, value) {
        this.focusedOptionIndex.set(value);
        this.onFocus.emit(event);
    }
    updateModel(event, value) {
        this.value = value;
        this.onModelChange(this.value);
        this.onModelTouched();
        if (!value) {
            this.onCancel.emit();
        }
        else {
            this.onRate.emit({
                originalEvent: event,
                value
            });
        }
    }
    cancelAriaLabel() {
        return this.config.translation.clear;
    }
    starAriaLabel(value) {
        return value === 1 ? this.config.translation.aria.star : this.config.translation.aria.stars.replace(/{star}/g, value);
    }
    getIconTemplate(i) {
        return !this.value || i >= this.value ? this.offIconTemplate : this.onIconTemplate;
    }
    writeValue(value) {
        this.value = value;
        this.cd.detectChanges();
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
    get isCustomIcon() {
        return this.templates && this.templates.length > 0;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Rating, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: Rating, selector: "p-rating", inputs: { disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], stars: ["stars", "stars", numberAttribute], cancel: ["cancel", "cancel", booleanAttribute], iconOnClass: "iconOnClass", iconOnStyle: "iconOnStyle", iconOffClass: "iconOffClass", iconOffStyle: "iconOffStyle", iconCancelClass: "iconCancelClass", iconCancelStyle: "iconCancelStyle", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { onRate: "onRate", onCancel: "onCancel", onFocus: "onFocus", onBlur: "onBlur" }, host: { classAttribute: "p-element" }, providers: [RATING_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div class="p-rating" [ngClass]="{ 'p-readonly': readonly, 'p-disabled': disabled }" [attr.data-pc-name]="'rating'" [attr.data-pc-section]="'root'">
            <ng-container *ngIf="!isCustomIcon; else customTemplate">
                <div *ngIf="cancel" [attr.data-pc-section]="'cancelItem'" (click)="onOptionClick($event, 0)" [ngClass]="{ 'p-focus': focusedOptionIndex() === 0 && isFocusVisibleItem }" class="p-rating-item p-rating-cancel-item">
                    <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            type="radio"
                            value="0"
                            [name]="name"
                            [checked]="value === 0"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [attr.aria-label]="cancelAriaLabel()"
                            (focus)="onInputFocus($event, 0)"
                            (blur)="onInputBlur($event)"
                            (change)="onChange($event, 0)"
                            pAutoFocus
                            [autofocus]="autofocus"
                        />
                    </span>
                    <span *ngIf="iconCancelClass" class="p-rating-icon p-rating-cancel" [ngClass]="iconCancelClass" [ngStyle]="iconCancelStyle"></span>
                    <BanIcon *ngIf="!iconCancelClass" [styleClass]="'p-rating-icon p-rating-cancel'" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'" />
                </div>
                <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
                    <div class="p-rating-item" [ngClass]="{ 'p-rating-item-active': star + 1 <= value, 'p-focus': star + 1 === focusedOptionIndex() && isFocusVisibleItem }" (click)="onOptionClick($event, star + 1)">
                        <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                            <input
                                type="radio"
                                value="0"
                                [name]="name"
                                [checked]="value === 0"
                                [disabled]="disabled"
                                [readonly]="readonly"
                                [attr.aria-label]="starAriaLabel(star + 1)"
                                (focus)="onInputFocus($event, star + 1)"
                                (blur)="onInputBlur($event)"
                                (change)="onChange($event, star + 1)"
                                pAutoFocus
                                [autofocus]="autofocus"
                            />
                        </span>
                        <ng-container *ngIf="!value || i >= value">
                            <span class="p-rating-icon" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                            <StarIcon *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [styleClass]="'p-rating-icon'" [attr.data-pc-section]="'offIcon'" />
                        </ng-container>
                        <ng-container *ngIf="value && i < value">
                            <span class="p-rating-icon p-rating-icon-active" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                            <StarFillIcon *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [styleClass]="'p-rating-icon p-rating-icon-active'" [attr.data-pc-section]="'onIcon'" />
                        </ng-container>
                    </div>
                </ng-template>
            </ng-container>
            <ng-template #customTemplate>
                <span *ngIf="cancel" (click)="onOptionClick($event, 0)" class="p-rating-icon p-rating-cancel" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'">
                    <ng-container *ngTemplateOutlet="cancelIconTemplate"></ng-container>
                </span>
                <span *ngFor="let star of starsArray; let i = index" class="p-rating-icon" (click)="onOptionClick($event, star + 1)" [attr.data-pc-section]="'onIcon'">
                    <ng-container *ngTemplateOutlet="getIconTemplate(i)"></ng-container>
                </span>
            </ng-template>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-rating{display:inline-flex;position:relative;align-items:center}.p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i3.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => StarFillIcon), selector: "StarFillIcon" }, { kind: "component", type: i0.forwardRef(() => StarIcon), selector: "StarIcon" }, { kind: "component", type: i0.forwardRef(() => BanIcon), selector: "BanIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Rating, decorators: [{
            type: Component,
            args: [{ selector: 'p-rating', template: `
        <div class="p-rating" [ngClass]="{ 'p-readonly': readonly, 'p-disabled': disabled }" [attr.data-pc-name]="'rating'" [attr.data-pc-section]="'root'">
            <ng-container *ngIf="!isCustomIcon; else customTemplate">
                <div *ngIf="cancel" [attr.data-pc-section]="'cancelItem'" (click)="onOptionClick($event, 0)" [ngClass]="{ 'p-focus': focusedOptionIndex() === 0 && isFocusVisibleItem }" class="p-rating-item p-rating-cancel-item">
                    <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            type="radio"
                            value="0"
                            [name]="name"
                            [checked]="value === 0"
                            [disabled]="disabled"
                            [readonly]="readonly"
                            [attr.aria-label]="cancelAriaLabel()"
                            (focus)="onInputFocus($event, 0)"
                            (blur)="onInputBlur($event)"
                            (change)="onChange($event, 0)"
                            pAutoFocus
                            [autofocus]="autofocus"
                        />
                    </span>
                    <span *ngIf="iconCancelClass" class="p-rating-icon p-rating-cancel" [ngClass]="iconCancelClass" [ngStyle]="iconCancelStyle"></span>
                    <BanIcon *ngIf="!iconCancelClass" [styleClass]="'p-rating-icon p-rating-cancel'" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'" />
                </div>
                <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
                    <div class="p-rating-item" [ngClass]="{ 'p-rating-item-active': star + 1 <= value, 'p-focus': star + 1 === focusedOptionIndex() && isFocusVisibleItem }" (click)="onOptionClick($event, star + 1)">
                        <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                            <input
                                type="radio"
                                value="0"
                                [name]="name"
                                [checked]="value === 0"
                                [disabled]="disabled"
                                [readonly]="readonly"
                                [attr.aria-label]="starAriaLabel(star + 1)"
                                (focus)="onInputFocus($event, star + 1)"
                                (blur)="onInputBlur($event)"
                                (change)="onChange($event, star + 1)"
                                pAutoFocus
                                [autofocus]="autofocus"
                            />
                        </span>
                        <ng-container *ngIf="!value || i >= value">
                            <span class="p-rating-icon" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                            <StarIcon *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [styleClass]="'p-rating-icon'" [attr.data-pc-section]="'offIcon'" />
                        </ng-container>
                        <ng-container *ngIf="value && i < value">
                            <span class="p-rating-icon p-rating-icon-active" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                            <StarFillIcon *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [styleClass]="'p-rating-icon p-rating-icon-active'" [attr.data-pc-section]="'onIcon'" />
                        </ng-container>
                    </div>
                </ng-template>
            </ng-container>
            <ng-template #customTemplate>
                <span *ngIf="cancel" (click)="onOptionClick($event, 0)" class="p-rating-icon p-rating-cancel" [ngStyle]="iconCancelStyle" [attr.data-pc-section]="'cancelIcon'">
                    <ng-container *ngTemplateOutlet="cancelIconTemplate"></ng-container>
                </span>
                <span *ngFor="let star of starsArray; let i = index" class="p-rating-icon" (click)="onOptionClick($event, star + 1)" [attr.data-pc-section]="'onIcon'">
                    <ng-container *ngTemplateOutlet="getIconTemplate(i)"></ng-container>
                </span>
            </ng-template>
        </div>
    `, providers: [RATING_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-rating{display:inline-flex;position:relative;align-items:center}.p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], stars: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], cancel: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], iconOnClass: [{
                type: Input
            }], iconOnStyle: [{
                type: Input
            }], iconOffClass: [{
                type: Input
            }], iconOffStyle: [{
                type: Input
            }], iconCancelClass: [{
                type: Input
            }], iconCancelStyle: [{
                type: Input
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], onRate: [{
                type: Output
            }], onCancel: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class RatingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RatingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: RatingModule, declarations: [Rating], imports: [CommonModule, AutoFocusModule, StarFillIcon, StarIcon, BanIcon], exports: [Rating, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RatingModule, imports: [CommonModule, AutoFocusModule, StarFillIcon, StarIcon, BanIcon, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: RatingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AutoFocusModule, StarFillIcon, StarIcon, BanIcon],
                    exports: [Rating, SharedModule],
                    declarations: [Rating]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { RATING_VALUE_ACCESSOR, Rating, RatingModule };
//# sourceMappingURL=primeng-rating.mjs.map
