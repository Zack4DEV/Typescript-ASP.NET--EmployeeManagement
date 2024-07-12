import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Skeleton is a placeholder to display instead of the actual content.
 * @group Components
 */
export class Skeleton {
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
     * Shape of the element.
     * @group Props
     */
    shape = 'rectangle';
    /**
     * Type of the animation.
     * @gruop Props
     */
    animation = 'wave';
    /**
     * Border radius of the element, defaults to value from theme.
     * @group Props
     */
    borderRadius;
    /**
     * Size of the skeleton.
     * @group Props
     */
    size;
    /**
     * Width of the element.
     * @group Props
     */
    width = '100%';
    /**
     * Height of the element.
     * @group Props
     */
    height = '1rem';
    containerClass() {
        return {
            'p-skeleton p-component': true,
            'p-skeleton-circle': this.shape === 'circle',
            'p-skeleton-none': this.animation === 'none'
        };
    }
    get containerStyle() {
        if (this.size)
            return { ...this.style, width: this.size, height: this.size, borderRadius: this.borderRadius };
        else
            return { width: this.width, height: this.height, borderRadius: this.borderRadius, ...this.style };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Skeleton, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Skeleton, selector: "p-skeleton", inputs: { styleClass: "styleClass", style: "style", shape: "shape", animation: "animation", borderRadius: "borderRadius", size: "size", width: "width", height: "height" }, host: { classAttribute: "p-element" }, ngImport: i0, template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `, isInline: true, styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Skeleton, decorators: [{
            type: Component,
            args: [{ selector: 'p-skeleton', template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"] }]
        }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], shape: [{
                type: Input
            }], animation: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], size: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });
export class SkeletonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SkeletonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: SkeletonModule, declarations: [Skeleton], imports: [CommonModule], exports: [Skeleton] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SkeletonModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: SkeletonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Skeleton],
                    declarations: [Skeleton]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQ3ZHOzs7R0FHRztBQVdILE1BQU0sT0FBTyxRQUFRO0lBQ2pCOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxLQUFLLEdBQVcsV0FBVyxDQUFDO0lBQ3JDOzs7T0FHRztJQUNNLFNBQVMsR0FBVyxNQUFNLENBQUM7SUFDcEM7OztPQUdHO0lBQ00sWUFBWSxDQUFxQjtJQUMxQzs7O09BR0c7SUFDTSxJQUFJLENBQXFCO0lBQ2xDOzs7T0FHRztJQUNNLEtBQUssR0FBVyxNQUFNLENBQUM7SUFDaEM7OztPQUdHO0lBQ00sTUFBTSxHQUFXLE1BQU0sQ0FBQztJQUVqQyxjQUFjO1FBQ1YsT0FBTztZQUNILHdCQUF3QixFQUFFLElBQUk7WUFDOUIsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQzVDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTTtTQUMvQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ3pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzRyxDQUFDO3VHQXJEUSxRQUFROzJGQUFSLFFBQVEscVFBUlAsdUxBQXVMOzsyRkFReEwsUUFBUTtrQkFWcEIsU0FBUzsrQkFDSSxZQUFZLFlBQ1osdUxBQXVMLG1CQUNoTCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs4QkFPUSxVQUFVO3NCQUFsQixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLOztBQXFCVixNQUFNLE9BQU8sY0FBYzt1R0FBZCxjQUFjO3dHQUFkLGNBQWMsaUJBN0RkLFFBQVEsYUF5RFAsWUFBWSxhQXpEYixRQUFRO3dHQTZEUixjQUFjLFlBSmIsWUFBWTs7MkZBSWIsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDbkIsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgTmdNb2R1bGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIFNrZWxldG9uIGlzIGEgcGxhY2Vob2xkZXIgdG8gZGlzcGxheSBpbnN0ZWFkIG9mIHRoZSBhY3R1YWwgY29udGVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1za2VsZXRvbicsXG4gICAgdGVtcGxhdGU6IGAgPGRpdiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzcygpXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJjb250YWluZXJTdHlsZVwiIFthdHRyLmRhdGEtcGMtbmFtZV09XCInc2tlbGV0b24nXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCIncm9vdCdcIj48L2Rpdj4gYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3NrZWxldG9uLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbiB7XG4gICAgLyoqXG4gICAgICogQ2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTaGFwZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzaGFwZTogc3RyaW5nID0gJ3JlY3RhbmdsZSc7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBncnVvcCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nID0gJ3dhdmUnO1xuICAgIC8qKlxuICAgICAqIEJvcmRlciByYWRpdXMgb2YgdGhlIGVsZW1lbnQsIGRlZmF1bHRzIHRvIHZhbHVlIGZyb20gdGhlbWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYm9yZGVyUmFkaXVzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgc2tlbGV0b24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgPSAnMTAwJSc7XG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJzFyZW0nO1xuXG4gICAgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1za2VsZXRvbiBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1za2VsZXRvbi1jaXJjbGUnOiB0aGlzLnNoYXBlID09PSAnY2lyY2xlJyxcbiAgICAgICAgICAgICdwLXNrZWxldG9uLW5vbmUnOiB0aGlzLmFuaW1hdGlvbiA9PT0gJ25vbmUnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lclN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5zaXplKSByZXR1cm4geyAuLi50aGlzLnN0eWxlLCB3aWR0aDogdGhpcy5zaXplLCBoZWlnaHQ6IHRoaXMuc2l6ZSwgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyB9O1xuICAgICAgICBlbHNlIHJldHVybiB7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0LCBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLCAuLi50aGlzLnN0eWxlIH07XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTa2VsZXRvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2tlbGV0b25dXG59KVxuZXhwb3J0IGNsYXNzIFNrZWxldG9uTW9kdWxlIHt9XG4iXX0=