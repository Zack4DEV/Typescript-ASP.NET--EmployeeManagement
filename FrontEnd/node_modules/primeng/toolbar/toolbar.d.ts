import { AfterContentInit, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
/**
 * Toolbar is a grouping component for buttons and other content.
 * @group Components
 */
export declare class Toolbar implements AfterContentInit, BlockableUI {
    private el;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    startTemplate: TemplateRef<any> | undefined;
    endTemplate: TemplateRef<any> | undefined;
    centerTemplate: TemplateRef<any> | undefined;
    constructor(el: ElementRef);
    getBlockableElement(): HTMLElement;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Toolbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Toolbar, "p-toolbar", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
}
export declare class ToolbarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToolbarModule, [typeof Toolbar], [typeof i1.CommonModule, typeof i2.SharedModule], [typeof Toolbar, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToolbarModule>;
}
