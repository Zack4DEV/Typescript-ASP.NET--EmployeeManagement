import { AfterContentInit, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { BlockableUI, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { PanelAfterToggleEvent, PanelBeforeToggleEvent } from './panel.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/icons/plus";
import * as i5 from "primeng/icons/minus";
/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
export declare class Panel implements AfterContentInit, BlockableUI {
    private el;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    toggleable: boolean | undefined;
    /**
     * Header text of the panel.
     * @group Props
     */
    header: string | undefined;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    collapsed: boolean | undefined;
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
     * Position of the icons.
     * @group Props
     */
    iconPos: 'start' | 'end' | 'center';
    /**
     * Expand icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    expandIcon: string | undefined;
    /**
     * Collapse icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    collapseIcon: string | undefined;
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    showHeader: boolean;
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    toggler: 'icon' | 'header';
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions: string;
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    collapsedChange: EventEmitter<boolean>;
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onBeforeToggle: EventEmitter<PanelBeforeToggleEvent>;
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onAfterToggle: EventEmitter<PanelAfterToggleEvent>;
    footerFacet: Nullable<TemplateRef<any>>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    iconTemplate: Nullable<TemplateRef<any>>;
    animating: Nullable<boolean>;
    headerTemplate: Nullable<TemplateRef<any>>;
    contentTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    headerIconTemplate: Nullable<TemplateRef<any>>;
    readonly id: string;
    get buttonAriaLabel(): string;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    onHeaderClick(event: MouseEvent): void;
    onIconClick(event: MouseEvent): void;
    toggle(event: MouseEvent): boolean;
    expand(): void;
    collapse(): void;
    getBlockableElement(): HTMLElement;
    onKeyDown(event: any): void;
    onToggleDone(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Panel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Panel, "p-panel", never, { "toggleable": { "alias": "toggleable"; "required": false; }; "header": { "alias": "header"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "expandIcon": { "alias": "expandIcon"; "required": false; }; "collapseIcon": { "alias": "collapseIcon"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "toggler": { "alias": "toggler"; "required": false; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; }; }, { "collapsedChange": "collapsedChange"; "onBeforeToggle": "onBeforeToggle"; "onAfterToggle": "onAfterToggle"; }, ["footerFacet", "templates"], ["p-header", "*", "p-footer"], false, never>;
    static ngAcceptInputType_toggleable: unknown;
    static ngAcceptInputType_collapsed: unknown;
    static ngAcceptInputType_showHeader: unknown;
}
export declare class PanelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PanelModule, [typeof Panel], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.RippleModule, typeof i4.PlusIcon, typeof i5.MinusIcon], [typeof Panel, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PanelModule>;
}
