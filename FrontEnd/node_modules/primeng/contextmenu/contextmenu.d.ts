import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { MenuItem, OverlayService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
import * as i5 from "primeng/icons/angleright";
import * as i6 from "primeng/api";
export declare class ContextMenuSub {
    private document;
    el: ElementRef;
    renderer: Renderer2;
    private cd;
    contextMenu: ContextMenu;
    private ref;
    visible: boolean;
    items: any[];
    itemTemplate: HTMLElement | undefined;
    root: boolean | undefined;
    autoZIndex: boolean;
    baseZIndex: number;
    popup: boolean | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    activeItemPath: any[];
    tabindex: number;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    sublistViewChild: ElementRef;
    constructor(document: Document, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, contextMenu: ContextMenu, ref: ViewContainerRef);
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
    onEnter(event: any, sublist: any): void;
    position(sublist: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuSub, "p-contextMenuSub", never, { "visible": { "alias": "visible"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "root": { "alias": "root"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, false, never>;
    static ngAcceptInputType_visible: unknown;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_popup: unknown;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
/**
 * ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.
 * @group Components
 */
export declare class ContextMenu implements OnInit, AfterContentInit, OnDestroy {
    private document;
    private platformId;
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
     * Event for which the menu must be displayed.
     * @group Props
     */
    triggerEvent: string;
    /**
     * Local template variable name of the element to attach the context menu.
     * @group Props
     */
    target: HTMLElement | string | undefined;
    /**
     * Attaches the menu to document instead of a particular item.
     * @group Props
     */
    global: boolean;
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
     * Press delay in touch devices as miliseconds.
     * @group Props
     */
    pressDelay: number | undefined;
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    onShow: EventEmitter<null>;
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide: EventEmitter<null>;
    templates: QueryList<PrimeTemplate> | undefined;
    rootmenu: ContextMenuSub | undefined;
    containerViewChild: ElementRef<any> | undefined;
    submenuIconTemplate: Nullable<TemplateRef<any>>;
    itemTemplate: Nullable<TemplateRef<any>>;
    container: HTMLDivElement | undefined;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    triggerEventListener: VoidListener;
    documentClickListener: VoidListener;
    documentTriggerListener: VoidListener;
    touchEndListener: VoidListener;
    pageX: number;
    pageY: number;
    visible: import("@angular/core").WritableSignal<boolean>;
    relativeAlign: boolean | undefined;
    private window;
    focused: boolean;
    activeItemPath: import("@angular/core").WritableSignal<any>;
    focusedItemInfo: import("@angular/core").WritableSignal<any>;
    submenuVisible: import("@angular/core").WritableSignal<boolean>;
    searchValue: string;
    searchTimeout: any;
    _processedItems: any[];
    _model: MenuItem[] | undefined;
    pressTimer: any;
    get visibleItems(): any;
    get processedItems(): any[];
    get focusedItemId(): any;
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig, overlayService: OverlayService);
    ngOnInit(): void;
    isMobile(): boolean;
    bindTriggerEventListener(): void;
    bindGlobalListeners(): void;
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
    isItemSeparator(item: any): boolean;
    isItemMatched(processedItem: any): boolean;
    isProccessedItemGroup(processedItem: any): boolean;
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
    onOverlayAnimationEnd(event: AnimationEvent): void;
    appendOverlay(): void;
    moveOnTop(): void;
    onOverlayHide(): void;
    onTouchStart(event: MouseEvent): void;
    onTouchEnd(): void;
    hide(): void;
    toggle(event?: any): void;
    show(event: any): void;
    position(): void;
    searchItems(event: any, char: string): boolean;
    findVisibleItem(index: any): any;
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    findFirstFocusedItemIndex(): any;
    findFirstItemIndex(): any;
    findSelectedItemIndex(): any;
    changeFocusedItemIndex(event: any, index: number): void;
    scrollInView(index?: number): void;
    bindResizeListener(): void;
    isOutsideClicked(event: Event): boolean;
    unbindResizeListener(): void;
    unbindGlobalListeners(): void;
    unbindTriggerEventListener(): void;
    removeAppendedElements(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenu, "p-contextMenu", never, { "model": { "alias": "model"; "required": false; }; "triggerEvent": { "alias": "triggerEvent"; "required": false; }; "target": { "alias": "target"; "required": false; }; "global": { "alias": "global"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "id": { "alias": "id"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "pressDelay": { "alias": "pressDelay"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_global: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_pressDelay: unknown;
}
export declare class ContextMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ContextMenuModule, [typeof ContextMenu, typeof ContextMenuSub], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule, typeof i5.AngleRightIcon, typeof i6.SharedModule], [typeof ContextMenu, typeof i2.RouterModule, typeof i4.TooltipModule, typeof i6.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ContextMenuModule>;
}
