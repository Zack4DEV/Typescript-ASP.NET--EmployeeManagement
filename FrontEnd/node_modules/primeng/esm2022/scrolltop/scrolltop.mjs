import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, NgModule, PLATFORM_ID, ViewEncapsulation, numberAttribute } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ChevronUpIcon } from 'primeng/icons/chevronup';
import { ZIndexUtils } from 'primeng/utils';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
/**
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 * @group Components
 */
export class ScrollTop {
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
export class ScrollTopModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsdG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3Njcm9sbHRvcC9zY3JvbGx0b3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQXFCLFdBQVcsRUFBcUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25QLE9BQU8sRUFBaUIsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBQzVDOzs7R0FHRztBQWdESCxNQUFNLE9BQU8sU0FBUztJQThEWTtJQUNHO0lBQ3JCO0lBQ0Q7SUFDQztJQUNEO0lBbEVYOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxNQUFNLEdBQW9DLFFBQVEsQ0FBQztJQUM1RDs7O09BR0c7SUFDb0MsU0FBUyxHQUFXLEdBQUcsQ0FBQztJQUMvRDs7O09BR0c7SUFDTSxJQUFJLENBQXFCO0lBQ2xDOzs7T0FHRztJQUNNLFFBQVEsR0FBa0MsUUFBUSxDQUFDO0lBQzVEOzs7T0FHRztJQUNNLHFCQUFxQixHQUFXLE1BQU0s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QztvQkFDbEMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50LCBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nTW9kdWxlLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUExBVEZPUk1fSUQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbWVOR0NvbmZpZywgUHJpbWVUZW1wbGF0ZSwgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IENoZXZyb25VcEljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb251cCc7XG5pbXBvcnQgeyBaSW5kZXhVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuLyoqXG4gKiBTY3JvbGxUb3AgZ2V0cyBkaXNwbGF5ZWQgYWZ0ZXIgYSBjZXJ0YWluIHNjcm9sbCBwb3NpdGlvbiBhbmQgdXNlZCB0byBuYXZpZ2F0ZXMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSBxdWlja2x5LlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXNjcm9sbFRvcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgKm5nSWY9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIFtAYW5pbWF0aW9uXT1cInsgdmFsdWU6ICdvcGVuJywgcGFyYW1zOiB7IHNob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnMgfSB9XCJcbiAgICAgICAgICAgIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uRW50ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAoQGFuaW1hdGlvbi5kb25lKT1cIm9uTGVhdmUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImJ1dHRvbkFyaWFMYWJlbFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgICAgICAgICAgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpY29uXCIgW2NsYXNzXT1cImljb25cIiBbbmdDbGFzc109XCIncC1zY3JvbGx0b3AtaWNvbidcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPENoZXZyb25VcEljb24gKm5nSWY9XCIhaWNvblwiIFtzdHlsZUNsYXNzXT1cIidwLXNjcm9sbHRvcC1pY29uJ1wiIFtuZ1N0eWxlXT1cInsgJ2ZvbnQtc2l6ZSc6ICcxcmVtJywgc2NhbGU6ICcxLjUnIH1cIiAvPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWljb25cIiAqbmdUZW1wbGF0ZU91dGxldD1cImljb25UZW1wbGF0ZTsgY29udGV4dDogeyBzdHlsZUNsYXNzOiAncC1zY3JvbGx0b3AtaWNvbicgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9zY3JvbGx0b3AuY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdhbmltYXRpb24nLCBbXG4gICAgICAgICAgICBzdGF0ZShcbiAgICAgICAgICAgICAgICAndm9pZCcsXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzdGF0ZShcbiAgICAgICAgICAgICAgICAnb3BlbicsXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IG9wZW4nLCBhbmltYXRlKCd7e3Nob3dUcmFuc2l0aW9uUGFyYW1zfX0nKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IHZvaWQnLCBhbmltYXRlKCd7e2hpZGVUcmFuc2l0aW9uUGFyYW1zfX0nKSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb3AgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUYXJnZXQgb2YgdGhlIFNjcm9sbFRvcC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB0YXJnZXQ6ICd3aW5kb3cnIHwgJ3BhcmVudCcgfCB1bmRlZmluZWQgPSAnd2luZG93JztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSB0aHJlc2hvbGQgdmFsdWUgb2YgdGhlIHZlcnRpY2FsIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IHRvIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB0aHJlc2hvbGQ6IG51bWJlciA9IDQwMDtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBpY29uIG9yIEpTWC5FbGVtZW50IGZvciBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBzY3JvbGxpbmcgYmVoYXZpb3IsIFwic21vb3RoXCIgYWRkcyBhbiBhbmltYXRpb24gYW5kIFwiYXV0b1wiIHNjcm9sbHMgd2l0aCBhIGp1bXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYmVoYXZpb3I6ICdhdXRvJyB8ICdzbW9vdGgnIHwgdW5kZWZpbmVkID0gJ3Ntb290aCc7XG4gICAgLyoqXG4gICAgICogQSBzdHJpbmcgdmFsdWUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIGRpc3BsYXkgdHJhbnNpdGlvbiBvcHRpb25zLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xNXMnO1xuICAgIC8qKlxuICAgICAqIEEgc3RyaW5nIHZhbHVlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBoaWRpbmcgdHJhbnNpdGlvbiBvcHRpb25zLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xNXMnO1xuICAgIC8qKlxuICAgICAqIEVzdGFibGlzaGVzIGEgc3RyaW5nIHZhbHVlIHRoYXQgbGFiZWxzIHRoZSBzY3JvbGwtdG9wIGJ1dHRvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBidXR0b25BcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBpY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBkb2N1bWVudFNjcm9sbExpc3RlbmVyOiBWb2lkRnVuY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgcGFyZW50U2Nyb2xsTGlzdGVuZXI6IFZvaWRGdW5jdGlvbiB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvdmVybGF5OiBhbnk7XG5cbiAgICBwcml2YXRlIHdpbmRvdzogV2luZG93IHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLndpbmRvdyA9IHRoaXMuZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gJ3dpbmRvdycpIHRoaXMuYmluZERvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09ICdwYXJlbnQnKSB0aGlzLmJpbmRQYXJlbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgKHRoaXMudGVtcGxhdGVzIGFzIFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBsZXQgc2Nyb2xsRWxlbWVudCA9IHRoaXMudGFyZ2V0ID09PSAnd2luZG93JyA/IHRoaXMud2luZG93IDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmJlaGF2aW9yXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRW50ZXIoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gZXZlbnQuZWxlbWVudDtcbiAgICAgICAgICAgICAgICBaSW5kZXhVdGlscy5zZXQoJ292ZXJsYXknLCB0aGlzLm92ZXJsYXksIHRoaXMuY29uZmlnLnpJbmRleC5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxlYXZlKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRvU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgICAgICAgICAgIFpJbmRleFV0aWxzLmNsZWFyKGV2ZW50LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWaXNpYmlsaXR5KHNjcm9sbFk6IG51bWJlcikge1xuICAgICAgICBpZiAoc2Nyb2xsWSA+IHRoaXMudGhyZXNob2xkKSB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBlbHNlIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgYmluZFBhcmVudFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTY3JvbGxMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy53aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Zpc2liaWxpdHkoRG9tSGFuZGxlci5nZXRXaW5kb3dTY3JvbGxUb3AoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZFBhcmVudFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLXNjcm9sbHRvcCBwLWxpbmsgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3Atc2Nyb2xsdG9wLXN0aWNreSc6IHRoaXMudGFyZ2V0ICE9PSAnd2luZG93J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09ICd3aW5kb3cnKSB0aGlzLnVuYmluZERvY3VtZW50U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09ICdwYXJlbnQnKSB0aGlzLnVuYmluZFBhcmVudFNjcm9sbExpc3RlbmVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICAgICAgWkluZGV4VXRpbHMuY2xlYXIodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hldnJvblVwSWNvbiwgU2hhcmVkTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU2Nyb2xsVG9wLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1Njcm9sbFRvcF1cbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9wTW9kdWxlIHt9XG4iXX0=