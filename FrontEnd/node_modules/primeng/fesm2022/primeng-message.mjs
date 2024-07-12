import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CheckIcon } from 'primeng/icons/check';
import { ExclamationTriangleIcon } from 'primeng/icons/exclamationtriangle';
import { InfoCircleIcon } from 'primeng/icons/infocircle';
import { TimesCircleIcon } from 'primeng/icons/timescircle';

/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
class UIMessage {
    /**
     * Severity level of the message.
     * @group Props
     */
    severity;
    /**
     * Text content.
     * @group Props
     */
    text;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    escape = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    get icon() {
        if (this.severity) {
            return this.severity;
        }
        else {
            return 'info';
        }
    }
    get containerClass() {
        return {
            [`p-inline-message-${this.severity}`]: this.severity,
            'p-inline-message-icon-only': this.text == null
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: UIMessage, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: UIMessage, selector: "p-message", inputs: { severity: "severity", text: "text", escape: ["escape", "escape", booleanAttribute], style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div aria-live="polite" class="p-inline-message p-component p-inline-message" [ngStyle]="style" [class]="styleClass" [ngClass]="containerClass">
            <CheckIcon *ngIf="icon === 'success'" [styleClass]="'p-inline-message-icon'" />
            <InfoCircleIcon *ngIf="icon === 'info'" [styleClass]="'p-inline-message-icon'" />
            <TimesCircleIcon *ngIf="icon === 'error'" [styleClass]="'p-inline-message-icon'" />
            <ExclamationTriangleIcon *ngIf="icon === 'warn'" [styleClass]="'p-inline-message-icon'" />
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>
            </ng-template>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i1.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }, { kind: "component", type: i0.forwardRef(() => InfoCircleIcon), selector: "InfoCircleIcon" }, { kind: "component", type: i0.forwardRef(() => TimesCircleIcon), selector: "TimesCircleIcon" }, { kind: "component", type: i0.forwardRef(() => ExclamationTriangleIcon), selector: "ExclamationTriangleIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: UIMessage, decorators: [{
            type: Component,
            args: [{ selector: 'p-message', template: `
        <div aria-live="polite" class="p-inline-message p-component p-inline-message" [ngStyle]="style" [class]="styleClass" [ngClass]="containerClass">
            <CheckIcon *ngIf="icon === 'success'" [styleClass]="'p-inline-message-icon'" />
            <InfoCircleIcon *ngIf="icon === 'info'" [styleClass]="'p-inline-message-icon'" />
            <TimesCircleIcon *ngIf="icon === 'error'" [styleClass]="'p-inline-message-icon'" />
            <ExclamationTriangleIcon *ngIf="icon === 'warn'" [styleClass]="'p-inline-message-icon'" />
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>
            </ng-template>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"] }]
        }], propDecorators: { severity: [{
                type: Input
            }], text: [{
                type: Input
            }], escape: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });
class MessageModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: MessageModule, declarations: [UIMessage], imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon], exports: [UIMessage] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageModule, imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
                    exports: [UIMessage],
                    declarations: [UIMessage]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MessageModule, UIMessage };
//# sourceMappingURL=primeng-message.mjs.map
