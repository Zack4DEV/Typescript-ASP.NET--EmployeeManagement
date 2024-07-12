import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';

class ButtonGroup {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: ButtonGroup, selector: "p-buttonGroup", ngImport: i0, template: `
        <span class="p-button-group p-component" role="group">
            <ng-content></ng-content>
        </span>
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-buttonGroup',
                    template: `
        <span class="p-button-group p-component" role="group">
            <ng-content></ng-content>
        </span>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
class ButtonGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, declarations: [ButtonGroup], imports: [CommonModule], exports: [ButtonGroup] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ButtonGroup],
                    declarations: [ButtonGroup]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonGroup, ButtonGroupModule };
//# sourceMappingURL=primeng-buttongroup.mjs.map
