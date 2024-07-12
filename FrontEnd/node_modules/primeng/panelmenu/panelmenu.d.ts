import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/tooltip";
import * as i4 from "primeng/api";
import * as i5 from "primeng/icons/angledown";
import * as i6 from "primeng/icons/angleright";
import * as i7 from "primeng/icons/chevrondown";
import * as i8 from "primeng/icons/chevronright";
export declare class PanelMenuSub {
    panelMenu: PanelMenu;
    el: ElementRef;
    panelId: string | undefined;
    focusedItemId: string | undefined;
    items: any[];
    itemTemplate: HTMLElement | undefined;
    level: number;
    activeItemPath: any[];
    root: boolean | undefined;
    tabindex: number | undefined;
    transitionOptions: string | undefined;
    parentExpanded: boolean | undefined;
    itemToggle: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeyDown: EventEmitter<any>;
    listViewChild: ElementRef;
    constructor(panelMenu: PanelMenu, el: ElementRef);
    getItemId(processedItem: any): any;
    getItemKey(processedItem: any): any;
    getItemClass(processedItem: any): {
        'p-menuitem': boolean;
        'p-disabled': any;
    };
    getItemProp(processedItem: any, name?: any, params?: any): any;
    getItemLabel(processedItem: any): any;
    isItemExpanded(processedItem: any): any;
    isItemActive(processedItem: any): any;
    isItemVisible(processedItem: any): boolean;
    isItemDisabled(processedItem: any): any;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    getAnimation(processedItem: any): {
        value: string;
        params: {
            transitionParams: string;
            height: string;
        };
    };
    getAriaSetSize(): number;
    getAriaPosInset(index: any): number;
    onItemClick(event: any, processedItem: any): void;
    onItemToggle(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenuSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelMenuSub, "p-panelMenuSub", never, { "panelId": { "alias": "panelId"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "level": { "alias": "level"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; }; "root": { "alias": "root"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "parentExpanded": { "alias": "parentExpanded"; "required": false; }; }, { "itemToggle": "itemToggle"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeyDown": "menuKeyDown"; }, never, never, false, never>;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_parentExpanded: unknown;
}
export declare class PanelMenuList implements OnChanges {
    private el;
    panelId: string | undefined;
    id: string | undefined;
    items: any[];
    itemTemplate: HTMLElement | undefined;
    parentExpanded: boolean | undefined;
    expanded: boolean | undefined;
    transitionOptions: string | undefined;
    root: boolean | undefined;
    tabindex: number | undefined;
    activeItem: any;
    itemToggle: EventEmitter<any>;
    headerFocus: EventEmitter<any>;
    subMenuViewChild: PanelMenuSub;
    searchTimeout: any;
    searchValue: any;
    focused: boolean | undefined;
    focusedItem: import("@angular/core").WritableSignal<any>;
    activeItemPath: import("@angular/core").WritableSignal<any[]>;
    processedItems: import("@angular/core").WritableSignal<any[]>;
    visibleItems: import("@angular/core").Signal<any[]>;
    get focusedItemId(): any;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    getItemProp(processedItem: any, name: any): any;
    getItemLabel(processedItem: any): any;
    isItemVisible(processedItem: any): boolean;
    isItemDisabled(processedItem: any): any;
    isItemActive(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    isElementInPanel(event: any, element: any): any;
    isItemMatched(processedItem: any): any;
    isVisibleItem(processedItem: any): boolean;
    isValidItem(processedItem: any): boolean;
    findFirstItem(): any;
    findLastItem(): any;
    findItemByEventTarget(target: EventTarget): undefined | any;
    createProcessedItems(items: any, level?: number, parent?: {}, parentKey?: string): any[];
    findProcessedItemByItemKey(key: any, processedItems?: any, level?: number): any;
    flatItems(processedItems: any, processedFlattenItems?: any[]): any[];
    changeFocusedItem(event: any): void;
    scrollInView(): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onItemToggle(event: any): void;
    onKeyDown(event: any): void;
    onArrowDownKey(event: any): void;
    onArrowUpKey(event: any): void;
    onArrowLeftKey(event: any): void;
    onArrowRightKey(event: any): void;
    onHomeKey(event: any): void;
    onEndKey(event: any): void;
    onEnterKey(event: any): void;
    onSpaceKey(event: any): void;
    findNextItem(processedItem: any): any;
    findPrevItem(processedItem: any): any;
    searchItems(event: any, char: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenuList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelMenuList, "p-panelMenuList", never, { "panelId": { "alias": "panelId"; "required": false; }; "id": { "alias": "id"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "parentExpanded": { "alias": "parentExpanded"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "root": { "alias": "root"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "activeItem": { "alias": "activeItem"; "required": false; }; }, { "itemToggle": "itemToggle"; "headerFocus": "headerFocus"; }, never, never, false, never>;
    static ngAcceptInputType_parentExpanded: unknown;
    static ngAcceptInputType_expanded: unknown;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
/**
 * PanelMenu is a hybrid of Accordion and Tree components.
 * @group Components
 */
export declare class PanelMenu implements AfterContentInit {
    private cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    model: MenuItem[] | undefined;
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
     * Whether multiple tabs can be activated at the same time or not.
     * @group Props
     */
    multiple: boolean;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    containerViewChild: ElementRef | undefined;
    submenuIconTemplate: TemplateRef<any> | undefined;
    itemTemplate: TemplateRef<any> | undefined;
    animating: boolean | undefined;
    activeItem: import("@angular/core").WritableSignal<any>;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    constructor(cd: ChangeDetectorRef);
    /**
     * Collapses open panels.
     * @group Method
     */
    collapseAll(): void;
    onToggleDone(): void;
    changeActiveItem(event: any, item: any, index?: number, selfActive?: boolean): void;
    getAnimation(item: MenuItem): {
        value: string;
        params: {
            transitionParams: string;
            height: string;
        };
    };
    getItemProp(item: any, name: any): any;
    getItemLabel(item: any): any;
    isItemActive(item: any): any;
    isItemVisible(item: any): boolean;
    isItemDisabled(item: any): any;
    isItemGroup(item: any): boolean;
    getPanelId(index: any, item?: any): any;
    getHeaderId(item: any, index: any): string;
    getContentId(item: any, index: any): string;
    updateFocusedHeader(event: any): void;
    changeFocusedHeader(event: any, element: any): void;
    findNextHeader(panelElement: any, selfCheck?: boolean): any;
    findPrevHeader(panelElement: any, selfCheck?: boolean): any;
    findFirstHeader(): any;
    findLastHeader(): any;
    onHeaderClick(event: any, item: any, index: any): void;
    onHeaderKeyDown(event: any, item: any, index: any): void;
    onHeaderArrowDownKey(event: any): void;
    onHeaderArrowUpKey(event: any): void;
    onHeaderHomeKey(event: any): void;
    onHeaderEndKey(event: any): void;
    onHeaderEnterKey(event: any, item: any, index: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelMenu, "p-panelMenu", never, { "model": { "alias": "model"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; "id": { "alias": "id"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, {}, ["templates"], never, false, never>;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
export declare class PanelMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PanelMenuModule, [typeof PanelMenu, typeof PanelMenuSub, typeof PanelMenuList], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.TooltipModule, typeof i4.SharedModule, typeof i5.AngleDownIcon, typeof i6.AngleRightIcon, typeof i7.ChevronDownIcon, typeof i8.ChevronRightIcon], [typeof PanelMenu, typeof i2.RouterModule, typeof i3.TooltipModule, typeof i4.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PanelMenuModule>;
}
