import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { CheckIcon } from 'primeng/icons/check';
import { ExclamationTriangleIcon } from 'primeng/icons/exclamationtriangle';
import { InfoCircleIcon } from 'primeng/icons/infocircle';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
export class UIMessage {
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
export class MessageModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBQzVEOzs7R0FHRztBQXdCSCxNQUFNLE9BQU8sU0FBUztJQUNsQjs7O09BR0c7SUFDTSxRQUFRLENBQW9IO0lBQ3JJOzs7T0FHRztJQUNNLElBQUksQ0FBcUI7SUFDbEM7OztPQUdHO0lBQ3FDLE1BQU0sR0FBWSxJQUFJLENBQUM7SUFDL0Q7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBRXhDLElBQUksSUFBSTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTztZQUNILENBQUMsb0JBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3BELDRCQUE0QixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtTQUNsRCxDQUFDO0lBQ04sQ0FBQzt1R0F4Q1EsU0FBUzsyRkFBVCxTQUFTLG9HQWVFLGdCQUFnQiw4R0FwQzFCOzs7Ozs7Ozs7Ozs7O0tBYVQsOHBCQW9EdUIsU0FBUywyRUFBRSxjQUFjLGdGQUFFLGVBQWUsaUZBQUUsdUJBQXVCOzsyRkE1Q2xGLFNBQVM7a0JBdkJyQixTQUFTOytCQUNJLFdBQVcsWUFDWDs7Ozs7Ozs7Ozs7OztLQWFULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs4QkFPUSxRQUFRO3NCQUFoQixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLa0MsTUFBTTtzQkFBN0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLN0IsS0FBSztzQkFBYixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7O0FBdUJWLE1BQU0sT0FBTyxhQUFhO3VHQUFiLGFBQWE7d0dBQWIsYUFBYSxpQkFoRGIsU0FBUyxhQTRDUixZQUFZLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLGFBNUNsRixTQUFTO3dHQWdEVCxhQUFhLFlBSlosWUFBWSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLHVCQUF1Qjs7MkZBSWxGLGFBQWE7a0JBTHpCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDO29CQUM1RixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3BCLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlLCBWaWV3RW5jYXBzdWxhdGlvbiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9jaGVjayc7XG5pbXBvcnQgeyBFeGNsYW1hdGlvblRyaWFuZ2xlSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvZXhjbGFtYXRpb250cmlhbmdsZSc7XG5pbXBvcnQgeyBJbmZvQ2lyY2xlSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvaW5mb2NpcmNsZSc7XG5pbXBvcnQgeyBUaW1lc0NpcmNsZUljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL3RpbWVzY2lyY2xlJztcbi8qKlxuICogTWVzc2FnZSBncm91cHMgYSBjb2xsZWN0aW9uIG9mIGNvbnRlbnRzIGluIHRhYnMuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtbWVzc2FnZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInAtaW5saW5lLW1lc3NhZ2UgcC1jb21wb25lbnQgcC1pbmxpbmUtbWVzc2FnZVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiPlxuICAgICAgICAgICAgPENoZWNrSWNvbiAqbmdJZj1cImljb24gPT09ICdzdWNjZXNzJ1wiIFtzdHlsZUNsYXNzXT1cIidwLWlubGluZS1tZXNzYWdlLWljb24nXCIgLz5cbiAgICAgICAgICAgIDxJbmZvQ2lyY2xlSWNvbiAqbmdJZj1cImljb24gPT09ICdpbmZvJ1wiIFtzdHlsZUNsYXNzXT1cIidwLWlubGluZS1tZXNzYWdlLWljb24nXCIgLz5cbiAgICAgICAgICAgIDxUaW1lc0NpcmNsZUljb24gKm5nSWY9XCJpY29uID09PSAnZXJyb3InXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtaW5saW5lLW1lc3NhZ2UtaWNvbidcIiAvPlxuICAgICAgICAgICAgPEV4Y2xhbWF0aW9uVHJpYW5nbGVJY29uICpuZ0lmPVwiaWNvbiA9PT0gJ3dhcm4nXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtaW5saW5lLW1lc3NhZ2UtaWNvbidcIiAvPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFlc2NhcGU7IGVsc2UgZXNjYXBlT3V0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZXNjYXBlXCIgY2xhc3M9XCJwLWlubGluZS1tZXNzYWdlLXRleHRcIiBbaW5uZXJIVE1MXT1cInRleHRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZXNjYXBlT3V0PlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZXNjYXBlXCIgY2xhc3M9XCJwLWlubGluZS1tZXNzYWdlLXRleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL21lc3NhZ2UuY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFVJTWVzc2FnZSB7XG4gICAgLyoqXG4gICAgICogU2V2ZXJpdHkgbGV2ZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2V2ZXJpdHk6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicgfCAnaGVscCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdjb250cmFzdCcgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgY29udGVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBkaXNwbGF5aW5nIG1lc3NhZ2VzIHdvdWxkIGJlIGVzY2FwZWQgb3Igbm90LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBlc2NhcGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNldmVyaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXZlcml0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbYHAtaW5saW5lLW1lc3NhZ2UtJHt0aGlzLnNldmVyaXR5fWBdOiB0aGlzLnNldmVyaXR5LFxuICAgICAgICAgICAgJ3AtaW5saW5lLW1lc3NhZ2UtaWNvbi1vbmx5JzogdGhpcy50ZXh0ID09IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hlY2tJY29uLCBJbmZvQ2lyY2xlSWNvbiwgVGltZXNDaXJjbGVJY29uLCBFeGNsYW1hdGlvblRyaWFuZ2xlSWNvbl0sXG4gICAgZXhwb3J0czogW1VJTWVzc2FnZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVUlNZXNzYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTW9kdWxlIHt9XG4iXX0=