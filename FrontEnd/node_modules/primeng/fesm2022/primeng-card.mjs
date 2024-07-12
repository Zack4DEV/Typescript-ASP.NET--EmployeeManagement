import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { signal, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { Header, Footer, PrimeTemplate, SharedModule } from 'primeng/api';
import { ObjectUtils } from 'primeng/utils';

/**
 * Card is a flexible container component.
 * @group Components
 */
class Card {
    el;
    /**
     * Header of the card.
     * @group Props
     */
    header;
    /**
     * Subheader of the card.
     * @group Props
     */
    subheader;
    /**
     * Inline style of the element.
     * @group Props
     */
    set style(value) {
        if (!ObjectUtils.equals(this._style(), value)) {
            this._style.set(value);
        }
    }
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    headerFacet;
    footerFacet;
    templates;
    headerTemplate;
    titleTemplate;
    subtitleTemplate;
    contentTemplate;
    footerTemplate;
    _style = signal(null);
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'title':
                    this.titleTemplate = item.template;
                    break;
                case 'subtitle':
                    this.subtitleTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Card, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Card, selector: "p-card", inputs: { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "headerFacet", first: true, predicate: Header, descendants: true }, { propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-card-header img{width:100%}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Card, decorators: [{
            type: Component,
            args: [{ selector: 'p-card', template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate">
                    {{ header }}
                    <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate">
                    {{ subheader }}
                    <ng-container *ngTemplateOutlet="subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-card-header img{width:100%}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { header: [{
                type: Input
            }], subheader: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], headerFacet: [{
                type: ContentChild,
                args: [Header]
            }], footerFacet: [{
                type: ContentChild,
                args: [Footer]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class CardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: CardModule, declarations: [Card], imports: [CommonModule], exports: [Card, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CardModule, imports: [CommonModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Card, SharedModule],
                    declarations: [Card]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Card, CardModule };
//# sourceMappingURL=primeng-card.mjs.map
