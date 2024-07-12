import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { ObjectUtils } from 'primeng/utils';
import * as i0 from "@angular/core";
export class BaseIcon {
    label;
    spin = false;
    styleClass;
    role;
    ariaLabel;
    ariaHidden;
    ngOnInit() {
        this.getAttributes();
    }
    getAttributes() {
        const isLabelEmpty = ObjectUtils.isEmpty(this.label);
        this.role = !isLabelEmpty ? 'img' : undefined;
        this.ariaLabel = !isLabelEmpty ? this.label : undefined;
        this.ariaHidden = isLabelEmpty;
    }
    getClassNames() {
        return `p-icon ${this.styleClass ? this.styleClass + ' ' : ''}${this.spin ? 'p-icon-spin' : ''}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BaseIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: BaseIcon, isStandalone: true, selector: "ng-component", inputs: { label: "label", spin: ["spin", "spin", booleanAttribute], styleClass: "styleClass" }, host: { classAttribute: "p-element p-icon-wrapper" }, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: BaseIcon, decorators: [{
            type: Component,
            args: [{
                    template: ` <ng-content></ng-content> `,
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element p-icon-wrapper'
                    }
                }]
        }], propDecorators: { label: [{
                type: Input
            }], spin: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], styleClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYmFzZWljb24vYmFzZWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQTJCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVzVDLE1BQU0sT0FBTyxRQUFRO0lBQ1IsS0FBSyxDQUFTO0lBRWlCLElBQUksR0FBWSxLQUFLLENBQUM7SUFFckQsVUFBVSxDQUFTO0lBRTVCLElBQUksQ0FBUztJQUViLFNBQVMsQ0FBUztJQUVsQixVQUFVLENBQVU7SUFFcEIsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDckcsQ0FBQzt1R0ExQlEsUUFBUTsyRkFBUixRQUFRLGlHQUdHLGdCQUFnQiw2R0FYMUIsNkJBQTZCOzsyRkFROUIsUUFBUTtrQkFUcEIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLDBCQUEwQjtxQkFDcEM7aUJBQ0o7OEJBRVksS0FBSztzQkFBYixLQUFLO2dCQUVrQyxJQUFJO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUU3QixVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50IHAtaWNvbi13cmFwcGVyJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQmFzZUljb24ge1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc3BpbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgcm9sZTogc3RyaW5nO1xuXG4gICAgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICBhcmlhSGlkZGVuOiBib29sZWFuO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlcygpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGlzTGFiZWxFbXB0eSA9IE9iamVjdFV0aWxzLmlzRW1wdHkodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMucm9sZSA9ICFpc0xhYmVsRW1wdHkgPyAnaW1nJyA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hcmlhTGFiZWwgPSAhaXNMYWJlbEVtcHR5ID8gdGhpcy5sYWJlbCA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hcmlhSGlkZGVuID0gaXNMYWJlbEVtcHR5O1xuICAgIH1cblxuICAgIGdldENsYXNzTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBgcC1pY29uICR7dGhpcy5zdHlsZUNsYXNzID8gdGhpcy5zdHlsZUNsYXNzICsgJyAnIDogJyd9JHt0aGlzLnNwaW4gPyAncC1pY29uLXNwaW4nIDogJyd9YDtcbiAgICB9XG59XG4iXX0=