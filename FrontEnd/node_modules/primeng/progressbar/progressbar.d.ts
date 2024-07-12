import { TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { QueryList } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * ProgressBar is a process status indicator.
 * @group Components
 */
export declare class ProgressBar {
    /**
     * Current value of the progress.
     * @group Props
     */
    value: number | undefined;
    /**
     * Whether to display the progress bar value.
     * @group Props
     */
    showValue: boolean;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Unit sign appended to the value.
     * @group Props
     */
    unit: string;
    /**
     * Defines the mode of the progress
     * @group Props
     */
    mode: string;
    /**
     * Color for the background of the progress.
     * @group Props
     */
    color: string | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBar, "p-progressBar", never, { "value": { "alias": "value"; "required": false; }; "showValue": { "alias": "showValue"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, ["templates"], never, false, never>;
    static ngAcceptInputType_value: unknown;
    static ngAcceptInputType_showValue: unknown;
}
export declare class ProgressBarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ProgressBarModule, [typeof ProgressBar], [typeof i1.CommonModule], [typeof ProgressBar]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ProgressBarModule>;
}
