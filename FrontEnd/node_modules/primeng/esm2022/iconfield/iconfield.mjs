import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { SharedModule } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * IconField wraps an input and an icon.
 * @group Components
 */
export class IconField {
    /**
     * Position of the icon.
     * @group Props
     */
    iconPosition = 'left';
    get containerClass() {
        return {
            'p-icon-field-left': this.iconPosition === 'left',
            'p-icon-field-right': this.iconPosition === 'right'
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconField, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: IconField, selector: "p-iconField", inputs: { iconPosition: "iconPosition" }, ngImport: i0, template: ` <span class="p-icon-field" [ngClass]="containerClass"><ng-content></ng-content> </span>`, isInline: true, styles: ["@layer primeng{.p-icon-field{position:relative}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconField, decorators: [{
            type: Component,
            args: [{ selector: 'p-iconField', template: ` <span class="p-icon-field" [ngClass]="containerClass"><ng-content></ng-content> </span>`, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["@layer primeng{.p-icon-field{position:relative}}\n"] }]
        }], propDecorators: { iconPosition: [{
                type: Input
            }] } });
export class IconFieldModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, declarations: [IconField], imports: [CommonModule], exports: [IconField, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: IconFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [IconField, SharedModule],
                    declarations: [IconField]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbmZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2ljb25maWVsZC9pY29uZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFM0M7OztHQUdHO0FBUUgsTUFBTSxPQUFPLFNBQVM7SUFDbEI7OztPQUdHO0lBQ00sWUFBWSxHQUFxQixNQUFNLENBQUM7SUFFakQsSUFBSSxjQUFjO1FBQ2QsT0FBTztZQUNILG1CQUFtQixFQUFFLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTTtZQUNqRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87U0FDdEQsQ0FBQztJQUNOLENBQUM7dUdBWlEsU0FBUzsyRkFBVCxTQUFTLDZGQUxSLDBGQUEwRjs7MkZBSzNGLFNBQVM7a0JBUHJCLFNBQVM7K0JBQ0ksYUFBYSxZQUNiLDBGQUEwRixpQkFFckYsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFPdEMsWUFBWTtzQkFBcEIsS0FBSzs7QUFlVixNQUFNLE9BQU8sZUFBZTt1R0FBZixlQUFlO3dHQUFmLGVBQWUsaUJBcEJmLFNBQVMsYUFnQlIsWUFBWSxhQWhCYixTQUFTLEVBaUJHLFlBQVk7d0dBR3hCLGVBQWUsWUFKZCxZQUFZLEVBQ0QsWUFBWTs7MkZBR3hCLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO29CQUNsQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG4vKipcbiAqIEljb25GaWVsZCB3cmFwcyBhbiBpbnB1dCBhbmQgYW4gaWNvbi5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1pY29uRmllbGQnLFxuICAgIHRlbXBsYXRlOiBgIDxzcGFuIGNsYXNzPVwicC1pY29uLWZpZWxkXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+IDwvc3Bhbj5gLFxuICAgIHN0eWxlVXJsOiAnLi9pY29uZmllbGQuY3NzJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25GaWVsZCB7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIGljb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWNvblBvc2l0aW9uOiAncmlnaHQnIHwgJ2xlZnQnID0gJ2xlZnQnO1xuXG4gICAgZ2V0IGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtaWNvbi1maWVsZC1sZWZ0JzogdGhpcy5pY29uUG9zaXRpb24gPT09ICdsZWZ0JyxcbiAgICAgICAgICAgICdwLWljb24tZmllbGQtcmlnaHQnOiB0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSWNvbkZpZWxkLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0ljb25GaWVsZF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkZpZWxkTW9kdWxlIHt9XG4iXX0=