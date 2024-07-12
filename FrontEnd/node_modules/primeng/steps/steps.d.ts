import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nullable } from 'primeng/ts-helpers';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/tooltip";
/**
 * Steps components is an indicator for the steps in a wizard workflow.
 * @group Components
 */
export declare class Steps implements OnInit, OnDestroy {
    private router;
    private route;
    private cd;
    /**
     * Index of the active item.
     * @group Props
     */
    activeIndex: number;
    /**
     * An array of menu items.
     * @group Props
     */
    model: MenuItem[] | undefined;
    /**
     * Whether the items are clickable or not.
     * @group Props
     */
    readonly: boolean;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @group Props
     */
    exact: boolean;
    /**
     * Callback to invoke when the new step is selected.
     * @param {number} number - current index.
     * @group Emits
     */
    activeIndexChange: EventEmitter<number>;
    listViewChild: Nullable<ElementRef>;
    constructor(router: Router, route: ActivatedRoute, cd: ChangeDetectorRef);
    subscription: Subscription | undefined;
    ngOnInit(): void;
    onItemClick(event: Event, item: MenuItem, i: number): void;
    onItemKeydown(event: KeyboardEvent, item: MenuItem, i: number): void;
    navigateToNextItem(target: any): void;
    navigateToPrevItem(target: any): void;
    navigateToFirstItem(target: any): void;
    navigateToLastItem(target: any): void;
    findNextItem(item: any): any;
    findPrevItem(item: any): any;
    findFirstItem(): any;
    findLastItem(): any;
    setFocusToMenuitem(target: any, focusableItem: any): void;
    isClickableRouterLink(item: MenuItem): boolean;
    isActive(item: MenuItem, index: number): boolean;
    getItemTabIndex(item: MenuItem, index: number): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Steps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Steps, "p-steps", never, { "activeIndex": { "alias": "activeIndex"; "required": false; }; "model": { "alias": "model"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "exact": { "alias": "exact"; "required": false; }; }, { "activeIndexChange": "activeIndexChange"; }, never, never, false, never>;
    static ngAcceptInputType_activeIndex: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_exact: unknown;
}
export declare class StepsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<StepsModule, [typeof Steps], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.TooltipModule], [typeof Steps, typeof i2.RouterModule, typeof i3.TooltipModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<StepsModule>;
}
