import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/tooltip";
import * as i5 from "primeng/api";
/**
 * Dock is a navigation component consisting of menuitems.
 * @group Components
 */
export declare class Dock implements AfterContentInit {
    private el;
    cd: ChangeDetectorRef;
    /**
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
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
     * MenuModel instance to define the action items.
     * @group Props
     */
    model: MenuItem[] | undefined | null;
    /**
     * Position of element.
     * @group Props
     */
    position: 'bottom' | 'top' | 'left' | 'right';
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Defines a string that labels the dropdown button for accessibility.
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
     * Callback to invoke when the component loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    templates: QueryList<PrimeTemplate> | undefined;
    listViewChild: Nullable<ElementRef>;
    itemTemplate: TemplateRef<any> | undefined;
    currentIndex: number;
    tabindex: number;
    focused: boolean;
    focusedOptionIndex: number;
    get focusedOptionId(): number;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    getItemId(item: any, index: any): any;
    getItemProp(processedItem: any, name: any): any;
    disabled(item: any): any;
    isItemActive(id: any): boolean;
    onListMouseLeave(): void;
    onItemMouseEnter(index: number): void;
    onItemClick(e: Event, item: MenuItem): void;
    onListFocus(event: any): void;
    onListBlur(event: any): void;
    onListKeyDown(event: any): void;
    onArrowDownKey(): void;
    onArrowUpKey(): void;
    onHomeKey(): void;
    onEndKey(): void;
    onSpaceKey(): void;
    findNextOptionIndex(index: any): number;
    changeFocusedOptionIndex(index: any): void;
    findPrevOptionIndex(index: any): number;
    get containerClass(): {
        [x: string]: boolean;
    };
    isClickableRouterLink(item: any): boolean;
    itemClass(item: any, index: number): {
        'p-dock-item': boolean;
        'p-dock-item-second-prev': boolean;
        'p-dock-item-prev': boolean;
        'p-dock-item-current': boolean;
        'p-dock-item-next': boolean;
        'p-dock-item-second-next': boolean;
        'p-focus': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<Dock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Dock, "p-dock", never, { "id": { "alias": "id"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "model": { "alias": "model"; "required": false; }; "position": { "alias": "position"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
}
export declare class DockModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DockModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DockModule, [typeof Dock], [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.RippleModule, typeof i4.TooltipModule], [typeof Dock, typeof i5.SharedModule, typeof i4.TooltipModule, typeof i2.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DockModule>;
}
