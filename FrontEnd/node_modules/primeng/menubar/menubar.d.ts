import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { MenuItem, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { VoidListener } from 'primeng/ts-helpers';
import { Subject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
import * as i5 from "primeng/api";
import * as i6 from "primeng/icons/bars";
import * as i7 from "primeng/icons/angledown";
import * as i8 from "primeng/icons/angleright";
export declare class MenubarService {
    autoHide: boolean | undefined;
    autoHideDelay: number | undefined;
    readonly mouseLeaves: Subject<boolean>;
    readonly mouseLeft$: import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenubarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenubarService>;
}
export declare class MenubarSub implements OnInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private cd;
    private menubarService;
    items: any[];
    itemTemplate: HTMLElement | undefined;
    root: boolean;
    autoZIndex: boolean;
    baseZIndex: number;
    mobileActive: boolean | undefined;
    autoDisplay: boolean | undefined;
    menuId: string | undefined;
    ariaLabel: string | undefined;
    ariaLabelledBy: string | undefined;
    level: number;
    focusedItemId: string | undefined;
    activeItemPath: any[];
    submenuIconTemplate: TemplateRef<any> | undefined;
    itemClick: EventEmitter<any>;
    itemMouseEnter: EventEmitter<any>;
    menuFocus: EventEmitter<any>;
    menuBlur: EventEmitter<any>;
    menuKeydown: EventEmitter<any>;
    menubarViewChild: ElementRef;
    mouseLeaveSubscriber: Subscription | undefined;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, menubarService: MenubarService);
    ngOnInit(): void;
    onItemClick(event: any, processedItem: any): void;
    getItemProp(processedItem: any, name: string, params?: any | null): any;
    getItemId(processedItem: any): string;
    getItemKey(processedItem: any): string;
    getItemLabelId(processedItem: any): string;
    getItemClass(processedItem: any): any;
    getItemLabel(processedItem: any): string;
    getSeparatorItemClass(processedItem: any): any;
    isItemVisible(processedItem: any): boolean;
    isItemActive(processedItem: any): boolean;
    isItemDisabled(processedItem: any): boolean;
    isItemFocused(processedItem: any): boolean;
    isItemGroup(processedItem: any): boolean;
    getAriaSetSize(): number;
    getAriaPosInset(index: number): number;
    onItemMouseLeave(): void;
    onItemMouseEnter(param: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenubarSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenubarSub, "p-menubarSub", never, { "items": { "alias": "items"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "root": { "alias": "root"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "mobileActive": { "alias": "mobileActive"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "menuId": { "alias": "menuId"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "level": { "alias": "level"; "required": false; }; "focusedItemId": { "alias": "focusedItemId"; "required": false; }; "activeItemPath": { "alias": "activeItemPath"; "required": false; }; "submenuIconTemplate": { "alias": "submenuIconTemplate"; "required": false; }; }, { "itemClick": "itemClick"; "itemMouseEnter": "itemMouseEnter"; "menuFocus": "menuFocus"; "menuBlur": "menuBlur"; "menuKeydown": "menuKeydown"; }, never, never, false, never>;
    static ngAcceptInputType_root: unknown;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_mobileActive: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_level: unknown;
}
/**
 * Menubar is a horizontal menu component.
 * @group Components
 */
export declare class Menubar implements AfterContentInit, OnDestroy, OnInit {
    private document;
    private platformId;
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    config: PrimeNGConfig;
    private menubarService;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
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
     * Whether to hide a root submenu when mouse leaves.
     * @group Props
     */
    autoHide: boolean | undefined;
    /**
     * Delay to hide the root submenu in milliseconds when mouse leaves.
     * @group Props
     */
    autoHideDelay: number;
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
     * Callback to execute when button is focused.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to execute when button loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    templates: QueryList<PrimeTemplate> | undefined;
    menubutton: ElementRef | undefined;
    rootmenu: MenubarSub | undefined;
    startTemplate: TemplateRef<any> | undefined;
    endTemplate: TemplateRef<any> | undefined;
    menuIconTemplate: TemplateRef<any> | undefined;
    submenuIconTemplate: TemplateRef<any> | undefined;
    itemTemplate: TemplateRef<any> | undefined;
    mobileActive: boolean | undefined;
    outsideClickListener: VoidListener;
    resizeListener: VoidListener;
    mouseLeaveSubscriber: Subscription | undefined;
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
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig, menubarService: MenubarService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    createProcessedItems(items: any, level?: number, parent?: any, parentKey?: any): any[];
    getItemProp(item: any, name: string): any;
    menuButtonClick(event: MouseEvent): void;
    menuButtonKeydown(event: any): void;
    onItemClick(event: any): void;
    onItemMouseEnter(event: any): void;
    changeFocusedItemIndex(event: any, index: number): void;
    scrollInView(index?: number): void;
    onItemChange(event: any): void;
    toggle(event: MouseEvent): void;
    hide(event?: any, isFocus?: boolean): void;
    show(): void;
    onMenuFocus(event: any): void;
    onMenuBlur(event: any): void;
    onKeyDown(event: KeyboardEvent): void;
    findVisibleItem(index: any): any;
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
    findLastFocusedItemIndex(): any;
    findLastItemIndex(): number;
    findPrevItemIndex(index: number): number;
    findNextItemIndex(index: number): any;
    bindResizeListener(): void;
    bindOutsideClickListener(): void;
    unbindOutsideClickListener(): void;
    unbindResizeListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Menubar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Menubar, "p-menubar", never, { "model": { "alias": "model"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "autoDisplay": { "alias": "autoDisplay"; "required": false; }; "autoHide": { "alias": "autoHide"; "required": false; }; "autoHideDelay": { "alias": "autoHideDelay"; "required": false; }; "id": { "alias": "id"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
    static ngAcceptInputType_autoDisplay: unknown;
    static ngAcceptInputType_autoHide: unknown;
    static ngAcceptInputType_autoHideDelay: unknown;
}
export declare class MenubarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MenubarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MenubarModule, [typeof Menubar, typeof MenubarSub], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule, typeof i5.SharedModule, typeof i6.BarsIcon, typeof i7.AngleDownIcon, typeof i8.AngleRightIcon], [typeof Menubar, typeof i2.RouterModule, typeof i4.TooltipModule, typeof i5.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MenubarModule>;
}
