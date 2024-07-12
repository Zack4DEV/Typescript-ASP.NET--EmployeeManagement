import { NgModule, Component, Input, Output, EventEmitter, ContentChild, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation, booleanAttribute, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from 'primeng/utils';
import { Header, Footer, PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { ThLargeIcon } from 'primeng/icons/thlarge';
import { BarsIcon } from 'primeng/icons/bars';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/paginator";
/**
 * DataView displays data in grid or list layout with pagination and sorting features.
 * @group Components
 */
export class DataView {
    el;
    cd;
    filterService;
    config;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator;
    /**
     * Number of rows to display per page.
     * @group Props
     */
    rows;
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    totalRecords;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks = 5;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Position of the paginator.
     * @group Props
     */
    paginatorPosition = 'bottom';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator = true;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo;
    /**
     * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    paginatorDropdownScrollHeight = '200px';
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit = true;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage = '';
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the grid.
     * @group Props
     */
    gridStyleClass = '';
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    trackBy = (index, item) => item;
    /**
     * Comma separated list of fields in the object graph to search against.
     * @group Props
     */
    filterBy;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon;
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    first = 0;
    /**
     * Property name of data to use in sorting by default.
     * @group Props
     */
    sortField;
    /**
     * Order to sort the data by default.
     * @group Props
     */
    sortOrder;
    /**
     * An array of objects to display.
     * @group Props
     */
    value;
    /**
     * Defines the layout mode.
     * @group Props
     */
    get layout() {
        return this._layout;
    }
    set layout(layout) {
        this._layout = layout;
        if (this.initialized) {
            this.changeLayout(layout);
        }
    }
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    /**
     * Callback to invoke when pagination occurs.
     * @param {DataViewPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage = new EventEmitter();
    /**
     * Callback to invoke when sorting occurs.
     * @param {DataViewSortEvent} event - Custom sort event.
     * @group Emits
     */
    onSort = new EventEmitter();
    /**
     * Callback to invoke when changing layout.
     * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
     * @group Emits
     */
    onChangeLayout = new EventEmitter();
    header;
    footer;
    templates;
    _value;
    listTemplate;
    gridTemplate;
    itemTemplate;
    headerTemplate;
    emptyMessageTemplate;
    footerTemplate;
    paginatorLeftTemplate;
    paginatorRightTemplate;
    paginatorDropdownItemTemplate;
    loadingIconTemplate;
    listIconTemplate;
    gridIconTemplate;
    filteredValue;
    filterValue;
    initialized;
    _layout = 'list';
    translationSubscription;
    get emptyMessageLabel() {
        return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
    }
    constructor(el, cd, filterService, config) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.config = config;
    }
    ngOnInit() {
        if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.translationSubscription = this.config.translationObserver.subscribe(() => {
            this.cd.markForCheck();
        });
        this.initialized = true;
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges.value) {
            this._value = simpleChanges.value.currentValue;
            this.updateTotalRecords();
            if (!this.lazy && this.hasFilter()) {
                this.filter(this.filterValue);
            }
        }
        if (simpleChanges.sortField || simpleChanges.sortOrder) {
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                this.sort();
            }
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'listItem':
                case 'list':
                    this.listTemplate = item.template;
                    break;
                case 'gridItem':
                case 'grid':
                    this.gridTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
                case 'paginatordropdownitem':
                    this.paginatorDropdownItemTemplate = item.template;
                    break;
                case 'empty':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'loadingicon':
                    this.loadingIconTemplate = item.template;
                    break;
                case 'listicon':
                    this.listIconTemplate = item.template;
                    break;
                case 'gridicon':
                    this.gridIconTemplate = item.template;
                    break;
            }
        });
        this.updateItemTemplate();
    }
    updateItemTemplate() {
        switch (this.layout) {
            case 'list':
                this.itemTemplate = this.listTemplate;
                break;
            case 'grid':
                this.itemTemplate = this.gridTemplate;
                break;
        }
    }
    changeLayout(layout) {
        this._layout = layout;
        this.onChangeLayout.emit({
            layout: this.layout
        });
        this.updateItemTemplate();
        this.cd.markForCheck();
    }
    updateTotalRecords() {
        this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
    }
    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    }
    sort() {
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else if (this.value) {
            this.value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                return this.sortOrder * result;
            });
            if (this.hasFilter()) {
                this.filter(this.filterValue);
            }
        }
        this.onSort.emit({
            sortField: this.sortField,
            sortOrder: this.sortOrder
        });
    }
    isEmpty() {
        let data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder
        };
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    filter(filter, filterMatchMode = 'contains') {
        this.filterValue = filter;
        if (this.value && this.value.length) {
            let searchFields = this.filterBy.split(',');
            this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.first = 0;
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
            this.cd.markForCheck();
        }
    }
    hasFilter() {
        return this.filterValue && this.filterValue.trim().length > 0;
    }
    ngOnDestroy() {
        if (this.translationSubscription) {
            this.translationSubscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataView, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FilterService }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: DataView, selector: "p-dataView", inputs: { paginator: ["paginator", "paginator", booleanAttribute], rows: ["rows", "rows", numberAttribute], totalRecords: ["totalRecords", "totalRecords", numberAttribute], pageLinks: ["pageLinks", "pageLinks", numberAttribute], rowsPerPageOptions: "rowsPerPageOptions", paginatorPosition: "paginatorPosition", paginatorStyleClass: "paginatorStyleClass", alwaysShowPaginator: ["alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute], paginatorDropdownAppendTo: "paginatorDropdownAppendTo", paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showCurrentPageReport: ["showCurrentPageReport", "showCurrentPageReport", booleanAttribute], showJumpToPageDropdown: ["showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute], showFirstLastIcon: ["showFirstLastIcon", "showFirstLastIcon", booleanAttribute], showPageLinks: ["showPageLinks", "showPageLinks", booleanAttribute], lazy: ["lazy", "lazy", booleanAttribute], lazyLoadOnInit: ["lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute], emptyMessage: "emptyMessage", style: "style", styleClass: "styleClass", gridStyleClass: "gridStyleClass", trackBy: "trackBy", filterBy: "filterBy", filterLocale: "filterLocale", loading: ["loading", "loading", booleanAttribute], loadingIcon: "loadingIcon", first: ["first", "first", numberAttribute], sortField: "sortField", sortOrder: ["sortOrder", "sortOrder", numberAttribute], value: "value", layout: "layout" }, outputs: { onLazyLoad: "onLazyLoad", onPage: "onPage", onSort: "onSort", onChangeLayout: "onChangeLayout" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "header", first: true, predicate: Header, descendants: true }, { propertyName: "footer", first: true, predicate: Footer, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesOnChanges: true, ngImport: i0, template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value }"></ng-container>

                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptyMessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i3.Paginator), selector: "p-paginator", inputs: ["pageLinkSize", "style", "styleClass", "alwaysShow", "dropdownAppendTo", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showFirstLastIcon", "totalRecords", "rows", "rowsPerPageOptions", "showJumpToPageDropdown", "showJumpToPageInput", "jumpToPageItemTemplate", "showPageLinks", "locale", "dropdownItemTemplate", "first"], outputs: ["onPageChange"] }, { kind: "component", type: i0.forwardRef(() => SpinnerIcon), selector: "SpinnerIcon" }, { kind: "pipe", type: i0.forwardRef(() => i2.SlicePipe), name: "slice" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataView, decorators: [{
            type: Component,
            args: [{ selector: 'p-dataView', template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value }"></ng-container>

                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptyMessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FilterService }, { type: i1.PrimeNGConfig }], propDecorators: { paginator: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], rows: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], totalRecords: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], pageLinks: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], rowsPerPageOptions: [{
                type: Input
            }], paginatorPosition: [{
                type: Input
            }], paginatorStyleClass: [{
                type: Input
            }], alwaysShowPaginator: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], paginatorDropdownAppendTo: [{
                type: Input
            }], paginatorDropdownScrollHeight: [{
                type: Input
            }], currentPageReportTemplate: [{
                type: Input
            }], showCurrentPageReport: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showJumpToPageDropdown: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showFirstLastIcon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showPageLinks: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], lazy: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], lazyLoadOnInit: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], emptyMessage: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], gridStyleClass: [{
                type: Input
            }], trackBy: [{
                type: Input
            }], filterBy: [{
                type: Input
            }], filterLocale: [{
                type: Input
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], loadingIcon: [{
                type: Input
            }], first: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], sortField: [{
                type: Input
            }], sortOrder: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], value: [{
                type: Input
            }], layout: [{
                type: Input
            }], onLazyLoad: [{
                type: Output
            }], onPage: [{
                type: Output
            }], onSort: [{
                type: Output
            }], onChangeLayout: [{
                type: Output
            }], header: [{
                type: ContentChild,
                args: [Header]
            }], footer: [{
                type: ContentChild,
                args: [Footer]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class DataViewLayoutOptions {
    dv;
    style;
    styleClass;
    constructor(dv) {
        this.dv = dv;
    }
    changeLayout(event, layout) {
        this.dv.changeLayout(layout);
        event.preventDefault();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataViewLayoutOptions, deps: [{ token: DataView }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: DataViewLayoutOptions, selector: "p-dataViewLayoutOptions", inputs: { style: "style", styleClass: "styleClass" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'list' }" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <BarsIcon *ngIf="!dv.listIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.listIconTemplate"></ng-template></button
            ><button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'grid' }" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <ThLargeIcon *ngIf="!dv.gridIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.gridIconTemplate"></ng-template>
            </button>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => BarsIcon), selector: "BarsIcon" }, { kind: "component", type: i0.forwardRef(() => ThLargeIcon), selector: "ThLargeIcon" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataViewLayoutOptions, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-dataViewLayoutOptions',
                    template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'list' }" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <BarsIcon *ngIf="!dv.listIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.listIconTemplate"></ng-template></button
            ><button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'grid' }" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <ThLargeIcon *ngIf="!dv.gridIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.gridIconTemplate"></ng-template>
            </button>
        </div>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: DataView }], propDecorators: { style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }] } });
