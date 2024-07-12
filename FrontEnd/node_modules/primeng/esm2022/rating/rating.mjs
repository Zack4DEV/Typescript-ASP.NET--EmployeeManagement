import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, NgModule, numberAttribute, Output, signal, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { BanIcon } from 'primeng/icons/ban';
import { StarIcon } from 'primeng/icons/star';
import { StarFillIcon } from 'primeng/icons/starfill';
import { DomHandler } from 'primeng/dom';
import { UniqueComponentId } from 'primeng/utils';
import { AutoFocusModule } from 'primeng/autofocus';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/autofocus";
export const RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Rating),
    multi: true
};
/**
 * Rating is an extension to standard radio button element with theming.
 * @group Components
 */
export class Rating {
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
export class RatingModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFVLE1BQU0sRUFBYSxNQUFNLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeFAsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBaUIsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBRXBELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFRO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDckMsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBQ0Y7OztHQUdHO0FBeUVILE1BQU0sT0FBTyxNQUFNO0lBd0dIO0lBQ0E7SUF4R1o7OztPQUdHO0lBQ3FDLFFBQVEsQ0FBc0I7SUFDdEU7OztPQUdHO0lBQ3FDLFFBQVEsQ0FBc0I7SUFDdEU7OztPQUdHO0lBQ29DLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDekQ7OztPQUdHO0lBQ3FDLE1BQU0sR0FBWSxJQUFJLENBQUM7SUFDL0Q7OztPQUdHO0lBQ00sV0FBVyxDQUFxQjtJQUN6Qzs7O09BR0c7SUFDTSxXQUFXLENBQThDO0lBQ2xFOzs7T0FHRztJQUNNLFlBQVksQ0FBcUI7SUFDMUM7OztPQUdHO0lBQ00sWUFBWSxDQUE4QztJQUNuRTs7O09BR0c7SUFDTSxlQUFlLENBQXFCO0lBQzdDOzs7T0FHRztJQUNNLGVBQWUsQ0FBOEM7SUFDdEU7OztPQUdHO0lBQ3FDLFNBQVMsQ0FBc0I7SUFDdkU7Ozs7T0FJRztJQUNPLE1BQU0sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFDdEY7Ozs7T0FJRztJQUNPLFFBQVEsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUNwRTs7OztPQUlHO0lBQ08sT0FBTyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzdFOzs7O09BSUc7SUFDTyxNQUFNLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFFNUMsU0FBUyxDQUE0QjtJQUVyRSxjQUFjLENBQTZCO0lBRTNDLGVBQWUsQ0FBNkI7SUFFNUMsa0JBQWtCLENBQTZCO0lBRS9DLEtBQUssQ0FBbUI7SUFFeEIsYUFBYSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVuQyxjQUFjLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRTdCLFVBQVUsQ0FBcUI7SUFFdEMsa0JBQWtCLEdBQVksSUFBSSxDQUFDO0lBRW5DLGtCQUFrQixHQUFHLE1BQU0sQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhDLElBQUksQ0FBcUI7SUFFekIsWUFDWSxFQUFxQixFQUNyQixNQUFxQjtRQURyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzlCLENBQUM7SUFFSixRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDNUIsUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxRQUFRO29CQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDcEMsTUFBTTtnQkFFVixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNyQyxNQUFNO2dCQUVWLEtBQUssWUFBWTtvQkFDYixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDeEMsTUFBTTtZQUNkLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXRGLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLEtBQUs7YUFDUixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDZixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQVM7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDdkYsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQVk7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO3VHQW5OUSxNQUFNOzJGQUFOLE1BQU0scUVBS0ssZ0JBQWdCLHNDQUtoQixnQkFBZ0IsNkJBS2hCLGVBQWUsZ0NBS2YsZ0JBQWdCLHFPQW1DaEIsZ0JBQWdCLGtKQS9EekIsQ0FBQyxxQkFBcUIsQ0FBQyxvREF5RmpCLGFBQWEsNkJBdkpwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZEVCxnaUNBZ093QyxZQUFZLDhFQUFFLFFBQVEsMEVBQUUsT0FBTzs7MkZBdk4vRCxNQUFNO2tCQXhFbEIsU0FBUzsrQkFDSSxVQUFVLFlBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2RFQsYUFDVSxDQUFDLHFCQUFxQixDQUFDLG1CQUNqQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtrSEFPdUMsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUtDLEtBQUs7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUtHLE1BQU07c0JBQTdDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBSzdCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBS0csV0FBVztzQkFBbkIsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS0csZUFBZTtzQkFBdkIsS0FBSztnQkFLRyxlQUFlO3NCQUF2QixLQUFLO2dCQUtrQyxTQUFTO3NCQUFoRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU01QixNQUFNO3NCQUFmLE1BQU07Z0JBTUcsUUFBUTtzQkFBakIsTUFBTTtnQkFNRyxPQUFPO3NCQUFoQixNQUFNO2dCQU1HLE1BQU07c0JBQWYsTUFBTTtnQkFFeUIsU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhOztBQTBJbEMsTUFBTSxPQUFPLFlBQVk7dUdBQVosWUFBWTt3R0FBWixZQUFZLGlCQTNOWixNQUFNLGFBdU5MLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLGFBdk4vRCxNQUFNLEVBd05HLFlBQVk7d0dBR3JCLFlBQVksWUFKWCxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUN0RCxZQUFZOzsyRkFHckIsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO29CQUN6RSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUMvQixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBudW1iZXJBdHRyaWJ1dGUsIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsIHNpZ25hbCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBCYW5JY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9iYW4nO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL3N0YXInO1xuaW1wb3J0IHsgU3RhckZpbGxJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9zdGFyZmlsbCc7XG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG5pbXBvcnQgeyBSYXRpbmdSYXRlRXZlbnQgfSBmcm9tICcuL3JhdGluZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFVuaXF1ZUNvbXBvbmVudElkIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBBdXRvRm9jdXNNb2R1bGUgfSBmcm9tICdwcmltZW5nL2F1dG9mb2N1cyc7XG5cbmV4cG9ydCBjb25zdCBSQVRJTkdfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmcpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBSYXRpbmcgaXMgYW4gZXh0ZW5zaW9uIHRvIHN0YW5kYXJkIHJhZGlvIGJ1dHRvbiBlbGVtZW50IHdpdGggdGhlbWluZy5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1yYXRpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLXJhdGluZ1wiIFtuZ0NsYXNzXT1cInsgJ3AtcmVhZG9ubHknOiByZWFkb25seSwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIidyYXRpbmcnXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0N1c3RvbUljb247IGVsc2UgY3VzdG9tVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2FuY2VsXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidjYW5jZWxJdGVtJ1wiIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudCwgMClcIiBbbmdDbGFzc109XCJ7ICdwLWZvY3VzJzogZm9jdXNlZE9wdGlvbkluZGV4KCkgPT09IDAgJiYgaXNGb2N1c1Zpc2libGVJdGVtIH1cIiBjbGFzcz1cInAtcmF0aW5nLWl0ZW0gcC1yYXRpbmctY2FuY2VsLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCIgW2F0dHIuZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJ2YWx1ZSA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY2FuY2VsQXJpYUxhYmVsKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50LCAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQsIDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwQXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImljb25DYW5jZWxDbGFzc1wiIGNsYXNzPVwicC1yYXRpbmctaWNvbiBwLXJhdGluZy1jYW5jZWxcIiBbbmdDbGFzc109XCJpY29uQ2FuY2VsQ2xhc3NcIiBbbmdTdHlsZV09XCJpY29uQ2FuY2VsU3R5bGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCYW5JY29uICpuZ0lmPVwiIWljb25DYW5jZWxDbGFzc1wiIFtzdHlsZUNsYXNzXT1cIidwLXJhdGluZy1pY29uIHAtcmF0aW5nLWNhbmNlbCdcIiBbbmdTdHlsZV09XCJpY29uQ2FuY2VsU3R5bGVcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NhbmNlbEljb24nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwic3RhcnNBcnJheVwiIGxldC1zdGFyIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcmF0aW5nLWl0ZW1cIiBbbmdDbGFzc109XCJ7ICdwLXJhdGluZy1pdGVtLWFjdGl2ZSc6IHN0YXIgKyAxIDw9IHZhbHVlLCAncC1mb2N1cyc6IHN0YXIgKyAxID09PSBmb2N1c2VkT3B0aW9uSW5kZXgoKSAmJiBpc0ZvY3VzVmlzaWJsZUl0ZW0gfVwiIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudCwgc3RhciArIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIiBbYXR0ci5kYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwidmFsdWUgPT09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXJBcmlhTGFiZWwoc3RhciArIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQsIHN0YXIgKyAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudCwgc3RhciArIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcEF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmFsdWUgfHwgaSA+PSB2YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1yYXRpbmctaWNvblwiICpuZ0lmPVwiaWNvbk9mZkNsYXNzXCIgW25nU3R5bGVdPVwiaWNvbk9mZlN0eWxlXCIgW25nQ2xhc3NdPVwiaWNvbk9mZkNsYXNzXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidvZmZJY29uJ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gKm5nSWY9XCIhaWNvbk9mZkNsYXNzXCIgW25nU3R5bGVdPVwiaWNvbk9mZlN0eWxlXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtcmF0aW5nLWljb24nXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidvZmZJY29uJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWx1ZSAmJiBpIDwgdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtcmF0aW5nLWljb24gcC1yYXRpbmctaWNvbi1hY3RpdmVcIiAqbmdJZj1cImljb25PbkNsYXNzXCIgW25nU3R5bGVdPVwiaWNvbk9uU3R5bGVcIiBbbmdDbGFzc109XCJpY29uT25DbGFzc1wiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInb25JY29uJ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhckZpbGxJY29uICpuZ0lmPVwiIWljb25PbkNsYXNzXCIgW25nU3R5bGVdPVwiaWNvbk9uU3R5bGVcIiBbc3R5bGVDbGFzc109XCIncC1yYXRpbmctaWNvbiBwLXJhdGluZy1pY29uLWFjdGl2ZSdcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ29uSWNvbidcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tVGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjYW5jZWxcIiAoY2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQsIDApXCIgY2xhc3M9XCJwLXJhdGluZy1pY29uIHAtcmF0aW5nLWNhbmNlbFwiIFtuZ1N0eWxlXT1cImljb25DYW5jZWxTdHlsZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY2FuY2VsSWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNhbmNlbEljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyc0FycmF5OyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJwLXJhdGluZy1pY29uXCIgKGNsaWNrKT1cIm9uT3B0aW9uQ2xpY2soJGV2ZW50LCBzdGFyICsgMSlcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ29uSWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdldEljb25UZW1wbGF0ZShpKVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbUkFUSU5HX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3JhdGluZy5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgZWxlbWVudCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgY2hhbmdpbmcgdGhlIHZhbHVlIGlzIG5vdCBwb3NzaWJsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHN0YXJzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHN0YXJzOiBudW1iZXIgPSA1O1xuICAgIC8qKlxuICAgICAqIFdoZW4gc3BlY2lmaWVkIGEgY2FuY2VsIGljb24gaXMgZGlzcGxheWVkIHRvIGFsbG93IHJlbW92aW5nIHRoZSB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgY2FuY2VsOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgb24gaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpY29uT25DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgb24gaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpY29uT25TdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgb2ZmIGljb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWNvbk9mZkNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBvZmYgaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpY29uT2ZmU3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNhbmNlbCBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGljb25DYW5jZWxDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY2FuY2VsIGljb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWNvbkNhbmNlbFN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYXV0b21hdGljYWxseSBnZXQgZm9jdXMgb24gbG9hZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b2ZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgb24gdmFsdWUgY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7UmF0aW5nUmF0ZUV2ZW50fSB2YWx1ZSAtIEN1c3RvbSByYXRlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblJhdGU6IEV2ZW50RW1pdHRlcjxSYXRpbmdSYXRlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXRpbmdSYXRlRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIHRoZSByYXRpbmcgaXMgY2FuY2VsbGVkLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IHZhbHVlIC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIHJlY2VpdmVzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IHZhbHVlIC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIGxvc2VzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IHZhbHVlIC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPjtcblxuICAgIG9uSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIG9mZkljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBjYW5jZWxJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgdmFsdWU6IE51bGxhYmxlPG51bWJlcj47XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgc3RhcnNBcnJheTogTnVsbGFibGU8bnVtYmVyW10+O1xuXG4gICAgaXNGb2N1c1Zpc2libGVJdGVtOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGZvY3VzZWRPcHRpb25JbmRleCA9IHNpZ25hbDxudW1iZXI+KC0xKTtcblxuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBjb25maWc6IFByaW1lTkdDb25maWdcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgICAgIHRoaXMuc3RhcnNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdGFyc0FycmF5W2ldID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29uaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25JY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ29mZmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZkljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2FuY2VsaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsSWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkb25seSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzVmlzaWJsZUl0ZW0gPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlRWwgPSBEb21IYW5kbGVyLmdldEZpcnN0Rm9jdXNhYmxlRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCAnJyk7XG5cbiAgICAgICAgICAgIGZpcnN0Rm9jdXNhYmxlRWwgJiYgRG9tSGFuZGxlci5mb2N1cyhmaXJzdEZvY3VzYWJsZUVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0KGV2ZW50LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQodmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCB2YWx1ZSB8fCBudWxsKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShldmVudCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdmFsdWUpO1xuICAgICAgICB0aGlzLmlzRm9jdXNWaXNpYmxlSXRlbSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEZvY3VzKGV2ZW50LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQodmFsdWUpO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWwoZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uUmF0ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5jZWxBcmlhTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5jbGVhcjtcbiAgICB9XG5cbiAgICBzdGFyQXJpYUxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gMSA/IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmFyaWEuc3RhciA6IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmFyaWEuc3RhcnMucmVwbGFjZSgve3N0YXJ9L2csIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRJY29uVGVtcGxhdGUoaTogbnVtYmVyKTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj4ge1xuICAgICAgICByZXR1cm4gIXRoaXMudmFsdWUgfHwgaSA+PSB0aGlzLnZhbHVlID8gdGhpcy5vZmZJY29uVGVtcGxhdGUgOiB0aGlzLm9uSWNvblRlbXBsYXRlO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDdXN0b21JY29uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZXMgJiYgdGhpcy50ZW1wbGF0ZXMubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQXV0b0ZvY3VzTW9kdWxlLCBTdGFyRmlsbEljb24sIFN0YXJJY29uLCBCYW5JY29uXSxcbiAgICBleHBvcnRzOiBbUmF0aW5nLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1JhdGluZ11cbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nTW9kdWxlIHt9XG4iXX0=