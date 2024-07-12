import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';

/**
 * InputIcon displays an icon.
 * @group Components
 */
class InputIcon {
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: InputIcon, selector: "p-inputIcon", inputs: { styleClass: "styleClass" }, ngImport: i0, template: `<span class="p-input-icon" [ngClass]="styleClass"><ng-content></ng-content></span>`, isInline: true, styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputIcon, decorators: [{
            type: Component,
            args: [{ selector: 'p-inputIcon', template: `<span class="p-input-icon" [ngClass]="styleClass"><ng-content></ng-content></span>`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}\n"] }]
        }], propDecorators: { styleClass: [{
                type: Input
            }] } });
class InputIconModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputIconModule, declarations: [InputIcon], imports: [CommonModule], exports: [InputIcon, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputIconModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputIconModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputIcon, SharedModule],
                    declarations: [InputIcon]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputIcon, InputIconModule };
//# sourceMappingURL=primeng-inputicon.mjs.map
