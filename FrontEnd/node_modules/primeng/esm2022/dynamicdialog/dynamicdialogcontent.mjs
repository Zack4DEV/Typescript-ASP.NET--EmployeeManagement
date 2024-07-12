import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicDialogContent {
    viewContainerRef;
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DynamicDialogContent, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: DynamicDialogContent, selector: "[pDynamicDialogContent]", host: { classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DynamicDialogContent, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pDynamicDialogContent]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZ2NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pY2RpYWxvZy9keW5hbWljZGlhbG9nY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7QUFRNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUNWO0lBQW5CLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQzt1R0FEaEQsb0JBQW9COzJGQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRHluYW1pY0RpYWxvZ0NvbnRlbnRdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0RpYWxvZ0NvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxufVxuIl19