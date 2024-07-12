import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ContentChildren, effect, EventEmitter, forwardRef, Input, NgModule, numberAttribute, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { AngleRightIcon } from 'primeng/icons/angleright';
import { AutoFocusModule } from 'primeng/autofocus';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { TimesIcon } from 'primeng/icons/times';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/overlay";
import * as i5 from "primeng/autofocus";
export const CASCADESELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CascadeSelect),
    multi: true
};
export class CascadeSelectSub {
    el;
    config;
    role;
    selectId;
    activeOptionPath;
    optionDisabled;
    focusedOptionId;
    options;
    optionGroupChildren;
    optionTemplate;
    groupIconTemplate;
    level = 0;
    optionLabel;
    optionValue;
    optionGroupLabel;
    dirty;
    root;
    onChange = new EventEmitter();
    get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['listLabel'];
    }
    constructor(el, config) {
        this.el = el;
        this.config = config;
    }
    ngOnInit() {
        if (!this.root) {
            this.position();
        }
    }
    onOptionClick(event, option) {
        this.onChange.emit({
            originalEvent: event,
            value: option,
            isFocus: true
        });
    }
    onOptionChange(event) {
        this.onChange.emit(event);
    }
    getOptionId(processedOption) {
        return `${this.selectId}_${processedOption.key}`;
    }
    getOptionLabel(processedOption) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    }
    getOptionValue(processedOption) {
        return this.optionValue ? ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    }
    getOptionLabelToRender(processedOption) {
        return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    }
    isOptionDisabled(processedOption) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
    }
    getOptionGroupLabel(processedOption) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(processedOption) {
        return processedOption.children;
    }
    isOptionGroup(processedOption) {
        return ObjectUtils.isNotEmpty(processedOption.children);
    }
    isOptionSelected(processedOption) {
        return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
    }
    isOptionActive(processedOption) {
        return this.activeOptionPath.some((path) => path.key === processedOption.key);
    }
    isOptionFocused(processedOption) {
        return this.focusedOptionId === this.getOptionId(processedOption);
    }
    getItemClass(option) {
        return {
            'p-cascadeselect-item': true,
            'p-cascadeselect-item-group': this.isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': this.isOptionActive(option),
            'p-focus': this.isOptionFocused(option),
            'p-disabled': this.isOptionDisabled(option)
        };
    }
    position() {
        const parentItem = this.el.nativeElement.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
        if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
            this.el.nativeElement.children[0].style.left = '-200%';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectSub, deps: [{ token: i0.ElementRef }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: CascadeSelectSub, selector: "p-cascadeSelectSub", inputs: { role: "role", selectId: "selectId", activeOptionPath: "activeOptionPath", optionDisabled: "optionDisabled", focusedOptionId: "focusedOptionId", options: "options", optionGroupChildren: "optionGroupChildren", optionTemplate: "optionTemplate", groupIconTemplate: "groupIconTemplate", level: ["level", "level", numberAttribute], optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", dirty: ["dirty", "dirty", booleanAttribute], root: ["root", "root", booleanAttribute] }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
        <ul
            class="p-cascadeselect-panel p-cascadeselect-items"
            [ngClass]="{ 'p-cascadeselect-panel-root': root }"
            [attr.role]="role"
            aria-orientation="horizontal"
            [attr.data-pc-section]="level === 0 ? 'list' : 'sublist'"
            [attr.aria-label]="listLabel"
        >
            <ng-template ngFor let-processedOption [ngForOf]="options" let-i="index">
                <li
                    [ngClass]="getItemClass(processedOption)"
                    role="treeitem"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="options.length"
                    [attr.data-pc-section]="'item'"
                    [id]="getOptionId(processedOption)"
                    [attr.aria-label]="getOptionLabelToRender(processedOption)"
                    [attr.aria-selected]="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                    [attr.aria-posinset]="i + 1"
                >
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, processedOption)" [attr.tabindex]="0" pRipple [attr.data-pc-section]="'content'">
                        <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: processedOption.option }"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text" [attr.data-pc-section]="'text'">{{ getOptionLabelToRender(processedOption) }}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon" *ngIf="isOptionGroup(processedOption)" [attr.data-pc-section]="'groupIcon'">
                            <AngleRightIcon *ngIf="!groupIconTemplate" />
                            <ng-template *ngTemplateOutlet="groupIconTemplate"></ng-template>
                        </span>
                    </div>
                    <p-cascadeSelectSub
                        *ngIf="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                        [role]="'group'"
                        class="p-cascadeselect-sublist"
                        [selectId]="selectId"
                        [focusedOptionId]="focusedOptionId"
                        [activeOptionPath]="activeOptionPath"
                        [options]="getOptionGroupChildren(processedOption)"
                        [optionLabel]="optionLabel"
                        [optionValue]="optionValue"
                        [level]="level + 1"
                        (onChange)="onOptionChange($event)"
                        [optionGroupLabel]="optionGroupLabel"
                        [optionGroupChildren]="optionGroupChildren"
                        [dirty]="dirty"
                        [optionTemplate]="optionTemplate"
                    >
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i3.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => AngleRightIcon), selector: "AngleRightIcon" }, { kind: "component", type: i0.forwardRef(() => CascadeSelectSub), selector: "p-cascadeSelectSub", inputs: ["role", "selectId", "activeOptionPath", "optionDisabled", "focusedOptionId", "options", "optionGroupChildren", "optionTemplate", "groupIconTemplate", "level", "optionLabel", "optionValue", "optionGroupLabel", "dirty", "root"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectSub, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-cascadeSelectSub',
                    template: `
        <ul
            class="p-cascadeselect-panel p-cascadeselect-items"
            [ngClass]="{ 'p-cascadeselect-panel-root': root }"
            [attr.role]="role"
            aria-orientation="horizontal"
            [attr.data-pc-section]="level === 0 ? 'list' : 'sublist'"
            [attr.aria-label]="listLabel"
        >
            <ng-template ngFor let-processedOption [ngForOf]="options" let-i="index">
                <li
                    [ngClass]="getItemClass(processedOption)"
                    role="treeitem"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="options.length"
                    [attr.data-pc-section]="'item'"
                    [id]="getOptionId(processedOption)"
                    [attr.aria-label]="getOptionLabelToRender(processedOption)"
                    [attr.aria-selected]="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                    [attr.aria-posinset]="i + 1"
                >
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, processedOption)" [attr.tabindex]="0" pRipple [attr.data-pc-section]="'content'">
                        <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: processedOption.option }"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text" [attr.data-pc-section]="'text'">{{ getOptionLabelToRender(processedOption) }}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon" *ngIf="isOptionGroup(processedOption)" [attr.data-pc-section]="'groupIcon'">
                            <AngleRightIcon *ngIf="!groupIconTemplate" />
                            <ng-template *ngTemplateOutlet="groupIconTemplate"></ng-template>
                        </span>
                    </div>
                    <p-cascadeSelectSub
                        *ngIf="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                        [role]="'group'"
                        class="p-cascadeselect-sublist"
                        [selectId]="selectId"
                        [focusedOptionId]="focusedOptionId"
                        [activeOptionPath]="activeOptionPath"
                        [options]="getOptionGroupChildren(processedOption)"
                        [optionLabel]="optionLabel"
                        [optionValue]="optionValue"
                        [level]="level + 1"
                        (onChange)="onOptionChange($event)"
                        [optionGroupLabel]="optionGroupLabel"
                        [optionGroupChildren]="optionGroupChildren"
                        [dirty]="dirty"
                        [optionTemplate]="optionTemplate"
                    >
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.PrimeNGConfig }], propDecorators: { role: [{
                type: Input
            }], selectId: [{
                type: Input
            }], activeOptionPath: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], focusedOptionId: [{
                type: Input
            }], options: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], optionTemplate: [{
                type: Input
            }], groupIconTemplate: [{
                type: Input
            }], level: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], dirty: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], root: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], onChange: [{
                type: Output
            }] } });
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
export class CascadeSelect {
    el;
    cd;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder;
    /**
     * Selected value of the component.
     * @group Props
     */
    value;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
        return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
        this._showTransitionOptions = val;
        console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * Whether the dropdown is in loading state.
     * @group Props
     */
    loading = false;
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
        return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
        this._hideTransitionOptions = val;
        console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange = new EventEmitter();
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow = new EventEmitter();
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide = new EventEmitter();
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear = new EventEmitter();
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow = new EventEmitter();
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide = new EventEmitter();
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    focusInputViewChild;
    containerViewChild;
    panelViewChild;
    overlayViewChild;
    templates;
    _showTransitionOptions = '';
    _hideTransitionOptions = '';
    selectionPath = null;
    focused = false;
    overlayVisible = false;
    dirty = true;
    searchValue;
    searchTimeout;
    valueTemplate;
    optionTemplate;
    triggerIconTemplate;
    loadingIconTemplate;
    groupIconTemplate;
    clearIconTemplate;
    onModelChange = () => { };
    onModelTouched = () => { };
    focusedOptionInfo = signal({ index: -1, level: 0, parentKey: '' });
    activeOptionPath = signal([]);
    modelValue = signal(null);
    processedOptions = [];
    get containerClass() {
        return {
            'p-cascadeselect p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-focus': this.focused,
            'p-inputwrapper-filled': this.modelValue(),
            'p-variant-filled': this.variant === 'filled' || this.config.inputStyle() === 'filled',
            'p-inputwrapper-focus': this.focused || this.overlayVisible,
            'p-overlay-open': this.overlayVisible
        };
    }
    get labelClass() {
        return {
            'p-cascadeselect-label': true,
            'p-placeholder': this.label() === this.placeholder,
            'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
        };
    }
    get focusedOptionId() {
        return this.focusedOptionInfo().index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(this.focusedOptionInfo().parentKey) ? '_' + this.focusedOptionInfo().parentKey : ''}_${this.focusedOptionInfo().index}` : null;
    }
    get filled() {
        if (typeof this.modelValue() === 'string')
            return !!this.modelValue();
        return this.modelValue() || this.modelValue() != null || this.modelValue() != undefined;
    }
    get searchResultMessageText() {
        return ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
        return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
        return this.emptySearchMessage || this.config.translation.emptySearchMessage || '';
    }
    get emptyMessageText() {
        return this.emptyMessage || this.config.translation.emptyMessage || '';
    }
    get selectionMessageText() {
        return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
        return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
        return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
    }
    visibleOptions = computed(() => {
        const processedOption = this.activeOptionPath().find((p) => p.key === this.focusedOptionInfo().parentKey);
        return processedOption ? processedOption.children : this.processedOptions;
    });
    label = computed(() => {
        const label = this.placeholder || 'p-emptylabel';
        if (this.hasSelectedOption()) {
            const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
            const processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
            return processedOption ? this.getOptionLabel(processedOption.option) : label;
        }
        return label;
    });
    get _label() {
        const label = this.placeholder || 'p-emptylabel';
        if (this.hasSelectedOption()) {
            const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
            const processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
            return processedOption ? this.getOptionLabel(processedOption.option) : label;
        }
        return label;
    }
    ngOnChanges(changes) {
        if (changes.options) {
            this.processedOptions = this.createProcessedOptions(changes.options.currentValue || []);
            this.updateModel(null);
        }
    }
    hasSelectedOption() {
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    createProcessedOptions(options, level = 0, parent = {}, parentKey = '') {
        const processedOptions = [];
        options &&
            options.forEach((option, index) => {
                const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                const newOption = {
                    option,
                    index,
                    level,
                    key,
                    parent,
                    parentKey
                };
                newOption['children'] = this.createProcessedOptions(this.getOptionGroupChildren(option, level), level + 1, newOption, key);
                processedOptions.push(newOption);
            });
        return processedOptions;
    }
    onInputFocus(event) {
        if (this.disabled) {
            // For screenreaders
            return;
        }
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.focusedOptionInfo.set({ indeX: -1, level: 0, parentKey: '' });
        this.searchValue = '';
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputKeyDown(event) {
        if (this.disabled || this.loading) {
            event.preventDefault();
            return;
        }
        const metaKey = event.metaKey || event.ctrlKey;
        switch (event.code) {
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            case 'ArrowUp':
                this.onArrowUpKey(event);
                break;
            case 'ArrowLeft':
                this.onArrowLeftKey(event);
                break;
            case 'ArrowRight':
                this.onArrowRightKey(event);
                break;
            case 'Home':
                this.onHomeKey(event);
                break;
            case 'End':
                this.onEndKey(event);
                break;
            case 'Space':
                this.onSpaceKey(event);
                break;
            case 'Enter':
            case 'NumpadEnter':
                this.onEnterKey(event);
                break;
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'Backspace':
                this.onBackspaceKey(event);
                break;
            case 'PageDown':
            case 'PageUp':
            case 'ShiftLeft':
            case 'ShiftRight':
                //NOOP
                break;
            default:
                if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                    !this.overlayVisible && this.show();
                    this.searchOptions(event, event.key);
                }
                break;
        }
    }
    onArrowDownKey(event) {
        const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo().index) : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onArrowUpKey(event) {
        if (event.altKey) {
            if (this.focusedOptionInfo().index !== -1) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo().index];
                const grouped = this.isProccessedOptionGroup(processedOption);
                !grouped && this.onOptionChange({ originalEvent: event, value: processedOption });
            }
            this.overlayVisible && this.hide();
            event.preventDefault();
        }
        else {
            const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo().index) : this.findLastFocusedOptionIndex();
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
            event.preventDefault();
        }
    }
    onArrowLeftKey(event) {
        if (this.overlayVisible) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const parentOption = this.activeOptionPath().find((p) => p.key === processedOption.parentKey);
            const matched = this.focusedOptionInfo().parentKey === '' || (parentOption && parentOption.key === this.focusedOptionInfo().parentKey);
            const root = ObjectUtils.isEmpty(processedOption.parent);
            if (matched) {
                const activeOptionPath = this.activeOptionPath().filter((p) => p.parentKey !== this.focusedOptionInfo().parentKey);
                this.activeOptionPath.set(activeOptionPath);
            }
            if (!root) {
                this.focusedOptionInfo.set({ index: -1, parentKey: parentOption ? parentOption.parentKey : '' });
                this.searchValue = '';
                this.onArrowDownKey(event);
            }
            event.preventDefault();
        }
    }
    onArrowRightKey(event) {
        if (this.overlayVisible) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const grouped = this.isProccessedOptionGroup(processedOption);
            if (grouped) {
                const matched = this.activeOptionPath().some((p) => processedOption.key === p.key);
                if (matched) {
                    this.focusedOptionInfo.set({ index: -1, parentKey: processedOption.key });
                    this.searchValue = '';
                    this.onArrowDownKey(event);
                }
                else {
                    this.onOptionChange({ originalEvent: event, value: processedOption });
                }
            }
            event.preventDefault();
        }
    }
    onHomeKey(event) {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onEndKey(event) {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onEnterKey(event) {
        if (!this.overlayVisible) {
            this.onArrowDownKey(event);
        }
        else {
            if (this.focusedOptionInfo().index !== -1) {
                const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
                const grouped = this.isProccessedOptionGroup(processedOption);
                this.onOptionChange({ originalEvent: event, value: processedOption });
                !grouped && this.hide();
            }
        }
        event.preventDefault();
    }
    onSpaceKey(event) {
        this.onEnterKey(event);
    }
    onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
    }
    onTabKey(event) {
        if (this.focusedOptionInfo().index !== -1) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const grouped = this.isProccessedOptionGroup(processedOption);
            !grouped && this.onOptionChange({ originalEvent: event, value: processedOption });
        }
        this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
        if (ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
            this.clear();
        }
        event.stopPropagation();
    }
    equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    updateModel(value, event) {
        this.value = value;
        this.onModelChange(value);
        this.modelValue.set(value);
        this.onChange.emit({
            originalEvent: event,
            value: value
        });
    }
    autoUpdateModel() {
        if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
            this.focusedOptionInfo().index = this.findFirstFocusedOptionIndex();
            this.onOptionChange({ originalEvent: null, processedOption: this.visibleOptions()[this.focusedOptionInfo().index], isHide: false });
            !this.overlayVisible && this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
        }
    }
    scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        const element = DomHandler.findSingle(this.panelViewChild?.nativeElement, `li[id="${id}"]`);
        if (element) {
            element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionInfo().index !== index) {
            const focusedOptionInfo = this.focusedOptionInfo();
            this.focusedOptionInfo.set({ ...focusedOptionInfo, index });
            this.scrollInView();
        }
        if (this.selectOnFocus) {
            this.onOptionChange({ originalEvent: event, processedOption: this.visibleOptions()[index], isHide: false });
        }
    }
    onOptionChange(event) {
        const { originalEvent, value, isFocus, isHide } = event;
        if (ObjectUtils.isEmpty(value))
            return;
        const { index, level, parentKey, children } = value;
        const grouped = ObjectUtils.isNotEmpty(children);
        const activeOptionPath = this.activeOptionPath().filter((p) => p.parentKey !== parentKey);
        activeOptionPath.push(value);
        this.focusedOptionInfo.set({ index, level, parentKey });
        this.activeOptionPath.set(activeOptionPath);
        grouped ? this.onOptionGroupSelect({ originalEvent, value, isFocus: false }) : this.onOptionSelect({ originalEvent, value, isFocus });
        isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    onOptionSelect(event) {
        const { originalEvent, value, isFocus } = event;
        const newValue = this.getOptionValue(value.option);
        const activeOptionPath = this.activeOptionPath();
        activeOptionPath.forEach((p) => (p.selected = true));
        this.activeOptionPath.set(activeOptionPath);
        this.updateModel(newValue, originalEvent);
        isFocus && this.hide(true);
    }
    onOptionGroupSelect(event) {
        this.dirty = true;
        this.onGroupChange.emit(event);
    }
    onContainerClick(event) {
        if (this.disabled || this.loading) {
            return;
        }
        if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target)) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
            this.focusInputViewChild?.nativeElement.focus();
        }
    }
    isOptionMatched(processedOption) {
        return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isValidOption(processedOption) {
        return !!processedOption && !this.isOptionDisabled(processedOption.option);
    }
    isValidSelectedOption(processedOption) {
        return this.isValidOption(processedOption) && this.isSelected(processedOption);
    }
    isSelected(processedOption) {
        return this.activeOptionPath().some((p) => p.key === processedOption.key);
    }
    findOptionPathByValue(value, processedOptions, level = 0) {
        processedOptions = processedOptions || (level === 0 && this.processedOptions);
        if (!processedOptions)
            return null;
        if (ObjectUtils.isEmpty(value))
            return [];
        for (let i = 0; i < processedOptions.length; i++) {
            const processedOption = processedOptions[i];
            if (ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey())) {
                return [processedOption];
            }
            const matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
            if (matchedOptions) {
                matchedOptions.unshift(processedOption);
                return matchedOptions;
            }
        }
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((processedOption) => this.isValidOption(processedOption));
    }
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (processedOption) => this.isValidOption(processedOption));
    }
    findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((processedOption) => this.isValidOption(processedOption))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (processedOption) => this.isValidOption(processedOption)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findSelectedOptionIndex() {
        return this.visibleOptions().findIndex((processedOption) => this.isValidSelectedOption(processedOption));
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    searchOptions(event, char) {
        this.searchValue = (this.searchValue || '') + char;
        let optionIndex = -1;
        let matched = false;
        const focusedOptionInfo = this.focusedOptionInfo();
        if (focusedOptionInfo.index !== -1) {
            optionIndex = this.visibleOptions()
                .slice(focusedOptionInfo.index)
                .findIndex((processedOption) => this.isOptionMatched(processedOption));
            optionIndex =
                optionIndex === -1
                    ? this.visibleOptions()
                        .slice(0, focusedOptionInfo.index)
                        .findIndex((processedOption) => this.isOptionMatched(processedOption))
                    : optionIndex + focusedOptionInfo.index;
        }
        else {
            optionIndex = this.visibleOptions().findIndex((processedOption) => this.isOptionMatched(processedOption));
        }
        if (optionIndex !== -1) {
            matched = true;
        }
        if (optionIndex === -1 && focusedOptionInfo.index === -1) {
            optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
            this.changeFocusedOptionIndex(event, optionIndex);
        }
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            this.searchValue = '';
            this.searchTimeout = null;
        }, 500);
        return matched;
    }
    hide(event, isFocus = false) {
        const _hide = () => {
            this.overlayVisible = false;
            this.activeOptionPath.set([]);
            this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
            isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
            this.onHide.emit(event);
        };
        setTimeout(() => {
            _hide();
        }, 0); // For ScreenReaders
    }
    show(event, isFocus = false) {
        this.onShow.emit(event);
        this.overlayVisible = true;
        const activeOptionPath = this.hasSelectedOption() ? this.findOptionPathByValue(this.modelValue()) : this.activeOptionPath();
        this.activeOptionPath.set(activeOptionPath);
        let focusedOptionInfo;
        if (this.hasSelectedOption() && ObjectUtils.isNotEmpty(this.activeOptionPath())) {
            const processedOption = this.activeOptionPath()[this.activeOptionPath().length - 1];
            focusedOptionInfo = { index: this.autoOptionFocus ? processedOption.index : -1, level: processedOption.level, parentKey: processedOption.parentKey };
        }
        else {
            focusedOptionInfo = { index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, level: 0, parentKey: '' };
        }
        this.focusedOptionInfo.set(focusedOptionInfo);
        isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    clear(event) {
        if (ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
            this.updateModel(null);
            this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
            this.activeOptionPath.set([]);
            this.onClear.emit();
        }
        event && event.stopPropagation();
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup, level) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    isProccessedOptionGroup(processedOption) {
        return ObjectUtils.isNotEmpty(processedOption.children);
    }
    getProccessedOptionLabel(processedOption) {
        const grouped = this.isProccessedOptionGroup(processedOption);
        return grouped ? this.getOptionGroupLabel(processedOption.option) : this.getOptionLabel(processedOption.option);
    }
    constructor(el, cd, config, overlayService) {
        this.el = el;
        this.cd = cd;
        this.config = config;
        this.overlayService = overlayService;
        effect(() => {
            const activeOptionPath = this.activeOptionPath();
            if (ObjectUtils.isNotEmpty(activeOptionPath)) {
                this.overlayViewChild.alignOverlay();
            }
        });
    }
    ngOnInit() {
        this.id = this.id || UniqueComponentId();
        this.autoUpdateModel();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'value':
                    this.valueTemplate = item.template;
                    break;
                case 'option':
                    this.optionTemplate = item.template;
                    break;
                case 'triggericon':
                    this.triggerIconTemplate = item.template;
                    break;
                case 'loadingicon':
                    this.loadingIconTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'optiongroupicon':
                    this.groupIconTemplate = item.template;
                    break;
            }
        });
    }
    onOverlayAnimationDone(event) {
        switch (event.toState) {
            case 'void':
                this.dirty = false;
                break;
        }
    }
    writeValue(value) {
        this.value = value;
        this.updateModel(value);
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelect, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: CascadeSelect, selector: "p-cascadeSelect", inputs: { id: "id", selectOnFocus: ["selectOnFocus", "selectOnFocus", booleanAttribute], searchMessage: "searchMessage", emptyMessage: "emptyMessage", selectionMessage: "selectionMessage", emptySearchMessage: "emptySearchMessage", emptySelectionMessage: "emptySelectionMessage", searchLocale: "searchLocale", optionDisabled: "optionDisabled", autoOptionFocus: ["autoOptionFocus", "autoOptionFocus", booleanAttribute], styleClass: "styleClass", style: "style", options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", placeholder: "placeholder", value: "value", dataKey: "dataKey", inputId: "inputId", tabindex: ["tabindex", "tabindex", numberAttribute], ariaLabelledBy: "ariaLabelledBy", inputLabel: "inputLabel", ariaLabel: "ariaLabel", appendTo: "appendTo", disabled: ["disabled", "disabled", booleanAttribute], showClear: ["showClear", "showClear", booleanAttribute], panelStyleClass: "panelStyleClass", panelStyle: "panelStyle", overlayOptions: "overlayOptions", autofocus: ["autofocus", "autofocus", booleanAttribute], showTransitionOptions: "showTransitionOptions", variant: "variant", loading: ["loading", "loading", booleanAttribute], loadingIcon: "loadingIcon", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onChange: "onChange", onGroupChange: "onGroupChange", onShow: "onShow", onHide: "onHide", onClear: "onClear", onBeforeShow: "onBeforeShow", onBeforeHide: "onBeforeHide", onFocus: "onFocus", onBlur: "onBlur" }, host: { properties: { "class.p-inputwrapper-filled": "filled", "class.p-inputwrapper-focus": "focused || overlayVisible", "class.p-cascadeselect-clearable": "showClear && !disabled" }, classAttribute: "p-element p-inputwrapper" }, providers: [CASCADESELECT_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "focusInputViewChild", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "containerViewChild", first: true, predicate: ["container"], descendants: true }, { propertyName: "panelViewChild", first: true, predicate: ["panel"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }], usesOnChanges: true, ngImport: i0, template: ` <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style" (click)="onContainerClick($event)" [attr.data-pc-name]="'cascadeselect'" [attr.data-pc-section]="'root'">
        <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
            <input
                #focusInput
                readonly
                type="text"
                role="combobox"
                [disabled]="disabled"
                [placeholder]="placeholder"
                [tabindex]="!disabled ? tabindex : -1"
                [attr.id]="inputId"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                aria-haspopup="tree"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_tree' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onInputKeyDown($event)"
                pAutoFocus
                [autofocus]="autofocus"
            />
        </div>
        <span [ngClass]="labelClass" [attr.data-pc-section]="'label'">
            <ng-container *ngIf="valueTemplate; else defaultValueTemplate">
                <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>
            </ng-container>
            <ng-template #defaultValueTemplate>
                {{ label() }}
            </ng-template>
        </span>

        <ng-container *ngIf="filled && !disabled && showClear">
            <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-cascadeselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate" class="p-cascadeselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
            </span>
        </ng-container>

        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'dropdownIcon'" [attr.aria-hidden]="true">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-cascadeselect-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-cascadeselect-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ChevronDownIcon *ngIf="!triggerIconTemplate" [styleClass]="'p-cascadeselect-trigger-icon'" />
                <span *ngIf="triggerIconTemplate" class="p-cascadeselect-trigger-icon">
                    <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{ searchResultMessageText }}
        </span>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationDone)="onOverlayAnimationDone($event)"
            (onBeforeShow)="onBeforeShow.emit($event)"
            (onShow)="show($event)"
            (onBeforeHide)="onBeforeHide.emit($event)"
            (onHide)="hide($event)"
        >
            <ng-template pTemplate="content">
                <div #panel class="p-cascadeselect-panel p-component" [class]="panelStyleClass" [ngStyle]="panelStyle" [attr.data-pc-section]="'panel'">
                    <div class="p-cascadeselect-items-wrapper" [attr.data-pc-section]="'wrapper'">
                        <p-cascadeSelectSub
                            [options]="processedOptions"
                            [selectId]="id"
                            [focusedOptionId]="focused ? focusedOptionId : undefined"
                            [activeOptionPath]="activeOptionPath()"
                            [optionLabel]="optionLabel"
                            [optionValue]="optionValue"
                            [level]="0"
                            [optionTemplate]="optionTemplate"
                            [groupIconTemplate]="groupIconTemplate"
                            [optionGroupLabel]="optionGroupLabel"
                            [optionGroupChildren]="optionGroupChildren"
                            [optionDisabled]="optionDisabled"
                            [optionValue]="optionValue"
                            [optionLabel]="optionLabel"
                            [root]="true"
                            (onChange)="onOptionChange($event)"
                            [dirty]="dirty"
                            [role]="'tree'"
                        >
                        </p-cascadeSelectSub>
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </ng-template>
        </p-overlay>
    </div>`, isInline: true, styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto;display:inline-flex}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i4.Overlay), selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: i0.forwardRef(() => i1.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i5.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => CascadeSelectSub), selector: "p-cascadeSelectSub", inputs: ["role", "selectId", "activeOptionPath", "optionDisabled", "focusedOptionId", "options", "optionGroupChildren", "optionTemplate", "groupIconTemplate", "level", "optionLabel", "optionValue", "optionGroupLabel", "dirty", "root"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelect, decorators: [{
            type: Component,
            args: [{ selector: 'p-cascadeSelect', template: ` <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style" (click)="onContainerClick($event)" [attr.data-pc-name]="'cascadeselect'" [attr.data-pc-section]="'root'">
        <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
            <input
                #focusInput
                readonly
                type="text"
                role="combobox"
                [disabled]="disabled"
                [placeholder]="placeholder"
                [tabindex]="!disabled ? tabindex : -1"
                [attr.id]="inputId"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                aria-haspopup="tree"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_tree' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onInputKeyDown($event)"
                pAutoFocus
                [autofocus]="autofocus"
            />
        </div>
        <span [ngClass]="labelClass" [attr.data-pc-section]="'label'">
            <ng-container *ngIf="valueTemplate; else defaultValueTemplate">
                <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>
            </ng-container>
            <ng-template #defaultValueTemplate>
                {{ label() }}
            </ng-template>
        </span>

        <ng-container *ngIf="filled && !disabled && showClear">
            <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-cascadeselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate" class="p-cascadeselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
            </span>
        </ng-container>

        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'dropdownIcon'" [attr.aria-hidden]="true">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-cascadeselect-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-cascadeselect-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ChevronDownIcon *ngIf="!triggerIconTemplate" [styleClass]="'p-cascadeselect-trigger-icon'" />
                <span *ngIf="triggerIconTemplate" class="p-cascadeselect-trigger-icon">
                    <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{ searchResultMessageText }}
        </span>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationDone)="onOverlayAnimationDone($event)"
            (onBeforeShow)="onBeforeShow.emit($event)"
            (onShow)="show($event)"
            (onBeforeHide)="onBeforeHide.emit($event)"
            (onHide)="hide($event)"
        >
            <ng-template pTemplate="content">
                <div #panel class="p-cascadeselect-panel p-component" [class]="panelStyleClass" [ngStyle]="panelStyle" [attr.data-pc-section]="'panel'">
                    <div class="p-cascadeselect-items-wrapper" [attr.data-pc-section]="'wrapper'">
                        <p-cascadeSelectSub
                            [options]="processedOptions"
                            [selectId]="id"
                            [focusedOptionId]="focused ? focusedOptionId : undefined"
                            [activeOptionPath]="activeOptionPath()"
                            [optionLabel]="optionLabel"
                            [optionValue]="optionValue"
                            [level]="0"
                            [optionTemplate]="optionTemplate"
                            [groupIconTemplate]="groupIconTemplate"
                            [optionGroupLabel]="optionGroupLabel"
                            [optionGroupChildren]="optionGroupChildren"
                            [optionDisabled]="optionDisabled"
                            [optionValue]="optionValue"
                            [optionLabel]="optionLabel"
                            [root]="true"
                            (onChange)="onOptionChange($event)"
                            [dirty]="dirty"
                            [role]="'tree'"
                        >
                        </p-cascadeSelectSub>
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </ng-template>
        </p-overlay>
    </div>`, host: {
                        class: 'p-element p-inputwrapper',
                        '[class.p-inputwrapper-filled]': 'filled',
                        '[class.p-inputwrapper-focus]': 'focused || overlayVisible',
                        '[class.p-cascadeselect-clearable]': 'showClear && !disabled'
                    }, providers: [CASCADESELECT_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto;display:inline-flex}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i1.OverlayService }], propDecorators: { id: [{
                type: Input
            }], selectOnFocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], searchMessage: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], selectionMessage: [{
                type: Input
            }], emptySearchMessage: [{
                type: Input
            }], emptySelectionMessage: [{
                type: Input
            }], searchLocale: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], options: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], inputId: [{
                type: Input
            }], tabindex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ariaLabelledBy: [{
                type: Input
            }], inputLabel: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], appendTo: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showClear: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], panelStyleClass: [{
                type: Input
            }], panelStyle: [{
                type: Input
            }], overlayOptions: [{
                type: Input
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showTransitionOptions: [{
                type: Input
            }], variant: [{
                type: Input
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], loadingIcon: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onGroupChange: [{
                type: Output
            }], onShow: [{
                type: Output
            }], onHide: [{
                type: Output
            }], onClear: [{
                type: Output
            }], onBeforeShow: [{
                type: Output
            }], onBeforeHide: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], focusInputViewChild: [{
                type: ViewChild,
                args: ['focusInput']
            }], containerViewChild: [{
                type: ViewChild,
                args: ['container']
            }], panelViewChild: [{
                type: ViewChild,
                args: ['panel']
            }], overlayViewChild: [{
                type: ViewChild,
                args: ['overlay']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class CascadeSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectModule, declarations: [CascadeSelect, CascadeSelectSub], imports: [CommonModule, OverlayModule, SharedModule, RippleModule, AutoFocusModule, ChevronDownIcon, AngleRightIcon, TimesIcon], exports: [CascadeSelect, OverlayModule, CascadeSelectSub, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectModule, imports: [CommonModule, OverlayModule, SharedModule, RippleModule, AutoFocusModule, ChevronDownIcon, AngleRightIcon, TimesIcon, OverlayModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: CascadeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, SharedModule, RippleModule, AutoFocusModule, ChevronDownIcon, AngleRightIcon, TimesIcon],
                    exports: [CascadeSelect, OverlayModule, CascadeSelectSub, SharedModule],
                    declarations: [CascadeSelect, CascadeSelectSub]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlc2VsZWN0L2Nhc2NhZGVzZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFSCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZUFBZSxFQUNmLE1BQU0sRUFFTixZQUFZLEVBQ1osVUFBVSxFQUVWLEtBQUssRUFDTCxRQUFRLEVBQ1IsZUFBZSxFQUVmLE1BQU0sRUFFTixNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWlELGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBVyxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUcvRCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJB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d0dBQW5CLG1CQUFtQixpQkExZ0NuQixhQUFhLEVBelBiLGdCQUFnQixhQSt2Q2YsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsYUF0Z0NySCxhQUFhLEVBdWdDRyxhQUFhLEVBaHdDN0IsZ0JBQWdCLEVBZ3dDaUMsWUFBWTt3R0FHN0QsbUJBQW1CLFlBSmxCLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQ3JHLGFBQWEsRUFBb0IsWUFBWTs7MkZBRzdELG1CQUFtQjtrQkFML0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDO29CQUMvSCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztvQkFDdkUsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDO2lCQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIGJvb2xlYW5BdHRyaWJ1dGUsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIGNvbXB1dGVkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBlZmZlY3QsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgbnVtYmVyQXR0cmlidXRlLFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIHNpZ25hbCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3ZlcmxheU9wdGlvbnMsIE92ZXJsYXlTZXJ2aWNlLCBQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUsIFRyYW5zbGF0aW9uS2V5cyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBBbmdsZVJpZ2h0SWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvYW5nbGVyaWdodCc7XG5pbXBvcnQgeyBBdXRvRm9jdXNNb2R1bGUgfSBmcm9tICdwcmltZW5nL2F1dG9mb2N1cyc7XG5cbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvY2hldnJvbmRvd24nO1xuaW1wb3J0IHsgVGltZXNJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy90aW1lcyc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9vdmVybGF5JztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IE9iamVjdFV0aWxzLCBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgQ2FzY2FkZVNlbGVjdEJlZm9yZUhpZGVFdmVudCwgQ2FzY2FkZVNlbGVjdEJlZm9yZVNob3dFdmVudCwgQ2FzY2FkZVNlbGVjdENoYW5nZUV2ZW50LCBDYXNjYWRlU2VsZWN0SGlkZUV2ZW50LCBDYXNjYWRlU2VsZWN0U2hvd0V2ZW50IH0gZnJvbSAnLi9jYXNjYWRlc2VsZWN0LmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBDQVNDQURFU0VMRUNUX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2FzY2FkZVNlbGVjdCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1jYXNjYWRlU2VsZWN0U3ViJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXBhbmVsIHAtY2FzY2FkZXNlbGVjdC1pdGVtc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdwLWNhc2NhZGVzZWxlY3QtcGFuZWwtcm9vdCc6IHJvb3QgfVwiXG4gICAgICAgICAgICBbYXR0ci5yb2xlXT1cInJvbGVcIlxuICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cImxldmVsID09PSAwID8gJ2xpc3QnIDogJ3N1Ymxpc3QnXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGlzdExhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1wcm9jZXNzZWRPcHRpb24gW25nRm9yT2ZdPVwib3B0aW9uc1wiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0SXRlbUNsYXNzKHByb2Nlc3NlZE9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwidHJlZWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxldmVsXT1cImxldmVsICsgMVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2V0c2l6ZV09XCJvcHRpb25zLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInaXRlbSdcIlxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZ2V0T3B0aW9uSWQocHJvY2Vzc2VkT3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWxUb1JlbmRlcihwcm9jZXNzZWRPcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbikgPyB1bmRlZmluZWQgOiBpc09wdGlvblNlbGVjdGVkKHByb2Nlc3NlZE9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXBvc2luc2V0XT1cImkgKyAxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtaXRlbS1jb250ZW50XCIgKGNsaWNrKT1cIm9uT3B0aW9uQ2xpY2soJGV2ZW50LCBwcm9jZXNzZWRPcHRpb24pXCIgW2F0dHIudGFiaW5kZXhdPVwiMFwiIHBSaXBwbGUgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidjb250ZW50J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvblRlbXBsYXRlOyBlbHNlIGRlZmF1bHRPcHRpb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHByb2Nlc3NlZE9wdGlvbi5vcHRpb24gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRPcHRpb25UZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1pdGVtLXRleHRcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ3RleHQnXCI+e3sgZ2V0T3B0aW9uTGFiZWxUb1JlbmRlcihwcm9jZXNzZWRPcHRpb24pIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWdyb3VwLWljb25cIiAqbmdJZj1cImlzT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInZ3JvdXBJY29uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmdsZVJpZ2h0SWNvbiAqbmdJZj1cIiFncm91cEljb25UZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAtY2FzY2FkZVNlbGVjdFN1YlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbikgJiYgaXNPcHRpb25BY3RpdmUocHJvY2Vzc2VkT3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm9sZV09XCInZ3JvdXAnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXN1Ymxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdElkXT1cInNlbGVjdElkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb2N1c2VkT3B0aW9uSWRdPVwiZm9jdXNlZE9wdGlvbklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVPcHRpb25QYXRoXT1cImFjdGl2ZU9wdGlvblBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihwcm9jZXNzZWRPcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25MYWJlbF09XCJvcHRpb25MYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uVmFsdWVdPVwib3B0aW9uVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2xldmVsXT1cImxldmVsICsgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwib25PcHRpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBMYWJlbF09XCJvcHRpb25Hcm91cExhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25Hcm91cENoaWxkcmVuXT1cIm9wdGlvbkdyb3VwQ2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RpcnR5XT1cImRpcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25UZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9wLWNhc2NhZGVTZWxlY3RTdWI+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVTZWxlY3RTdWIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHJvbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHNlbGVjdElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhY3RpdmVPcHRpb25QYXRoOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpIGZvY3VzZWRPcHRpb25JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW10gfCBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xuXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogc3RyaW5nW10gfCBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xuXG4gICAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgQElucHV0KCkgZ3JvdXBJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbGV2ZWw6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgb3B0aW9uVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkaXJ0eTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByb290OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGdldCBsaXN0TGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uS2V5cy5BUklBKVsnbGlzdExhYmVsJ107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjb25maWc6IFByaW1lTkdDb25maWdcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQsIG9wdGlvbjogYW55KSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICBpc0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uT3B0aW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uSWQocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdElkfV8ke3Byb2Nlc3NlZE9wdGlvbi5rZXl9YDtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25MYWJlbChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24sIHRoaXMub3B0aW9uTGFiZWwpIDogcHJvY2Vzc2VkT3B0aW9uLm9wdGlvbjtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25WYWx1ZShwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uVmFsdWUgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogcHJvY2Vzc2VkT3B0aW9uLm9wdGlvbjtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25MYWJlbFRvUmVuZGVyKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbikgPyB0aGlzLmdldE9wdGlvbkdyb3VwTGFiZWwocHJvY2Vzc2VkT3B0aW9uKSA6IHRoaXMuZ2V0T3B0aW9uTGFiZWwocHJvY2Vzc2VkT3B0aW9uKTtcbiAgICB9XG5cbiAgICBpc09wdGlvbkRpc2FibGVkKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25EaXNhYmxlZCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25Hcm91cExhYmVsKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShwcm9jZXNzZWRPcHRpb24ub3B0aW9uLCB0aGlzLm9wdGlvbkdyb3VwTGFiZWwpIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25Hcm91cENoaWxkcmVuKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkT3B0aW9uLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGlzT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgaXNPcHRpb25TZWxlY3RlZChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKSAmJiB0aGlzLmlzT3B0aW9uQWN0aXZlKHByb2Nlc3NlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgaXNPcHRpb25BY3RpdmUocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9wdGlvblBhdGguc29tZSgocGF0aCkgPT4gcGF0aC5rZXkgPT09IHByb2Nlc3NlZE9wdGlvbi5rZXkpO1xuICAgIH1cblxuICAgIGlzT3B0aW9uRm9jdXNlZChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZE9wdGlvbklkID09PSB0aGlzLmdldE9wdGlvbklkKHByb2Nlc3NlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUNsYXNzKG9wdGlvbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QtaXRlbSc6IHRydWUsXG4gICAgICAgICAgICAncC1jYXNjYWRlc2VsZWN0LWl0ZW0tZ3JvdXAnOiB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSxcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QtaXRlbS1hY3RpdmUgcC1oaWdobGlnaHQnOiB0aGlzLmlzT3B0aW9uQWN0aXZlKG9wdGlvbiksXG4gICAgICAgICAgICAncC1mb2N1cyc6IHRoaXMuaXNPcHRpb25Gb2N1c2VkKG9wdGlvbiksXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyT2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQocGFyZW50SXRlbSk7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gRG9tSGFuZGxlci5nZXRWaWV3cG9ydCgpO1xuICAgICAgICBjb25zdCBzdWJsaXN0V2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ub2Zmc2V0UGFyZW50ID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldFdpZHRoIDogRG9tSGFuZGxlci5nZXRIaWRkZW5FbGVtZW50T3V0ZXJXaWR0aCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICBjb25zdCBpdGVtT3V0ZXJXaWR0aCA9IERvbUhhbmRsZXIuZ2V0T3V0ZXJXaWR0aChwYXJlbnRJdGVtLmNoaWxkcmVuWzBdKTtcblxuICAgICAgICBpZiAocGFyc2VJbnQoY29udGFpbmVyT2Zmc2V0LmxlZnQsIDEwKSArIGl0ZW1PdXRlcldpZHRoICsgc3VibGlzdFdpZHRoID4gdmlld3BvcnQud2lkdGggLSBEb21IYW5kbGVyLmNhbGN1bGF0ZVNjcm9sbGJhcldpZHRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5sZWZ0ID0gJy0yMDAlJztcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQ2FzY2FkZVNlbGVjdCBpcyBhIGZvcm0gY29tcG9uZW50IHRvIHNlbGVjdCBhIHZhbHVlIGZyb20gYSBuZXN0ZWQgc3RydWN0dXJlIG9mIG9wdGlvbnMuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2FzY2FkZVNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIChjbGljayk9XCJvbkNvbnRhaW5lckNsaWNrKCRldmVudClcIiBbYXR0ci5kYXRhLXBjLW5hbWVdPVwiJ2Nhc2NhZGVzZWxlY3QnXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInaGlkZGVuSW5wdXRXcmFwcGVyJ1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgI2ZvY3VzSW5wdXRcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByb2xlPVwiY29tYm9ib3hcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbdGFiaW5kZXhdPVwiIWRpc2FibGVkID8gdGFiaW5kZXggOiAtMVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaW5wdXRJZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRyZWVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGUgPz8gZmFsc2VcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwib3ZlcmxheVZpc2libGUgPyBpZCArICdfdHJlZScgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWFjdGl2ZWRlc2NlbmRhbnRdPVwiZm9jdXNlZCA/IGZvY3VzZWRPcHRpb25JZCA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbklucHV0S2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBwQXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3NcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2xhYmVsJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbHVlVGVtcGxhdGU7IGVsc2UgZGVmYXVsdFZhbHVlVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmFsdWVUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRWYWx1ZVRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVsKCkgfX1cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsbGVkICYmICFkaXNhYmxlZCAmJiBzaG93Q2xlYXJcIj5cbiAgICAgICAgICAgIDxUaW1lc0ljb24gKm5nSWY9XCIhY2xlYXJJY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1jYXNjYWRlc2VsZWN0LWNsZWFyLWljb24nXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NsZWFyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2xlYXJJY29uVGVtcGxhdGVcIiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1jbGVhci1pY29uXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NsZWFyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2xlYXJJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlID8/IGZhbHNlXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidkcm9wZG93bkljb24nXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmc7IGVsc2UgZWxzZUJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRpbmdJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nSWNvblwiIFtuZ0NsYXNzXT1cIidwLWNhc2NhZGVzZWxlY3QtdHJpZ2dlci1pY29uIHBpLXNwaW4gJyArIGxvYWRpbmdJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nSWNvblwiIFtjbGFzc109XCIncC1jYXNjYWRlc2VsZWN0LXRyaWdnZXItaWNvbiBwaSBwaS1zcGlubmVyIHBpLXNwaW4nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uICpuZ0lmPVwiIXRyaWdnZXJJY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1jYXNjYWRlc2VsZWN0LXRyaWdnZXItaWNvbidcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidHJpZ2dlckljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LXRyaWdnZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmlnZ2VySWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAge3sgc2VhcmNoUmVzdWx0TWVzc2FnZVRleHQgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8cC1vdmVybGF5XG4gICAgICAgICAgICAjb3ZlcmxheVxuICAgICAgICAgICAgWyh2aXNpYmxlKV09XCJvdmVybGF5VmlzaWJsZVwiXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvdmVybGF5T3B0aW9uc1wiXG4gICAgICAgICAgICBbdGFyZ2V0XT1cIidAcGFyZW50J1wiXG4gICAgICAgICAgICBbYXBwZW5kVG9dPVwiYXBwZW5kVG9cIlxuICAgICAgICAgICAgW3Nob3dUcmFuc2l0aW9uT3B0aW9uc109XCJzaG93VHJhbnNpdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgW2hpZGVUcmFuc2l0aW9uT3B0aW9uc109XCJoaWRlVHJhbnNpdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgKG9uQW5pbWF0aW9uRG9uZSk9XCJvbk92ZXJsYXlBbmltYXRpb25Eb25lKCRldmVudClcIlxuICAgICAgICAgICAgKG9uQmVmb3JlU2hvdyk9XCJvbkJlZm9yZVNob3cuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChvblNob3cpPVwic2hvdygkZXZlbnQpXCJcbiAgICAgICAgICAgIChvbkJlZm9yZUhpZGUpPVwib25CZWZvcmVIaWRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAob25IaWRlKT1cImhpZGUoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAjcGFuZWwgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtcGFuZWwgcC1jb21wb25lbnRcIiBbY2xhc3NdPVwicGFuZWxTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwicGFuZWxTdHlsZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCIncGFuZWwnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtaXRlbXMtd3JhcHBlclwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInd3JhcHBlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNhc2NhZGVTZWxlY3RTdWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJwcm9jZXNzZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0SWRdPVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb2N1c2VkT3B0aW9uSWRdPVwiZm9jdXNlZCA/IGZvY3VzZWRPcHRpb25JZCA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZU9wdGlvblBhdGhdPVwiYWN0aXZlT3B0aW9uUGF0aCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25WYWx1ZV09XCJvcHRpb25WYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xldmVsXT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25UZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyb3VwSWNvblRlbXBsYXRlXT1cImdyb3VwSWNvblRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBMYWJlbF09XCJvcHRpb25Hcm91cExhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBDaGlsZHJlbl09XCJvcHRpb25Hcm91cENoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uRGlzYWJsZWRdPVwib3B0aW9uRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25WYWx1ZV09XCJvcHRpb25WYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbkxhYmVsXT1cIm9wdGlvbkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm9vdF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwib25PcHRpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpcnR5XT1cImRpcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm9sZV09XCIndHJlZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNhc2NhZGVTZWxlY3RTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZE1lc3NhZ2VUZXh0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvcC1vdmVybGF5PlxuICAgIDwvZGl2PmAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCBwLWlucHV0d3JhcHBlcicsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1c2VkIHx8IG92ZXJsYXlWaXNpYmxlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWNhc2NhZGVzZWxlY3QtY2xlYXJhYmxlXSc6ICdzaG93Q2xlYXIgJiYgIWRpc2FibGVkJ1xuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbQ0FTQ0FERVNFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9jYXNjYWRlc2VsZWN0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVTZWxlY3QgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIG9wdGlvbiB3aWxsIGJlIHNlbGVjdGVkIG9uIGZvY3VzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzZWxlY3RPbkZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlIHNlYXJjaCBpcyBhY3RpdmUuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlZmF1bHRWYWx1ZSAnezB9IHJlc3VsdHMgYXJlIGF2YWlsYWJsZSdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZWFyY2hNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgaXMgbm8gZGF0YS4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiBoaWRkZW4gYWNjZXNzaWJsZSBmaWVsZCB3aGVuIG9wdGlvbnMgYXJlIHNlbGVjdGVkLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ3swfSBpdGVtcyBzZWxlY3RlZCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25NZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gZmlsdGVyaW5nIGRvZXMgbm90IHJldHVybiBhbnkgcmVzdWx0cy4gRGVmYXVsdHMgdG8gdmFsdWUgZnJvbSBQcmltZU5HIGxvY2FsZSBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ05vIGF2YWlsYWJsZSBvcHRpb25zJ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVtcHR5U2VhcmNoTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIGZpbHRlcmluZyBkb2VzIG5vdCByZXR1cm4gYW55IHJlc3VsdHMuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlZmF1bHRWYWx1ZSAnTm8gc2VsZWN0ZWQgaXRlbSdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbXB0eVNlbGVjdGlvbk1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMb2NhbGUgdG8gdXNlIGluIHNlYXJjaGluZy4gVGhlIGRlZmF1bHQgbG9jYWxlIGlzIHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VhcmNoTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgZGlzYWJsZWQgZmllbGQgb2YgYW4gb3B0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBhbnk7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBmb2N1cyBvbiB0aGUgZmlyc3QgdmlzaWJsZSBvciBzZWxlY3RlZCBlbGVtZW50IHdoZW4gdGhlIG92ZXJsYXkgcGFuZWwgaXMgc2hvd24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGF1dG9PcHRpb25Gb2N1czogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygc2VsZWN0aXRlbXMgdG8gZGlzcGxheSBhcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW10gfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZSBvciBnZXR0ZXIgZnVuY3Rpb24gdG8gdXNlIGFzIHRoZSBsYWJlbCBvZiBhbiBvcHRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lIG9yIGdldHRlciBmdW5jdGlvbiB0byB1c2UgYXMgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbiwgZGVmYXVsdHMgdG8gdGhlIG9wdGlvbiBpdHNlbGYgd2hlbiBub3QgZGVmaW5lZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25WYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWUgb3IgZ2V0dGVyIGZ1bmN0aW9uIHRvIHVzZSBhcyB0aGUgbGFiZWwgb2YgYW4gb3B0aW9uIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwTGFiZWw6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWUgb3IgZ2V0dGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBpdGVtcyBvZiBhIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwQ2hpbGRyZW46IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgdGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0ZWQgdmFsdWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciBvZiB0aGUgdW5kZXJseWluZyBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0YWJiaW5nIG9yZGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSAwO1xuICAgIC8qKlxuICAgICAqIEVzdGFibGlzaGVzIHJlbGF0aW9uc2hpcHMgYmV0d2VlbiB0aGUgY29tcG9uZW50IGFuZCBsYWJlbChzKSB3aGVyZSBpdHMgdmFsdWUgc2hvdWxkIGJlIG9uZSBvciBtb3JlIGVsZW1lbnQgSURzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGlucHV0IGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlucHV0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBpbnB1dCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJZCBvZiB0aGUgZWxlbWVudCBvciBcImJvZHlcIiBmb3IgZG9jdW1lbnQgd2hlcmUgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGFueTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIGVuYWJsZWQsIGEgY2xlYXIgaWNvbiBpcyBkaXNwbGF5ZWQgdG8gY2xlYXIgdGhlIHZhbHVlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzaG93Q2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgb3ZlcmxheSBwYW5lbC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIG92ZXJsYXkgcGFuZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHVzZSBvdmVybGF5IEFQSSBmZWF0dXJlLiBUaGUgcHJvcGVydGllcyBvZiBvdmVybGF5IEFQSSBjYW4gYmUgdXNlZCBsaWtlIGFuIG9iamVjdCBpbiBpdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvdmVybGF5T3B0aW9uczogT3ZlcmxheU9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IGdldCBmb2N1cyBvbiBsb2FkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvZm9jdXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBzaG93IGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBzaG93VHJhbnNpdGlvbk9wdGlvbnMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dUcmFuc2l0aW9uT3B0aW9ucztcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uT3B0aW9ucyh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zaG93VHJhbnNpdGlvbk9wdGlvbnMgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIHNob3dUcmFuc2l0aW9uT3B0aW9ucyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGlucHV0IHZhcmlhbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YXJpYW50OiAnZmlsbGVkJyB8ICdvdXRsaW5lZCcgPSAnb3V0bGluZWQnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRyb3Bkb3duIGlzIGluIGxvYWRpbmcgc3RhdGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJY29uIHRvIGRpc3BsYXkgaW4gbG9hZGluZyBzdGF0ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsb2FkaW5nSWNvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb3B0aW9ucyBvZiB0aGUgaGlkZSBhbmltYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgaGlkZVRyYW5zaXRpb25PcHRpb25zKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlVHJhbnNpdGlvbk9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBoaWRlVHJhbnNpdGlvbk9wdGlvbnModmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faGlkZVRyYW5zaXRpb25PcHRpb25zID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBoaWRlVHJhbnNpdGlvbk9wdGlvbnMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIHZhbHVlIGNoYW5nZS5cbiAgICAgKiBAcGFyYW0ge0Nhc2NhZGVTZWxlY3RDaGFuZ2VFdmVudH0gZXZlbnQgLSBDdXN0b20gY2hhbmdlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RDaGFuZ2VFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIGdyb3VwIGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBCcm93c2VyIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkdyb3VwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgb3ZlcmxheSBpcyBzaG93bi5cbiAgICAgKiBAcGFyYW0ge0Nhc2NhZGVTZWxlY3RTaG93RXZlbnR9IGV2ZW50IC0gQ3VzdG9tIG92ZXJsYXkgc2hvdyBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25TaG93OiBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdFNob3dFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RTaG93RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIG92ZXJsYXkgaXMgaGlkZGVuLlxuICAgICAqIEBwYXJhbSB7Q2FzY2FkZVNlbGVjdEhpZGVFdmVudH0gZXZlbnQgLSBDdXN0b20gb3ZlcmxheSBoaWRlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkhpZGU6IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0SGlkZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdEhpZGVFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgY2xlYXIgdG9rZW4gaXMgY2xpY2tlZC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25DbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIGJlZm9yZSBvdmVybGF5IGlzIHNob3duLlxuICAgICAqIEBwYXJhbSB7Q2FzY2FkZVNlbGVjdEJlZm9yZVNob3dFdmVudH0gZXZlbnQgLSBDdXN0b20gb3ZlcmxheSBzaG93IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0QmVmb3JlU2hvd0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdEJlZm9yZVNob3dFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2UgYmVmb3JlIG92ZXJsYXkgaXMgaGlkZGVuLlxuICAgICAqIEBwYXJhbSB7Q2FzY2FkZVNlbGVjdEJlZm9yZUhpZGVFdmVudH0gZXZlbnQgLSBDdXN0b20gb3ZlcmxheSBoaWRlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkJlZm9yZUhpZGU6IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0QmVmb3JlSGlkZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdEJlZm9yZUhpZGVFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBpbnB1dCByZWNlaXZlcyBmb2N1cy5cbiAgICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50IC0gRm9jdXMgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBpbnB1dCBsb3NlcyBmb2N1cy5cbiAgICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50IC0gRm9jdXMgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnZm9jdXNJbnB1dCcpIGZvY3VzSW5wdXRWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWxWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnb3ZlcmxheScpIG92ZXJsYXlWaWV3Q2hpbGQ6IE51bGxhYmxlPE92ZXJsYXk+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXMhOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT47XG5cbiAgICBfc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnJztcblxuICAgIF9oaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcnO1xuXG4gICAgc2VsZWN0aW9uUGF0aDogYW55ID0gbnVsbDtcblxuICAgIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBkaXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgc2VhcmNoVGltZW91dDogYW55O1xuXG4gICAgdmFsdWVUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBvcHRpb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICB0cmlnZ2VySWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGxvYWRpbmdJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZ3JvdXBJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgY2xlYXJJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgZm9jdXNlZE9wdGlvbkluZm8gPSBzaWduYWw8YW55Pih7IGluZGV4OiAtMSwgbGV2ZWw6IDAsIHBhcmVudEtleTogJycgfSk7XG5cbiAgICBhY3RpdmVPcHRpb25QYXRoID0gc2lnbmFsPGFueT4oW10pO1xuXG4gICAgbW9kZWxWYWx1ZSA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgcHJvY2Vzc2VkT3B0aW9uczogc3RyaW5nW10gfCBzdHJpbmcgfCB1bmRlZmluZWQgPSBbXTtcblxuICAgIGdldCBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QgcC1jb21wb25lbnQgcC1pbnB1dHdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAgICAgICAncC1pbnB1dHdyYXBwZXItZmlsbGVkJzogdGhpcy5tb2RlbFZhbHVlKCksXG4gICAgICAgICAgICAncC12YXJpYW50LWZpbGxlZCc6IHRoaXMudmFyaWFudCA9PT0gJ2ZpbGxlZCcgfHwgdGhpcy5jb25maWcuaW5wdXRTdHlsZSgpID09PSAnZmlsbGVkJyxcbiAgICAgICAgICAgICdwLWlucHV0d3JhcHBlci1mb2N1cyc6IHRoaXMuZm9jdXNlZCB8fCB0aGlzLm92ZXJsYXlWaXNpYmxlLFxuICAgICAgICAgICAgJ3Atb3ZlcmxheS1vcGVuJzogdGhpcy5vdmVybGF5VmlzaWJsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBsYWJlbENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdC1sYWJlbCc6IHRydWUsXG4gICAgICAgICAgICAncC1wbGFjZWhvbGRlcic6IHRoaXMubGFiZWwoKSA9PT0gdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICdwLWNhc2NhZGVzZWxlY3QtbGFiZWwtZW1wdHknOiAhdGhpcy52YWx1ZSAmJiAodGhpcy5sYWJlbCgpID09PSAncC1lbXB0eWxhYmVsJyB8fCB0aGlzLmxhYmVsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBmb2N1c2VkT3B0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXggIT09IC0xID8gYCR7dGhpcy5pZH0ke09iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLnBhcmVudEtleSkgPyAnXycgKyB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkucGFyZW50S2V5IDogJyd9XyR7dGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4fWAgOiBudWxsO1xuICAgIH1cblxuICAgIGdldCBmaWxsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tb2RlbFZhbHVlKCkgPT09ICdzdHJpbmcnKSByZXR1cm4gISF0aGlzLm1vZGVsVmFsdWUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlKCkgfHwgdGhpcy5tb2RlbFZhbHVlKCkgIT0gbnVsbCB8fCB0aGlzLm1vZGVsVmFsdWUoKSAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaFJlc3VsdE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnZpc2libGVPcHRpb25zKCkpID8gdGhpcy5zZWFyY2hNZXNzYWdlVGV4dC5yZXBsYWNlQWxsKCd7MH0nLCB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSA6IHRoaXMuZW1wdHlTZWFyY2hNZXNzYWdlVGV4dDtcbiAgICB9XG5cbiAgICBnZXQgc2VhcmNoTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaE1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uc2VhcmNoTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW1wdHlTZWFyY2hNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlTZWFyY2hNZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmVtcHR5U2VhcmNoTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW1wdHlNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlNZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmVtcHR5TWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uc2VsZWN0aW9uTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW1wdHlTZWxlY3Rpb25NZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlTZWxlY3Rpb25NZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmVtcHR5U2VsZWN0aW9uTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNlbGVjdGlvbk1lc3NhZ2VUZXh0LnJlcGxhY2VBbGwoJ3swfScsICcxJykgOiB0aGlzLmVtcHR5U2VsZWN0aW9uTWVzc2FnZVRleHQ7XG4gICAgfVxuXG4gICAgdmlzaWJsZU9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpLmZpbmQoKHApID0+IHAua2V5ID09PSB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkucGFyZW50S2V5KTtcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkT3B0aW9uID8gcHJvY2Vzc2VkT3B0aW9uLmNoaWxkcmVuIDogdGhpcy5wcm9jZXNzZWRPcHRpb25zO1xuICAgIH0pO1xuXG4gICAgbGFiZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5wbGFjZWhvbGRlciB8fCAncC1lbXB0eWxhYmVsJztcblxuICAgICAgICBpZiAodGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5maW5kT3B0aW9uUGF0aEJ5VmFsdWUodGhpcy5tb2RlbFZhbHVlKCksIG51bGwpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShhY3RpdmVPcHRpb25QYXRoKSA/IGFjdGl2ZU9wdGlvblBhdGhbYWN0aXZlT3B0aW9uUGF0aC5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRPcHRpb24gPyB0aGlzLmdldE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24pIDogbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgZ2V0IF9sYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnBsYWNlaG9sZGVyIHx8ICdwLWVtcHR5bGFiZWwnO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmZpbmRPcHRpb25QYXRoQnlWYWx1ZSh0aGlzLm1vZGVsVmFsdWUoKSwgbnVsbCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSBPYmplY3RVdGlscy5pc05vdEVtcHR5KGFjdGl2ZU9wdGlvblBhdGgpID8gYWN0aXZlT3B0aW9uUGF0aFthY3RpdmVPcHRpb25QYXRoLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZE9wdGlvbiA/IHRoaXMuZ2V0T3B0aW9uTGFiZWwocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbikgOiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5vcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZE9wdGlvbnMgPSB0aGlzLmNyZWF0ZVByb2Nlc3NlZE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSB8fCBbXSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzU2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9jZXNzZWRPcHRpb25zKG9wdGlvbnMsIGxldmVsID0gMCwgcGFyZW50ID0ge30sIHBhcmVudEtleSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbnMgPSBbXTtcblxuICAgICAgICBvcHRpb25zICYmXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSAocGFyZW50S2V5ICE9PSAnJyA/IHBhcmVudEtleSArICdfJyA6ICcnKSArIGluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uWydjaGlsZHJlbiddID0gdGhpcy5jcmVhdGVQcm9jZXNzZWRPcHRpb25zKHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24sIGxldmVsKSwgbGV2ZWwgKyAxLCBuZXdPcHRpb24sIGtleSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkT3B0aW9ucy5wdXNoKG5ld09wdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkT3B0aW9ucztcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZVg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dMZWZ0S2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93UmlnaHRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BhY2VLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXNjYXBlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQmFja3NwYWNlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdTaGlmdFJpZ2h0JzpcbiAgICAgICAgICAgICAgICAvL05PT1BcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGFLZXkgJiYgT2JqZWN0VXRpbHMuaXNQcmludGFibGVDaGFyYWN0ZXIoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hPcHRpb25zKGV2ZW50LCBldmVudC5rZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0Rvd25LZXkoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXggIT09IC0xID8gdGhpcy5maW5kTmV4dE9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCkgOiB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG5cbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25BcnJvd1VwS2V5KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9uc1t0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwZWQgPSB0aGlzLmlzUHJvY2Nlc3NlZE9wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAhZ3JvdXBlZCAmJiB0aGlzLm9uT3B0aW9uQ2hhbmdlKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiBwcm9jZXNzZWRPcHRpb24gfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXggIT09IC0xID8gdGhpcy5maW5kUHJldk9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCkgOiB0aGlzLmZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG5cbiAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyb3dMZWZ0S2V5KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSB0aGlzLnZpc2libGVPcHRpb25zKClbdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE9wdGlvbiA9IHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpLmZpbmQoKHApID0+IHAua2V5ID09PSBwcm9jZXNzZWRPcHRpb24ucGFyZW50S2V5KTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkucGFyZW50S2V5ID09PSAnJyB8fCAocGFyZW50T3B0aW9uICYmIHBhcmVudE9wdGlvbi5rZXkgPT09IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5wYXJlbnRLZXkpO1xuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IE9iamVjdFV0aWxzLmlzRW1wdHkocHJvY2Vzc2VkT3B0aW9uLnBhcmVudCk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9uUGF0aCA9IHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpLmZpbHRlcigocCkgPT4gcC5wYXJlbnRLZXkgIT09IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5wYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uUGF0aC5zZXQoYWN0aXZlT3B0aW9uUGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBwYXJlbnRLZXk6IHBhcmVudE9wdGlvbiA/IHBhcmVudE9wdGlvbi5wYXJlbnRLZXkgOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFycm93UmlnaHRLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBlZCA9IHRoaXMuaXNQcm9jY2Vzc2VkT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkuc29tZSgocCkgPT4gcHJvY2Vzc2VkT3B0aW9uLmtleSA9PT0gcC5rZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoeyBpbmRleDogLTEsIHBhcmVudEtleTogcHJvY2Vzc2VkT3B0aW9uLmtleSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uQ2hhbmdlKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiBwcm9jZXNzZWRPcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ib21lS2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkpO1xuXG4gICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRW5kS2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCB0aGlzLmZpbmRMYXN0T3B0aW9uSW5kZXgoKSk7XG5cbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25FbnRlcktleShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSB0aGlzLnZpc2libGVPcHRpb25zKClbdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGVkID0gdGhpcy5pc1Byb2NjZXNzZWRPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNoYW5nZSh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogcHJvY2Vzc2VkT3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICFncm91cGVkICYmIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvblNwYWNlS2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25FbnRlcktleShldmVudCk7XG4gICAgfVxuXG4gICAgb25Fc2NhcGVLZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25UYWJLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBlZCA9IHRoaXMuaXNQcm9jY2Vzc2VkT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgIWdyb3VwZWQgJiYgdGhpcy5vbk9wdGlvbkNoYW5nZSh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogcHJvY2Vzc2VkT3B0aW9uIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBvbkJhY2tzcGFjZUtleShldmVudCkge1xuICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1vZGVsVmFsdWUoKSkgJiYgdGhpcy5zaG93Q2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGVxdWFsaXR5S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25WYWx1ZSA/IG51bGwgOiB0aGlzLmRhdGFLZXk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWwodmFsdWUsIGV2ZW50Pykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZS5zZXQodmFsdWUpO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhdXRvVXBkYXRlTW9kZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uRm9jdXMgJiYgdGhpcy5hdXRvT3B0aW9uRm9jdXMgJiYgIXRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4ID0gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25DaGFuZ2UoeyBvcmlnaW5hbEV2ZW50OiBudWxsLCBwcm9jZXNzZWRPcHRpb246IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdLCBpc0hpZGU6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmZvY3VzZWRPcHRpb25JbmZvLnNldCh7IGluZGV4OiAtMSwgbGV2ZWw6IDAsIHBhcmVudEtleTogJycgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxJblZpZXcoaW5kZXggPSAtMSkge1xuICAgICAgICBjb25zdCBpZCA9IGluZGV4ICE9PSAtMSA/IGAke3RoaXMuaWR9XyR7aW5kZXh9YCA6IHRoaXMuZm9jdXNlZE9wdGlvbklkO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMucGFuZWxWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsIGBsaVtpZD1cIiR7aWR9XCJdYCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcsIGlubGluZTogJ3N0YXJ0JyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmZvID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoeyAuLi5mb2N1c2VkT3B0aW9uSW5mbywgaW5kZXggfSk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEluVmlldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25Gb2N1cykge1xuICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNoYW5nZSh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBwcm9jZXNzZWRPcHRpb246IHRoaXMudmlzaWJsZU9wdGlvbnMoKVtpbmRleF0sIGlzSGlkZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvbkNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCB7IG9yaWdpbmFsRXZlbnQsIHZhbHVlLCBpc0ZvY3VzLCBpc0hpZGUgfSA9IGV2ZW50O1xuICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNFbXB0eSh2YWx1ZSkpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IGluZGV4LCBsZXZlbCwgcGFyZW50S2V5LCBjaGlsZHJlbiB9ID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IGdyb3VwZWQgPSBPYmplY3RVdGlscy5pc05vdEVtcHR5KGNoaWxkcmVuKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkuZmlsdGVyKChwKSA9PiBwLnBhcmVudEtleSAhPT0gcGFyZW50S2V5KTtcblxuICAgICAgICBhY3RpdmVPcHRpb25QYXRoLnB1c2godmFsdWUpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXgsIGxldmVsLCBwYXJlbnRLZXkgfSk7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uUGF0aC5zZXQoYWN0aXZlT3B0aW9uUGF0aCk7XG5cbiAgICAgICAgZ3JvdXBlZCA/IHRoaXMub25PcHRpb25Hcm91cFNlbGVjdCh7IG9yaWdpbmFsRXZlbnQsIHZhbHVlLCBpc0ZvY3VzOiBmYWxzZSB9KSA6IHRoaXMub25PcHRpb25TZWxlY3QoeyBvcmlnaW5hbEV2ZW50LCB2YWx1ZSwgaXNGb2N1cyB9KTtcbiAgICAgICAgaXNGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvblNlbGVjdChldmVudCkge1xuICAgICAgICBjb25zdCB7IG9yaWdpbmFsRXZlbnQsIHZhbHVlLCBpc0ZvY3VzIH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldE9wdGlvblZhbHVlKHZhbHVlLm9wdGlvbik7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9uUGF0aCA9IHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpO1xuICAgICAgICBhY3RpdmVPcHRpb25QYXRoLmZvckVhY2goKHApID0+IChwLnNlbGVjdGVkID0gdHJ1ZSkpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uUGF0aC5zZXQoYWN0aXZlT3B0aW9uUGF0aCk7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwobmV3VmFsdWUsIG9yaWdpbmFsRXZlbnQpO1xuICAgICAgICBpc0ZvY3VzICYmIHRoaXMuaGlkZSh0cnVlKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkdyb3VwU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uR3JvdXBDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5Vmlld0NoaWxkPy5lbD8ubmF0aXZlRWxlbWVudD8uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNPcHRpb25NYXRjaGVkKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikgJiYgdGhpcy5nZXRQcm9jY2Vzc2VkT3B0aW9uTGFiZWwocHJvY2Vzc2VkT3B0aW9uKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLnNlYXJjaExvY2FsZSkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuc2VhcmNoTG9jYWxlKSk7XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gISFwcm9jZXNzZWRPcHRpb24gJiYgIXRoaXMuaXNPcHRpb25EaXNhYmxlZChwcm9jZXNzZWRPcHRpb24ub3B0aW9uKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkU2VsZWN0ZWRPcHRpb24ocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRPcHRpb24ocHJvY2Vzc2VkT3B0aW9uKSAmJiB0aGlzLmlzU2VsZWN0ZWQocHJvY2Vzc2VkT3B0aW9uKTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkuc29tZSgocCkgPT4gcC5rZXkgPT09IHByb2Nlc3NlZE9wdGlvbi5rZXkpO1xuICAgIH1cblxuICAgIGZpbmRPcHRpb25QYXRoQnlWYWx1ZSh2YWx1ZSwgcHJvY2Vzc2VkT3B0aW9ucz8sIGxldmVsID0gMCkge1xuICAgICAgICBwcm9jZXNzZWRPcHRpb25zID0gcHJvY2Vzc2VkT3B0aW9ucyB8fCAobGV2ZWwgPT09IDAgJiYgdGhpcy5wcm9jZXNzZWRPcHRpb25zKTtcblxuICAgICAgICBpZiAoIXByb2Nlc3NlZE9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNFbXB0eSh2YWx1ZSkpIHJldHVybiBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2Nlc3NlZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHByb2Nlc3NlZE9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5lcXVhbHModmFsdWUsIHRoaXMuZ2V0T3B0aW9uVmFsdWUocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbiksIHRoaXMuZXF1YWxpdHlLZXkoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Byb2Nlc3NlZE9wdGlvbl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25zID0gdGhpcy5maW5kT3B0aW9uUGF0aEJ5VmFsdWUodmFsdWUsIHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbiwgbGV2ZWwgKyAxKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9wdGlvbnMudW5zaGlmdChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEZpcnN0T3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kTGFzdE9wdGlvbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZmluZExhc3RJbmRleCh0aGlzLnZpc2libGVPcHRpb25zKCksIChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dE9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9XG4gICAgICAgICAgICBpbmRleCA8IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpXG4gICAgICAgICAgICAgICAgOiAtMTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbkluZGV4ID4gLTEgPyBtYXRjaGVkT3B0aW9uSW5kZXggKyBpbmRleCArIDEgOiBpbmRleDtcbiAgICB9XG5cbiAgICBmaW5kUHJldk9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9IGluZGV4ID4gMCA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLnNsaWNlKDAsIGluZGV4KSwgKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4IDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgIH1cblxuICAgIGZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA8IDAgPyB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkgOiBzZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kU2VsZWN0ZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBzZWFyY2hPcHRpb25zKGV2ZW50LCBjaGFyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAodGhpcy5zZWFyY2hWYWx1ZSB8fCAnJykgKyBjaGFyO1xuXG4gICAgICAgIGxldCBvcHRpb25JbmRleCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c2VkT3B0aW9uSW5mbyA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKTtcblxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZm8uaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIC5zbGljZShmb2N1c2VkT3B0aW9uSW5mby5pbmRleClcbiAgICAgICAgICAgICAgICAuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPVxuICAgICAgICAgICAgICAgIG9wdGlvbkluZGV4ID09PSAtMVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgZm9jdXNlZE9wdGlvbkluZm8uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQocHJvY2Vzc2VkT3B0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgOiBvcHRpb25JbmRleCArIGZvY3VzZWRPcHRpb25JbmZvLmluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uSW5kZXggPT09IC0xICYmIGZvY3VzZWRPcHRpb25JbmZvLmluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cblxuICAgIGhpZGUoZXZlbnQ/LCBpc0ZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgX2hpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvblBhdGguc2V0KFtdKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcblxuICAgICAgICAgICAgaXNGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub25IaWRlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX2hpZGUoKTtcbiAgICAgICAgfSwgMCk7IC8vIEZvciBTY3JlZW5SZWFkZXJzXG4gICAgfVxuXG4gICAgc2hvdyhldmVudD8sIGlzRm9jdXMgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgPyB0aGlzLmZpbmRPcHRpb25QYXRoQnlWYWx1ZSh0aGlzLm1vZGVsVmFsdWUoKSkgOiB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNldChhY3RpdmVPcHRpb25QYXRoKTtcblxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZm87XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSAmJiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKClbdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGZvY3VzZWRPcHRpb25JbmZvID0geyBpbmRleDogdGhpcy5hdXRvT3B0aW9uRm9jdXMgPyBwcm9jZXNzZWRPcHRpb24uaW5kZXggOiAtMSwgbGV2ZWw6IHByb2Nlc3NlZE9wdGlvbi5sZXZlbCwgcGFyZW50S2V5OiBwcm9jZXNzZWRPcHRpb24ucGFyZW50S2V5IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb2N1c2VkT3B0aW9uSW5mbyA9IHsgaW5kZXg6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoZm9jdXNlZE9wdGlvbkluZm8pO1xuXG4gICAgICAgIGlzRm9jdXMgJiYgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY2xlYXIoZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKSAmJiB0aGlzLnNob3dDbGVhcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChudWxsKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uUGF0aC5zZXQoW10pO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFyLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbjtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uVmFsdWUgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25WYWx1ZSkgOiBvcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBMYWJlbChvcHRpb25Hcm91cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb25Hcm91cCwgbGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbltsZXZlbF0pO1xuICAgIH1cblxuICAgIGlzT3B0aW9uR3JvdXAob3B0aW9uLCBsZXZlbCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbiwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuW2xldmVsXSk7XG4gICAgfVxuXG4gICAgaXNQcm9jY2Vzc2VkT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgZ2V0UHJvY2Nlc3NlZE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICBjb25zdCBncm91cGVkID0gdGhpcy5pc1Byb2NjZXNzZWRPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBncm91cGVkID8gdGhpcy5nZXRPcHRpb25Hcm91cExhYmVsKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24pIDogdGhpcy5nZXRPcHRpb25MYWJlbChwcm9jZXNzZWRPcHRpb24ub3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgY29uZmlnOiBQcmltZU5HQ29uZmlnLFxuICAgICAgICBwdWJsaWMgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShhY3RpdmVPcHRpb25QYXRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpZXdDaGlsZC5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZU1vZGVsKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyaWdnZXJpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VySWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5naWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0ljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2xlYXJpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uZ3JvdXBpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cEljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRvU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgU2hhcmVkTW9kdWxlLCBSaXBwbGVNb2R1bGUsIEF1dG9Gb2N1c01vZHVsZSwgQ2hldnJvbkRvd25JY29uLCBBbmdsZVJpZ2h0SWNvbiwgVGltZXNJY29uXSxcbiAgICBleHBvcnRzOiBbQ2FzY2FkZVNlbGVjdCwgT3ZlcmxheU1vZHVsZSwgQ2FzY2FkZVNlbGVjdFN1YiwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDYXNjYWRlU2VsZWN0LCBDYXNjYWRlU2VsZWN0U3ViXVxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlU2VsZWN0TW9kdWxlIHt9XG4iXX0=