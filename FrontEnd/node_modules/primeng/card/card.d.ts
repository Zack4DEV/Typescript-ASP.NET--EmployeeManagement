import { AfterContentInit, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
/**
 * Card is a flexible container component.
 * @group Components
 */
export declare class Card implements AfterContentInit, BlockableUI {
    private el;
    /**
     * Header of the card.
     * @group Props
     */
    header: string | undefined;
    /**
     * Subheader of the card.
     * @group Props
     */
    subheader: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    set style(value: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    headerFacet: TemplateRef<any> | undefined;
    footerFacet: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    headerTemplate: TemplateRef<any> | undefined;
    titleTemplate: TemplateRef<any> | undefined;
    subtitleTemplate: TemplateRef<any> | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    footerTemplate: TemplateRef<any> | undefined;
    _style: import("@angular/core").WritableSignal<{
        [klass: string]: any;
    }>;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    getBlockableElement(): HTMLElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<Card, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Card, "p-card", never, { "header": { "alias": "header"; "required": false; }; "subheader": { "alias": "subheader"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, ["headerFacet", "footerFacet", "templates"], ["p-header", "*", "p-footer"], false, never>;
}
export declare class CardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CardModule, [typeof Card], [typeof i1.CommonModule], [typeof Card, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CardModule>;
}
