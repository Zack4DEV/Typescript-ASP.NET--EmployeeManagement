import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, OnDestroy, QueryList, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { TabViewChangeEvent, TabViewCloseEvent } from './tabview.interface';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/tooltip";
import * as i4 from "primeng/ripple";
import * as i5 from "primeng/icons/times";
import * as i6 from "primeng/icons/chevronleft";
import * as i7 from "primeng/icons/chevronright";
/**
 * TabPanel is a helper component for TabView component.
 * @group Components
 */
export declare class TabPanel implements AfterContentInit, OnDestroy {
    el: ElementRef;
    viewContainer: ViewContainerRef;
    cd: ChangeDetectorRef;
    /**
     * Defines if tab can be removed.
     * @group Props
     */
    closable: boolean | undefined;
    /**
     * Inline style of the tab header.
     * @group Props
     */
    get headerStyle(): {
        [klass: string]: any;
    } | null | undefined;
    set headerStyle(headerStyle: {
        [klass: string]: any;
    } | null | undefined);
    /**
     * Style class of the tab header.
     * @group Props
     */
    get headerStyleClass(): string | undefined;
    set headerStyleClass(headerStyleClass: string | undefined);
    /**
     * Whether a lazy loaded panel should avoid getting loaded again on reselection.
     * @group Props
     */
    cache: boolean | undefined;
    /**
     * Advisory information to display in a tooltip on hover.
     * @group Props
     */
    tooltip: string | undefined;
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right' | undefined;
    /**
     * Type of CSS position.
     * @group Props
     */
    tooltipPositionStyle: string | undefined;
    /**
     * Style class of the tooltip.
     * @group Props
     */
    tooltipStyleClass: string | undefined;
    /**
     * Defines if tab is active.
     * @defaultValue false
     * @group Props
     */
    get selected(): boolean;
    set selected(val: boolean);
    /**
     * When true, tab cannot be activated.
     * @defaultValue false
     * @group Props
     */
    get disabled(): boolean;
    set disabled(disabled: boolean);
    /**
     * Title of the tabPanel.
     * @group Props
     */
    get header(): string;
    set header(header: string);
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `lefticon` template instead.
     */
    get leftIcon(): string;
    set leftIcon(leftIcon: string);
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `righticon` template instead.
     */
    get rightIcon(): string | undefined;
    set rightIcon(rightIcon: string | undefined);
    templates: QueryList<PrimeTemplate> | undefined;
    closed: boolean;
    view: EmbeddedViewRef<any> | null;
    _headerStyle: {
        [klass: string]: any;
    } | null | undefined;
    _headerStyleClass: string | undefined;
    _selected: boolean | undefined;
    _disabled: boolean | undefined;
    _header: string;
    _leftIcon: string;
    _rightIcon: string | undefined;
    loaded: boolean;
    id: string | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    headerTemplate: TemplateRef<any> | undefined;
    leftIconTemplate: TemplateRef<any> | undefined;
    rightIconTemplate: TemplateRef<any> | undefined;
    closeIconTemplate: TemplateRef<any> | undefined;
    tabView: TabView;
    constructor(tabView: TabView, el: ElementRef, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabPanel, "p-tabPanel", never, { "closable": { "alias": "closable"; "required": false; }; "headerStyle": { "alias": "headerStyle"; "required": false; }; "headerStyleClass": { "alias": "headerStyleClass"; "required": false; }; "cache": { "alias": "cache"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "tooltipPositionStyle": { "alias": "tooltipPositionStyle"; "required": false; }; "tooltipStyleClass": { "alias": "tooltipStyleClass"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "header": { "alias": "header"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_cache: unknown;
}
/**
 * TabView is a container component to group content with tabs.
 * @group Components
 */
export declare class TabView implements AfterContentInit, AfterViewChecked, OnDestroy, BlockableUI {
    private platformId;
    el: ElementRef;
    cd: ChangeDetectorRef;
    private renderer;
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
     * Whether tab close is controlled at onClose event or not.
     * @defaultValue false
     * @group Props
     */
    controlClose: boolean | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @defaultValue false
     * @group Props
     */
    scrollable: boolean | undefined;
    /**
     * Index of the active tab to change selected tab programmatically.
     * @group Props
     */
    get activeIndex(): number;
    set activeIndex(val: number);
    /**
     * When enabled, the focused tab is activated.
     * @group Props
     */
    selectOnFocus: boolean;
    /**
     * Used to define a string aria label attribute the forward navigation button.
     * @group Props
     */
    nextButtonAriaLabel: string | undefined;
    /**
     * Used to define a string aria label attribute the backward navigation button.
     * @group Props
     */
    prevButtonAriaLabel: string | undefined;
    /**
     * When activated, navigation buttons will automatically hide or show based on the available space within the container.
     * @group Props
     */
    autoHideButtons: boolean;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number;
    /**
     * Callback to invoke on tab change.
     * @param {TabViewChangeEvent} event - Custom tab change event
     * @group Emits
     */
    onChange: EventEmitter<TabViewChangeEvent>;
    /**
     * Callback to invoke on tab close.
     * @param {TabViewCloseEvent} event - Custom tab close event
     * @group Emits
     */
    onClose: EventEmitter<TabViewCloseEvent>;
    /**
     * Callback to invoke on the active tab change.
     * @param {number} index - New active index
     * @group Emits
     */
    activeIndexChange: EventEmitter<number>;
    content?: ElementRef<HTMLDivElement>;
    navbar?: ElementRef<HTMLUListElement>;
    prevBtn?: ElementRef;
    nextBtn?: ElementRef;
    inkbar?: ElementRef;
    tabPanels: QueryList<TabPanel> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    initialized: boolean | undefined;
    tabs: TabPanel[];
    _activeIndex: number;
    preventActiveIndexPropagation: boolean;
    tabChanged: boolean | undefined;
    backwardIsDisabled: boolean;
    forwardIsDisabled: boolean;
    private tabChangesSubscription;
    nextIconTemplate: TemplateRef<any> | undefined;
    previousIconTemplate: TemplateRef<any> | undefined;
    resizeObserver: Nullable<ResizeObserver>;
    container: HTMLDivElement | undefined;
    list: HTMLUListElement | undefined;
    buttonVisible: boolean;
    elementToObserve: ElementRef;
    constructor(platformId: any, el: ElementRef, cd: ChangeDetectorRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    bindResizeObserver(): void;
    unbindResizeObserver(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    getTabHeaderActionId(tabId: any): string;
    getTabContentId(tabId: any): string;
    initTabs(): void;
    onTabKeyDown(event: KeyboardEvent, tab: TabPanel): void;
    onTabArrowLeftKey(event: KeyboardEvent): void;
    onTabArrowRightKey(event: KeyboardEvent): void;
    onTabHomeKey(event: KeyboardEvent): void;
    onTabEndKey(event: KeyboardEvent): void;
    changeFocusedTab(event: KeyboardEvent, element: any, index: number): void;
    findNextHeaderAction(tabElement: any, selfCheck?: boolean): any;
    findPrevHeaderAction(tabElement: any, selfCheck?: boolean): any;
    findFirstHeaderAction(): any;
    findLastHeaderAction(): any;
    open(event: Event, tab: TabPanel): void;
    close(event: Event, tab: TabPanel): void;
    closeTab(tab: TabPanel): void;
    findSelectedTab(): TabPanel | null;
    findTabIndex(tab: TabPanel): number;
    getBlockableElement(): HTMLElement;
    updateInkBar(): void;
    updateScrollBar(index: number): void;
    updateButtonState(): void;
    refreshButtonState(): void;
    onScroll(event: Event): void;
    getVisibleButtonWidths(): any;
    navBackward(): void;
    navForward(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabView, "p-tabView", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "controlClose": { "alias": "controlClose"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "activeIndex": { "alias": "activeIndex"; "required": false; }; "selectOnFocus": { "alias": "selectOnFocus"; "required": false; }; "nextButtonAriaLabel": { "alias": "nextButtonAriaLabel"; "required": false; }; "prevButtonAriaLabel": { "alias": "prevButtonAriaLabel"; "required": false; }; "autoHideButtons": { "alias": "autoHideButtons"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "onChange": "onChange"; "onClose": "onClose"; "activeIndexChange": "activeIndexChange"; }, ["tabPanels", "templates"], ["*"], false, never>;
    static ngAcceptInputType_controlClose: unknown;
    static ngAcceptInputType_scrollable: unknown;
    static ngAcceptInputType_selectOnFocus: unknown;
    static ngAcceptInputType_autoHideButtons: unknown;
    static ngAcceptInputType_tabindex: unknown;
}
export declare class TabViewModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabViewModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TabViewModule, [typeof TabView, typeof TabPanel], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.TooltipModule, typeof i4.RippleModule, typeof i5.TimesIcon, typeof i6.ChevronLeftIcon, typeof i7.ChevronRightIcon], [typeof TabView, typeof TabPanel, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TabViewModule>;
}
