import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Input, ContentChildren, HostListener, NgModule } from '@angular/core';
import * as i1 from 'primeng/api';
import { TranslationKeys, PrimeTemplate, SharedModule } from 'primeng/api';
import * as i3 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { ZIndexUtils } from 'primeng/utils';

/**
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 * @group Components
 */
class ConfirmPopup {
    el;
    confirmationService;
    renderer;
    cd;
    config;
    overlayService;
    document;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key;
    /**
     * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
     * @group Props
     */
    defaultFocus = 'accept';
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
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
     * Defines if the component is visible.
     * @group Props
     */
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.cd.markForCheck();
    }
    templates;
    container;
    subscription;
    confirmation;
    contentTemplate;
    acceptIconTemplate;
    rejectIconTemplate;
    headlessTemplate;
    _visible;
    documentClickListener;
    documentResizeListener;
    scrollHandler;
    window;
    constructor(el, confirmationService, renderer, cd, config, overlayService, document) {
        this.el = el;
        this.confirmationService = confirmationService;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.overlayService = overlayService;
        this.document = document;
        this.window = this.document.defaultView;
        this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
            if (!confirmation) {
                this.hide();
                return;
            }
            if (confirmation.key === this.key) {
                this.confirmation = confirmation;
                if (this.confirmation.accept) {
                    this.confirmation.acceptEvent = new EventEmitter();
                    this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
                }
                if (this.confirmation.reject) {
                    this.confirmation.rejectEvent = new EventEmitter();
                    this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
                }
                this.visible = true;
            }
        });
    }
    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'rejecticon':
                    this.rejectIconTemplate = item.template;
                    break;
                case 'accepticon':
                    this.acceptIconTemplate = item.template;
                    break;
                case 'headless':
                    this.headlessTemplate = item.template;
                    break;
            }
        });
    }
    onEscapeKeydown(event) {
        if (this.confirmation && this.confirmation.closeOnEscape) {
            this.reject();
        }
    }
    onAnimationStart(event) {
        if (event.toState === 'open') {
            this.container = event.element;
            this.renderer.appendChild(this.document.body, this.container);
            this.align();
            this.bindListeners();
            const element = this.getElementToFocus();
            if (element) {
                element.focus();
            }
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onContainerDestroy();
                break;
        }
    }
    getElementToFocus() {
        switch (this.defaultFocus) {
            case 'accept':
                return DomHandler.findSingle(this.container, '.p-confirm-popup-accept');
            case 'reject':
                return DomHandler.findSingle(this.container, '.p-confirm-popup-reject');
            case 'none':
                return null;
        }
    }
    align() {
        if (this.autoZIndex) {
            ZIndexUtils.set('overlay', this.container, this.config.zIndex.overlay);
        }
        if (!this.confirmation) {
            return;
        }
        DomHandler.absolutePosition(this.container, this.confirmation?.target, false);
        const containerOffset = DomHandler.getOffset(this.container);
        const targetOffset = DomHandler.getOffset(this.confirmation?.target);
        let arrowLeft = 0;
        if (containerOffset.left < targetOffset.left) {
            arrowLeft = targetOffset.left - containerOffset.left;
        }
        this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);
        if (containerOffset.top < targetOffset.top) {
            DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
        }
    }
    hide() {
        this.visible = false;
    }
    accept() {
        if (this.confirmation?.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
    }
    reject() {
        if (this.confirmation?.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
    }
    onOverlayClick(event) {
        this.overlayService.add({
            originalEvent: event,
            target: this.el.nativeElement
        });
    }
    bindListeners() {
        /*
         * Called inside `setTimeout` to avoid listening to the click event that appears when `confirm` is first called(bubbling).
         * Need wait when bubbling event up and hang the handler on the next tick.
         * This is the case when eventTarget and confirmation.target do not match when the `confirm` method is called.
         */
        setTimeout(() => {
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
        });
    }
    unbindListeners() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
            this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
                if (this.confirmation && this.confirmation.dismissableMask !== false) {
                    let targetElement = this.confirmation.target;
                    if (this.container !== event.target && !this.container?.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
                        this.hide();
                    }
                }
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    onWindowResize() {
        if (this.visible && !DomHandler.isTouchDevice()) {
            this.hide();
        }
    }
    bindDocumentResizeListener() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = this.renderer.listen(this.window, 'resize', this.onWindowResize.bind(this));
        }
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            this.documentResizeListener();
            this.documentResizeListener = null;
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation?.target, () => {
                if (this.visible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    unsubscribeConfirmationSubscriptions() {
        if (this.confirmation) {
            if (this.confirmation.acceptEvent) {
                this.confirmation.acceptEvent.unsubscribe();
            }
            if (this.confirmation.rejectEvent) {
                this.confirmation.rejectEvent.unsubscribe();
            }
        }
    }
    onContainerDestroy() {
        this.unbindListeners();
        this.unsubscribeConfirmationSubscriptions();
        if (this.autoZIndex) {
            ZIndexUtils.clear(this.container);
        }
        this.confirmation = null;
        this.container = null;
    }
    restoreAppend() {
        if (this.container) {
            this.renderer.removeChild(this.document.body, this.container);
        }
        this.onContainerDestroy();
    }
    get acceptButtonLabel() {
        return this.confirmation?.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
    }
    get rejectButtonLabel() {
        return this.confirmation?.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
    }
    ngOnDestroy() {
        this.restoreAppend();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopup, deps: [{ token: i0.ElementRef }, { token: i1.ConfirmationService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i1.OverlayService }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: ConfirmPopup, selector: "p-confirmPopup", inputs: { key: "key", defaultFocus: "defaultFocus", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], style: "style", styleClass: "styleClass", visible: "visible" }, host: { listeners: { "document:keydown.escape": "onEscapeKeydown($event)" }, classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div
            *ngIf="visible"
            [ngClass]="'p-confirm-popup p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            role="alertdialog"
            (click)="onOverlayClick($event)"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <ng-container *ngIf="headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: confirmation }"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div #content class="p-confirm-popup-content">
                    <ng-container *ngIf="contentTemplate; else withoutContentTemplate">
                        <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: confirmation }"></ng-container>
                    </ng-container>
                    <ng-template #withoutContentTemplate>
                        <i [ngClass]="'p-confirm-popup-icon'" [class]="confirmation?.icon" *ngIf="confirmation?.icon"></i>
                        <span class="p-confirm-popup-message">{{ confirmation?.message }}</span>
                    </ng-template>
                </div>
                <div class="p-confirm-popup-footer">
                    <button
                        type="button"
                        pButton
                        [label]="rejectButtonLabel"
                        (click)="reject()"
                        [ngClass]="'p-confirm-popup-reject p-button-sm'"
                        [class]="confirmation?.rejectButtonStyleClass || 'p-button-text'"
                        *ngIf="confirmation?.rejectVisible !== false"
                        [attr.aria-label]="rejectButtonLabel"
                    >
                        <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                        <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate"></ng-template>
                    </button>
                    <button
                        type="button"
                        pButton
                        [label]="acceptButtonLabel"
                        (click)="accept()"
                        [ngClass]="'p-confirm-popup-accept p-button-sm'"
                        [class]="confirmation?.acceptButtonStyleClass"
                        *ngIf="confirmation?.acceptVisible !== false"
                        [attr.aria-label]="acceptButtonLabel"
                    >
                        <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticon"></i>
                        <ng-template #accepticon *ngTemplateOutlet="acceptIconTemplate"></ng-template>
                    </button>
                </div>
            </ng-template>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:\" \";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading", "severity", "raised", "rounded", "text", "outlined", "size", "plain"] }], animations: [
            trigger('animation', [
                state('void', style({
                    transform: 'scaleY(0.8)',
                    opacity: 0
                })),
                state('open', style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}'))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopup, decorators: [{
            type: Component,
            args: [{ selector: 'p-confirmPopup', template: `
        <div
            *ngIf="visible"
            [ngClass]="'p-confirm-popup p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            role="alertdialog"
            (click)="onOverlayClick($event)"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <ng-container *ngIf="headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: confirmation }"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div #content class="p-confirm-popup-content">
                    <ng-container *ngIf="contentTemplate; else withoutContentTemplate">
                        <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: confirmation }"></ng-container>
                    </ng-container>
                    <ng-template #withoutContentTemplate>
                        <i [ngClass]="'p-confirm-popup-icon'" [class]="confirmation?.icon" *ngIf="confirmation?.icon"></i>
                        <span class="p-confirm-popup-message">{{ confirmation?.message }}</span>
                    </ng-template>
                </div>
                <div class="p-confirm-popup-footer">
                    <button
                        type="button"
                        pButton
                        [label]="rejectButtonLabel"
                        (click)="reject()"
                        [ngClass]="'p-confirm-popup-reject p-button-sm'"
                        [class]="confirmation?.rejectButtonStyleClass || 'p-button-text'"
                        *ngIf="confirmation?.rejectVisible !== false"
                        [attr.aria-label]="rejectButtonLabel"
                    >
                        <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                        <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate"></ng-template>
                    </button>
                    <button
                        type="button"
                        pButton
                        [label]="acceptButtonLabel"
                        (click)="accept()"
                        [ngClass]="'p-confirm-popup-accept p-button-sm'"
                        [class]="confirmation?.acceptButtonStyleClass"
                        *ngIf="confirmation?.acceptVisible !== false"
                        [attr.aria-label]="acceptButtonLabel"
                    >
                        <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticon"></i>
                        <ng-template #accepticon *ngTemplateOutlet="acceptIconTemplate"></ng-template>
                    </button>
                </div>
            </ng-template>
        </div>
    `, animations: [
                        trigger('animation', [
                            state('void', style({
                                transform: 'scaleY(0.8)',
                                opacity: 0
                            })),
                            state('open', style({
                                transform: 'translateY(0)',
                                opacity: 1
                            })),
                            transition('void => open', animate('{{showTransitionParams}}')),
                            transition('open => void', animate('{{hideTransitionParams}}'))
                        ])
                    ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:\" \";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.ConfirmationService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i1.OverlayService }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { key: [{
                type: Input
            }], defaultFocus: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], autoZIndex: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], baseZIndex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], visible: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], onEscapeKeydown: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });
class ConfirmPopupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopupModule, declarations: [ConfirmPopup], imports: [CommonModule, ButtonModule, SharedModule], exports: [ConfirmPopup, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopupModule, imports: [CommonModule, ButtonModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmPopupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ButtonModule, SharedModule],
                    exports: [ConfirmPopup, SharedModule],
                    declarations: [ConfirmPopup]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ConfirmPopup, ConfirmPopupModule };
//# sourceMappingURL=primeng-confirmpopup.mjs.map
