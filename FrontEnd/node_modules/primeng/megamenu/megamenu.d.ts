import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { MegaMenuItem, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
import * as i5 from "primeng/api";
import * as i6 from "primeng/icons/angledown";
import * as i7 from "primeng/icons/angleright";
export declare class MegaMenuSub {
    el: ElementRef;
    megaMenu: MegaMenu;
    id: string | undefined;
    items: any[] | undefined;
    itemTemplate: HTMLElement | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    disabled: boolean;
    orientation: string | undefined;
    activeItem: any;
    submenu: any;
    tabindex: number;
    root: boolean;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    menubarViewChild: ElementRef;
    constructor(el: ElementRef, megaMenu: MegaMenu);
    onItemClick(event: any, processedItem: any): void;
    getItemProp(processedItem: any, name: string, params?: any | null): any;
    getItemId(processedItem: any): string;
    getSubListId(processedItem: any): string;
    getItemClass(processedItem: any): any;
    getItemLabel(processedItem: any): string;
    getSeparatorItemClass(processedItem: any): any;
    getColumnClass(processedItem: any): any;
    getSubmenuHeaderClass(processedItem: any): any;
    isSubmenuVisible(submenu: any): boolean;
    isItemVisible(processedItem: any): boolean;
    isItemActive(processedItem: any): boolean;
    isItemDisabled(processedItem: any): boolean;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    getAriaSetSize(): number;
    getAriaPosInset(index: number): number;
    onItemMouseEnter(param: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegaMenuSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MegaMenuSub, "p-megaMenuSub", never, { "id": { "alias": "id"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "activeItem": { "alias": "activeItem"; "required": false; }; "submenu": { "alias": "submenu"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "root": { "alias": "root"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, false, never>;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_root: unknown;
}
/**
 * MegaMenu is navigation component that displays submenus together.
 * @group Components
 */
export declare class MegaMenu implements AfterContentInit, OnDestroy, OnInit {
    private document;
    private platformId;
    el: ElementRef;
    renderer: Renderer2;
    config: PrimeNGConfig;
    cd: ChangeDetectorRef;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MegaMenuItem[] | undefined);
    get model(): MegaMenuItem[] | undefined;
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
     * Defines the orientation.
     * @group Props
     */
    orientation: 'horizontal' | 'vertical' | string;
    /**
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
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
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number;
    templates: QueryList<PrimeTemplate> | undefined;
    menubutton: ElementRef | undefined;
    rootmenu: MegaMenuSub | undefined;
    startTemplate: TemplateRef<any> | undefined;
    endTemplate: TemplateRef<any> | undefined;
    menuIconTemplate: TemplateRef<any> | undefined;
    submenuIconTemplate: TemplateRef<any> | undefined;
    itemTemplate: TemplateRef<any> | undefined;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    dirty: boolean;
    focused: boolean;
    activeItem: import("@angular/core").WritableSignal<any>;
    focusedItemInfo: import("@angular/core").WritableSignal<any>;
    searchValue: string;
    searchTimeout: any;
    _processedItems: any[];
    _model: MegaMenuItem[] | undefined;
    get visibleItems(): any;
    get processedItems(): any[];
    get focusedItemId(): any;
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, config: PrimeNGConfig, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    createProcessedItems(items: any, level?: number, parent?: {}, parentKey?: string, columnIndex?: any): any[];
    getItemProp(item: any, name: string): any;
    onItemClick(event: any): void;
    onItemMouseEnter(event: any): void;
    scrollInView(index?: number): void;
    onItemChange(event: any): void;
    hide(event?: any, isFocus?: boolean): void;
    onMenuFocus(event: any): void;
    onMenuBlur(event: any): void;
    onKeyDown(event: KeyboardEvent): void;
    findFirstFocusedItemIndex(): any;
    findFirstItemIndex(): any;
    findSelectedItemIndex(): any;
    isProcessedItemGroup(processedItem: any): boolean;
    isSelected(processedItem: any): boolean;
    isValidSelectedItem(processedItem: any): boolean;
    isValidItem(processedItem: any): boolean;
    isItemDisabled(item: any): boolean;
    isItemSeparator(item: any): boolean;
    isItemMatched(processedItem: any): boolean;
    isProccessedItemGroup(processedItem: any): boolean;
    searchItems(event: any, char: string): boolean;
    getProccessedItemLabel(processedItem: any): any;
    getItemLabel(item: any): any;
    changeFocusedItemInfo(event: any, index: any): void;
    onArrowDownKey(event: KeyboardEvent): void;
    onArrowRightKey(event: KeyboardEvent): void;
    onArrowUpKey(event: KeyboardEvent): void;
    onArrowLeftKey(event: KeyboardEvent): void;
    onHomeKey(event: KeyboardEvent): void;
    onEndKey(event: KeyboardEvent): void;
    onSpaceKey(event: KeyboardEvent): void;
    onEscapeKey(event: KeyboardEvent): void;
    onTabKey(event: KeyboardEvent): void;
    onEnterKey(event: KeyboardEvent): void;
    findVisibleItem(index: any): any;
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    bindResizeListener(): void;
    bindOutsideClickListener(): void;
    unbindOutsideClickListener(): void;
    unbindResizeListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegaMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MegaMenu, "p-megaMenu", never, { "model": { "alias": "model"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "id": { "alias": "id"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
export declare class MegaMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MegaMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MegaMenuModule, [typeof MegaMenu, typeof MegaMenuSub], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule, typeof i5.SharedModule, typeof i6.AngleDownIcon, typeof i7.AngleRightIcon], [typeof MegaMenu, typeof i2.RouterModule, typeof i4.TooltipModule, typeof i5.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MegaMenuModule>;
}
