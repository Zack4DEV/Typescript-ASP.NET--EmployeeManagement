import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';

/**
 * ProgressSpinner is a process status indicator.
 * @group Components
 */
class ProgressSpinner {
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Width of the circle stroke.
     * @group Props
     */
    strokeWidth = '2';
    /**
     * Color for the background of the circle.
     * @group Props
     */
    fill = 'none';
    /**
     * Duration of the rotate animation.
     * @group Props
     */
    animationDuration = '2s';
    /**
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinner, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: ProgressSpinner, selector: "p-progressSpinner", inputs: { styleClass: "styleClass", style: "style", strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", ariaLabel: "ariaLabel" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinner, decorators: [{
            type: Component,
            args: [{ selector: 'p-progressSpinner', template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"] }]
        }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], fill: [{
                type: Input
            }], animationDuration: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
class ProgressSpinnerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, declarations: [ProgressSpinner], imports: [CommonModule], exports: [ProgressSpinner] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ProgressSpinner],
                    declarations: [ProgressSpinner]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSpinner, ProgressSpinnerModule };
//# sourceMappingURL=primeng-progressspinner.mjs.map
