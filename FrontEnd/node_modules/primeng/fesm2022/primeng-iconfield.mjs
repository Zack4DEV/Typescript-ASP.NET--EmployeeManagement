import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';

/**
 * IconField wraps an input and an icon.
 * @group Components
 */
class IconField {
    /**
     * Position of the icon.
     * @group Props
     */
    iconPosition = 'left';
    get containerClass() {
        return {
            'p-icon-field-left': this.iconPosition === 'left',
            'p-icon-field-right': this.iconPosition === 'right'
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconField, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: IconField, selector: "p-iconField", inputs: { iconPosition: "iconPosition" }, ngImport: i0, template: ` <span class="p-icon-field" [ngClass]="containerClass"><ng-content></ng-content> </span>`, isInline: true, styles: ["@layer primeng{.p-icon-field{position:relative}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconField, decorators: [{
            type: Component,
            args: [{ selector: 'p-iconField', template: ` <span class="p-icon-field" [ngClass]="containerClass"><ng-content></ng-content> </span>`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["@layer primeng{.p-icon-field{position:relative}}\n"] }]
        }], propDecorators: { iconPosition: [{
                type: Input
            }] } });
class IconFieldModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, declarations: [IconField], imports: [CommonModule], exports: [IconField, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [IconField, SharedModule],
                    declarations: [IconField]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IconField, IconFieldModule };
//# sourceMappingURL=primeng-iconfield.mjs.map
