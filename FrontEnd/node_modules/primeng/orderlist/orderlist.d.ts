import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { FilterService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { OrderListFilterEvent, OrderListFilterOptions, OrderListSelectionChangeEvent } from './orderlist.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/api";
import * as i4 from "primeng/ripple";
import * as i5 from "@angular/cdk/drag-drop";
import * as i6 from "primeng/icons/angledoubledown";
import * as i7 from "primeng/icons/angledoubleup";
import * as i8 from "primeng/icons/angleup";
import * as i9 from "primeng/icons/angledown";
import * as i10 from "primeng/icons/search";
/**
 * OrderList is used to managed the order of a collection.
 * @group Components
 */
export declare class OrderList implements AfterViewChecked, AfterContentInit {
    private document;
    private platformId;
    private renderer;
    el: ElementRef;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    config: PrimeNGConfig;
    /**
     * Text for the caption.
     * @group Props
     */
    header: string | undefined;
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
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Inline style of the list element.
     * @group Props
     */
    listStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * A boolean value that indicates whether the component should be responsive.
     * @group Props
     */
    responsive: boolean | undefined;
    /**
     * When specified displays an input field to filter the items on keyup and decides which fields to search against.
     * @group Props
     */
    filterBy: string | undefined;
    /**
     * Placeholder of the filter input.
     * @group Props
     */
    filterPlaceholder: string | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale: string | undefined;
    /**
     * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection: boolean;
    /**
     * Whether to enable dragdrop based reordering.
     * @group Props
     */
    dragdrop: boolean;
    /**
     * Defines the location of the buttons with respect to the list.
     * @group Props
     */
    controlsPosition: 'left' | 'right';
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel: string | undefined;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';
    /**
     * Indicates the width of the screen at which the component should change its behavior.
     * @group Props
     */
    breakpoint: string;
    /**
     * Whether to displays rows with alternating colors.
     * @group Props
     */
    stripedRows: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    trackBy: Function;
    /**
     * A list of values that are currently selected.
     * @group Props
     */
    set selection(val: any[]);
    get selection(): any[];
    /**
     * Array of values to be displayed in the component.
     * It represents the data source for the list of items.
     * @group Props
     */
    set value(val: any[] | undefined);
    get value(): any[] | undefined;
    /**
     * Callback to invoke on selection change.
     * @param {*} any - selection instance.
     * @group Emits
     */
    selectionChange: EventEmitter<any>;
    /**
     * Callback to invoke when list is reordered.
     * @param {*} any - list instance.
     * @group Emits
     */
    onReorder: EventEmitter<any>;
    /**
     * Callback to invoke when selection changes.
     * @param {OrderListSelectionChangeEvent} event - Custom change event.
     * @group Emits
     */
    onSelectionChange: EventEmitter<OrderListSelectionChangeEvent>;
    /**
     * Callback to invoke when filtering occurs.
     * @param {OrderListFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilterEvent: EventEmitter<OrderListFilterEvent>;
    /**
     * Callback to invoke when the list is focused
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<Event>;
    /**
     * Callback to invoke when the list is blurred
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<Event>;
    listViewChild: Nullable<ElementRef>;
    filterViewChild: Nullable<ElementRef>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    itemTemplate: Nullable<TemplateRef<any>>;
    headerTemplate: Nullable<TemplateRef<any>>;
    emptyMessageTemplate: Nullable<TemplateRef<any>>;
    emptyFilterMessageTemplate: Nullable<TemplateRef<any>>;
    filterTemplate: Nullable<TemplateRef<any>>;
    get moveUpAriaLabel(): string;
    get moveTopAriaLabel(): string;
    get moveDownAriaLabel(): string;
    get moveBottomAriaLabel(): string;
    moveUpIconTemplate: Nullable<TemplateRef<any>>;
    moveTopIconTemplate: Nullable<TemplateRef<any>>;
    moveDownIconTemplate: Nullable<TemplateRef<any>>;
    moveBottomIconTemplate: Nullable<TemplateRef<any>>;
    filterIconTemplate: Nullable<TemplateRef<any>>;
    filterOptions: Nullable<OrderListFilterOptions>;
    d_selection: any[];
    movedUp: Nullable<boolean>;
    movedDown: Nullable<boolean>;
    itemTouched: Nullable<boolean>;
    styleElement: any;
    id: string;
    focused: boolean;
    focusedOptionIndex: any;
    focusedOption: any | undefined;
    filterValue: Nullable<string>;
    visibleOptions: Nullable<any[]>;
    _value: any[] | undefined;
    constructor(document: Document, platformId: any, renderer: Renderer2, el: ElementRef, cd: ChangeDetectorRef, filterService: FilterService, config: PrimeNGConfig);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    onItemClick(event: any, item: any, index?: number, selectedId?: string): void;
    onFilterKeyup(event: KeyboardEvent): void;
    filter(): void;
    /**
     * Callback to invoke on filter reset.
     * @group Method
     */
    resetFilter(): void;
    isItemVisible(item: any): boolean | undefined;
    onItemTouchEnd(): void;
    isSelected(item: any): boolean;
    isEmpty(): boolean;
    moveUp(): void;
    moveTop(): void;
    moveDown(): void;
    moveBottom(): void;
    onDrop(event: CdkDragDrop<string[]>): void;
    onListFocus(event: any): void;
    onListBlur(event: any): void;
    onItemKeydown(event: KeyboardEvent): void;
    onOptionMouseDown(index: any): void;
    onArrowDownKey(event: any): void;
    onArrowUpKey(event: any): void;
    onHomeKey(event: any): void;
    onEndKey(event: any): void;
    onEnterKey(event: any): void;
    onSpaceKey(event: any): void;
    findNextOptionIndex(index: any): number;
    findPrevOptionIndex(index: any): number;
    getLatestSelectedVisibleOptionIndex(visibleOptions: any[]): number;
    getVisibleOptions(): any[];
    getFocusedOption(index: number): any;
    changeFocusedOptionIndex(index: any): void;
    scrollInView(id: any): void;
    findNextItem(item: any): HTMLElement | null;
    findPrevItem(item: any): HTMLElement | null;
    moveDisabled(): boolean;
    focusedOptionId(): any;
    createStyle(): void;
    destroyStyle(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrderList, "p-orderList", never, { "header": { "alias": "header"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "listStyle": { "alias": "listStyle"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "filterBy": { "alias": "filterBy"; "required": false; }; "filterPlaceholder": { "alias": "filterPlaceholder"; "required": false; }; "filterLocale": { "alias": "filterLocale"; "required": false; }; "metaKeySelection": { "alias": "metaKeySelection"; "required": false; }; "dragdrop": { "alias": "dragdrop"; "required": false; }; "controlsPosition": { "alias": "controlsPosition"; "required": false; }; "ariaFilterLabel": { "alias": "ariaFilterLabel"; "required": false; }; "filterMatchMode": { "alias": "filterMatchMode"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "stripedRows": { "alias": "stripedRows"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "selectionChange": "selectionChange"; "onReorder": "onReorder"; "onSelectionChange": "onSelectionChange"; "onFilterEvent": "onFilterEvent"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_responsive: unknown;
    static ngAcceptInputType_metaKeySelection: unknown;
    static ngAcceptInputType_dragdrop: unknown;
    static ngAcceptInputType_stripedRows: unknown;
    static ngAcceptInputType_disabled: unknown;
}
export declare class OrderListModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderListModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OrderListModule, [typeof OrderList], [typeof i1.CommonModule, typeof i2.ButtonModule, typeof i3.SharedModule, typeof i4.RippleModule, typeof i5.DragDropModule, typeof i6.AngleDoubleDownIcon, typeof i7.AngleDoubleUpIcon, typeof i8.AngleUpIcon, typeof i9.AngleDownIcon, typeof i10.SearchIcon], [typeof OrderList, typeof i3.SharedModule, typeof i5.DragDropModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OrderListModule>;
}
