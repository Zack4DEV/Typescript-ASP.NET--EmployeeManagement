import { ElementRef, EventEmitter, AfterContentInit, QueryList, TemplateRef, ChangeDetectorRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { PrimeTemplate, FilterService, PrimeNGConfig, ScrollerOptions } from 'primeng/api';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Nullable } from 'primeng/ts-helpers';
import { ListboxChangeEvent, ListboxClickEvent, ListboxDoubleClickEvent, ListboxFilterEvent, ListboxFilterOptions, ListboxSelectAllChangeEvent } from './listbox.interface';
import { Scroller } from 'primeng/scroller';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/scroller";
import * as i5 from "primeng/icons/search";
import * as i6 from "primeng/icons/check";
export declare const LISTBOX_VALUE_ACCESSOR: any;
/**
 * ListBox is used to select one or more values from a list of items.
 * @group Components
 */
export declare class Listbox implements AfterContentInit, OnInit, ControlValueAccessor, OnDestroy {
    el: ElementRef;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    config: PrimeNGConfig;
    private renderer;
    /**
     * Unique identifier of the component.
     * @group Props
     */
    id: string | undefined;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage: string | undefined;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus: boolean | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    selectOnFocus: boolean | undefined;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale: boolean | undefined;
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    focusOnHover: boolean | undefined;
    /**
     * Text to display when filtering.
     * @group Props
     */
    filterMessage: string | undefined;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields: any[] | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy: boolean;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll: boolean | undefined;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize: number | undefined;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions: ScrollerOptions | undefined;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    scrollHeight: string;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * When specified, allows selecting multiple values.
     * @group Props
     */
    multiple: boolean | undefined;
    /**
     * Inline style of the container.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the container.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the list element.
     * @group Props
     */
    listStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the list element.
     * @group Props
     */
    listStyleClass: string | undefined;
    /**
     * When present, it specifies that the element value cannot be changed.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * When specified, allows selecting items with checkboxes.
     * @group Props
     */
    checkbox: boolean;
    /**
     * When specified, displays a filter input at header.
     * @group Props
     */
    filter: boolean;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy: string | undefined;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale: string | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection: boolean;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey: string | undefined;
    /**
     * Whether header checkbox is shown in multiple mode.
     * @group Props
     */
    showToggleAll: boolean;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel: string | undefined;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue: string | undefined;
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren: string | undefined;
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel: string | undefined;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled: string | undefined;
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel: string | undefined;
    /**
     * Defines placeholder of the filter input.
     * @group Props
     */
    filterPlaceHolder: string | undefined;
    /**
     * Text to display when filtering does not return any results.
     * @group Props
     */
    emptyFilterMessage: string | undefined;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage: string | undefined;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group: boolean | undefined;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    get options(): any[];
    set options(val: any[]);
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue(): string;
    set filterValue(val: string);
    /**
     * Whether all data is selected.
     * @group Props
     */
    get selectAll(): boolean | undefined | null;
    set selectAll(value: boolean | undefined | null);
    /**
     * Callback to invoke on value change.
     * @param {ListboxChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<ListboxChangeEvent>;
    /**
     * Callback to invoke when option is clicked.
     * @param {ListboxClickEvent} event - Custom click event.
     * @group Emits
     */
    onClick: EventEmitter<ListboxClickEvent>;
    /**
     * Callback to invoke when option is double clicked.
     * @param {ListboxDoubleClickEvent} event - Custom double click event.
     * @group Emits
     */
    onDblClick: EventEmitter<ListboxDoubleClickEvent>;
    /**
     * Callback to invoke when data is filtered.
     * @param {ListboxFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter: EventEmitter<ListboxFilterEvent>;
    /**
     * Callback to invoke when component receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to invoke when component loses focus.
     * @param {FocusEvent} event - Blur event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    /**
     * Callback to invoke when all data is selected.
     * @param {ListboxSelectAllChangeEvent} event - Custom select event.
     * @group Emits
     */
    onSelectAllChange: EventEmitter<ListboxSelectAllChangeEvent>;
    headerCheckboxViewChild: Nullable<ElementRef>;
    filterViewChild: Nullable<ElementRef>;
    lastHiddenFocusableElement: Nullable<ElementRef>;
    firstHiddenFocusableElement: Nullable<ElementRef>;
    scroller: Nullable<Scroller>;
    listViewChild: Nullable<ElementRef>;
    headerFacet: Nullable<TemplateRef<any>>;
    footerFacet: Nullable<TemplateRef<any>>;
    templates: QueryList<PrimeTemplate>;
    itemTemplate: TemplateRef<any> | undefined;
    groupTemplate: TemplateRef<any> | undefined;
    headerTemplate: TemplateRef<any> | undefined;
    filterTemplate: TemplateRef<any> | undefined;
    footerTemplate: TemplateRef<any> | undefined;
    emptyFilterTemplate: TemplateRef<any> | undefined;
    emptyTemplate: TemplateRef<any> | undefined;
    filterIconTemplate: TemplateRef<any> | undefined;
    checkIconTemplate: TemplateRef<any> | undefined;
    _filterValue: import("@angular/core").WritableSignal<string>;
    _filteredOptions: any[] | undefined | null;
    filterOptions: ListboxFilterOptions | undefined;
    filtered: boolean | undefined | null;
    value: any | undefined | null;
    onModelChange: Function;
    onModelTouched: Function;
    optionTouched: boolean | undefined | null;
    focus: boolean | undefined | null;
    headerCheckboxFocus: boolean | undefined | null;
    translationSubscription: Nullable<Subscription>;
    focused: boolean | undefined;
    get containerClass(): {
        'p-listbox p-component': boolean;
        'p-disabled': boolean;
    };
    get focusedOptionId(): string;
    get filterResultMessageText(): string;
    get filterMessageText(): string;
    get searchMessageText(): string;
    get emptyFilterMessageText(): string;
    get selectionMessageText(): string;
    get emptySelectionMessageText(): string;
    get selectedMessageText(): string;
    get ariaSetSize(): any;
    get virtualScrollerDisabled(): boolean;
    get searchFields(): any[];
    get toggleAllAriaLabel(): string;
    searchValue: string | undefined;
    searchTimeout: any;
    _selectAll: boolean | undefined | null;
    _options: import("@angular/core").WritableSignal<any>;
    startRangeIndex: import("@angular/core").WritableSignal<number>;
    focusedOptionIndex: import("@angular/core").WritableSignal<number>;
    modelValue: import("@angular/core").WritableSignal<any>;
    visibleOptions: import("@angular/core").Signal<any>;
    constructor(el: ElementRef, cd: ChangeDetectorRef, filterService: FilterService, config: PrimeNGConfig, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    flatOptions(options: any): any;
    autoUpdateModel(): void;
    /**
     * Updates the model value.
     * @group Method
     */
    updateModel(value: any, event?: any): void;
    removeOption(option: any): any;
    onOptionSelect(event: any, option: any, index?: number): void;
    onOptionSelectMultiple(event: any, option: any): void;
    onOptionSelectSingle(event: any, option: any): void;
    onOptionSelectRange(event: any, start?: number, end?: number): void;
    onToggleAll(event: any): void;
    allSelected(): any;
    onOptionTouchEnd(): void;
    onOptionMouseDown(event: MouseEvent, index: number): void;
    onOptionMouseEnter(event: MouseEvent, index: number): void;
    onOptionDoubleClick(event: MouseEvent, option: any): void;
    onFirstHiddenFocus(event: FocusEvent): void;
    onLastHiddenFocus(event: FocusEvent): void;
    onFocusout(event: FocusEvent): void;
    onListFocus(event: FocusEvent): void;
    onListBlur(event: FocusEvent): void;
    onHeaderCheckboxFocus(event: any): void;
    onHeaderCheckboxBlur(): void;
    onHeaderCheckboxKeyDown(event: any): void;
    onHeaderCheckboxTabKeyDown(event: any): void;
    onFilterChange(event: KeyboardEvent): void;
    onFilterBlur(event: FocusEvent): void;
    onListKeyDown(event: KeyboardEvent): void;
    onFilterKeyDown(event: KeyboardEvent): void;
    onArrowDownKey(event: KeyboardEvent): void;
    onArrowUpKey(event: KeyboardEvent): void;
    onArrowLeftKey(event: KeyboardEvent, pressedInInputText?: boolean): void;
    onHomeKey(event: KeyboardEvent, pressedInInputText?: boolean): void;
    onEndKey(event: KeyboardEvent, pressedInInputText?: boolean): void;
    onPageDownKey(event: KeyboardEvent): void;
    onPageUpKey(event: KeyboardEvent): void;
    onEnterKey(event: any): void;
    onSpaceKey(event: KeyboardEvent): void;
    onShiftKey(): void;
    getOptionGroupChildren(optionGroup: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionLabel(option: any): any;
    getOptionIndex(index: any, scrollerOptions: any): any;
    getOptionValue(option: any): any;
    getAriaPosInset(index: number): number;
    hasSelectedOption(): boolean;
    isOptionGroup(option: any): any;
    changeFocusedOptionIndex(event: any, index: any): void;
    searchOptions(event: any, char: any): boolean;
    isOptionMatched(option: any): any;
    scrollInView(index?: number): void;
    findFirstOptionIndex(): any;
    findLastOptionIndex(): number;
    findFirstFocusedOptionIndex(): any;
    findLastFocusedOptionIndex(): number;
    findLastSelectedOptionIndex(): number;
    findNextOptionIndex(index: any): any;
    findNextSelectedOptionIndex(index: any): any;
    findPrevSelectedOptionIndex(index: any): number;
    findFirstSelectedOptionIndex(): any;
    findPrevOptionIndex(index: any): any;
    findNearestSelectedOptionIndex(index: any, firstCheckUp?: boolean): any;
    equalityKey(): string;
    isValidSelectedOption(option: any): any;
    isOptionDisabled(option: any): any;
    isSelected(option: any): any;
    isValidOption(option: any): boolean;
    isEmpty(): boolean;
    hasFilter(): boolean;
    resetFilter(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Listbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Listbox, "p-listbox", never, { "id": { "alias": "id"; "required": false; }; "searchMessage": { "alias": "searchMessage"; "required": false; }; "emptySelectionMessage": { "alias": "emptySelectionMessage"; "required": false; }; "selectionMessage": { "alias": "selectionMessage"; "required": false; }; "autoOptionFocus": { "alias": "autoOptionFocus"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "selectOnFocus": { "alias": "selectOnFocus"; "required": false; }; "searchLocale": { "alias": "searchLocale"; "required": false; }; "focusOnHover": { "alias": "focusOnHover"; "required": false; }; "filterMessage": { "alias": "filterMessage"; "required": false; }; "filterFields": { "alias": "filterFields"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "virtualScrollItemSize": { "alias": "virtualScrollItemSize"; "required": false; }; "virtualScrollOptions": { "alias": "virtualScrollOptions"; "required": false; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "listStyle": { "alias": "listStyle"; "required": false; }; "listStyleClass": { "alias": "listStyleClass"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "checkbox": { "alias": "checkbox"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "filterBy": { "alias": "filterBy"; "required": false; }; "filterMatchMode": { "alias": "filterMatchMode"; "required": false; }; "filterLocale": { "alias": "filterLocale"; "required": false; }; "metaKeySelection": { "alias": "metaKeySelection"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; "showToggleAll": { "alias": "showToggleAll"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; "optionValue": { "alias": "optionValue"; "required": false; }; "optionGroupChildren": { "alias": "optionGroupChildren"; "required": false; }; "optionGroupLabel": { "alias": "optionGroupLabel"; "required": false; }; "optionDisabled": { "alias": "optionDisabled"; "required": false; }; "ariaFilterLabel": { "alias": "ariaFilterLabel"; "required": false; }; "filterPlaceHolder": { "alias": "filterPlaceHolder"; "required": false; }; "emptyFilterMessage": { "alias": "emptyFilterMessage"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "group": { "alias": "group"; "required": false; }; "options": { "alias": "options"; "required": false; }; "filterValue": { "alias": "filterValue"; "required": false; }; "selectAll": { "alias": "selectAll"; "required": false; }; }, { "onChange": "onChange"; "onClick": "onClick"; "onDblClick": "onDblClick"; "onFilter": "onFilter"; "onFocus": "onFocus"; "onBlur": "onBlur"; "onSelectAllChange": "onSelectAllChange"; }, ["headerFacet", "footerFacet", "templates"], ["p-header", "p-footer"], false, never>;
    static ngAcceptInputType_autoOptionFocus: unknown;
    static ngAcceptInputType_selectOnFocus: unknown;
    static ngAcceptInputType_searchLocale: unknown;
    static ngAcceptInputType_focusOnHover: unknown;
    static ngAcceptInputType_lazy: unknown;
    static ngAcceptInputType_virtualScroll: unknown;
    static ngAcceptInputType_virtualScrollItemSize: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_checkbox: unknown;
    static ngAcceptInputType_filter: unknown;
    static ngAcceptInputType_metaKeySelection: unknown;
    static ngAcceptInputType_showToggleAll: unknown;
    static ngAcceptInputType_group: unknown;
}
export declare class ListboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ListboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ListboxModule, [typeof Listbox], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.RippleModule, typeof i4.ScrollerModule, typeof i5.SearchIcon, typeof i6.CheckIcon], [typeof Listbox, typeof i2.SharedModule, typeof i4.ScrollerModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ListboxModule>;
}
