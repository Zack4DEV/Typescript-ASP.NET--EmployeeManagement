import { AfterContentInit, ChangeDetectorRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/api";
import * as i4 from "primeng/icons/times";
export declare class InplaceDisplay {
    static ɵfac: i0.ɵɵFactoryDeclaration<InplaceDisplay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InplaceDisplay, "p-inplaceDisplay", never, {}, {}, never, ["*"], false, never>;
}
export declare class InplaceContent {
    static ɵfac: i0.ɵɵFactoryDeclaration<InplaceContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InplaceContent, "p-inplaceContent", never, {}, {}, never, ["*"], false, never>;
}
/**
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 * @group Components
 */
export declare class Inplace implements AfterContentInit {
    cd: ChangeDetectorRef;
    /**
     * Whether the content is displayed or not.
     * @group Props
     */
    active: boolean | undefined;
    /**
     * Displays a button to switch back to display mode.
     * @group Props
     */
    closable: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Allows to prevent clicking.
     * @group Props
     */
    preventClick: boolean | undefined;
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
     * Icon to display in the close button.
     * @group Props
     */
    closeIcon: string | undefined;
    /**
     * Establishes a string value that labels the close button.
     * @group Props
     */
    closeAriaLabel: string | undefined;
    /**
     * Callback to invoke when inplace is opened.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onActivate: EventEmitter<Event>;
    /**
     * Callback to invoke when inplace is closed.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onDeactivate: EventEmitter<Event>;
    templates: QueryList<PrimeTemplate> | undefined;
    hover: boolean;
    displayTemplate: TemplateRef<any> | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    closeIconTemplate: TemplateRef<any> | undefined;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onActivateClick(event: MouseEvent): void;
    onDeactivateClick(event: MouseEvent): void;
    /**
     * Activates the content.
     * @param {Event} event - Browser event.
     * @group Method
     */
    activate(event?: Event): void;
    /**
     * Deactivates the content.
     * @param {Event} event - Browser event.
     * @group Method
     */
    deactivate(event?: Event): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Inplace, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Inplace, "p-inplace", never, { "active": { "alias": "active"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "preventClick": { "alias": "preventClick"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "closeIcon": { "alias": "closeIcon"; "required": false; }; "closeAriaLabel": { "alias": "closeAriaLabel"; "required": false; }; }, { "onActivate": "onActivate"; "onDeactivate": "onDeactivate"; }, ["templates"], ["[pInplaceDisplay]", "[pInplaceContent]"], false, never>;
    static ngAcceptInputType_active: unknown;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_preventClick: unknown;
}
export declare class InplaceModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InplaceModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InplaceModule, [typeof Inplace, typeof InplaceDisplay, typeof InplaceContent], [typeof i1.CommonModule, typeof i2.ButtonModule, typeof i3.SharedModule, typeof i4.TimesIcon], [typeof Inplace, typeof InplaceDisplay, typeof InplaceContent, typeof i2.ButtonModule, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InplaceModule>;
}
