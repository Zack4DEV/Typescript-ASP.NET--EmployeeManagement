import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonGroup {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: ButtonGroup, selector: "p-buttonGroup", ngImport: i0, template: `
        <span class="p-button-group p-component" role="group">
            <ng-content></ng-content>
        </span>
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-buttonGroup',
                    template: `
        <span class="p-button-group p-component" role="group">
            <ng-content></ng-content>
        </span>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
export class ButtonGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, declarations: [ButtonGroup], imports: [CommonModule], exports: [ButtonGroup] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ButtonGroup],
                    declarations: [ButtonGroup]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uZ3JvdXAvYnV0dG9uZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVloRyxNQUFNLE9BQU8sV0FBVzt1R0FBWCxXQUFXOzJGQUFYLFdBQVcscURBUlY7Ozs7S0FJVDs7MkZBSVEsV0FBVztrQkFWdkIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFOzs7O0tBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN4Qzs7QUFRRCxNQUFNLE9BQU8saUJBQWlCO3VHQUFqQixpQkFBaUI7d0dBQWpCLGlCQUFpQixpQkFQakIsV0FBVyxhQUdWLFlBQVksYUFIYixXQUFXO3dHQU9YLGlCQUFpQixZQUpoQixZQUFZOzsyRkFJYixpQkFBaUI7a0JBTDdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3RCLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgTmdNb2R1bGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1idXR0b25Hcm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWJ1dHRvbi1ncm91cCBwLWNvbXBvbmVudFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkdyb3VwIHt9XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0J1dHRvbkdyb3VwXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Hcm91cF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uR3JvdXBNb2R1bGUge31cbiJdfQ==