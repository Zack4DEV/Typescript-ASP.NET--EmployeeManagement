import * as i0 from '@angular/core';
import { booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { ObjectUtils } from 'primeng/utils';

class BaseIcon {
    label;
    spin = false;
    styleClass;
    role;
    ariaLabel;
    ariaHidden;
    ngOnInit() {
        this.getAttributes();
    }
    getAttributes() {
        const isLabelEmpty = ObjectUtils.isEmpty(this.label);
        this.role = !isLabelEmpty ? 'img' : undefined;
        this.ariaLabel = !isLabelEmpty ? this.label : undefined;
        this.ariaHidden = isLabelEmpty;
    }
    getClassNames() {
        return `p-icon ${this.styleClass ? this.styleClass + ' ' : ''}${this.spin ? 'p-icon-spin' : ''}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BaseIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: BaseIcon, isStandalone: true, selector: "ng-component", inputs: { label: "label", spin: ["spin", "spin", booleanAttribute], styleClass: "styleClass" }, host: { classAttribute: "p-element p-icon-wrapper" }, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BaseIcon, decorators: [{
            type: Component,
            args: [{
                    template: ` <ng-content></ng-content> `,
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element p-icon-wrapper'
                    }
                }]
        }], propDecorators: { label: [{
                type: Input
            }], spin: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], styleClass: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { BaseIcon };
//# sourceMappingURL=primeng-baseicon.mjs.map
