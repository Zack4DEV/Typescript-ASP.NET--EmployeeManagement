import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { OverlayOptions, OverlayService, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Overlay } from 'primeng/overlay';
import { Nullable } from 'primeng/ts-helpers';
import { CascadeSelectBeforeHideEvent, CascadeSelectBeforeShowEvent, CascadeSelectChangeEvent, CascadeSelectHideEvent, CascadeSelectShowEvent } from './cascadeselect.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/overlay";
import * as i3 from "primeng/api";
import * as i4 from "primeng/ripple";
import * as i5 from "primeng/autofocus";
import * as i6 from "primeng/icons/chevrondown";
import * as i7 from "primeng/icons/angleright";
import * as i8 from "primeng/icons/times";
export declare const CASCADESELECT_VALUE_ACCESSOR: any;
export declare class CascadeSelectSub implements OnInit {
    private el;
    config: PrimeNGConfig;
    role: string | undefined;
    selectId: string | undefined;
    activeOptionPath: any[];
    optionDisabled: any[];
    focusedOptionId: string | undefined;
    options: string[] | string | undefined | null;
    optionGroupChildren: string[] | string | undefined | null;
    optionTemplate: Nullable<TemplateRef<any>>;
    groupIconTemplate: Nullable<TemplateRef<any>>;
    level: number;
    optionLabel: string | undefined;
    optionValue: string | undefined;
    optionGroupLabel: string | undefined;
    dirty: boolean | undefined;
    root: boolean | undefined;
    onChange: EventEmitter<any>;
    get listLabel(): string;
    constructor(el: ElementRef, config: PrimeNGConfig);
    ngOnInit(): void;
    onOptionClick(event: any, option: any): void;
    onOptionChange(event: any): void;
    getOptionId(processedOption: any): string;
    getOptionLabel(processedOption: any): any;
    getOptionValue(processedOption: any): any;
    getOptionLabelToRender(processedOption: any): any;
    isOptionDisabled(processedOption: any): any;
    getOptionGroupLabel(processedOption: any): any;
    getOptionGroupChildren(processedOption: any): any;
    isOptionGroup(processedOption: any): boolean;
    isOptionSelected(processedOption: any): boolean;
    isOptionActive(processedOption: any): boolean;
    isOptionFocused(processedOption: any): boolean;
    getItemClass(option: string | string[]): {
        'p-cascadeselect-item': boolean;
        'p-cascadeselect-item-group': boolean;
        'p-cascadeselect-item-active p-highlight': boolean;
        'p-focus': boolean;
        'p-disabled': any;
    };
    position(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelectSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CascadeSelectSub, "p-cascadeSelectSub", never, { "role": { "alias": "role"; "required": false; }; "selectId": { "alias": "selectId"; "required": false; }; "activeOptionPath": { "alias": "activeOptionPath"; "required": false; }; "optionDisabled": { "alias": "optionDisabled"; "required": false; }; "focusedOptionId": { "alias": "focusedOptionId"; "required": false; }; "options": { "alias": "options"; "required": false; }; "optionGroupChildren": { "alias": "optionGroupChildren"; "required": false; }; "optionTemplate": { "alias": "optionTemplate"; "required": false; }; "groupIconTemplate": { "alias": "groupIconTemplate"; "required": false; }; "level": { "alias": "level"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; "optionValue": { "alias": "optionValue"; "required": false; }; "optionGroupLabel": { "alias": "optionGroupLabel"; "required": false; }; "dirty": { "alias": "dirty"; "required": false; }; "root": { "alias": "root"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_dirty: unknown;
    static ngAcceptInputType_root: unknown;
}
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
export declare class CascadeSelect implements OnInit, AfterContentInit {
    private el;
    private cd;
    private config;
    overlayService: OverlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id: string | undefined;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus: boolean;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage: string | undefined;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage: string | undefined;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale: string | undefined;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled: any;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus: boolean;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options: string[] | string | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel: string | undefined;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue: string | undefined;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel: string | string[] | undefined;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren: string | string[] | undefined;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Selected value of the component.
     * @group Props
     */
    value: string | undefined | null;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey: string | undefined;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel: string | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear: boolean;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass: string | undefined;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions: OverlayOptions | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions(): string;
    set showTransitionOptions(val: string);
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Whether the dropdown is in loading state.
     * @group Props
     */
    loading: boolean | undefined;
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions(): string;
    set hideTransitionOptions(val: string);
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<CascadeSelectChangeEvent>;
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange: EventEmitter<Event>;
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow: EventEmitter<CascadeSelectShowEvent>;
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide: EventEmitter<CascadeSelectHideEvent>;
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear: EventEmitter<any>;
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow: EventEmitter<CascadeSelectBeforeShowEvent>;
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide: EventEmitter<CascadeSelectBeforeHideEvent>;
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    focusInputViewChild: Nullable<ElementRef>;
    containerViewChild: Nullable<ElementRef>;
    panelViewChild: Nullable<ElementRef>;
    overlayViewChild: Nullable<Overlay>;
    templates: QueryList<PrimeTemplate>;
    _showTransitionOptions: string;
    _hideTransitionOptions: string;
    selectionPath: any;
    focused: boolean;
    overlayVisible: boolean;
    dirty: boolean;
    searchValue: string | undefined;
    searchTimeout: any;
    valueTemplate: Nullable<TemplateRef<any>>;
    optionTemplate: Nullable<TemplateRef<any>>;
    triggerIconTemplate: Nullable<TemplateRef<any>>;
    loadingIconTemplate: Nullable<TemplateRef<any>>;
    groupIconTemplate: Nullable<TemplateRef<any>>;
    clearIconTemplate: Nullable<TemplateRef<any>>;
    onModelChange: Function;
    onModelTouched: Function;
    focusedOptionInfo: import("@angular/core").WritableSignal<any>;
    activeOptionPath: import("@angular/core").WritableSignal<any>;
    modelValue: import("@angular/core").WritableSignal<any>;
    processedOptions: string[] | string | undefined;
    get containerClass(): {
        'p-cascadeselect p-component p-inputwrapper': boolean;
        'p-disabled': boolean;
        'p-focus': boolean;
        'p-inputwrapper-filled': any;
        'p-variant-filled': boolean;
        'p-inputwrapper-focus': boolean;
        'p-overlay-open': boolean;
    };
    get labelClass(): {
        'p-cascadeselect-label': boolean;
        'p-placeholder': boolean;
        'p-cascadeselect-label-empty': boolean;
    };
    get focusedOptionId(): string;
    get filled(): boolean;
    get searchResultMessageText(): string;
    get searchMessageText(): string;
    get emptySearchMessageText(): string;
    get emptyMessageText(): string;
    get selectionMessageText(): string;
    get emptySelectionMessageText(): string;
    get selectedMessageText(): string;
    visibleOptions: import("@angular/core").Signal<any>;
    label: import("@angular/core").Signal<any>;
    get _label(): any;
    ngOnChanges(changes: SimpleChanges): void;
    hasSelectedOption(): boolean;
    createProcessedOptions(options: any, level?: number, parent?: {}, parentKey?: string): any[];
    onInputFocus(event: FocusEvent): void;
    onInputBlur(event: FocusEvent): void;
    onInputKeyDown(event: KeyboardEvent): void;
    onArrowDownKey(event: any): void;
    onArrowUpKey(event: any): void;
    onArrowLeftKey(event: any): void;
    onArrowRightKey(event: any): void;
    onHomeKey(event: any): void;
    onEndKey(event: any): void;
    onEnterKey(event: any): void;
    onSpaceKey(event: any): void;
    onEscapeKey(event: any): void;
    onTabKey(event: any): void;
    onBackspaceKey(event: any): void;
    equalityKey(): string;
    updateModel(value: any, event?: any): void;
    autoUpdateModel(): void;
    scrollInView(index?: number): void;
    changeFocusedOptionIndex(event: any, index: any): void;
    onOptionChange(event: any): void;
    onOptionSelect(event: any): void;
    onOptionGroupSelect(event: any): void;
    onContainerClick(event: MouseEvent): void;
    isOptionMatched(processedOption: any): any;
    isOptionDisabled(option: any): any;
    isValidOption(processedOption: any): boolean;
    isValidSelectedOption(processedOption: any): any;
    isSelected(processedOption: any): any;
    findOptionPathByValue(value: any, processedOptions?: any, level?: number): any;
    findFirstOptionIndex(): any;
    findLastOptionIndex(): number;
    findNextOptionIndex(index: any): any;
    findPrevOptionIndex(index: any): any;
    findSelectedOptionIndex(): any;
    findFirstFocusedOptionIndex(): any;
    findLastFocusedOptionIndex(): any;
    searchOptions(event: any, char: any): boolean;
    hide(event?: any, isFocus?: boolean): void;
    show(event?: any, isFocus?: boolean): void;
    clear(event?: MouseEvent): void;
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionGroupChildren(optionGroup: any, level: any): any;
    isOptionGroup(option: any, level: any): any;
    isProccessedOptionGroup(processedOption: any): boolean;
    getProccessedOptionLabel(processedOption: any): any;
    constructor(el: ElementRef, cd: ChangeDetectorRef, config: PrimeNGConfig, overlayService: OverlayService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onOverlayAnimationDone(event: AnimationEvent): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CascadeSelect, "p-cascadeSelect", never, { "id": { "alias": "id"; "required": false; }; "selectOnFocus": { "alias": "selectOnFocus"; "required": false; }; "searchMessage": { "alias": "searchMessage"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "selectionMessage": { "alias": "selectionMessage"; "required": false; }; "emptySearchMessage": { "alias": "emptySearchMessage"; "required": false; }; "emptySelectionMessage": { "alias": "emptySelectionMessage"; "required": false; }; "searchLocale": { "alias": "searchLocale"; "required": false; }; "optionDisabled": { "alias": "optionDisabled"; "required": false; }; "autoOptionFocus": { "alias": "autoOptionFocus"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "options": { "alias": "options"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; "optionValue": { "alias": "optionValue"; "required": false; }; "optionGroupLabel": { "alias": "optionGroupLabel"; "required": false; }; "optionGroupChildren": { "alias": "optionGroupChildren"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "inputLabel": { "alias": "inputLabel"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "panelStyleClass": { "alias": "panelStyleClass"; "required": false; }; "panelStyle": { "alias": "panelStyle"; "required": false; }; "overlayOptions": { "alias": "overlayOptions"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; }, { "onChange": "onChange"; "onGroupChange": "onGroupChange"; "onShow": "onShow"; "onHide": "onHide"; "onClear": "onClear"; "onBeforeShow": "onBeforeShow"; "onBeforeHide": "onBeforeHide"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_selectOnFocus: unknown;
    static ngAcceptInputType_autoOptionFocus: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_showClear: unknown;
    static ngAcceptInputType_autofocus: unknown;
    static ngAcceptInputType_loading: unknown;
}
export declare class CascadeSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CascadeSelectModule, [typeof CascadeSelect, typeof CascadeSelectSub], [typeof i1.CommonModule, typeof i2.OverlayModule, typeof i3.SharedModule, typeof i4.RippleModule, typeof i5.AutoFocusModule, typeof i6.ChevronDownIcon, typeof i7.AngleRightIcon, typeof i8.TimesIcon], [typeof CascadeSelect, typeof i2.OverlayModule, typeof CascadeSelectSub, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CascadeSelectModule>;
}
