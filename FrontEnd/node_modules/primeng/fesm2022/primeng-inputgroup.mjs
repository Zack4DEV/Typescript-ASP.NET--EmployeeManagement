import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';

/**
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
class InputGroup {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: InputGroup, selector: "p-inputGroup", inputs: { style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element p-inputgroup" }, ngImport: i0, template: `
        <div class="p-inputgroup" [attr.data-pc-name]="'inputgroup'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-inputGroup',
                    template: `
        <div class="p-inputgroup" [attr.data-pc-name]="'inputgroup'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
                    host: {
                        class: 'p-element p-inputgroup'
                    }
                }]
        }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });
class InputGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputGroupModule, declarations: [InputGroup], imports: [CommonModule], exports: [InputGroup, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputGroup, SharedModule],
                    declarations: [InputGroup]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputGroup, InputGroupModule };
//# sourceMappingURL=primeng-inputgroup.mjs.map
