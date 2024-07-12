import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * AvatarGroup is a helper component for Avatar.
 * @group Components
 */
class AvatarGroup {
    /**
     * Style class of the component
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: AvatarGroup, selector: "p-avatarGroup", inputs: { styleClass: "styleClass", style: "style" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div [ngClass]="'p-avatar-group p-component'" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroup, decorators: [{
            type: Component,
            args: [{ selector: 'p-avatarGroup', template: `
        <div [ngClass]="'p-avatar-group p-component'" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}}\n"] }]
        }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
class AvatarGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroupModule, declarations: [AvatarGroup], imports: [CommonModule], exports: [AvatarGroup] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroupModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AvatarGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [AvatarGroup],
                    declarations: [AvatarGroup]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarGroup, AvatarGroupModule };
//# sourceMappingURL=primeng-avatargroup.mjs.map
