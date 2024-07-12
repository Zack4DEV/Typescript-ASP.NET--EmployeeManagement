import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, numberAttribute, booleanAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, signal, computed, effect, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from 'primeng/api';
import { TranslationKeys, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { AngleRightIcon } from 'primeng/icons/angleright';
import * as i5 from 'primeng/autofocus';
import { AutoFocusModule } from 'primeng/autofocus';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { TimesIcon } from 'primeng/icons/times';
import * as i4 from 'primeng/overlay';
import { OverlayModule } from 'primeng/overlay';
import * as i3 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';

const CASCADESELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CascadeSelect),
    multi: true
};
class CascadeSelectSub {
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
class CascadeSelect {
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
class CascadeSelectModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { CASCADESELECT_VALUE_ACCESSOR, CascadeSelect, CascadeSelectModule, CascadeSelectSub };
//# sourceMappingURL=primeng-cascadeselect.mjs.map
