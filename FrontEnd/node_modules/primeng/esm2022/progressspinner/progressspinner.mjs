import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * ProgressSpinner is a process status indicator.
 * @group Components
 */
export class ProgressSpinner {
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
     * Width of the circle stroke.
     * @group Props
     */
    strokeWidth = '2';
    /**
     * Color for the background of the circle.
     * @group Props
     */
    fill = 'none';
    /**
     * Duration of the rotate animation.
     * @group Props
     */
    animationDuration = '2s';
    /**
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinner, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: ProgressSpinner, selector: "p-progressSpinner", inputs: { styleClass: "styleClass", style: "style", strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", ariaLabel: "ariaLabel" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinner, decorators: [{
            type: Component,
            args: [{ selector: 'p-progressSpinner', template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n"] }]
        }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], fill: [{
                type: Input
            }], animationDuration: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
export class ProgressSpinnerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, declarations: [ProgressSpinner], imports: [CommonModule], exports: [ProgressSpinner] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ProgressSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ProgressSpinner],
                    declarations: [ProgressSpinner]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NzcGlubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2dyZXNzc3Bpbm5lci9wcm9ncmVzc3NwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQ3ZHOzs7R0FHRztBQWlCSCxNQUFNLE9BQU8sZUFBZTtJQUN4Qjs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNNLEtBQUssQ0FBOEM7SUFDNUQ7OztPQUdHO0lBQ00sV0FBVyxHQUFXLEdBQUcsQ0FBQztJQUNuQzs7O09BR0c7SUFDTSxJQUFJLEdBQVcsTUFBTSxDQUFDO0lBQy9COzs7T0FHRztJQUNNLGlCQUFpQixHQUFXLElBQUksQ0FBQztJQUMxQzs7O09BR0c7SUFDTSxTQUFTLENBQXFCO3VHQTlCOUIsZUFBZTsyRkFBZixlQUFlLGdRQWRkOzs7Ozs7S0FNVDs7MkZBUVEsZUFBZTtrQkFoQjNCLFNBQVM7K0JBQ0ksbUJBQW1CLFlBQ25COzs7Ozs7S0FNVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUUvQjt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7OEJBT1EsVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csV0FBVztzQkFBbkIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUtHLFNBQVM7c0JBQWpCLEtBQUs7O0FBUVYsTUFBTSxPQUFPLHFCQUFxQjt1R0FBckIscUJBQXFCO3dHQUFyQixxQkFBcUIsaUJBdENyQixlQUFlLGFBa0NkLFlBQVksYUFsQ2IsZUFBZTt3R0FzQ2YscUJBQXFCLFlBSnBCLFlBQVk7OzJGQUliLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgTmdNb2R1bGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIFByb2dyZXNzU3Bpbm5lciBpcyBhIHByb2Nlc3Mgc3RhdHVzIGluZGljYXRvci5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1wcm9ncmVzc1NwaW5uZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXJcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cInN0eWxlQ2xhc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiIFthdHRyLmFyaWEtYnVzeV09XCJ0cnVlXCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIidwcm9ncmVzc3NwaW5uZXInXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInAtcHJvZ3Jlc3Mtc3Bpbm5lci1zdmdcIiB2aWV3Qm94PVwiMjUgMjUgNTAgNTBcIiBbc3R5bGUuYW5pbWF0aW9uLWR1cmF0aW9uXT1cImFuaW1hdGlvbkR1cmF0aW9uXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJwLXByb2dyZXNzLXNwaW5uZXItY2lyY2xlXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMjBcIiBbYXR0ci5maWxsXT1cImZpbGxcIiBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3NzcGlubmVyLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXIge1xuICAgIC8qKlxuICAgICAqIENsYXNzIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIGNpcmNsZSBzdHJva2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3Ryb2tlV2lkdGg6IHN0cmluZyA9ICcyJztcbiAgICAvKipcbiAgICAgKiBDb2xvciBmb3IgdGhlIGJhY2tncm91bmQgb2YgdGhlIGNpcmNsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWxsOiBzdHJpbmcgPSAnbm9uZSc7XG4gICAgLyoqXG4gICAgICogRHVyYXRpb24gb2YgdGhlIHJvdGF0ZSBhbmltYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyA9ICcycyc7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBkZWZpbmUgYSBhcmlhIGxhYmVsIGF0dHJpYnV0ZSB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQcm9ncmVzc1NwaW5uZXJdLFxuICAgIGRlY2xhcmF0aW9uczogW1Byb2dyZXNzU3Bpbm5lcl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHt9XG4iXX0=