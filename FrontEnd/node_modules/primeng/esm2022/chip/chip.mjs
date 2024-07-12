import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, NgModule, Output, ViewEncapsulation, inject, booleanAttribute } from '@angular/core';
import { PrimeNGConfig, PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Chip represents people using icons, labels and images.
 * @group Components
 */
export class Chip {
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
export class ChipModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jaGlwL2NoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsTixPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBQzVEOzs7R0FHRztBQXFDSCxNQUFNLE9BQU8sSUFBSTtJQUNiOzs7T0FHRztJQUNNLEtBQUssQ0FBcUI7SUFDbkM7OztPQUdHO0lBQ00sSUFBSSxDQUFxQjtJQUNsQzs7O09BR0c7SUFDTSxLQUFLLENBQXFCO0lBQ25DOzs7T0FHRztJQUNNLEdBQUcsQ0FBcUI7SUFDakM7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNxQyxTQUFTLEdBQXdCLEtBQUssQ0FBQztJQUMvRTs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7O09BSUc7SUFDTyxRQUFRLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFDOUU7Ozs7T0FJRztJQUNPLFlBQVksR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUV4RSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sR0FBWSxJQUFJLENBQUM7SUFFeEIsa0JBQWtCLENBQStCO0lBRWpELElBQUksZUFBZTtR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ci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgaW5qZWN0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUsIFRyYW5zbGF0aW9uS2V5cyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFRpbWVzQ2lyY2xlSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvdGltZXNjaXJjbGUnO1xuLyoqXG4gKiBDaGlwIHJlcHJlc2VudHMgcGVvcGxlIHVzaW5nIGljb25zLCBsYWJlbHMgYW5kIGltYWdlcy5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1jaGlwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzKClcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgKm5nSWY9XCJ2aXNpYmxlXCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIidjaGlwJ1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ3Jvb3QnXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VcIiAqbmdJZj1cImltYWdlOyBlbHNlIGljb25UZW1wbGF0ZVwiIChlcnJvcik9XCJpbWFnZUVycm9yKCRldmVudClcIiBbYWx0XT1cImFsdFwiIC8+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZT48c3BhbiAqbmdJZj1cImljb25cIiBbY2xhc3NdPVwiaWNvblwiIFtuZ0NsYXNzXT1cIidwLWNoaXAtaWNvbidcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2ljb24nXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGlwLXRleHRcIiAqbmdJZj1cImxhYmVsXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidsYWJlbCdcIj57eyBsYWJlbCB9fTwvZGl2PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlbW92YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVtb3ZlSWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJyZW1vdmVJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJyZW1vdmVJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIidwaS1jaGlwLXJlbW92ZS1pY29uJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ3JlbW92ZWljb24nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwicmVtb3ZlQXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VGltZXNDaXJjbGVJY29uIHRhYmluZGV4PVwiMFwiICpuZ0lmPVwiIXJlbW92ZUljb25cIiBbY2xhc3NdPVwiJ3BpLWNoaXAtcmVtb3ZlLWljb24nXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyZW1vdmVpY29uJ1wiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInJlbW92ZUFyaWFMYWJlbFwiIHJvbGU9XCJidXR0b25cIiAvPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicmVtb3ZlSWNvblRlbXBsYXRlXCIgdGFiaW5kZXg9XCIwXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyZW1vdmVpY29uJ1wiIGNsYXNzPVwicGktY2hpcC1yZW1vdmUtaWNvblwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInJlbW92ZUFyaWFMYWJlbFwiIHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVtb3ZlSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2NoaXAuY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENoaXAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSB0ZXh0IHRvIGRpc3BsYXkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBpY29uIHRvIGRpc3BsYXkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGltYWdlIHRvIGRpc3BsYXkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBBbHQgYXR0cmlidXRlIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhbHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZGlzcGxheSBhIHJlbW92ZSBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZW1vdmFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJY29uIG9mIHRoZSByZW1vdmUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByZW1vdmVJY29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBjaGlwIGlzIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCAtIE1vdXNlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgdHJpZ2dlcmVkIGlmIGFuIGVycm9yIG9jY3VycyB3aGlsZSBsb2FkaW5nIGFuIGltYWdlIGZpbGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBCcm93c2VyIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkltYWdlRXJyb3I6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gICAgY29uZmlnID0gaW5qZWN0KFByaW1lTkdDb25maWcpO1xuXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICByZW1vdmVJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBnZXQgcmVtb3ZlQXJpYUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkFSSUEpWydyZW1vdmVMYWJlbCddO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmVpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2hpcCBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1jaGlwLWltYWdlJzogdGhpcy5pbWFnZSAhPSBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZUVycm9yKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uSW1hZ2VFcnJvci5lbWl0KGV2ZW50KTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVGltZXNDaXJjbGVJY29uLCBTaGFyZWRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtDaGlwLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoaXBdXG59KVxuZXhwb3J0IGNsYXNzIENoaXBNb2R1bGUge31cbiJdfQ==