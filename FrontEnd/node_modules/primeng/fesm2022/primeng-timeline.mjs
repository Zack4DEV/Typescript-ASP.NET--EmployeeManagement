import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ContentChildren, NgModule } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';

/**
 * Timeline visualizes a series of chained events.
 * @group Components
 */
class Timeline {
    el;
    /**
     * An array of events to display.
     * @group Props
     */
    value;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
     * @group Props
     */
    align = 'left';
    /**
     * Orientation of the timeline.
     * @group Props
     */
    layout = 'vertical';
    templates;
    contentTemplate;
    oppositeTemplate;
    markerTemplate;
    constructor(el) {
        this.el = el;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'opposite':
                    this.oppositeTemplate = item.template;
                    break;
                case 'marker':
                    this.markerTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Timeline, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Timeline, selector: "p-timeline", inputs: { value: "value", style: "style", styleClass: "styleClass", align: "align", layout: "layout" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                'p-timeline p-component': true,
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'
            }"
            [attr.data-pc-name]="'timeline'"
            [attr.data-pc-section]="'root'"
        >
            <div *ngFor="let event of value; let last = last" class="p-timeline-event" [attr.data-pc-section]="'event'">
                <div class="p-timeline-event-opposite" [attr.data-pc-section]="'opposite'">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: { $implicit: event }"></ng-container>
                </div>
                <div class="p-timeline-event-separator" [attr.data-pc-section]="'separator'">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: { $implicit: event }"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker" [attr.data-pc-section]="'marker'"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content" [attr.data-pc-section]="'content'">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: event }"></ng-container>
                </div>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Timeline, decorators: [{
            type: Component,
            args: [{ selector: 'p-timeline', template: `
        <div
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                'p-timeline p-component': true,
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'
            }"
            [attr.data-pc-name]="'timeline'"
            [attr.data-pc-section]="'root'"
        >
            <div *ngFor="let event of value; let last = last" class="p-timeline-event" [attr.data-pc-section]="'event'">
                <div class="p-timeline-event-opposite" [attr.data-pc-section]="'opposite'">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: { $implicit: event }"></ng-container>
                </div>
                <div class="p-timeline-event-separator" [attr.data-pc-section]="'separator'">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: { $implicit: event }"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker" [attr.data-pc-section]="'marker'"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content" [attr.data-pc-section]="'content'">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: event }"></ng-container>
                </div>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { value: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], align: [{
                type: Input
            }], layout: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class TimelineModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: TimelineModule, declarations: [Timeline], imports: [CommonModule], exports: [Timeline, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TimelineModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Timeline, SharedModule],
                    declarations: [Timeline]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Timeline, TimelineModule };
//# sourceMappingURL=primeng-timeline.mjs.map
