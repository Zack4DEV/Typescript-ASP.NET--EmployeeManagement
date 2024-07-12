import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';

/**
 * FloatLabel appears on top of the input field when focused.
 * @group Components
 */
class FloatLabel {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: FloatLabel, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: FloatLabel, selector: "p-floatLabel", ngImport: i0, template: `
        <span class="p-float-label">
            <ng-content></ng-content>
        </span>
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: FloatLabel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-floatLabel',
                    template: `
        <span class="p-float-label">
            <ng-content></ng-content>
        </span>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
class FloatLabelModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: FloatLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: FloatLabelModule, declarations: [FloatLabel], imports: [CommonModule, SharedModule, RouterModule], exports: [FloatLabel, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: FloatLabelModule, imports: [CommonModule, SharedModule, RouterModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: FloatLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule, RouterModule],
                    exports: [FloatLabel, SharedModule],
                    declarations: [FloatLabel]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FloatLabel, FloatLabelModule };
//# sourceMappingURL=primeng-floatlabel.mjs.map
