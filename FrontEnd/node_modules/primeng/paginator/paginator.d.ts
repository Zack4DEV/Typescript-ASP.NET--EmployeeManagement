import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { Aria, PrimeNGConfig, SelectItem } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Nullable } from 'primeng/ts-helpers';
import { PaginatorState } from './paginator.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/dropdown";
import * as i3 from "primeng/inputnumber";
import * as i4 from "@angular/forms";
import * as i5 from "primeng/api";
import * as i6 from "primeng/ripple";
import * as i7 from "primeng/icons/angledoubleleft";
import * as i8 from "primeng/icons/angledoubleright";
import * as i9 from "primeng/icons/angleleft";
import * as i10 from "primeng/icons/angleright";
/**
 * Paginator is a generic component to display content in paged format.
 * @group Components
 */
export declare class Paginator implements OnInit, AfterContentInit, OnChanges {
    private cd;
    private config;
    /**
     * Number of page links to display.
     * @group Props
     */
    pageLinkSize: number;
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
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShow: boolean;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    dropdownAppendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Template instance to inject into the left side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateLeft: TemplateRef<PaginatorState> | undefined;
    /**
     * Template instance to inject into the right side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateRight: TemplateRef<PaginatorState> | undefined;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    dropdownScrollHeight: string;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate: string;
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport: boolean | undefined;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon: boolean;
    /**
     * Number of total records.
     * @group Props
     */
    totalRecords: number;
    /**
     * Data count to display per page.
     * @group Props
     */
    rows: number;
    /**
     * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
     * @group Props
     */
    rowsPerPageOptions: any[] | undefined;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown: boolean | undefined;
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    showJumpToPageInput: boolean | undefined;
    /**
     * Template instance to inject into the jump to page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    jumpToPageItemTemplate: TemplateRef<{
        $implicit: any;
    }> | undefined;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks: boolean;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale: string | undefined;
    /**
     * Template instance to inject into the rows per page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    dropdownItemTemplate: TemplateRef<{
        $implicit: any;
    }> | undefined;
    /**
     * Zero-relative number of the first row to be displayed.
     * @group Props
     */
    get first(): number;
    set first(val: number);
    /**
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {PaginatorState} event - Paginator state.
     * @group Emits
     */
    onPageChange: EventEmitter<PaginatorState>;
    templates: Nullable<QueryList<any>>;
    dropdownIconTemplate: Nullable<TemplateRef<any>>;
    firstPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    previousPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    lastPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    nextPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    pageLinks: number[] | undefined;
    pageItems: SelectItem[] | undefined;
    rowsPerPageItems: SelectItem[] | undefined;
    paginatorState: any;
    _first: number;
    _page: number;
    constructor(cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngOnInit(): void;
    getAriaLabel(labelType: keyof Aria): string | undefined;
    getPageAriaLabel(value: number): string | undefined;
    getLocalization(digit: number): string;
    ngAfterContentInit(): void;
    ngOnChanges(simpleChange: SimpleChanges): void;
    updateRowsPerPageOptions(): void;
    isFirstPage(): boolean;
    isLastPage(): boolean;
    getPageCount(): number;
    calculatePageLinkBoundaries(): [number, number];
    updatePageLinks(): void;
    changePage(p: number): void;
    updateFirst(): void;
    getPage(): number;
    changePageToFirst(event: Event): void;
    changePageToPrev(event: Event): void;
    changePageToNext(event: Event): void;
    changePageToLast(event: Event): void;
    onPageLinkClick(event: Event, page: number): void;
    onRppChange(event: Event): void;
    onPageDropdownChange(event: DropdownChangeEvent): void;
    updatePaginatorState(): void;
    empty(): boolean;
    currentPage(): number;
    get currentPageReport(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Paginator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Paginator, "p-paginator", never, { "pageLinkSize": { "alias": "pageLinkSize"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "alwaysShow": { "alias": "alwaysShow"; "required": false; }; "dropdownAppendTo": { "alias": "dropdownAppendTo"; "required": false; }; "templateLeft": { "alias": "templateLeft"; "required": false; }; "templateRight": { "alias": "templateRight"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "dropdownScrollHeight": { "alias": "dropdownScrollHeight"; "required": false; }; "currentPageReportTemplate": { "alias": "currentPageReportTemplate"; "required": false; }; "showCurrentPageReport": { "alias": "showCurrentPageReport"; "required": false; }; "showFirstLastIcon": { "alias": "showFirstLastIcon"; "required": false; }; "totalRecords": { "alias": "totalRecords"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "rowsPerPageOptions": { "alias": "rowsPerPageOptions"; "required": false; }; "showJumpToPageDropdown": { "alias": "showJumpToPageDropdown"; "required": false; }; "showJumpToPageInput": { "alias": "showJumpToPageInput"; "required": false; }; "jumpToPageItemTemplate": { "alias": "jumpToPageItemTemplate"; "required": false; }; "showPageLinks": { "alias": "showPageLinks"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "dropdownItemTemplate": { "alias": "dropdownItemTemplate"; "required": false; }; "first": { "alias": "first"; "required": false; }; }, { "onPageChange": "onPageChange"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_pageLinkSize: unknown;
    static ngAcceptInputType_alwaysShow: unknown;
    static ngAcceptInputType_showCurrentPageReport: unknown;
    static ngAcceptInputType_showFirstLastIcon: unknown;
    static ngAcceptInputType_totalRecords: unknown;
    static ngAcceptInputType_rows: unknown;
    static ngAcceptInputType_showJumpToPageDropdown: unknown;
    static ngAcceptInputType_showJumpToPageInput: unknown;
    static ngAcceptInputType_showPageLinks: unknown;
}
export declare class PaginatorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaginatorModule, [typeof Paginator], [typeof i1.CommonModule, typeof i2.DropdownModule, typeof i3.InputNumberModule, typeof i4.FormsModule, typeof i5.SharedModule, typeof i6.RippleModule, typeof i7.AngleDoubleLeftIcon, typeof i8.AngleDoubleRightIcon, typeof i9.AngleLeftIcon, typeof i10.AngleRightIcon], [typeof Paginator, typeof i2.DropdownModule, typeof i3.InputNumberModule, typeof i4.FormsModule, typeof i5.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PaginatorModule>;
}
