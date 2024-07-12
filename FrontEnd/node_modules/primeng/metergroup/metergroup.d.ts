import { AfterContentInit, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { MeterItem } from './metergroup.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
export declare class MeterGroupLabel {
    value: any[];
    labelPosition: 'start' | 'end';
    labelOrientation: 'horizontal' | 'vertical';
    min: number;
    max: number;
    iconTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    get labelClass(): {
        [key: string]: boolean;
    };
    parentInstance: MeterGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroupLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeterGroupLabel, "p-meterGroupLabel", never, { "value": { "alias": "value"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "iconTemplate": { "alias": "iconTemplate"; "required": false; }; }, {}, ["templates"], never, false, never>;
}
/**
 * MeterGroup displays scalar measurements within a known range.
 * @group Components
 */
export declare class MeterGroup implements AfterContentInit {
    /**
     * Current value of the metergroup.
     * @group Props
     */
    value: MeterItem[] | undefined;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min: number;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max: number;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Specifies the label position of the component, valid values are 'start' and 'end'.
     * @group Props
     */
    labelPosition: 'start' | 'end';
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    labelOrientation: string;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    get vertical(): boolean;
    get containerClass(): {
        'p-metergroup p-component': boolean;
        'p-metergroup-horizontal': boolean;
        'p-metergroup-vertical': boolean;
    };
    labelTemplate: TemplateRef<any> | undefined;
    meterTemplate: TemplateRef<any> | undefined;
    endTemplate: TemplateRef<any> | undefined;
    startTemplate: TemplateRef<any> | undefined;
    iconTemplate: TemplateRef<any> | undefined;
    container: ElementRef;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    percent(meter?: number): number;
    percentValue(meter: any): string;
    meterStyle(val: any): {
        backgroundColor: any;
        width: string;
        height: string;
    };
    totalPercent(): number;
    percentages(): any[];
    trackByFn(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeterGroup, "p-meterGroup", never, { "value": { "alias": "value"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "labelOrientation": { "alias": "labelOrientation"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, ["templates"], never, false, never>;
}
export declare class MeterGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MeterGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MeterGroupModule, [typeof MeterGroup, typeof MeterGroupLabel], [typeof i1.CommonModule, typeof i2.SharedModule], [typeof MeterGroup, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MeterGroupModule>;
}
