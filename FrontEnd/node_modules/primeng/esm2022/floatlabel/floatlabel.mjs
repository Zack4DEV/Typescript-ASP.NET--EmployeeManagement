import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
/**
 * FloatLabel appears on top of the input field when focused.
 * @group Components
 */
export class FloatLabel {
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
export class FloatLabelModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRsYWJlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9mbG9hdGxhYmVsL2Zsb2F0bGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQzs7O0dBR0c7QUFXSCxNQUFNLE9BQU8sVUFBVTt1R0FBVixVQUFVOzJGQUFWLFVBQVUsb0RBUlQ7Ozs7S0FJVDs7MkZBSVEsVUFBVTtrQkFWdEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7O0tBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN4Qzs7QUFRRCxNQUFNLE9BQU8sZ0JBQWdCO3VHQUFoQixnQkFBZ0I7d0dBQWhCLGdCQUFnQixpQkFQaEIsVUFBVSxhQUdULFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxhQUh6QyxVQUFVLEVBSUcsWUFBWTt3R0FHekIsZ0JBQWdCLFlBSmYsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzVCLFlBQVk7OzJGQUd6QixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ25ELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7b0JBQ25DLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgTmdNb2R1bGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIEZsb2F0TGFiZWwgYXBwZWFycyBvbiB0b3Agb2YgdGhlIGlucHV0IGZpZWxkIHdoZW4gZm9jdXNlZC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1mbG9hdExhYmVsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cInAtZmxvYXQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdExhYmVsIHt9XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtGbG9hdExhYmVsLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0Zsb2F0TGFiZWxdXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0TGFiZWxNb2R1bGUge31cbiJdfQ==