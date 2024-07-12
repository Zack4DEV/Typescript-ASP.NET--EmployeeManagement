import * as i0 from '@angular/core';
import { Directive, Optional, Input, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/forms';
import * as i2 from 'primeng/api';

/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
class InputText {
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
class InputTextModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { InputText, InputTextModule };
//# sourceMappingURL=primeng-inputtext.mjs.map
