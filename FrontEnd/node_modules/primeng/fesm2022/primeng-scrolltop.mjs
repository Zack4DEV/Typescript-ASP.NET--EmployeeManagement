import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { PLATFORM_ID, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Input, ContentChildren, NgModule } from '@angular/core';
import * as i1 from 'primeng/api';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ChevronUpIcon } from 'primeng/icons/chevronup';
import { ZIndexUtils } from 'primeng/utils';

/**
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 * @group Components
 */
class ScrollTop {
    document;
    platformId;
    renderer;
    el;
    cd;
    config;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Target of the ScrollTop.
     * @group Props
     */
    target = 'window';
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @group Props
     */
    threshold = 400;
    /**
     * Name of the icon or JSX.Element for icon.
     * @group Props
     */
    icon;
    /**
     * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
     * @group Props
     */
    behavior = 'smooth';
    /**
     * A string value used to determine the display transition options.
     * @group Props
     */
    showTransitionOptions = '.15s';
    /**
     * A string value used to determine the hiding transition options.
     * @group Props
     */
    hideTransitionOptions = '.15s';
    /**
     * Establishes a string value that labels the scroll-top button.
     * @group Props
     */
    buttonAriaLabel;
    templates;
    iconTemplate;
    documentScrollListener;
    parentScrollListener;
    visible = false;
    overlay;
    window;
    constructor(document, platformId, renderer, el, cd, config) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this.config = config;
        this.window = this.document.defaultView;
    }
    ngOnInit() {
        if (this.target === 'window')
            this.bindDocumentScrollListener();
        else if (this.target === 'parent')
            this.bindParentScrollListener();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'icon':
                    this.iconTemplate = item.template;
                    break;
            }
        });
    }
    onClick() {
        let scrollElement = this.target === 'window' ? this.window : this.el.nativeElement.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: this.behavior
        });
    }
    onEnter(event) {
        switch (event.toState) {
            case 'open':
                this.overlay = event.element;
                ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
                break;
            case 'void':
                this.overlay = null;
                break;
        }
    }
    onLeave(event) {
        switch (event.toState) {
            case 'void':
                ZIndexUtils.clear(event.element);
                break;
        }
    }
    checkVisibility(scrollY) {
        if (scrollY > this.threshold)
            this.visible = true;
        else
            this.visible = false;
        this.cd.markForCheck();
    }
    bindParentScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
            this.parentScrollListener = this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', () => {
                this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
            });
        }
    }
    bindDocumentScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
            this.documentScrollListener = this.renderer.listen(this.window, 'scroll', () => {
                this.checkVisibility(DomHandler.getWindowScrollTop());
            });
        }
    }
    unbindParentScrollListener() {
        if (this.parentScrollListener) {
            this.parentScrollListener();
            this.parentScrollListener = null;
        }
    }
    unbindDocumentScrollListener() {
        if (this.documentScrollListener) {
            this.documentScrollListener();
            this.documentScrollListener = null;
        }
    }
    containerClass() {
        return {
            'p-scrolltop p-link p-component': true,
            'p-scrolltop-sticky': this.target !== 'window'
        };
    }
    ngOnDestroy() {
        if (this.target === 'window')
            this.unbindDocumentScrollListener();
        else if (this.target === 'parent')
            this.unbindParentScrollListener();
        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ScrollTop, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: ScrollTop, selector: "p-scrollTop", inputs: { styleClass: "styleClass", style: "style", target: "target", threshold: ["threshold", "threshold", numberAttribute], icon: "icon", behavior: "behavior", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", buttonAriaLabel: "buttonAriaLabel" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <button
            *ngIf="visible"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            [ngClass]="containerClass()"
            (click)="onClick()"
            [class]="styleClass"
            [ngStyle]="style"
            type="button"
        >
            <ng-container *ngIf="!iconTemplate">
                <span *ngIf="icon" [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
                <ChevronUpIcon *ngIf="!icon" [styleClass]="'p-scrolltop-icon'" [ngStyle]="{ 'font-size': '1rem', scale: '1.5' }" />
            </ng-container>
            <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate; context: { styleClass: 'p-scrolltop-icon' }"></ng-template>
        </button>
    `, isInline: true, styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => ChevronUpIcon), selector: "ChevronUpIcon" }], animations: [
            trigger('animation', [
                state('void', style({
                    opacity: 0
                })),
                state('open', style({
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}'))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ScrollTop, decorators: [{
            type: Component,
            args: [{ selector: 'p-scrollTop', template: `
        <button
            *ngIf="visible"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onEnter($event)"
            (@animation.done)="onLeave($event)"
            [attr.aria-label]="buttonAriaLabel"
            [ngClass]="containerClass()"
            (click)="onClick()"
            [class]="styleClass"
            [ngStyle]="style"
            type="button"
        >
            <ng-container *ngIf="!iconTemplate">
                <span *ngIf="icon" [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
                <ChevronUpIcon *ngIf="!icon" [styleClass]="'p-scrolltop-icon'" [ngStyle]="{ 'font-size': '1rem', scale: '1.5' }" />
            </ng-container>
            <ng-template [ngIf]="!icon" *ngTemplateOutlet="iconTemplate; context: { styleClass: 'p-scrolltop-icon' }"></ng-template>
        </button>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [
                        trigger('animation', [
                            state('void', style({
                                opacity: 0
                            })),
                            state('open', style({
                                opacity: 1
                            })),
                            transition('void => open', animate('{{showTransitionParams}}')),
                            transition('open => void', animate('{{hideTransitionParams}}'))
                        ])
                    ], host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], target: [{
                type: Input
            }], threshold: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], icon: [{
                type: Input
            }], behavior: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], buttonAriaLabel: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class ScrollTopModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ScrollTopModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ScrollTopModule, declarations: [ScrollTop], imports: [CommonModule, ChevronUpIcon, SharedModule], exports: [ScrollTop, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ScrollTopModule, imports: [CommonModule, ChevronUpIcon, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ScrollTopModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ChevronUpIcon, SharedModule],
                    exports: [ScrollTop, SharedModule],
                    declarations: [ScrollTop]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ScrollTop, ScrollTopModule };
//# sourceMappingURL=primeng-scrolltop.mjs.map
