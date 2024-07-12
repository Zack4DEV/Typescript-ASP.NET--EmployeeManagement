import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { SharedModule } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * InputIcon displays an icon.
 * @group Components
 */
export class InputIcon {
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
export class InputIconModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRpY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucHV0aWNvbi9pbnB1dGljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFM0M7OztHQUdHO0FBUUgsTUFBTSxPQUFPLFNBQVM7SUFDbEI7OztPQUdHO0lBQ00sVUFBVSxDQUFxQjt1R0FML0IsU0FBUzsyRkFBVCxTQUFTLHlGQUxSLG9GQUFvRjs7MkZBS3JGLFNBQVM7a0JBUHJCLFNBQVM7K0JBQ0ksYUFBYSxZQUNiLG9GQUFvRixpQkFFL0UsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFPdEMsVUFBVTtzQkFBbEIsS0FBSzs7QUFRVixNQUFNLE9BQU8sZUFBZTt1R0FBZixlQUFlO3dHQUFmLGVBQWUsaUJBYmYsU0FBUyxhQVNSLFlBQVksYUFUYixTQUFTLEVBVUcsWUFBWTt3R0FHeEIsZUFBZSxZQUpkLFlBQVksRUFDRCxZQUFZOzsyRkFHeEIsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7b0JBQ2xDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG4vKipcbiAqIElucHV0SWNvbiBkaXNwbGF5cyBhbiBpY29uLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWlucHV0SWNvbicsXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cInAtaW5wdXQtaWNvblwiIFtuZ0NsYXNzXT1cInN0eWxlQ2xhc3NcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPmAsXG4gICAgc3R5bGVVcmw6ICcuL2lucHV0aWNvbi5jc3MnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRJY29uIHtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucHV0SWNvbiwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dEljb25dXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SWNvbk1vZHVsZSB7fVxuIl19