export class DataViewModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: DataViewModule, declarations: [DataView, DataViewLayoutOptions], imports: [CommonModule, SharedModule, PaginatorModule, SpinnerIcon, BarsIcon, ThLargeIcon], exports: [DataView, SharedModule, DataViewLayoutOptions] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataViewModule, imports: [CommonModule, SharedModule, PaginatorModule, SpinnerIcon, BarsIcon, ThLargeIcon, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DataViewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule, PaginatorModule, SpinnerIcon, BarsIcon, ThLargeIcon],
                    exports: [DataView, SharedModule, DataViewLayoutOptions],
                    declarations: [DataView, DataViewLayoutOptions]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YXZpZXcvZGF0YXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFFBQVEsRUFDUixTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFLZix1QkFBdUIsRUFFdkIsaUJBQWlCLEVBRWpCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQWlCLGVBQWUsRUFBaUIsTUFBTSxhQUFhLENBQUM7QUFDekgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUc5Qzs7O0dBR0c7QUF3RkgsTUFBTSxPQUFPLFFBQVE7SUE2T047SUFDQTtJQUNBO0lBQ0E7SUEvT1g7OztPQUdHO0lBQ3FDLFNBQVMsQ0FBc0I7SUFDdkU7OztPQUdHO0lBQ29DLElBQUksQ0FBcUI7SUFDaEU7OztPQUdHO0lBQ29DLFlBQVksQ0FBcUI7SUFDeEU7OztPQUdHO0lBQ29DLFNBQVMsR0FBVyxDQUFDLENBQUM7SUFDN0Q7OztPQUdHO0lBQ00sa0JBQWtCLENBQStCO0lBQzFEOzs7T0FHRztJQUNNLGlCQUFpQixHQUE4QixRQUFRLENBQUM7SUFDakU7OztPQUdHO0lB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ZCxRQUFRLEVBZ2RSLHFCQUFxQixhQWFwQixZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsYUE3ZGhGLFFBQVEsRUE4ZEcsWUFBWSxFQWR2QixxQkFBcUI7d0dBaUJyQixjQUFjLFlBSmIsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQ3JFLFlBQVk7OzJGQUd2QixjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO29CQUMxRixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDO29CQUN4RCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUM7aUJBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBOZ01vZHVsZSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkluaXQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIE9uRGVzdHJveSxcbiAgICBib29sZWFuQXR0cmlidXRlLFxuICAgIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIsIFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSwgRmlsdGVyU2VydmljZSwgVHJhbnNsYXRpb25LZXlzLCBQcmltZU5HQ29uZmlnIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wYWdpbmF0b3InO1xuaW1wb3J0IHsgQmxvY2thYmxlVUkgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNwaW5uZXJJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9zcGlubmVyJztcbmltcG9ydCB7IFRoTGFyZ2VJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy90aGxhcmdlJztcbmltcG9ydCB7IEJhcnNJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9iYXJzJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IERhdGFWaWV3TGF5b3V0Q2hhbmdlRXZlbnQsIERhdGFWaWV3TGF6eUxvYWRFdmVudCwgRGF0YVZpZXdQYWdlRXZlbnQsIERhdGFWaWV3UGFnaW5hdG9yU3RhdGUsIERhdGFWaWV3U29ydEV2ZW50IH0gZnJvbSAnLi9kYXRhdmlldy5pbnRlcmZhY2UnO1xuLyoqXG4gKiBEYXRhVmlldyBkaXNwbGF5cyBkYXRhIGluIGdyaWQgb3IgbGlzdCBsYXlvdXQgd2l0aCBwYWdpbmF0aW9uIGFuZCBzb3J0aW5nIGZlYXR1cmVzLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRhdGFWaWV3JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ3AtZGF0YXZpZXcgcC1jb21wb25lbnQnOiB0cnVlLCAncC1kYXRhdmlldy1saXN0JzogbGF5b3V0ID09PSAnbGlzdCcsICdwLWRhdGF2aWV3LWdyaWQnOiBsYXlvdXQgPT09ICdncmlkJyB9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZGF0YXZpZXctbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF2aWV3LWxvYWRpbmctb3ZlcmxheSBwLWNvbXBvbmVudC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibG9hZGluZ0ljb25cIiBbY2xhc3NdPVwiJ3AtZGF0YXZpZXctbG9hZGluZy1pY29uIHBpLXNwaW4gJyArIGxvYWRpbmdJY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lckljb24gKm5nSWY9XCIhbG9hZGluZ0ljb25UZW1wbGF0ZVwiIFtzcGluXT1cInRydWVcIiBbc3R5bGVDbGFzc109XCIncC1kYXRhdmlldy1sb2FkaW5nLWljb24nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRpbmdJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZGF0YXZpZXctaGVhZGVyXCIgKm5nSWY9XCJoZWFkZXIgfHwgaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yXG4gICAgICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICAgICAgW2ZpcnN0XT1cImZpcnN0XCJcbiAgICAgICAgICAgICAgICBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiXG4gICAgICAgICAgICAgICAgW3BhZ2VMaW5rU2l6ZV09XCJwYWdlTGlua3NcIlxuICAgICAgICAgICAgICAgIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwicGFnaW5hdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzcz1cInAtcGFnaW5hdG9yLXRvcFwiXG4gICAgICAgICAgICAgICAgW3Jvd3NQZXJQYWdlT3B0aW9uc109XCJyb3dzUGVyUGFnZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwicGFnaW5hdG9yICYmIChwYWdpbmF0b3JQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcGFnaW5hdG9yUG9zaXRpb24gPT0gJ2JvdGgnKVwiXG4gICAgICAgICAgICAgICAgW2Ryb3Bkb3duQXBwZW5kVG9dPVwicGFnaW5hdG9yRHJvcGRvd25BcHBlbmRUb1wiXG4gICAgICAgICAgICAgICAgW2Ryb3Bkb3duU2Nyb2xsSGVpZ2h0XT1cInBhZ2luYXRvckRyb3Bkb3duU2Nyb2xsSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICBbdGVtcGxhdGVMZWZ0XT1cInBhZ2luYXRvckxlZnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3RlbXBsYXRlUmlnaHRdPVwicGFnaW5hdG9yUmlnaHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVdPVwiY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dGaXJzdExhc3RJY29uXT1cInNob3dGaXJzdExhc3RJY29uXCJcbiAgICAgICAgICAgICAgICBbZHJvcGRvd25JdGVtVGVtcGxhdGVdPVwicGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtzaG93Q3VycmVudFBhZ2VSZXBvcnRdPVwic2hvd0N1cnJlbnRQYWdlUmVwb3J0XCJcbiAgICAgICAgICAgICAgICBbc2hvd0p1bXBUb1BhZ2VEcm9wZG93bl09XCJzaG93SnVtcFRvUGFnZURyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICBbc2hvd1BhZ2VMaW5rc109XCJzaG93UGFnZUxpbmtzXCJcbiAgICAgICAgICAgICAgICBbc3R5bGVDbGFzc109XCJwYWdpbmF0b3JTdHlsZUNsYXNzXCJcbiAgICAgICAgICAgID48L3AtcGFnaW5hdG9yPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kYXRhdmlldy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHBhZ2luYXRvciA/IChmaWx0ZXJlZFZhbHVlIHx8IHZhbHVlIHwgc2xpY2U6IChsYXp5ID8gMCA6IGZpcnN0KSA6IChsYXp5ID8gMCA6IGZpcnN0KSArIHJvd3MpIDogZmlsdGVyZWRWYWx1ZSB8fCB2YWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFbXB0eSgpICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF2aWV3LWVtcHR5bWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbXB0eU1lc3NhZ2VUZW1wbGF0ZTsgZWxzZSBlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVtcHR5TWVzc2FnZUxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI2VtcHR5ICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlNZXNzYWdlVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvclxuICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgIFtmaXJzdF09XCJmaXJzdFwiXG4gICAgICAgICAgICAgICAgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIlxuICAgICAgICAgICAgICAgIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCJcbiAgICAgICAgICAgICAgICBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cInBhZ2luYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci1ib3R0b21cIlxuICAgICAgICAgICAgICAgIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInBhZ2luYXRvciAmJiAocGFnaW5hdG9yUG9zaXRpb24gPT09ICdib3R0b20nIHx8IHBhZ2luYXRvclBvc2l0aW9uID09ICdib3RoJylcIlxuICAgICAgICAgICAgICAgIFtkcm9wZG93bkFwcGVuZFRvXT1cInBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG9cIlxuICAgICAgICAgICAgICAgIFtkcm9wZG93blNjcm9sbEhlaWdodF09XCJwYWdpbmF0b3JEcm9wZG93blNjcm9sbEhlaWdodFwiXG4gICAgICAgICAgICAgICAgW3RlbXBsYXRlTGVmdF09XCJwYWdpbmF0b3JMZWZ0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZVJpZ2h0XT1cInBhZ2luYXRvclJpZ2h0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXT1cImN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtzaG93Rmlyc3RMYXN0SWNvbl09XCJzaG93Rmlyc3RMYXN0SWNvblwiXG4gICAgICAgICAgICAgICAgW2Ryb3Bkb3duSXRlbVRlbXBsYXRlXT1cInBhZ2luYXRvckRyb3Bkb3duSXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbc2hvd0N1cnJlbnRQYWdlUmVwb3J0XT1cInNob3dDdXJyZW50UGFnZVJlcG9ydFwiXG4gICAgICAgICAgICAgICAgW3Nob3dKdW1wVG9QYWdlRHJvcGRvd25dPVwic2hvd0p1bXBUb1BhZ2VEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgW3Nob3dQYWdlTGlua3NdPVwic2hvd1BhZ2VMaW5rc1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlQ2xhc3NdPVwicGFnaW5hdG9yU3R5bGVDbGFzc1wiXG4gICAgICAgICAgICA+PC9wLXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRhdGF2aWV3LWZvb3RlclwiICpuZ0lmPVwiZm9vdGVyIHx8IGZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGF2aWV3LmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBCbG9ja2FibGVVSSwgT25DaGFuZ2VzIHtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCBhcyB0cnVlLCBlbmFibGVzIHRoZSBwYWdpbmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBwYWdpbmF0b3I6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSBwZXIgcGFnZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSByb3dzOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHRvdGFsIHJlY29yZHMsIGRlZmF1bHRzIHRvIGxlbmd0aCBvZiB2YWx1ZSB3aGVuIG5vdCBkZWZpbmVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHRvdGFsUmVjb3JkczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBwYWdlIGxpbmtzIHRvIGRpc3BsYXkgaW4gcGFnaW5hdG9yLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHBhZ2VMaW5rczogbnVtYmVyID0gNTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBpbnRlZ2VyL29iamVjdCB2YWx1ZXMgdG8gZGlzcGxheSBpbnNpZGUgcm93cyBwZXIgcGFnZSBkcm9wZG93biBvZiBwYWdpbmF0b3JcbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByb3dzUGVyUGFnZU9wdGlvbnM6IG51bWJlcltdIHwgYW55W10gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIHBhZ2luYXRvci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xuICAgIC8qKlxuICAgICAqIEN1c3RvbSBzdHlsZSBjbGFzcyBmb3IgcGFnaW5hdG9yXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFnaW5hdG9yU3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyBpdCBldmVuIHRoZXJlIGlzIG9ubHkgb25lIHBhZ2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGFsd2F5c1Nob3dQYWdpbmF0b3I6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFRhcmdldCBlbGVtZW50IHRvIGF0dGFjaCB0aGUgcGFnaW5hdG9yIGRyb3Bkb3duIG92ZXJsYXksIHZhbGlkIHZhbHVlcyBhcmUgXCJib2R5XCIgb3IgYSBsb2NhbCBuZy10ZW1wbGF0ZSB2YXJpYWJsZSBvZiBhbm90aGVyIGVsZW1lbnQgKG5vdGU6IHVzZSBiaW5kaW5nIHdpdGggYnJhY2tldHMgZm9yIHRlbXBsYXRlIHZhcmlhYmxlcywgZS5nLiBbYXBwZW5kVG9dPVwibXlkaXZcIiBmb3IgYSBkaXYgZWxlbWVudCBoYXZpbmcgI215ZGl2IGFzIHZhcmlhYmxlIG5hbWUpLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhZ2luYXRvckRyb3Bkb3duQXBwZW5kVG86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHwgYW55O1xuICAgIC8qKlxuICAgICAqIFBhZ2luYXRvciBkcm9wZG93biBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHBpeGVscywgYSBzY3JvbGxiYXIgaXMgZGVmaW5lZCBpZiBoZWlnaHQgb2YgbGlzdCBleGNlZWRzIHRoaXMgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFnaW5hdG9yRHJvcGRvd25TY3JvbGxIZWlnaHQ6IHN0cmluZyA9ICcyMDBweCc7XG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgb2YgdGhlIGN1cnJlbnQgcGFnZSByZXBvcnQgZWxlbWVudC4gQXZhaWxhYmxlIHBsYWNlaG9sZGVycyBhcmUge2N1cnJlbnRQYWdlfSx7dG90YWxQYWdlc30se3Jvd3N9LHtmaXJzdH0se2xhc3R9IGFuZCB7dG90YWxSZWNvcmRzfVxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU6IHN0cmluZyA9ICd7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfSc7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBkaXNwbGF5IGN1cnJlbnQgcGFnZSByZXBvcnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dDdXJyZW50UGFnZVJlcG9ydDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgYSBkcm9wZG93biB0byBuYXZpZ2F0ZSB0byBhbnkgcGFnZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc2hvd0p1bXBUb1BhZ2VEcm9wZG93bjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIGVuYWJsZWQsIGljb25zIGFyZSBkaXNwbGF5ZWQgb24gcGFnaW5hdG9yIHRvIGdvIGZpcnN0IGFuZCBsYXN0IHBhZ2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dGaXJzdExhc3RJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgcGFnZSBsaW5rcy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc2hvd1BhZ2VMaW5rczogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBkYXRhIGlzIGxvYWRlZCBhbmQgaW50ZXJhY3RlZCB3aXRoIGluIGxhenkgbWFubmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBsYXp5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gY2FsbCBsYXp5IGxvYWRpbmcgb24gaW5pdGlhbGl6YXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxhenlMb2FkT25Jbml0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBpcyBubyBkYXRhLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGdyaWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ3JpZFN0eWxlQ2xhc3M6IHN0cmluZyA9ICcnO1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIG9wdGltaXplIHRoZSBkb20gb3BlcmF0aW9ucyBieSBkZWxlZ2F0aW5nIHRvIG5nRm9yVHJhY2tCeSwgZGVmYXVsdCBhbGdvcml0aG0gY2hlY2tzIGZvciBvYmplY3QgaWRlbnRpdHkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdHJhY2tCeTogRnVuY3Rpb24gPSAoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiBpdGVtO1xuICAgIC8qKlxuICAgICAqIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGZpZWxkcyBpbiB0aGUgb2JqZWN0IGdyYXBoIHRvIHNlYXJjaCBhZ2FpbnN0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTG9jYWxlIHRvIHVzZSBpbiBmaWx0ZXJpbmcuIFRoZSBkZWZhdWx0IGxvY2FsZSBpcyB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlckxvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIGEgbG9hZGVyIHRvIGluZGljYXRlIGRhdGEgbG9hZCBpcyBpbiBwcm9ncmVzcy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbG9hZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiB0byBzaG93IHdoaWxlIGluZGljYXRpbmcgZGF0YSBsb2FkIGlzIGluIHByb2dyZXNzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0byBiZSBkaXNwbGF5ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgZmlyc3Q6IG51bWJlciB8IHVuZGVmaW5lZCA9IDA7XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZSBvZiBkYXRhIHRvIHVzZSBpbiBzb3J0aW5nIGJ5IGRlZmF1bHQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc29ydEZpZWxkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogT3JkZXIgdG8gc29ydCB0aGUgZGF0YSBieSBkZWZhdWx0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHNvcnRPcmRlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG9iamVjdHMgdG8gZGlzcGxheS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YWx1ZTogYW55W10gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGF5b3V0IG1vZGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGxheW91dCgpOiAnbGlzdCcgfCAnZ3JpZCcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xuICAgIH1cbiAgICBzZXQgbGF5b3V0KGxheW91dDogJ2xpc3QnIHwgJ2dyaWQnKSB7XG4gICAgICAgIHRoaXMuX2xheW91dCA9IGxheW91dDtcblxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYXlvdXQobGF5b3V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBwYWdpbmcsIHNvcnRpbmcgb3IgZmlsdGVyaW5nIGhhcHBlbnMgaW4gbGF6eSBtb2RlLlxuICAgICAqIEBwYXJhbSB7RGF0YVZpZXdMYXp5TG9hZEV2ZW50fSBldmVudCAtIEN1c3RvbSBsYXp5IGxvYWQgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uTGF6eUxvYWQ6IEV2ZW50RW1pdHRlcjxEYXRhVmlld0xhenlMb2FkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVmlld0xhenlMb2FkRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gcGFnaW5hdGlvbiBvY2N1cnMuXG4gICAgICogQHBhcmFtIHtEYXRhVmlld1BhZ2VFdmVudH0gZXZlbnQgLSBDdXN0b20gcGFnZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25QYWdlOiBFdmVudEVtaXR0ZXI8RGF0YVZpZXdQYWdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhVmlld1BhZ2VFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBzb3J0aW5nIG9jY3Vycy5cbiAgICAgKiBAcGFyYW0ge0RhdGFWaWV3U29ydEV2ZW50fSBldmVudCAtIEN1c3RvbSBzb3J0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblNvcnQ6IEV2ZW50RW1pdHRlcjxEYXRhVmlld1NvcnRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFWaWV3U29ydEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNoYW5naW5nIGxheW91dC5cbiAgICAgKiBAcGFyYW0ge0RhdGFWaWV3TGF5b3V0Q2hhbmdlRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGxheW91dCBjaGFuZ2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlTGF5b3V0OiBFdmVudEVtaXR0ZXI8RGF0YVZpZXdMYXlvdXRDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFWaWV3TGF5b3V0Q2hhbmdlRXZlbnQ+KCk7XG5cbiAgICBAQ29udGVudENoaWxkKEhlYWRlcikgaGVhZGVyOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkKEZvb3RlcikgZm9vdGVyOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogTnVsbGFibGU8UXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+PjtcblxuICAgIF92YWx1ZTogTnVsbGFibGU8YW55W10+O1xuXG4gICAgbGlzdFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGdyaWRUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBpdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZW1wdHlNZXNzYWdlVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yTGVmdFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHBhZ2luYXRvclJpZ2h0VGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgbG9hZGluZ0ljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBsaXN0SWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGdyaWRJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZmlsdGVyZWRWYWx1ZTogTnVsbGFibGU8YW55W10+O1xuXG4gICAgZmlsdGVyVmFsdWU6IE51bGxhYmxlPHN0cmluZz47XG5cbiAgICBpbml0aWFsaXplZDogTnVsbGFibGU8Ym9vbGVhbj47XG5cbiAgICBfbGF5b3V0OiAnbGlzdCcgfCAnZ3JpZCcgPSAnbGlzdCc7XG5cbiAgICB0cmFuc2xhdGlvblN1YnNjcmlwdGlvbjogTnVsbGFibGU8U3Vic2NyaXB0aW9uPjtcblxuICAgIGdldCBlbXB0eU1lc3NhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU1lc3NhZ2UgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkVNUFRZX01FU1NBR0UpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHB1YmxpYyBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdGhpcy5sYXp5TG9hZE9uSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uT2JzZXJ2ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2VzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHNpbXBsZUNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFJlY29yZHMoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkgJiYgdGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2VzLnNvcnRGaWVsZCB8fCBzaW1wbGVDaGFuZ2VzLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgLy9hdm9pZCB0cmlnZ2VyaW5nIGxhenkgbG9hZCBwcmlvciB0byBsYXp5IGluaXRpYWxpemF0aW9uIGF0IG9uSW5pdFxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkgfHwgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAodGhpcy50ZW1wbGF0ZXMgYXMgUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGlzdEl0ZW0nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZEl0ZW0nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9ybGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yTGVmdFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwYWdpbmF0b3JyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yUmlnaHRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9yZHJvcGRvd25pdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3JEcm9wZG93bkl0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5naWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0ljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGlzdGljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkSWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVRlbXBsYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbVRlbXBsYXRlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGF5b3V0KSB7XG4gICAgICAgICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IHRoaXMubGlzdFRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IHRoaXMuZ3JpZFRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlTGF5b3V0KGxheW91dDogJ2xpc3QnIHwgJ2dyaWQnKSB7XG4gICAgICAgIHRoaXMuX2xheW91dCA9IGxheW91dDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUxheW91dC5lbWl0KHtcbiAgICAgICAgICAgIGxheW91dDogdGhpcy5sYXlvdXRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVRlbXBsYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb3RhbFJlY29yZHMoKSB7XG4gICAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gdGhpcy5sYXp5ID8gdGhpcy50b3RhbFJlY29yZHMgOiB0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlLmxlbmd0aCA6IDA7XG4gICAgfVxuXG4gICAgcGFnaW5hdGUoZXZlbnQ6IERhdGFWaWV3UGFnaW5hdG9yU3RhdGUpIHtcbiAgICAgICAgdGhpcy5maXJzdCA9IGV2ZW50LmZpcnN0O1xuICAgICAgICB0aGlzLnJvd3MgPSBldmVudC5yb3dzO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25QYWdlLmVtaXQoe1xuICAgICAgICAgICAgZmlyc3Q6IDxudW1iZXI+dGhpcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IDxudW1iZXI+dGhpcy5yb3dzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNvcnQoKSB7XG4gICAgICAgIHRoaXMuZmlyc3QgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTEgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKGRhdGExLCB0aGlzLnNvcnRGaWVsZCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlMiA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEoZGF0YTIsIHRoaXMuc29ydEZpZWxkKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbCkgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMik7XG4gICAgICAgICAgICAgICAgZWxzZSByZXN1bHQgPSB2YWx1ZTEgPCB2YWx1ZTIgPyAtMSA6IHZhbHVlMSA+IHZhbHVlMiA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnNvcnRPcmRlciBhcyBudW1iZXIpICogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblNvcnQuZW1pdCh7XG4gICAgICAgICAgICBzb3J0RmllbGQ6IDxzdHJpbmc+dGhpcy5zb3J0RmllbGQsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IDxudW1iZXI+dGhpcy5zb3J0T3JkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmZpbHRlcmVkVmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PSAwO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKTogRGF0YVZpZXdMYXp5TG9hZEV2ZW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0OiA8bnVtYmVyPnRoaXMuZmlyc3QsXG4gICAgICAgICAgICByb3dzOiA8bnVtYmVyPnRoaXMucm93cyxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogPHN0cmluZz50aGlzLnNvcnRGaWVsZCxcbiAgICAgICAgICAgIHNvcnRPcmRlcjogPG51bWJlcj50aGlzLnNvcnRPcmRlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIGZpbHRlcihmaWx0ZXI6IHN0cmluZywgZmlsdGVyTWF0Y2hNb2RlOiBzdHJpbmcgPSAnY29udGFpbnMnKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXI7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hGaWVsZHMgPSAodGhpcy5maWx0ZXJCeSBhcyBzdHJpbmcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkVmFsdWUgPSB0aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyKHRoaXMudmFsdWUsIHNlYXJjaEZpZWxkcywgZmlsdGVyLCBmaWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWRWYWx1ZS5sZW5ndGggPT09IHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFJlY29yZHMgPSB0aGlzLmZpbHRlcmVkVmFsdWUgPyB0aGlzLmZpbHRlcmVkVmFsdWUubGVuZ3RoIDogdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZpbHRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWUgJiYgdGhpcy5maWx0ZXJWYWx1ZS50cmltKCkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRhdGFWaWV3TGF5b3V0T3B0aW9ucycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1kYXRhdmlldy1sYXlvdXQtb3B0aW9ucyBwLXNlbGVjdGJ1dHRvbiBwLWJ1dHRvbnNldCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInAtYnV0dG9uIHAtYnV0dG9uLWljb24tb25seVwiIFtuZ0NsYXNzXT1cInsgJ3AtaGlnaGxpZ2h0JzogZHYubGF5b3V0ID09PSAnbGlzdCcgfVwiIChjbGljayk9XCJjaGFuZ2VMYXlvdXQoJGV2ZW50LCAnbGlzdCcpXCIgKGtleWRvd24uZW50ZXIpPVwiY2hhbmdlTGF5b3V0KCRldmVudCwgJ2xpc3QnKVwiPlxuICAgICAgICAgICAgICAgIDxCYXJzSWNvbiAqbmdJZj1cIiFkdi5saXN0SWNvblRlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkdi5saXN0SWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT48L2J1dHRvblxuICAgICAgICAgICAgPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicC1idXR0b24gcC1idXR0b24taWNvbi1vbmx5XCIgW25nQ2xhc3NdPVwieyAncC1oaWdobGlnaHQnOiBkdi5sYXlvdXQgPT09ICdncmlkJyB9XCIgKGNsaWNrKT1cImNoYW5nZUxheW91dCgkZXZlbnQsICdncmlkJylcIiAoa2V5ZG93bi5lbnRlcik9XCJjaGFuZ2VMYXlvdXQoJGV2ZW50LCAnZ3JpZCcpXCI+XG4gICAgICAgICAgICAgICAgPFRoTGFyZ2VJY29uICpuZ0lmPVwiIWR2LmdyaWRJY29uVGVtcGxhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImR2LmdyaWRJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVZpZXdMYXlvdXRPcHRpb25zIHtcbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkdjogRGF0YVZpZXcpIHt9XG5cbiAgICBjaGFuZ2VMYXlvdXQoZXZlbnQ6IEV2ZW50LCBsYXlvdXQ6ICdsaXN0JyB8ICdncmlkJykge1xuICAgICAgICB0aGlzLmR2LmNoYW5nZUxheW91dChsYXlvdXQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBQYWdpbmF0b3JNb2R1bGUsIFNwaW5uZXJJY29uLCBCYXJzSWNvbiwgVGhMYXJnZUljb25dLFxuICAgIGV4cG9ydHM6IFtEYXRhVmlldywgU2hhcmVkTW9kdWxlLCBEYXRhVmlld0xheW91dE9wdGlvbnNdLFxuICAgIGRlY2xhcmF0aW9uczogW0RhdGFWaWV3LCBEYXRhVmlld0xheW91dE9wdGlvbnNdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFWaWV3TW9kdWxlIHt9XG4iXX0=