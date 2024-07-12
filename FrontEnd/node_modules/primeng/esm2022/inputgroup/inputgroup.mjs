import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
export class InputGroup {
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
export class InputGroupModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dGdyb3VwL2lucHV0Z3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFDM0M7OztHQUdHO0FBWUgsTUFBTSxPQUFPLFVBQVU7SUFDbkI7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO3VHQVYvQixVQUFVOzJGQUFWLFVBQVUsOEpBVFQ7Ozs7S0FJVDs7MkZBS1EsVUFBVTtrQkFYdEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7O0tBSVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSx3QkFBd0I7cUJBQ2xDO2lCQUNKOzhCQU1ZLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLOztBQVFWLE1BQU0sT0FBTyxnQkFBZ0I7dUdBQWhCLGdCQUFnQjt3R0FBaEIsZ0JBQWdCLGlCQWxCaEIsVUFBVSxhQWNULFlBQVksYUFkYixVQUFVLEVBZUcsWUFBWTt3R0FHekIsZ0JBQWdCLFlBSmYsWUFBWSxFQUNBLFlBQVk7OzJGQUd6QixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO29CQUNuQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG4vKipcbiAqIElucHV0R3JvdXAgZGlzcGxheXMgdGV4dCwgaWNvbiwgYnV0dG9ucyBhbmQgb3RoZXIgY29udGVudCBjYW4gYmUgZ3JvdXBlZCBuZXh0IHRvIGFuIGlucHV0LlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWlucHV0R3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiBbYXR0ci5kYXRhLXBjLW5hbWVdPVwiJ2lucHV0Z3JvdXAnXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCBwLWlucHV0Z3JvdXAnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtJbnB1dEdyb3VwLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0lucHV0R3JvdXBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBNb2R1bGUge31cbiJdfQ==