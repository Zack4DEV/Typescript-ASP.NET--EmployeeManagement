import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/api";
import * as i4 from "primeng/ripple";
import * as i5 from "primeng/tooltip";
import * as i6 from "primeng/icons/chevronleft";
import * as i7 from "primeng/icons/chevronright";
/**
 * TabMenu is a navigation component that displays items as tab headers.
 * @group Components
 */
export declare class TabMenu implements AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
    private platformId;
    private router;
    private route;
    private cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
    /**
     * Defines the default active menuitem
     * @group Props
     */
    set activeItem(value: MenuItem | undefined);
    get activeItem(): MenuItem | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @group Props
     */
    scrollable: boolean | undefined;
    /**
     * Defines if popup mode enabled.
     */
    popup: boolean | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Event fired when a tab is selected.
     * @param {MenuItem} item - Menu item.
     * @group Emits
     */
    activeItemChange: EventEmitter<MenuItem>;
    content: Nullable<ElementRef>;
    navbar: Nullable<ElementRef>;
    inkbar: Nullable<ElementRef>;
    prevBtn: Nullable<ElementRef>;
    nextBtn: Nullable<ElementRef>;
    tabLink: Nullable<QueryList<ElementRef>>;
    tab: Nullable<QueryList<ElementRef>>;
    templates: QueryList<PrimeTemplate> | undefined;
    itemTemplate: Nullable<TemplateRef<any>>;
    previousIconTemplate: Nullable<TemplateRef<any>>;
    nextIconTemplate: Nullable<TemplateRef<any>>;
    tabChanged: boolean | undefined;
    backwardIsDisabled: boolean;
    forwardIsDisabled: boolean;
    private timerIdForInitialAutoScroll;
    _focusableItems: MenuItem[] | undefined | any;
    _model: MenuItem[] | undefined;
    _activeItem: MenuItem | undefined;
    focusedItemInfo: import("@angular/core").WritableSignal<any>;
    get focusableItems(): any;
    constructor(platformId: any, router: Router, route: ActivatedRoute, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    isActive(item: MenuItem): boolean;
    getItemProp(item: any, name: string): any;
    visible(item: any): any;
    disabled(item: any): any;
    onMenuItemFocus(item: any): void;
    itemClick(event: Event, item: MenuItem): void;
    onKeydownItem(event: any, index: any, item: any): void;
    onTabKeyDown(tabLinks: any): void;
    findNextItem(items: any, index: any): any;
    findPrevItem(items: any, index: any): any;
    updateInkBar(): void;
    getVisibleButtonWidths(): any;
    updateButtonState(): void;
    updateScrollBar(index: number): void;
    onScroll(event: Event): void;
    navBackward(): void;
    navForward(): void;
    private initAutoScrollForActiveItem;
    private clearAutoScrollHandler;
    private initButtonState;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabMenu, "p-tabMenu", never, { "model": { "alias": "model"; "required": false; }; "activeItem": { "alias": "activeItem"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "activeItemChange": "activeItemChange"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_scrollable: unknown;
    static ngAcceptInputType_popup: unknown;
}
export declare class TabMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TabMenuModule, [typeof TabMenu], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.SharedModule, typeof i4.RippleModule, typeof i5.TooltipModule, typeof i6.ChevronLeftIcon, typeof i7.ChevronRightIcon], [typeof TabMenu, typeof i2.RouterModule, typeof i3.SharedModule, typeof i5.TooltipModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TabMenuModule>;
}
