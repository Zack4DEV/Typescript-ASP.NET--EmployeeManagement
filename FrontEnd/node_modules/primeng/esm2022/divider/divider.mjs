import { NgModule, Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Divider is used to separate contents.
 * @group Components
 */
export class Divider {
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
     * Specifies the orientation.
     * @group Props
     */
    layout = 'horizontal';
    /**
     * Border style type.
     * @group Props
     */
    type = 'solid';
    /**
     * Alignment of the content.
     * @group Props
     */
    align;
    containerClass() {
        return {
            'p-divider p-component': true,
            'p-divider-horizontal': this.layout === 'horizontal',
            'p-divider-vertical': this.layout === 'vertical',
            'p-divider-solid': this.type === 'solid',
            'p-divider-dashed': this.type === 'dashed',
            'p-divider-dotted': this.type === 'dotted',
            'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
            'p-divider-center': (this.layout === 'horizontal' && this.align === 'center') || (this.layout === 'vertical' && (!this.align || this.align === 'center')),
            'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
            'p-divider-top': this.layout === 'vertical' && this.align === 'top',
            'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Divider, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Divider, selector: "p-divider", inputs: { style: "style", styleClass: "styleClass", layout: "layout", type: "type", align: "align" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator" [attr.aria-orientation]="layout" [attr.data-pc-name]="'divider'">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:\"\"}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:\"\"}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Divider, decorators: [{
            type: Component,
            args: [{ selector: 'p-divider', template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator" [attr.aria-orientation]="layout" [attr.data-pc-name]="'divider'">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:\"\"}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:\"\"}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n"] }]
        }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], layout: [{
                type: Input
            }], type: [{
                type: Input
            }], align: [{
                type: Input
            }] } });
export class DividerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DividerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: DividerModule, declarations: [Divider], imports: [CommonModule], exports: [Divider] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DividerModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DividerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Divider],
                    declarations: [Divider]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBQy9DOzs7R0FHRztBQWlCSCxNQUFNLE9BQU8sT0FBTztJQUNoQjs7O09BR0c7SUFDTSxLQUFLLENBQThDO0lBQzVEOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ00sTUFBTSxHQUEwQyxZQUFZLENBQUM7SUFDdEU7OztPQUdHO0lBQ00sSUFBSSxHQUE4QyxPQUFPLENBQUM7SUFDbkU7OztPQUdHO0lBQ00sS0FBSyxDQUF3RTtJQUV0RixjQUFjO1FBQ1YsT0FBTztZQUNILHVCQUF1QixFQUFFLElBQUk7WUFDN0Isc0JBQXNCLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZO1lBQ3BELG9CQUFvQixFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVTtZQUNoRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87WUFDeEMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO1lBQzFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUMxQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztZQUN4RixrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ3pKLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTztZQUN6RSxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1lBQ25FLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUTtTQUM1RSxDQUFDO0lBQ04sQ0FBQzt1R0F6Q1EsT0FBTzsyRkFBUCxPQUFPLDhMQWROOzs7Ozs7S0FNVDs7MkZBUVEsT0FBTztrQkFoQm5CLFNBQVM7K0JBQ0ksV0FBVyxZQUNYOzs7Ozs7S0FNVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUUvQjt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7OEJBT1EsS0FBSztzQkFBYixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7O0FBd0JWLE1BQU0sT0FBTyxhQUFhO3VHQUFiLGFBQWE7d0dBQWIsYUFBYSxpQkFqRGIsT0FBTyxhQTZDTixZQUFZLGFBN0NiLE9BQU87d0dBaURQLGFBQWEsWUFKWixZQUFZOzsyRkFJYixhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNsQixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8qKlxuICogRGl2aWRlciBpcyB1c2VkIHRvIHNlcGFyYXRlIGNvbnRlbnRzLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRpdmlkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiByb2xlPVwic2VwYXJhdG9yXCIgW2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCJsYXlvdXRcIiBbYXR0ci5kYXRhLXBjLW5hbWVdPVwiJ2RpdmlkZXInXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kaXZpZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2RpdmlkZXIuY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXIge1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgb3JpZW50YXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgdW5kZWZpbmVkID0gJ2hvcml6b250YWwnO1xuICAgIC8qKlxuICAgICAqIEJvcmRlciBzdHlsZSB0eXBlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHR5cGU6ICdzb2xpZCcgfCAnZGFzaGVkJyB8ICdkb3R0ZWQnIHwgdW5kZWZpbmVkID0gJ3NvbGlkJztcbiAgICAvKipcbiAgICAgKiBBbGlnbm1lbnQgb2YgdGhlIGNvbnRlbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYWxpZ246ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtZGl2aWRlciBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1kaXZpZGVyLWhvcml6b250YWwnOiB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci12ZXJ0aWNhbCc6IHRoaXMubGF5b3V0ID09PSAndmVydGljYWwnLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci1zb2xpZCc6IHRoaXMudHlwZSA9PT0gJ3NvbGlkJyxcbiAgICAgICAgICAgICdwLWRpdmlkZXItZGFzaGVkJzogdGhpcy50eXBlID09PSAnZGFzaGVkJyxcbiAgICAgICAgICAgICdwLWRpdmlkZXItZG90dGVkJzogdGhpcy50eXBlID09PSAnZG90dGVkJyxcbiAgICAgICAgICAgICdwLWRpdmlkZXItbGVmdCc6IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgJiYgKCF0aGlzLmFsaWduIHx8IHRoaXMuYWxpZ24gPT09ICdsZWZ0JyksXG4gICAgICAgICAgICAncC1kaXZpZGVyLWNlbnRlcic6ICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMuYWxpZ24gPT09ICdjZW50ZXInKSB8fCAodGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgKCF0aGlzLmFsaWduIHx8IHRoaXMuYWxpZ24gPT09ICdjZW50ZXInKSksXG4gICAgICAgICAgICAncC1kaXZpZGVyLXJpZ2h0JzogdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLmFsaWduID09PSAncmlnaHQnLFxuICAgICAgICAgICAgJ3AtZGl2aWRlci10b3AnOiB0aGlzLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiB0aGlzLmFsaWduID09PSAndG9wJyxcbiAgICAgICAgICAgICdwLWRpdmlkZXItYm90dG9tJzogdGhpcy5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgdGhpcy5hbGlnbiA9PT0gJ2JvdHRvbSdcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RpdmlkZXJdLFxuICAgIGRlY2xhcmF0aW9uczogW0RpdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJNb2R1bGUge31cbiJdfQ==