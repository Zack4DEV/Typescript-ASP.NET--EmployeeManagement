import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class StepperHeader {
    id;
    template;
    stepperPanel;
    index;
    disabled;
    active;
    highlighted;
    getStepProp;
    ariaControls;
    onClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: StepperHeader, selector: "p-stepperHeader", inputs: { id: "id", template: "template", stepperPanel: "stepperPanel", index: "index", disabled: "disabled", active: "active", highlighted: "highlighted", getStepProp: "getStepProp", ariaControls: "ariaControls" }, outputs: { onClick: "onClick" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <ng-container *ngIf="template; else buttonRef">
            <ng-container
                *ngTemplateOutlet="
                    template;
                    context: {
                        index: index,
                        active: active,
                        highlighted: highlighted,
                        class: 'p-stepper-action',
                        headerClass: 'p-stepper-action',
                        numberClass: 'p-stepper-number',
                        titleClass: 'p-stepper-title',
                        onClick: onClick
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #buttonRef>
            <p-button [id]="id" class="p-stepper-action" role="tab" [tabindex]="disabled ? -1 : undefined" [aria-controls]="ariaControls" (click)="onClick.emit($event, index)">
                <span class="p-stepper-number">{{ index + 1 }}</span>
                <span class="p-stepper-title">{{ getStepProp }}</span>
            </p-button>
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperHeader',
                    template: `
        <ng-container *ngIf="template; else buttonRef">
            <ng-container
                *ngTemplateOutlet="
                    template;
                    context: {
                        index: index,
                        active: active,
                        highlighted: highlighted,
                        class: 'p-stepper-action',
                        headerClass: 'p-stepper-action',
                        numberClass: 'p-stepper-number',
                        titleClass: 'p-stepper-title',
                        onClick: onClick
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #buttonRef>
            <p-button [id]="id" class="p-stepper-action" role="tab" [tabindex]="disabled ? -1 : undefined" [aria-controls]="ariaControls" (click)="onClick.emit($event, index)">
                <span class="p-stepper-number">{{ index + 1 }}</span>
                <span class="p-stepper-title">{{ getStepProp }}</span>
            </p-button>
        </ng-template>
    `,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { id: [{
                type: Input
            }], template: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], disabled: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }], getStepProp: [{
                type: Input
            }], ariaControls: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
export class StepperSeparator {
    template;
    separatorClass;
    stepperPanel;
    index;
    active;
    highlighted;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperSeparator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: StepperSeparator, selector: "p-stepperSeparator", inputs: { template: "template", separatorClass: "separatorClass", stepperPanel: "stepperPanel", index: "index", active: "active", highlighted: "highlighted" }, host: { classAttribute: "p-stepper-separator" }, ngImport: i0, template: `
        <ng-container *ngIf="template; else span">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, class: separatorClass }"></ng-container>
        </ng-container>
        <ng-template #span>
            <span [class]="separatorClass" aria-hidden="true"></span>
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperSeparator',
                    template: `
        <ng-container *ngIf="template; else span">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, class: separatorClass }"></ng-container>
        </ng-container>
        <ng-template #span>
            <span [class]="separatorClass" aria-hidden="true"></span>
        </ng-template>
    `,
                    host: {
                        class: 'p-stepper-separator'
                    }
                }]
        }], propDecorators: { template: [{
                type: Input
            }], separatorClass: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }] } });
export class StepperContent {
    id;
    orientation;
    template;
    ariaLabelledby;
    stepperPanel;
    index;
    active;
    highlighted;
    onClick = new EventEmitter();
    prevCallback = new EventEmitter();
    nextCallback = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperContent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: StepperContent, selector: "p-stepperContent", inputs: { id: "id", orientation: "orientation", template: "template", ariaLabelledby: "ariaLabelledby", stepperPanel: "stepperPanel", index: "index", active: "active", highlighted: "highlighted" }, outputs: { onClick: "onClick", prevCallback: "prevCallback", nextCallback: "nextCallback" }, host: { properties: { "class.p-stepper-content": "true", "class.p-element": "true", "class.p-toggleable-content": "orientation === 'vertical'" } }, ngImport: i0, template: ` <div [id]="id" role="tabpanel" data-pc-name="stepperpanel" [attr.data-pc-index]="index" [attr.data-p-active]="active" [attr.aria-labelledby]="ariaLabelledby">
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, onClick: onClick, prevCallback: prevCallback, nextCallback: nextCallback }"></ng-container>
        </ng-container>
        <ng-template *ngIf="!template">
            <ng-container *ngIf="stepperPanel">
                <ng-container *ngTemplateOutlet="stepperPanel"></ng-container>
            </ng-container>
        </ng-template>
    </div>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperContent',
                    template: ` <div [id]="id" role="tabpanel" data-pc-name="stepperpanel" [attr.data-pc-index]="index" [attr.data-p-active]="active" [attr.aria-labelledby]="ariaLabelledby">
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, onClick: onClick, prevCallback: prevCallback, nextCallback: nextCallback }"></ng-container>
        </ng-container>
        <ng-template *ngIf="!template">
            <ng-container *ngIf="stepperPanel">
                <ng-container *ngTemplateOutlet="stepperPanel"></ng-container>
            </ng-container>
        </ng-template>
    </div>`,
                    host: {
                        '[class.p-stepper-content]': 'true',
                        '[class.p-element]': 'true',
                        '[class.p-toggleable-content]': "orientation === 'vertical'"
                    }
                }]
        }], propDecorators: { id: [{
                type: Input
            }], orientation: [{
                type: Input
            }], template: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }], onClick: [{
                type: Output
            }], prevCallback: [{
                type: Output
            }], nextCallback: [{
                type: Output
            }] } });
