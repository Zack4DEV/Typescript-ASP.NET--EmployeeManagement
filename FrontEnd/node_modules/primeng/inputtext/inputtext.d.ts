import { ElementRef, DoCheck, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Nullable } from 'primeng/ts-helpers';
import { PrimeNGConfig } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
export declare class InputText implements DoCheck, AfterViewInit {
    el: ElementRef;
    ngModel: NgModel;
    private cd;
    config: PrimeNGConfig;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    filled: Nullable<boolean>;
    constructor(el: ElementRef, ngModel: NgModel, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    onInput(): void;
    updateFilledState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputText, [null, { optional: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputText, "[pInputText]", never, { "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class InputTextModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputTextModule, [typeof InputText], [typeof i1.CommonModule], [typeof InputText]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputTextModule>;
}
