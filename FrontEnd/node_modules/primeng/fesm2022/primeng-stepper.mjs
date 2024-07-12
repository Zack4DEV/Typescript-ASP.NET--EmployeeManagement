import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import { trigger, state, style, transition, animate } from '@angular/animations';

class StepperHeader {
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
class StepperSeparator {
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
class StepperContent {
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
class StepperPanel {
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
class Stepper {
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
class StepperModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { Stepper, StepperContent, StepperHeader, StepperModule, StepperPanel, StepperSeparator };
//# sourceMappingURL=primeng-stepper.mjs.map
