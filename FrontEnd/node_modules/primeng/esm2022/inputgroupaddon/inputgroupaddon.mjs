import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
export class InputGroupAddon {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: InputGroupAddon, selector: "p-inputGroupAddon", inputs: { style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element p-inputgroup-addon" }, ngImport: i0, template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddon, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-inputGroupAddon',
                    template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
                    host: {
                        class: 'p-element p-inputgroup-addon'
                    }
                }]
        }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });
export class InputGroupAddonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddonModule, declarations: [InputGroupAddon], imports: [CommonModule], exports: [InputGroupAddon, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddonModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputGroupAddonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputGroupAddon, SharedModule],
                    declarations: [InputGroupAddon]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRncm91cGFkZG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucHV0Z3JvdXBhZGRvbi9pbnB1dGdyb3VwYWRkb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFDM0M7OztHQUdHO0FBWUgsTUFBTSxPQUFPLGVBQWU7SUFDeEI7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO3VHQVYvQixlQUFlOzJGQUFmLGVBQWUseUtBVGQ7Ozs7S0FJVDs7MkZBS1EsZUFBZTtrQkFYM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7Ozs7S0FJVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLDhCQUE4QjtxQkFDeEM7aUJBQ0o7OEJBTVksS0FBSztzQkFBYixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7O0FBUVYsTUFBTSxPQUFPLHFCQUFxQjt1R0FBckIscUJBQXFCO3dHQUFyQixxQkFBcUIsaUJBbEJyQixlQUFlLGFBY2QsWUFBWSxhQWRiLGVBQWUsRUFlRyxZQUFZO3dHQUc5QixxQkFBcUIsWUFKcEIsWUFBWSxFQUNLLFlBQVk7OzJGQUc5QixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUN4QyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG4vKipcbiAqIElucHV0R3JvdXBBZGRvbiBkaXNwbGF5cyB0ZXh0LCBpY29uLCBidXR0b25zIGFuZCBvdGhlciBjb250ZW50IGNhbiBiZSBncm91cGVkIG5leHQgdG8gYW4gaW5wdXQuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtaW5wdXRHcm91cEFkZG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFthdHRyLmRhdGEtcGMtbmFtZV09XCInaW5wdXRncm91cGFkZG9uJ1wiIFtuZ0NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQgcC1pbnB1dGdyb3VwLWFkZG9uJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cEFkZG9uIHtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtJbnB1dEdyb3VwQWRkb24sIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbSW5wdXRHcm91cEFkZG9uXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQWRkb25Nb2R1bGUge31cbiJdfQ==