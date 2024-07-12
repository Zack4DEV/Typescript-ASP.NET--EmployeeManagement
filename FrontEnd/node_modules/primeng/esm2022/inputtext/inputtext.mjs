import { NgModule, Directive, HostListener, Optional, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/api";
/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
export class InputText {
    el;
    ngModel;
    cd;
    config;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    filled;
    constructor(el, ngModel, cd, config) {
        this.el = el;
        this.ngModel = ngModel;
        this.cd = cd;
        this.config = config;
    }
    ngAfterViewInit() {
        this.updateFilledState();
        this.cd.detectChanges();
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    onInput() {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputText, deps: [{ token: i0.ElementRef }, { token: i1.NgModel, optional: true }, { token: i0.ChangeDetectorRef }, { token: i2.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: InputText, selector: "[pInputText]", inputs: { variant: "variant" }, host: { listeners: { "input": "onInput($event)" }, properties: { "class.p-filled": "filled", "class.p-variant-filled": "variant === \"filled\" || config.inputStyle() === \"filled\"" }, classAttribute: "p-inputtext p-component p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputText, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pInputText]',
                    host: {
                        class: 'p-inputtext p-component p-element',
                        '[class.p-filled]': 'filled',
                        '[class.p-variant-filled]': 'variant === "filled" || config.inputStyle() === "filled"'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.NgModel, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.PrimeNGConfig }], propDecorators: { variant: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
export class InputTextModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputTextModule, declarations: [InputText], imports: [CommonModule], exports: [InputText] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputText],
                    declarations: [InputText]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucHV0dGV4dC9pbnB1dHRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFXLFFBQVEsRUFBb0MsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUkvQzs7O0dBR0c7QUFTSCxNQUFNLE9BQU8sU0FBUztJQVVQO0lBQ1k7SUFDWDtJQUNEO0lBWlg7OztPQUdHO0lBQ00sT0FBTyxHQUEwQixVQUFVLENBQUM7SUFFckQsTUFBTSxDQUFvQjtJQUUxQixZQUNXLEVBQWMsRUFDRixPQUFnQixFQUMzQixFQUFxQixFQUN0QixNQUFxQjtRQUhyQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ0YsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzdCLENBQUM7SUFFSixlQUFlO1FBQ1gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlILENBQUM7dUdBaENRLFNBQVM7MkZBQVQsU0FBUzs7MkZBQVQsU0FBUztrQkFSckIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSxtQ0FBbUM7d0JBQzFDLGtCQUFrQixFQUFFLFFBQVE7d0JBQzVCLDBCQUEwQixFQUFFLDBEQUEwRDtxQkFDekY7aUJBQ0o7OzBCQVlRLFFBQVE7cUdBTkosT0FBTztzQkFBZixLQUFLO2dCQXFCTixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztBQWVyQyxNQUFNLE9BQU8sZUFBZTt1R0FBZixlQUFlO3dHQUFmLGVBQWUsaUJBeENmLFNBQVMsYUFvQ1IsWUFBWSxhQXBDYixTQUFTO3dHQXdDVCxlQUFlLFlBSmQsWUFBWTs7MkZBSWIsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDcEIsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgRG9DaGVjaywgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG5pbXBvcnQgeyBQcmltZU5HQ29uZmlnIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG4vKipcbiAqIElucHV0VGV4dCBkaXJlY3RpdmUgaXMgYW4gZXh0ZW5zaW9uIHRvIHN0YW5kYXJkIGlucHV0IGVsZW1lbnQgd2l0aCB0aGVtaW5nLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcElucHV0VGV4dF0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWlucHV0dGV4dCBwLWNvbXBvbmVudCBwLWVsZW1lbnQnLFxuICAgICAgICAnW2NsYXNzLnAtZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtdmFyaWFudC1maWxsZWRdJzogJ3ZhcmlhbnQgPT09IFwiZmlsbGVkXCIgfHwgY29uZmlnLmlucHV0U3R5bGUoKSA9PT0gXCJmaWxsZWRcIidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dCBpbXBsZW1lbnRzIERvQ2hlY2ssIEFmdGVyVmlld0luaXQge1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgaW5wdXQgdmFyaWFudCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZhcmlhbnQ6ICdmaWxsZWQnIHwgJ291dGxpbmVkJyA9ICdvdXRsaW5lZCc7XG5cbiAgICBmaWxsZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHVibGljIG5nTW9kZWw6IE5nTW9kZWwsXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBvbklucHV0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmlsbGVkU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuZmlsbGVkID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKSB8fCAodGhpcy5uZ01vZGVsICYmIHRoaXMubmdNb2RlbC5tb2RlbCk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtJbnB1dFRleHRdLFxuICAgIGRlY2xhcmF0aW9uczogW0lucHV0VGV4dF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0TW9kdWxlIHt9XG4iXX0=