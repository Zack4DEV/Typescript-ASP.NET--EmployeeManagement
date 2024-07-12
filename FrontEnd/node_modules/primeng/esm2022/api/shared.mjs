import { Component, Directive, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class Header {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Header, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Header, isStandalone: true, selector: "p-header", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Header, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-header',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
export class Footer {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Footer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Footer, isStandalone: true, selector: "p-footer", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Footer, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-footer',
                    standalone: true,
                    template: '<ng-content></ng-content>'
                }]
        }] });
export class PrimeTemplate {
    template;
    type;
    name;
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: PrimeTemplate, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: PrimeTemplate, isStandalone: true, selector: "[pTemplate]", inputs: { type: "type", name: ["pTemplate", "name"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: PrimeTemplate, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pTemplate]',
                    standalone: true,
                    host: {}
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { type: [{
                type: Input
            }], name: [{
                type: Input,
                args: ['pTemplate']
            }] } });
export class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: SharedModule, imports: [Header, Footer, PrimeTemplate], exports: [Header, Footer, PrimeTemplate] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SharedModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Header, Footer, PrimeTemplate],
                    exports: [Header, Footer, PrimeTemplate]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9zaGFyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFPbkYsTUFBTSxPQUFPLE1BQU07dUdBQU4sTUFBTTsyRkFBTixNQUFNLG9FQUZMLDJCQUEyQjs7MkZBRTVCLE1BQU07a0JBTGxCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7QUFRRCxNQUFNLE9BQU8sTUFBTTt1R0FBTixNQUFNOzJGQUFOLE1BQU0sb0VBRkwsMkJBQTJCOzsyRkFFNUIsTUFBTTtrQkFMbEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3hDOztBQVFELE1BQU0sT0FBTyxhQUFhO0lBS0g7SUFKVixJQUFJLENBQXFCO0lBRWQsSUFBSSxDQUFxQjtJQUU3QyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFHLENBQUM7SUFFakQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUssQ0FBQztJQUN0QixDQUFDO3VHQVRRLGFBQWE7MkZBQWIsYUFBYTs7MkZBQWIsYUFBYTtrQkFMekIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxFQUFFO2lCQUNYO2dGQUVZLElBQUk7c0JBQVosS0FBSztnQkFFYyxJQUFJO3NCQUF2QixLQUFLO3VCQUFDLFdBQVc7O0FBYXRCLE1BQU0sT0FBTyxZQUFZO3VHQUFaLFlBQVk7d0dBQVosWUFBWSxZQTlCWixNQUFNLEVBT04sTUFBTSxFQU9OLGFBQWEsYUFkYixNQUFNLEVBT04sTUFBTSxFQU9OLGFBQWE7d0dBZ0JiLFlBQVk7OzJGQUFaLFlBQVk7a0JBSnhCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO2lCQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgTmdNb2R1bGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1oZWFkZXInLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXIge31cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWZvb3RlcicsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twVGVtcGxhdGVdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGhvc3Q6IHt9XG59KVxuZXhwb3J0IGNsYXNzIFByaW1lVGVtcGxhdGUge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgncFRlbXBsYXRlJykgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxuXG4gICAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lITtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0hlYWRlciwgRm9vdGVyLCBQcmltZVRlbXBsYXRlXSxcbiAgICBleHBvcnRzOiBbSGVhZGVyLCBGb290ZXIsIFByaW1lVGVtcGxhdGVdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuIl19