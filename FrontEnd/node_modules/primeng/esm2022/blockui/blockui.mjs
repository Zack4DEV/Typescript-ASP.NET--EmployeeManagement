import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, NgModule, PLATFORM_ID, ViewChild, ViewEncapsulation, booleanAttribute, numberAttribute } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ZIndexUtils } from 'primeng/utils';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
/**
 * BlockUI can either block other components or the whole page.
 * @group Components
 */
export class BlockUI {
    document;
    el;
    cd;
    config;
    renderer;
    platformId;
    /**
     * Name of the local ng-template variable referring to another component.
     * @group Props
     */
    target;
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
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Current blocked state as a boolean.
     * @group Props
     */
    get blocked() {
        return this._blocked;
    }
    set blocked(val) {
        if (this.mask && this.mask.nativeElement) {
            if (val)
                this.block();
            else
                this.unblock();
        }
        else {
            this._blocked = val;
        }
    }
    templates;
    mask;
    _blocked = false;
    animationEndListener;
    contentTemplate;
    constructor(document, el, cd, config, renderer, platformId) {
        this.document = document;
        this.el = el;
        this.cd = cd;
        this.config = config;
        this.renderer = renderer;
        this.platformId = platformId;
    }
    ngAfterViewInit() {
        if (this._blocked)
            this.block();
        if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement BlockableUI interface';
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    block() {
        if (isPlatformBrowser(this.platformId)) {
            this._blocked = true;
            this.mask.nativeElement.style.display = 'flex';
            if (this.target) {
                this.target.getBlockableElement().appendChild(this.mask.nativeElement);
                this.target.getBlockableElement().style.position = 'relative';
            }
            else {
                this.renderer.appendChild(this.document.body, this.mask.nativeElement);
                DomHandler.blockBodyScroll();
            }
            if (this.autoZIndex) {
                ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex + this.config.zIndex.modal);
            }
        }
    }
    unblock() {
        if (isPlatformBrowser(this.platformId) && this.mask && !this.animationEndListener) {
            this.animationEndListener = this.renderer.listen(this.mask.nativeElement, 'animationend', this.destroyModal.bind(this));
            DomHandler.addClass(this.mask.nativeElement, 'p-component-overlay-leave');
        }
    }
    destroyModal() {
        this._blocked = false;
        if (this.mask && isPlatformBrowser(this.platformId)) {
            ZIndexUtils.clear(this.mask.nativeElement);
            DomHandler.removeClass(this.mask.nativeElement, 'p-component-overlay-leave');
            this.renderer.removeChild(this.el.nativeElement, this.mask.nativeElement);
            DomHandler.unblockBodyScroll();
        }
        this.unbindAnimationEndListener();
        this.cd.markForCheck();
    }
    unbindAnimationEndListener() {
        if (this.animationEndListener && this.mask) {
            this.animationEndListener();
            this.animationEndListener = null;
        }
    }
    ngOnDestroy() {
        this.unblock();
        this.destroyModal();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BlockUI, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i0.Renderer2 }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: BlockUI, selector: "p-blockUI", inputs: { target: "target", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], styleClass: "styleClass", blocked: "blocked" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "mask", first: true, predicate: ["mask"], descendants: true }], ngImport: i0, template: `
        <div
            #mask
            [class]="styleClass"
            [attr.aria-busy]="blocked"
            [ngClass]="{ 'p-blockui-document': !target, 'p-blockui p-component-overlay p-component-overlay-enter': true }"
            [ngStyle]="{ display: 'none' }"
            [attr.data-pc-name]="'blockui'"
            [attr.data-pc-section]="'root'"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BlockUI, decorators: [{
            type: Component,
            args: [{ selector: 'p-blockUI', template: `
        <div
            #mask
            [class]="styleClass"
            [attr.aria-busy]="blocked"
            [ngClass]="{ 'p-blockui-document': !target, 'p-blockui p-component-overlay p-component-overlay-enter': true }"
            [ngStyle]="{ display: 'none' }"
            [attr.data-pc-name]="'blockui'"
            [attr.data-pc-section]="'root'"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }], propDecorators: { target: [{
                type: Input
            }], autoZIndex: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], baseZIndex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], styleClass: [{
                type: Input
            }], blocked: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], mask: [{
                type: ViewChild,
                args: ['mask']
            }] } });
