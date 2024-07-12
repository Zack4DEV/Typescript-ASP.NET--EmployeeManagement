import { ChangeDetectorRef, EventEmitter, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { RatingRateEvent } from './rating.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/autofocus";
import * as i3 from "primeng/icons/starfill";
import * as i4 from "primeng/icons/star";
import * as i5 from "primeng/icons/ban";
import * as i6 from "primeng/api";
export declare const RATING_VALUE_ACCESSOR: any;
/**
 * Rating is an extension to standard radio button element with theming.
 * @group Components
 */
export declare class Rating implements OnInit, ControlValueAccessor {
    private cd;
    private config;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * When present, changing the value is not possible.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * Number of stars.
     * @group Props
     */
    stars: number;
    /**
     * When specified a cancel icon is displayed to allow removing the value.
     * @group Props
     */
    cancel: boolean;
    /**
     * Style class of the on icon.
     * @group Props
     */
    iconOnClass: string | undefined;
    /**
     * Inline style of the on icon.
     * @group Props
     */
    iconOnStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the off icon.
     * @group Props
     */
    iconOffClass: string | undefined;
    /**
     * Inline style of the off icon.
     * @group Props
     */
    iconOffStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the cancel icon.
     * @group Props
     */
    iconCancelClass: string | undefined;
    /**
     * Inline style of the cancel icon.
     * @group Props
     */
    iconCancelStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Emitted on value change.
     * @param {RatingRateEvent} value - Custom rate event.
     * @group Emits
     */
    onRate: EventEmitter<RatingRateEvent>;
    /**
     * Emitted when the rating is cancelled.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onCancel: EventEmitter<Event>;
    /**
     * Emitted when the rating receives focus.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Emitted when the rating loses focus.
     * @param {Event} value - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    templates: QueryList<PrimeTemplate>;
    onIconTemplate: Nullable<TemplateRef<any>>;
    offIconTemplate: Nullable<TemplateRef<any>>;
    cancelIconTemplate: Nullable<TemplateRef<any>>;
    value: Nullable<number>;
    onModelChange: Function;
    onModelTouched: Function;
    starsArray: Nullable<number[]>;
    isFocusVisibleItem: boolean;
    focusedOptionIndex: import("@angular/core").WritableSignal<number>;
    name: string | undefined;
    constructor(cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onOptionClick(event: any, value: any): void;
    onOptionSelect(event: any, value: any): void;
    onChange(event: any, value: any): void;
    onInputBlur(event: any): void;
    onInputFocus(event: any, value: any): void;
    updateModel(event: any, value: any): void;
    cancelAriaLabel(): string;
    starAriaLabel(value: any): string;
    getIconTemplate(i: number): Nullable<TemplateRef<any>>;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    get isCustomIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Rating, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Rating, "p-rating", never, { "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "stars": { "alias": "stars"; "required": false; }; "cancel": { "alias": "cancel"; "required": false; }; "iconOnClass": { "alias": "iconOnClass"; "required": false; }; "iconOnStyle": { "alias": "iconOnStyle"; "required": false; }; "iconOffClass": { "alias": "iconOffClass"; "required": false; }; "iconOffStyle": { "alias": "iconOffStyle"; "required": false; }; "iconCancelClass": { "alias": "iconCancelClass"; "required": false; }; "iconCancelStyle": { "alias": "iconCancelStyle"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "onRate": "onRate"; "onCancel": "onCancel"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_stars: unknown;
    static ngAcceptInputType_cancel: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class RatingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RatingModule, [typeof Rating], [typeof i1.CommonModule, typeof i2.AutoFocusModule, typeof i3.StarFillIcon, typeof i4.StarIcon, typeof i5.BanIcon], [typeof Rating, typeof i6.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RatingModule>;
}