export class StepperPanel {
    header;
    templates;
    headerTemplate;
    startTemplate;
    contentTemplate;
    separatorTemplate;
    endTemplate;
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'separator':
                    this.separatorTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperPanel, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: StepperPanel, selector: "p-stepperPanel", inputs: { header: "header" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperPanel',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { header: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
/**
 * The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.
 * @group Components
 */
export class Stepper {
    /**
     * Active step index of stepper.
     * @group Props
     */
    activeStep = 0;
    /**
     * Orientation of the stepper.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Whether the steps are clickable or not.
     * @group Props
     */
    linear = false;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    stepperPanels;
    templates;
    onClick = new EventEmitter();
    /**
     * Emitted when the value changes.
     * @param {ActiveStepChangeEvent} event - custom change event.
     * @group Emits
     */
    activeStepChange = new EventEmitter();
    headerTemplate;
    startTemplate;
    separatorTemplate;
    endTemplate;
    id = UniqueComponentId();
    panels;
    isStepActive(index) {
        return this.activeStep === index;
    }
    getStepProp(step) {
        if (step?.header) {
            return step.header;
        }
        if (step?.content) {
            return step.content;
        }
        return undefined;
    }
    getStepKey(step, index) {
        return this.getStepProp(step) || index;
    }
    getStepHeaderActionId(index) {
        return `${this.id}_${index}_header_action`;
    }
    getStepContentId(index) {
        return `${this.id}_${index}_content`;
    }
    updateActiveStep(event, index) {
        this.activeStep = index;
        this.activeStepChange.emit(this.activeStep);
    }
    onItemClick(event, index) {
        if (this.linear) {
            event.preventDefault();
            return;
        }
        if (index !== this.activeStep) {
            this.updateActiveStep(event, index);
        }
    }
    isItemDisabled(index) {
        return this.linear && !this.isStepActive(index);
    }
    prevCallback(event, index) {
        if (index !== 0) {
            this.updateActiveStep(event, index - 1);
        }
    }
    nextCallback(event, index) {
        if (index !== this.stepperPanels.length - 1) {
            this.updateActiveStep(event, index + 1);
        }
    }
    trackByFn(index) {
        return index;
    }
    ngAfterContentInit() {
        this.panels = this.stepperPanels.toArray();
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'start':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                    this.endTemplate = item.template;
                    break;
                default:
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Stepper, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Stepper, selector: "p-stepper", inputs: { activeStep: "activeStep", orientation: "orientation", linear: "linear", transitionOptions: "transitionOptions" }, outputs: { onClick: "onClick", activeStepChange: "activeStepChange" }, host: { properties: { "class.p-stepper": "true", "class.p-component": "true", "class.p-stepper-vertical": "orientation === 'vertical'" } }, queries: [{ propertyName: "stepperPanels", predicate: StepperPanel }, { propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div role="tablist">
            <ng-container *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </ng-container>
            <ng-container *ngIf="orientation === 'horizontal'; else vertical">
                <ul class="p-stepper-nav">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <li
                            [key]="getStepKey(step, index)"
                            class="p-stepper-header"
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                            [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                            role="presentation"
                            [data-pc-name]="stepperPanel"
                            [data-p-highlight]="isStepActive(index)"
                            [data-p-disabled]="isItemDisabled(index)"
                            [data-pc-index]="index"
                            [data-p-active]="isStepActive(index)"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>

                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                        </li>
                    </ng-template>
                </ul>
                <div class="p-stepper-panels">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <ng-container *ngIf="isStepActive(index)">
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </ng-container>
                    </ng-template>
                </div>
            </ng-container>
            <ng-template #vertical>
                <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                    <div
                        [key]="getStepKey(step, index)"
                        class="p-stepper-panel"
                        [ngClass]="{
                            'p-stepper-panel-active': orientation === 'vertical' && isStepActive(index)
                        }"
                        [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                        [data-pc-name]="'stepperpanel'"
                        [data-p-highlight]="isStepActive(index)"
                        [data-p-disabled]="isItemDisabled(index)"
                        [data-pc-index]="index"
                        [data-p-active]="isStepActive(index)"
                    >
                        <div
                            class="p-stepper-header "
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>
                        </div>

                        <div class="p-stepper-toggleable-content" [@tabContent]="isStepActive(index) ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }">
                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </div>
                    </div>
                </ng-template>
            </ng-template>
            <ng-container *ngIf="endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </ng-container>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperContent, selector: "p-stepperContent", inputs: ["id", "orientation", "template", "ariaLabelledby", "stepperPanel", "index", "active", "highlighted"], outputs: ["onClick", "prevCallback", "nextCallback"] }, { kind: "component", type: StepperHeader, selector: "p-stepperHeader", inputs: ["id", "template", "stepperPanel", "index", "disabled", "active", "highlighted", "getStepProp", "ariaControls"], outputs: ["onClick"] }, { kind: "component", type: StepperSeparator, selector: "p-stepperSeparator", inputs: ["template", "separatorClass", "stepperPanel", "index", "active", "highlighted"] }], animations: [
            trigger('tabContent', [
                state('hidden', style({
                    height: '0',
                    visibility: 'hidden'
                })),
                state('visible', style({
                    height: '*',
                    visibility: 'visible'
                })),
                transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                transition('void => *', animate(0))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Stepper, decorators: [{
            type: Component,
            args: [{ selector: 'p-stepper', template: `
        <div role="tablist">
            <ng-container *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </ng-container>
            <ng-container *ngIf="orientation === 'horizontal'; else vertical">
                <ul class="p-stepper-nav">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <li
                            [key]="getStepKey(step, index)"
                            class="p-stepper-header"
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                            [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                            role="presentation"
                            [data-pc-name]="stepperPanel"
                            [data-p-highlight]="isStepActive(index)"
                            [data-p-disabled]="isItemDisabled(index)"
                            [data-pc-index]="index"
                            [data-p-active]="isStepActive(index)"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>

                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                        </li>
                    </ng-template>
                </ul>
                <div class="p-stepper-panels">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <ng-container *ngIf="isStepActive(index)">
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </ng-container>
                    </ng-template>
                </div>
            </ng-container>
            <ng-template #vertical>
                <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                    <div
                        [key]="getStepKey(step, index)"
                        class="p-stepper-panel"
                        [ngClass]="{
                            'p-stepper-panel-active': orientation === 'vertical' && isStepActive(index)
                        }"
                        [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                        [data-pc-name]="'stepperpanel'"
                        [data-p-highlight]="isStepActive(index)"
                        [data-p-disabled]="isItemDisabled(index)"
                        [data-pc-index]="index"
                        [data-p-active]="isStepActive(index)"
                    >
                        <div
                            class="p-stepper-header "
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>
                        </div>

                        <div class="p-stepper-toggleable-content" [@tabContent]="isStepActive(index) ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }">
                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </div>
                    </div>
                </ng-template>
            </ng-template>
            <ng-container *ngIf="endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </ng-container>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.p-stepper]': 'true',
                        '[class.p-component]': 'true',
                        '[class.p-stepper-vertical]': "orientation === 'vertical'"
                    }, animations: [
                        trigger('tabContent', [
                            state('hidden', style({
                                height: '0',
                                visibility: 'hidden'
                            })),
                            state('visible', style({
                                height: '*',
                                visibility: 'visible'
                            })),
                            transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                            transition('void => *', animate(0))
                        ])
                    ], styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"] }]
        }], propDecorators: { activeStep: [{
                type: Input
            }], orientation: [{
                type: Input
            }], linear: [{
                type: Input
            }], transitionOptions: [{
                type: Input
            }], stepperPanels: [{
                type: ContentChildren,
                args: [StepperPanel]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], onClick: [{
                type: Output
            }], activeStepChange: [{
                type: Output
            }] } });
export class StepperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: StepperModule, declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator], imports: [CommonModule, SharedModule], exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperModule, imports: [CommonModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: StepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule],
                    declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hMLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFpQ2pGLE1BQU0sT0FBTyxhQUFhO0lBQ2IsRUFBRSxDQUFxQjtJQUV2QixRQUFRLENBQStCO0lBRXZDLFlBQVksQ0FBZTtJQUUzQixLQUFLLENBQXFCO0lBRTFCLFFBQVEsQ0FBc0I7SUFFOUIsTUFBTSxDQUFzQjtJQUU1QixXQUFXLENBQXNCO0lBRWpDLFdBQVcsQ0FBcUI7SUFFaEMsWUFBWSxDQUFxQjtJQUVoQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzt1R0FuQnBDLGFBQWE7MkZBQWIsYUFBYSx1VkE3Qlo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdCVDs7MkZBS1EsYUFBYTtrQkEvQnpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3QlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtpQkFDSjs4QkFFWSxFQUFF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Z0IsQ0FBQztpQkFDdkciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbWVUZW1wbGF0ZSwgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgTnVsbGFibGUgfSBmcm9tICdwcmltZW5nL3RzLWhlbHBlcnMnO1xuaW1wb3J0IHsgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3RlcHBlckhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlOyBlbHNlIGJ1dHRvblJlZlwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkOiBoaWdobGlnaHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncC1zdGVwcGVyLWFjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDbGFzczogJ3Atc3RlcHBlci1hY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyQ2xhc3M6ICdwLXN0ZXBwZXItbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdwLXN0ZXBwZXItdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjYnV0dG9uUmVmPlxuICAgICAgICAgICAgPHAtYnV0dG9uIFtpZF09XCJpZFwiIGNsYXNzPVwicC1zdGVwcGVyLWFjdGlvblwiIHJvbGU9XCJ0YWJcIiBbdGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IHVuZGVmaW5lZFwiIFthcmlhLWNvbnRyb2xzXT1cImFyaWFDb250cm9sc1wiIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50LCBpbmRleClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtc3RlcHBlci1udW1iZXJcIj57eyBpbmRleCArIDEgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXN0ZXBwZXItdGl0bGVcIj57eyBnZXRTdGVwUHJvcCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcC1idXR0b24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhlYWRlciB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgc3RlcHBlclBhbmVsOiBTdGVwcGVyUGFuZWw7XG5cbiAgICBASW5wdXQoKSBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBoaWdobGlnaHRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGdldFN0ZXBQcm9wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhcmlhQ29udHJvbHM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3RlcHBlclNlcGFyYXRvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlOyBlbHNlIHNwYW5cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyBpbmRleDogaW5kZXgsIGFjdGl2ZTogYWN0aXZlLCBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWQsIGNsYXNzOiBzZXBhcmF0b3JDbGFzcyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBbY2xhc3NdPVwic2VwYXJhdG9yQ2xhc3NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1zdGVwcGVyLXNlcGFyYXRvcidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJTZXBhcmF0b3Ige1xuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgc2VwYXJhdG9yQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHN0ZXBwZXJQYW5lbDogU3RlcHBlclBhbmVsO1xuXG4gICAgQElucHV0KCkgaW5kZXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGhpZ2hsaWdodGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3RlcHBlckNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgIDxkaXYgW2lkXT1cImlkXCIgcm9sZT1cInRhYnBhbmVsXCIgZGF0YS1wYy1uYW1lPVwic3RlcHBlcnBhbmVsXCIgW2F0dHIuZGF0YS1wYy1pbmRleF09XCJpbmRleFwiIFthdHRyLmRhdGEtcC1hY3RpdmVdPVwiYWN0aXZlXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7IGluZGV4OiBpbmRleCwgYWN0aXZlOiBhY3RpdmUsIGhpZ2hsaWdodGVkOiBoaWdobGlnaHRlZCwgb25DbGljazogb25DbGljaywgcHJldkNhbGxiYWNrOiBwcmV2Q2FsbGJhY2ssIG5leHRDYWxsYmFjazogbmV4dENhbGxiYWNrIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIiF0ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0ZXBwZXJQYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGVwcGVyUGFuZWxcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PmAsXG5cbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1zdGVwcGVyLWNvbnRlbnRdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtZWxlbWVudF0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC10b2dnbGVhYmxlLWNvbnRlbnRdJzogXCJvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJ1wiXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyQ29udGVudCB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnO1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgc3RlcHBlclBhbmVsOiBTdGVwcGVyUGFuZWw7XG5cbiAgICBASW5wdXQoKSBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBPdXRwdXQoKSBwcmV2Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAT3V0cHV0KCkgbmV4dENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3RlcHBlclBhbmVsJyxcbiAgICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJQYW5lbCB7XG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogTnVsbGFibGU8UXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+PjtcblxuICAgIGhlYWRlclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHN0YXJ0VGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgY29udGVudFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHNlcGFyYXRvclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGVuZFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgKHRoaXMudGVtcGxhdGVzIGFzIFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZXBhcmF0b3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcGFyYXRvclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgU3RlcHBlciBjb21wb25lbnQgZGlzcGxheXMgYSB3aXphcmQtbGlrZSB3b3JrZmxvdyBieSBndWlkaW5nIHVzZXJzIHRocm91Z2ggdGhlIG11bHRpLXN0ZXAgcHJvZ3Jlc3Npb24uXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc3RlcHBlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0YXJ0VGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RhcnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJzsgZWxzZSB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInAtc3RlcHBlci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1zdGVwIFtuZ0Zvck9mXT1cInBhbmVsc1wiIGxldC1pbmRleD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZ2V0U3RlcEtleShzdGVwLCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1zdGVwcGVyLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOiBpc1N0ZXBBY3RpdmUoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGlzSXRlbURpc2FibGVkKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY3VycmVudF09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpID8gJ3N0ZXAnIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wYy1uYW1lXT1cInN0ZXBwZXJQYW5lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcC1oaWdobGlnaHRdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcC1kaXNhYmxlZF09XCJpc0l0ZW1EaXNhYmxlZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXBjLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wLWFjdGl2ZV09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcGVySGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJnZXRTdGVwSGVhZGVyQWN0aW9uSWQoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInN0ZXAuaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RlcHBlclBhbmVsXT1cInN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ2V0U3RlcFByb3BdPVwiZ2V0U3RlcFByb3Aoc3RlcCwgJ2hlYWRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzSXRlbURpc2FibGVkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWdobGlnaHRlZF09XCJpbmRleCA8IGFjdGl2ZVN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ3Atc3RlcHBlci1hY3Rpb24nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWEtY29udHJvbHNdPVwiZ2V0U3RlcENvbnRlbnRJZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcC1zdGVwcGVySGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluZGV4ICE9PSBzdGVwcGVyUGFuZWxzLmxlbmd0aCAtIDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc3RlcHBlclNlcGFyYXRvciBbdGVtcGxhdGVdPVwic3RlcC5zZXBhcmF0b3JUZW1wbGF0ZVwiIFtzZXBhcmF0b3JDbGFzc109XCIncC1zdGVwcGVyLXNlcGFyYXRvcidcIiBbc3RlcHBlclBhbmVsXT1cInN0ZXBcIiBbaW5kZXhdPVwiaW5kZXhcIiBbYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIiBbaGlnaGxpZ2h0ZWRdPVwiaW5kZXggPCBhY3RpdmVTdGVwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zdGVwcGVyLXBhbmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXN0ZXAgW25nRm9yT2ZdPVwicGFuZWxzXCIgbGV0LWluZGV4PVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU3RlcEFjdGl2ZShpbmRleClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcGVyQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZ2V0U3RlcENvbnRlbnRJZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwic3RlcC5jb250ZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3JpZW50YXRpb25dPVwib3JpZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RlcHBlclBhbmVsXT1cInN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlnaGxpZ2h0ZWRdPVwiaW5kZXggPCBhY3RpdmVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWFMYWJlbGxlZGJ5XT1cImdldFN0ZXBIZWFkZXJBY3Rpb25JZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZXh0Q2FsbGJhY2spPVwibmV4dENhbGxiYWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZXZDYWxsYmFjayk9XCJwcmV2Q2FsbGJhY2soJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXN0ZXAgW25nRm9yT2ZdPVwicGFuZWxzXCIgbGV0LWluZGV4PVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5XT1cImdldFN0ZXBLZXkoc3RlcCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1zdGVwcGVyLXBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1zdGVwcGVyLXBhbmVsLWFjdGl2ZSc6IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGlzU3RlcEFjdGl2ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jdXJyZW50XT1cImlzU3RlcEFjdGl2ZShpbmRleCkgPyAnc3RlcCcgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcGMtbmFtZV09XCInc3RlcHBlcnBhbmVsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wLWhpZ2hsaWdodF09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXAtZGlzYWJsZWRdPVwiaXNJdGVtRGlzYWJsZWQoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXBjLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXAtYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXN0ZXBwZXItaGVhZGVyIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOiBpc1N0ZXBBY3RpdmUoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGlzSXRlbURpc2FibGVkKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0ZXBwZXJIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImdldFN0ZXBIZWFkZXJBY3Rpb25JZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwic3RlcC5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtnZXRTdGVwUHJvcF09XCJnZXRTdGVwUHJvcChzdGVwLCAnaGVhZGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNJdGVtRGlzYWJsZWQoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZ2hsaWdodGVkXT1cImluZGV4IDwgYWN0aXZlU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCIncC1zdGVwcGVyLWFjdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYS1jb250cm9sc109XCJnZXRTdGVwQ29udGVudElkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wLXN0ZXBwZXJIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc3RlcHBlci10b2dnbGVhYmxlLWNvbnRlbnRcIiBbQHRhYkNvbnRlbnRdPVwiaXNTdGVwQWN0aXZlKGluZGV4KSA/IHsgdmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7IHRyYW5zaXRpb25QYXJhbXM6IHRyYW5zaXRpb25PcHRpb25zIH0gfSA6IHsgdmFsdWU6ICdoaWRkZW4nLCBwYXJhbXM6IHsgdHJhbnNpdGlvblBhcmFtczogdHJhbnNpdGlvbk9wdGlvbnMgfSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluZGV4ICE9PSBzdGVwcGVyUGFuZWxzLmxlbmd0aCAtIDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc3RlcHBlclNlcGFyYXRvciBbdGVtcGxhdGVdPVwic3RlcC5zZXBhcmF0b3JUZW1wbGF0ZVwiIFtzZXBhcmF0b3JDbGFzc109XCIncC1zdGVwcGVyLXNlcGFyYXRvcidcIiBbc3RlcHBlclBhbmVsXT1cInN0ZXBcIiBbaW5kZXhdPVwiaW5kZXhcIiBbYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIiBbaGlnaGxpZ2h0ZWRdPVwiaW5kZXggPCBhY3RpdmVTdGVwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcGVyQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZ2V0U3RlcENvbnRlbnRJZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwic3RlcC5jb250ZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3JpZW50YXRpb25dPVwib3JpZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RlcHBlclBhbmVsXT1cInN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlnaGxpZ2h0ZWRdPVwiaW5kZXggPCBhY3RpdmVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWFMYWJlbGxlZGJ5XT1cImdldFN0ZXBIZWFkZXJBY3Rpb25JZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZXh0Q2FsbGJhY2spPVwibmV4dENhbGxiYWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZXZDYWxsYmFjayk9XCJwcmV2Q2FsbGJhY2soJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW5kVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW5kVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1zdGVwcGVyXSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWNvbXBvbmVudF0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC1zdGVwcGVyLXZlcnRpY2FsXSc6IFwib3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCdcIlxuICAgIH0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCd0YWJDb250ZW50JywgW1xuICAgICAgICAgICAgc3RhdGUoXG4gICAgICAgICAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0YXRlKFxuICAgICAgICAgICAgICAgICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPD0+IGhpZGRlbicsIFthbmltYXRlKCcyNTBtcyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSknKV0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgwKSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICAvKipcbiAgICAgKiBBY3RpdmUgc3RlcCBpbmRleCBvZiBzdGVwcGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFjdGl2ZVN0ZXA6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGwgPSAwO1xuICAgIC8qKlxuICAgICAqIE9yaWVudGF0aW9uIG9mIHRoZSBzdGVwcGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ2hvcml6b250YWwnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHN0ZXBzIGFyZSBjbGlja2FibGUgb3Igbm90LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxpbmVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb3B0aW9ucyBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnNDAwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpJztcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3RlcHBlclBhbmVsKSBzdGVwcGVyUGFuZWxzOiBRdWVyeUxpc3Q8U3RlcHBlclBhbmVsPiB8IHVuZGVmaW5lZDtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICAgKiBAcGFyYW0ge0FjdGl2ZVN0ZXBDaGFuZ2VFdmVudH0gZXZlbnQgLSBjdXN0b20gY2hhbmdlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBhY3RpdmVTdGVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgc3RhcnRUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBzZXBhcmF0b3JUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBlbmRUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBpZDogc3RyaW5nID0gVW5pcXVlQ29tcG9uZW50SWQoKTtcblxuICAgIHBhbmVscyE6IFN0ZXBwZXJQYW5lbFtdO1xuXG4gICAgaXNTdGVwQWN0aXZlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlU3RlcCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0U3RlcFByb3Aoc3RlcCkge1xuICAgICAgICBpZiAoc3RlcD8uaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcC5oZWFkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RlcD8uY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFN0ZXBLZXkoc3RlcCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcFByb3Aoc3RlcCkgfHwgaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0U3RlcEhlYWRlckFjdGlvbklkKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmlkfV8ke2luZGV4fV9oZWFkZXJfYWN0aW9uYDtcbiAgICB9XG5cbiAgICBnZXRTdGVwQ29udGVudElkKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmlkfV8ke2luZGV4fV9jb250ZW50YDtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVTdGVwKGV2ZW50LCBpbmRleCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBpbmRleDtcblxuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXBDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZVN0ZXApO1xuICAgIH1cblxuICAgIG9uSXRlbUNsaWNrKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5saW5lYXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggIT09IHRoaXMuYWN0aXZlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGVwKGV2ZW50LCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0l0ZW1EaXNhYmxlZChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lYXIgJiYgIXRoaXMuaXNTdGVwQWN0aXZlKGluZGV4KTtcbiAgICB9XG5cbiAgICBwcmV2Q2FsbGJhY2soZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGVwKGV2ZW50LCBpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dENhbGxiYWNrKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IHRoaXMuc3RlcHBlclBhbmVscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0ZXAoZXZlbnQsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMucGFuZWxzID0gKHRoaXMuc3RlcHBlclBhbmVscyBhcyBRdWVyeUxpc3Q8U3RlcHBlclBhbmVsPikudG9BcnJheSgpO1xuICAgICAgICAodGhpcy50ZW1wbGF0ZXMgYXMgUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU3RlcHBlciwgU3RlcHBlclBhbmVsLCBTdGVwcGVyQ29udGVudCwgU3RlcHBlckhlYWRlciwgU3RlcHBlclNlcGFyYXRvciwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTdGVwcGVyLCBTdGVwcGVyUGFuZWwsIFN0ZXBwZXJQYW5lbCwgU3RlcHBlckNvbnRlbnQsIFN0ZXBwZXJIZWFkZXIsIFN0ZXBwZXJTZXBhcmF0b3JdXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJNb2R1bGUge31cbiJdfQ==