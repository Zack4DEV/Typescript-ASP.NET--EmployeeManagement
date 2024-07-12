import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Toolbar is a grouping component for buttons and other content.
 * @group Components
 */
export class Toolbar {
    el;
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
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabelledBy;
    templates;
    startTemplate;
    endTemplate;
    centerTemplate;
    constructor(el) {
        this.el = el;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'start':
                case 'left':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                case 'right':
                    this.endTemplate = item.template;
                    break;
                case 'center':
                    this.centerTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Toolbar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Toolbar, selector: "p-toolbar", inputs: { style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div [ngClass]="'p-toolbar p-component'" [attr.aria-labelledby]="ariaLabelledBy" [ngStyle]="style" [class]="styleClass" role="toolbar" [attr.data-pc-name]="'toolbar'">
            <ng-content></ng-content>
            <div class="p-toolbar-group-left p-toolbar-group-start" *ngIf="startTemplate" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-center" *ngIf="centerTemplate" [attr.data-pc-section]="'center'">
                <ng-container *ngTemplateOutlet="centerTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-right p-toolbar-group-end" *ngIf="endTemplate" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Toolbar, decorators: [{
            type: Component,
            args: [{ selector: 'p-toolbar', template: `
        <div [ngClass]="'p-toolbar p-component'" [attr.aria-labelledby]="ariaLabelledBy" [ngStyle]="style" [class]="styleClass" role="toolbar" [attr.data-pc-name]="'toolbar'">
            <ng-content></ng-content>
            <div class="p-toolbar-group-left p-toolbar-group-start" *ngIf="startTemplate" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-center" *ngIf="centerTemplate" [attr.data-pc-section]="'center'">
                <ng-container *ngTemplateOutlet="centerTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-right p-toolbar-group-end" *ngIf="endTemplate" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class ToolbarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ToolbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ToolbarModule, declarations: [Toolbar], imports: [CommonModule, SharedModule], exports: [Toolbar, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ToolbarModule, imports: [CommonModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ToolbarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Toolbar, SharedModule],
                    declarations: [Toolbar]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxLQUFLLEVBQUUsUUFBUSxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SyxPQUFPLEVBQWUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBQ3ZFOzs7R0FHRztBQXdCSCxNQUFNLE9BQU8sT0FBTztJQXlCSTtJQXhCcEI7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNNLGNBQWMsQ0FBcUI7SUFFWixTQUFTLENBQXVDO0lBRWhGLGFBQWEsQ0FBK0I7SUFFNUMsV0FBVyxDQUErQjtJQUUxQyxjQUFjLENBQStCO0lBRTdDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QyxtQkFBbUI7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2IsSUFBSSxDQUFDLFNBQXNDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUQsUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxNQUFNO29CQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDbkMsTUFBTTtnQkFFVixLQUFLLEtBQUssQ0FBQztnQkFDWCxLQUFLLE9BQU87b0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNqQyxNQUFNO2dCQUVWLEtBQUssUUFBUTtvQkFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3BDLE1BQU07WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3VHQWpEUSxPQUFPOzJGQUFQLE9BQU8sME1BaUJDLGFBQWEsNkJBdENwQjs7Ozs7Ozs7Ozs7OztLQWFUOzsyRkFRUSxPQUFPO2tCQXZCbkIsU0FBUzsrQkFDSSxXQUFXLFlBQ1g7Ozs7Ozs7Ozs7Ozs7S0FhVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUUvQjt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7K0VBT1EsS0FBSztzQkFBYixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csY0FBYztzQkFBdEIsS0FBSztnQkFFMEIsU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhOztBQXdDbEMsTUFBTSxPQUFPLGFBQWE7dUdBQWIsYUFBYTt3R0FBYixhQUFhLGlCQXpEYixPQUFPLGFBcUROLFlBQVksRUFBRSxZQUFZLGFBckQzQixPQUFPLEVBc0RHLFlBQVk7d0dBR3RCLGFBQWEsWUFKWixZQUFZLEVBQUUsWUFBWSxFQUNqQixZQUFZOzsyRkFHdEIsYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUNoQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvY2thYmxlVUksIFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbi8qKlxuICogVG9vbGJhciBpcyBhIGdyb3VwaW5nIGNvbXBvbmVudCBmb3IgYnV0dG9ucyBhbmQgb3RoZXIgY29udGVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLXRvb2xiYXIgcC1jb21wb25lbnQnXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIHJvbGU9XCJ0b29sYmFyXCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIid0b29sYmFyJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdG9vbGJhci1ncm91cC1sZWZ0IHAtdG9vbGJhci1ncm91cC1zdGFydFwiICpuZ0lmPVwic3RhcnRUZW1wbGF0ZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInc3RhcnQnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN0YXJ0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdG9vbGJhci1ncm91cC1jZW50ZXJcIiAqbmdJZj1cImNlbnRlclRlbXBsYXRlXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidjZW50ZXInXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNlbnRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRvb2xiYXItZ3JvdXAtcmlnaHQgcC10b29sYmFyLWdyb3VwLWVuZFwiICpuZ0lmPVwiZW5kVGVtcGxhdGVcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2VuZCdcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW5kVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEJsb2NrYWJsZVVJIHtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHZhbHVlIHRoYXQgbGFiZWxzIGFuIGludGVyYWN0aXZlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4gfCB1bmRlZmluZWQ7XG5cbiAgICBzdGFydFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgZW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBjZW50ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBnZXRCbG9ja2FibGVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1Rvb2xiYXIsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVG9vbGJhcl1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck1vZHVsZSB7fVxuIl19