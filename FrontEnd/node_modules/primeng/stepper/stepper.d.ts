import { AfterContentInit, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
export declare class StepperHeader {
    id: string | undefined;
    template: TemplateRef<any> | undefined;
    stepperPanel: StepperPanel;
    index: string | undefined;
    disabled: boolean | undefined;
    active: boolean | undefined;
    highlighted: boolean | undefined;
    getStepProp: string | undefined;
    ariaControls: string | undefined;
    onClick: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHeader, "p-stepperHeader", never, { "id": { "alias": "id"; "required": false; }; "template": { "alias": "template"; "required": false; }; "stepperPanel": { "alias": "stepperPanel"; "required": false; }; "index": { "alias": "index"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "active": { "alias": "active"; "required": false; }; "highlighted": { "alias": "highlighted"; "required": false; }; "getStepProp": { "alias": "getStepProp"; "required": false; }; "ariaControls": { "alias": "ariaControls"; "required": false; }; }, { "onClick": "onClick"; }, never, never, false, never>;
}
export declare class StepperSeparator {
    template: TemplateRef<any> | undefined;
    separatorClass: string | undefined;
    stepperPanel: StepperPanel;
    index: string | undefined;
    active: boolean | undefined;
    highlighted: boolean | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperSeparator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperSeparator, "p-stepperSeparator", never, { "template": { "alias": "template"; "required": false; }; "separatorClass": { "alias": "separatorClass"; "required": false; }; "stepperPanel": { "alias": "stepperPanel"; "required": false; }; "index": { "alias": "index"; "required": false; }; "active": { "alias": "active"; "required": false; }; "highlighted": { "alias": "highlighted"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class StepperContent {
    id: string | undefined;
    orientation: 'vertical' | 'horizontal';
    template: TemplateRef<any> | undefined;
    ariaLabelledby: string | undefined;
    stepperPanel: StepperPanel;
    index: string | undefined;
    active: boolean | undefined;
    highlighted: boolean | undefined;
    onClick: EventEmitter<void>;
    prevCallback: EventEmitter<void>;
    nextCallback: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperContent, "p-stepperContent", never, { "id": { "alias": "id"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "template": { "alias": "template"; "required": false; }; "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; "stepperPanel": { "alias": "stepperPanel"; "required": false; }; "index": { "alias": "index"; "required": false; }; "active": { "alias": "active"; "required": false; }; "highlighted": { "alias": "highlighted"; "required": false; }; }, { "onClick": "onClick"; "prevCallback": "prevCallback"; "nextCallback": "nextCallback"; }, never, never, false, never>;
}
export declare class StepperPanel {
    header: string | undefined;
    templates: Nullable<QueryList<PrimeTemplate>>;
    headerTemplate: Nullable<TemplateRef<any>>;
    startTemplate: Nullable<TemplateRef<any>>;
    contentTemplate: Nullable<TemplateRef<any>>;
    separatorTemplate: Nullable<TemplateRef<any>>;
    endTemplate: Nullable<TemplateRef<any>>;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperPanel, "p-stepperPanel", never, { "header": { "alias": "header"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
}
/**
 * The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.
 * @group Components
 */
export declare class Stepper implements AfterContentInit {
    /**
     * Active step index of stepper.
     * @group Props
     */
    activeStep: number | undefined | null;
    /**
     * Orientation of the stepper.
     * @group Props
     */
    orientation: 'vertical' | 'horizontal';
    /**
     * Whether the steps are clickable or not.
     * @group Props
     */
    linear: boolean;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    stepperPanels: QueryList<StepperPanel> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    onClick: EventEmitter<any>;
    /**
     * Emitted when the value changes.
     * @param {ActiveStepChangeEvent} event - custom change event.
     * @group Emits
     */
    activeStepChange: EventEmitter<number>;
    headerTemplate: Nullable<TemplateRef<any>>;
    startTemplate: Nullable<TemplateRef<any>>;
    separatorTemplate: Nullable<TemplateRef<any>>;
    endTemplate: Nullable<TemplateRef<any>>;
    id: string;
    panels: StepperPanel[];
    isStepActive(index: number): boolean;
    getStepProp(step: any): any;
    getStepKey(step: any, index: any): any;
    getStepHeaderActionId(index: any): string;
    getStepContentId(index: any): string;
    updateActiveStep(event: any, index: any): void;
    onItemClick(event: any, index: any): void;
    isItemDisabled(index: any): boolean;
    prevCallback(event: any, index: any): void;
    nextCallback(event: any, index: any): void;
    trackByFn(index: number): number;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Stepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Stepper, "p-stepper", never, { "activeStep": { "alias": "activeStep"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "linear": { "alias": "linear"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; }, { "onClick": "onClick"; "activeStepChange": "activeStepChange"; }, ["stepperPanels", "templates"], never, false, never>;
}
export declare class StepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<StepperModule, [typeof Stepper, typeof StepperPanel, typeof StepperPanel, typeof StepperContent, typeof StepperHeader, typeof StepperSeparator], [typeof i1.CommonModule, typeof i2.SharedModule], [typeof Stepper, typeof StepperPanel, typeof StepperContent, typeof StepperHeader, typeof StepperSeparator, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<StepperModule>;
}