export class BlockUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BlockUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: BlockUIModule, declarations: [BlockUI], imports: [CommonModule], exports: [BlockUI] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BlockUIModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BlockUIModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [BlockUI],
                    declarations: [BlockUI]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2t1aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ibG9ja3VpL2Jsb2NrdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBRUgsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBRVIsV0FBVyxFQUlYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFpQixhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBQzVDOzs7R0FHRztBQXdCSCxNQUFNLE9BQU8sT0FBTztJQWdEYztJQUNuQjtJQUNBO0lBQ0E7SUFDQztJQUNvQjtJQXBEaEM7OztPQUdHO0lBQ00sTUFBTSxDQUFNO0lBQ3JCOzs7T0FHRztJQUNxQyxVQUFVLEdBQVksSUFBSSxDQUFDO0lBQ25FOzs7T0FHRztJQUNvQyxVQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQzlEOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ0gsSUFBYSxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsR0FBWTtRQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztnQkFDakIsSUFBSSxD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QixDQUFDO3VHQTlIUSxPQUFPLGtCQWdESixRQUFRLDhIQUtSLFdBQVc7MkZBckRkLE9BQU8sOEZBVUksZ0JBQWdCLDRDQUtoQixlQUFlLDRJQXNCbEIsYUFBYSwySEExRHBCOzs7Ozs7Ozs7Ozs7O0tBYVQ7OzJGQVFRLE9BQU87a0JBdkJuQixTQUFTOytCQUNJLFdBQVcsWUFDWDs7Ozs7Ozs7Ozs7OztLQWFULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs7MEJBa0RJLE1BQU07MkJBQUMsUUFBUTs7MEJBS2YsTUFBTTsyQkFBQyxXQUFXO3lDQWhEZCxNQUFNO3NCQUFkLEtBQUs7Z0JBS2tDLFVBQVU7c0JBQWpELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0MsVUFBVTtzQkFBaEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBSzVCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS08sT0FBTztzQkFBbkIsS0FBSztnQkFZMEIsU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhO2dCQUVYLElBQUk7c0JBQXRCLFNBQVM7dUJBQUMsTUFBTTs7QUErRnJCLE1BQU0sT0FBTyxhQUFhO3VHQUFiLGFBQWE7d0dBQWIsYUFBYSxpQkF0SWIsT0FBTyxhQWtJTixZQUFZLGFBbEliLE9BQU87d0dBc0lQLGFBQWEsWUFKWixZQUFZOzsyRkFJYixhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNsQixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIFBMQVRGT1JNX0lELFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIGJvb2xlYW5BdHRyaWJ1dGUsXG4gICAgbnVtYmVyQXR0cmlidXRlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbWVOR0NvbmZpZywgUHJpbWVUZW1wbGF0ZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBaSW5kZXhVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuLyoqXG4gKiBCbG9ja1VJIGNhbiBlaXRoZXIgYmxvY2sgb3RoZXIgY29tcG9uZW50cyBvciB0aGUgd2hvbGUgcGFnZS5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1ibG9ja1VJJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICAjbWFza1xuICAgICAgICAgICAgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1idXN5XT1cImJsb2NrZWRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncC1ibG9ja3VpLWRvY3VtZW50JzogIXRhcmdldCwgJ3AtYmxvY2t1aSBwLWNvbXBvbmVudC1vdmVybGF5IHAtY29tcG9uZW50LW92ZXJsYXktZW50ZXInOiB0cnVlIH1cIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwieyBkaXNwbGF5OiAnbm9uZScgfVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLXBjLW5hbWVdPVwiJ2Jsb2NrdWknXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCIncm9vdCdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9ibG9ja3VpLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBCbG9ja1VJIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2NhbCBuZy10ZW1wbGF0ZSB2YXJpYWJsZSByZWZlcnJpbmcgdG8gYW5vdGhlciBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdGFyZ2V0OiBhbnk7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IG1hbmFnZSBsYXllcmluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQmFzZSB6SW5kZXggdmFsdWUgdG8gdXNlIGluIGxheWVyaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgYmxvY2tlZCBzdGF0ZSBhcyBhIGJvb2xlYW4uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGJsb2NrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja2VkO1xuICAgIH1cbiAgICBzZXQgYmxvY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMubWFzayAmJiB0aGlzLm1hc2submF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHZhbCkgdGhpcy5ibG9jaygpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnVuYmxvY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrZWQgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+IHwgdW5kZWZpbmVkO1xuXG4gICAgQFZpZXdDaGlsZCgnbWFzaycpIG1hc2s6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWQ7XG5cbiAgICBfYmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYW5pbWF0aW9uRW5kTGlzdGVuZXI6IFZvaWRGdW5jdGlvbiB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwdWJsaWMgcGxhdGZvcm1JZDogYW55XG4gICAgKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5fYmxvY2tlZCkgdGhpcy5ibG9jaygpO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiAhdGhpcy50YXJnZXQuZ2V0QmxvY2thYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgJ1RhcmdldCBvZiBCbG9ja1VJIG11c3QgaW1wbGVtZW50IEJsb2NrYWJsZVVJIGludGVyZmFjZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJsb2NrKCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAodGhpcy5tYXNrIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0QmxvY2thYmxlRWxlbWVudCgpLmFwcGVuZENoaWxkKCh0aGlzLm1hc2sgYXMgRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0QmxvY2thYmxlRWxlbWVudCgpLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksICh0aGlzLm1hc2sgYXMgRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5ibG9ja0JvZHlTY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1pJbmRleCkge1xuICAgICAgICAgICAgICAgIFpJbmRleFV0aWxzLnNldCgnbW9kYWwnLCAodGhpcy5tYXNrIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmFzZVpJbmRleCArIHRoaXMuY29uZmlnLnpJbmRleC5tb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJsb2NrKCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLm1hc2sgJiYgIXRoaXMuYW5pbWF0aW9uRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLm1hc2submF0aXZlRWxlbWVudCwgJ2FuaW1hdGlvbmVuZCcsIHRoaXMuZGVzdHJveU1vZGFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLm1hc2submF0aXZlRWxlbWVudCwgJ3AtY29tcG9uZW50LW92ZXJsYXktbGVhdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5fYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5tYXNrICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgICAgIFpJbmRleFV0aWxzLmNsZWFyKHRoaXMubWFzay5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5tYXNrLm5hdGl2ZUVsZW1lbnQsICdwLWNvbXBvbmVudC1vdmVybGF5LWxlYXZlJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5tYXNrLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgRG9tSGFuZGxlci51bmJsb2NrQm9keVNjcm9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kQW5pbWF0aW9uRW5kTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB1bmJpbmRBbmltYXRpb25FbmRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uRW5kTGlzdGVuZXIgJiYgdGhpcy5tYXNrKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZExpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0Jsb2NrVUldLFxuICAgIGRlY2xhcmF0aW9uczogW0Jsb2NrVUldXG59KVxuZXhwb3J0IGNsYXNzIEJsb2NrVUlNb2R1bGUge31cbiJdfQ==