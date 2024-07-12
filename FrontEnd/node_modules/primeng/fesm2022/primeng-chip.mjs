import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, inject, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ContentChildren, NgModule } from '@angular/core';
import { PrimeNGConfig, TranslationKeys, PrimeTemplate, SharedModule } from 'primeng/api';
import { TimesCircleIcon } from 'primeng/icons/timescircle';

/**
 * Chip represents people using icons, labels and images.
 * @group Components
 */
class Chip {
    /**
     * Defines the text to display.
     * @group Props
     */
    label;
    /**
     * Defines the icon to display.
     * @group Props
     */
    icon;
    /**
     * Defines the image to display.
     * @group Props
     */
    image;
    /**
     * Alt attribute of the image.
     * @group Props
     */
    alt;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Whether to display a remove icon.
     * @group Props
     */
    removable = false;
    /**
     * Icon of the remove element.
     * @group Props
     */
    removeIcon;
    /**
     * Callback to invoke when a chip is removed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onRemove = new EventEmitter();
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError = new EventEmitter();
    config = inject(PrimeNGConfig);
    visible = true;
    removeIconTemplate;
    get removeAriaLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['removeLabel'];
    }
    templates;
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'removeicon':
                    this.removeIconTemplate = item.template;
                    break;
                default:
                    this.removeIconTemplate = item.template;
                    break;
            }
        });
    }
    containerClass() {
        return {
            'p-chip p-component': true,
            'p-chip-image': this.image != null
        };
    }
    close(event) {
        this.visible = false;
        this.onRemove.emit(event);
    }
    onKeydown(event) {
        if (event.key === 'Enter' || event.key === 'Backspace') {
            this.close(event);
        }
    }
    imageError(event) {
        this.onImageError.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Chip, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: Chip, selector: "p-chip", inputs: { label: "label", icon: "icon", image: "image", alt: "alt", style: "style", styleClass: "styleClass", removable: ["removable", "removable", booleanAttribute], removeIcon: "removeIcon" }, outputs: { onRemove: "onRemove", onImageError: "onImageError" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" *ngIf="visible" [attr.data-pc-name]="'chip'" [attr.aria-label]="label" [attr.data-pc-section]="'root'">
            <ng-content></ng-content>
            <img [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
            <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
            <div class="p-chip-text" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
            <ng-container *ngIf="removable">
                <ng-container *ngIf="!removeIconTemplate">
                    <span
                        tabindex="0"
                        *ngIf="removeIcon"
                        [class]="removeIcon"
                        [ngClass]="'pi-chip-remove-icon'"
                        [attr.data-pc-section]="'removeicon'"
                        (click)="close($event)"
                        (keydown)="onKeydown($event)"
                        [attr.aria-label]="removeAriaLabel"
                        role="button"
                    ></span>
                    <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'pi-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button" />
                </ng-container>
                <span *ngIf="removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="pi-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                    <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i1.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => TimesCircleIcon), selector: "TimesCircleIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Chip, decorators: [{
            type: Component,
            args: [{ selector: 'p-chip', template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" *ngIf="visible" [attr.data-pc-name]="'chip'" [attr.aria-label]="label" [attr.data-pc-section]="'root'">
            <ng-content></ng-content>
            <img [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
            <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
            <div class="p-chip-text" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
            <ng-container *ngIf="removable">
                <ng-container *ngIf="!removeIconTemplate">
                    <span
                        tabindex="0"
                        *ngIf="removeIcon"
                        [class]="removeIcon"
                        [ngClass]="'pi-chip-remove-icon'"
                        [attr.data-pc-section]="'removeicon'"
                        (click)="close($event)"
                        (keydown)="onKeydown($event)"
                        [attr.aria-label]="removeAriaLabel"
                        role="button"
                    ></span>
                    <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'pi-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button" />
                </ng-container>
                <span *ngIf="removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="pi-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                    <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], image: [{
                type: Input
            }], alt: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], removable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], removeIcon: [{
                type: Input
            }], onRemove: [{
                type: Output
            }], onImageError: [{
                type: Output
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class ChipModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ChipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ChipModule, declarations: [Chip], imports: [CommonModule, TimesCircleIcon, SharedModule], exports: [Chip, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ChipModule, imports: [CommonModule, TimesCircleIcon, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ChipModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TimesCircleIcon, SharedModule],
                    exports: [Chip, SharedModule],
                    declarations: [Chip]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Chip, ChipModule };
//# sourceMappingURL=primeng-chip.mjs.map
