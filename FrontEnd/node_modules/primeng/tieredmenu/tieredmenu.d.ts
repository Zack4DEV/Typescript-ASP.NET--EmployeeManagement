import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { MenuItem, OverlayService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
import * as i5 from "primeng/icons/angleright";
import * as i6 from "primeng/api";
export declare class TieredMenuSub {
    el: ElementRef;
    renderer: Renderer2;
    tieredMenu: TieredMenu;
    items: any[];
    itemTemplate: HTMLElement | undefined;
    root: boolean | undefined;
    autoDisplay: boolean | undefined;
    autoZIndex: boolean;
    baseZIndex: number;
    popup: boolean | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    activeItemPath: import("@angular/core").InputSignal<any[]>;
    tabindex: number;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    sublistViewChild: ElementRef;
    constructor(el: ElementRef, renderer: Renderer2, tieredMenu: TieredMenu);
    positionSubmenu(): void;
    getItemProp(processedItem: any, name: string, params?: any | null): any;
    getItemId(processedItem: any): string;
    getItemKey(processedItem: any): string;
    getItemClass(processedItem: any): any;
    getItemLabel(processedItem: any): string;
    getSeparatorItemClass(processedItem: any): any;
    getAriaSetSize(): number;
    getAriaPosInset(index: number): number;
    isItemVisible(processedItem: any): boolean;
    isItemActive(processedItem: any): boolean;
    isItemDisabled(processedItem: any): boolean;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    onItemMouseEnter(param: any): void;
    onItemClick(event: any, processedItem: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TieredMenuSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TieredMenuSub, "p-tieredMenuSub", never, { "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "root": { "alias": "root"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; "isSignal": true; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, false, never>;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
/**
 * TieredMenu displays submenus in nested overlays.
 * @group Components
 */
export declare class TieredMenu implements OnInit, AfterContentInit, OnDestroy {
    private document;
    platformId: any;
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    config: PrimeNGConfig;
    overlayService: OverlayService;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
    /**
     * Defines if menu would displayed as a popup.
     * @group Props
     */
    popup: boolean | undefined;
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Whether to show a root submenu on mouse over.
     * @defaultValue true
     * @group Props
     */
    autoDisplay: boolean | undefined;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions: string;
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
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    templates: QueryList<PrimeTemplate> | undefined;
    rootmenu: TieredMenuSub | undefined;
    containerViewChild: ElementRef<any> | undefined;
    submenuIconTemplate: Nullable<TemplateRef<any>>;
    itemTemplate: Nullable<TemplateRef<any>>;
    container: HTMLDivElement | undefined;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    scrollHandler: Nullable<ConnectedOverlayScrollHandler>;
    target: any;
    relatedTarget: any;
    visible: boolean | undefined;
    relativeAlign: boolean | undefined;
    dirty: boolean;
    focused: boolean;
    activeItemPath: import("@angular/core").WritableSignal<any>;
    number: import("@angular/core").WritableSignal<number>;
    focusedItemInfo: import("@angular/core").WritableSignal<any>;
    searchValue: string;
    searchTimeout: any;
    _processedItems: any[];
    _model: MenuItem[] | undefined;
    get visibleItems(): any;
    get processedItems(): any[];
    get focusedItemId(): any;
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig, overlayService: OverlayService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    createProcessedItems(items: any, level?: number, parent?: any, parentKey?: any): any[];
    getItemProp(item: any, name: string): any;
    getProccessedItemLabel(processedItem: any): any;
    getItemLabel(item: any): any;
    isProcessedItemGroup(processedItem: any): boolean;
    isSelected(processedItem: any): boolean;
    isValidSelectedItem(processedItem: any): boolean;
    isValidItem(processedItem: any): boolean;
    isItemDisabled(item: any): boolean;
    isItemVisible(item: any): boolean;
    isItemSeparator(item: any): boolean;
    isItemMatched(processedItem: any): boolean;
    isProccessedItemGroup(processedItem: any): boolean;
    onOverlayClick(event: MouseEvent): void;
    onItemClick(event: any): void;
    onItemMouseEnter(event: any): void;
    onKeyDown(event: KeyboardEvent): void;
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
    onItemChange(event: any): void;
    onMenuFocus(event: any): void;
    onMenuBlur(event: any): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    alignOverlay(): void;
    onOverlayAnimationEnd(event: AnimationEvent): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    moveOnTop(): void;
    /**
     * Hides the popup menu.
     * @group Method
     */
    hide(event?: any, isFocus?: boolean): void;
    /**
     * Toggles the visibility of the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    toggle(event: any): void;
    /**
     * Displays the popup menu.
     * @param {Event} even - Browser event.
     * @group Method
     */
    show(event: any, isFocus?: any): void;
    searchItems(event: any, char: string): boolean;
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    findFirstFocusedItemIndex(): any;
    findFirstItemIndex(): any;
    findSelectedItemIndex(): any;
    changeFocusedItemIndex(event: any, index: number): void;
    scrollInView(index?: number): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindResizeListener(): void;
    bindOutsideClickListener(): void;
    unbindOutsideClickListener(): void;
    unbindResizeListener(): void;
    onOverlayHide(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TieredMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TieredMenu, "p-tieredMenu", never, { "model": { "alias": "model"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "id": { "alias": "id"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
export declare class TieredMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TieredMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TieredMenuModule, [typeof TieredMenu, typeof TieredMenuSub], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule, typeof i5.AngleRightIcon, typeof i6.SharedModule], [typeof TieredMenu, typeof i2.RouterModule, typeof i4.TooltipModule, typeof i6.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TieredMenuModule>;
}
