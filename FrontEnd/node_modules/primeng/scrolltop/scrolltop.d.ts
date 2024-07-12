import { AnimationEvent } from '@angular/animations';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/icons/chevronup";
import * as i3 from "primeng/api";
/**
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 * @group Components
 */
export declare class ScrollTop implements OnInit, OnDestroy {
    private document;
    private platformId;
    private renderer;
    el: ElementRef;
    private cd;
    config: PrimeNGConfig;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Target of the ScrollTop.
     * @group Props
     */
    target: 'window' | 'parent' | undefined;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @group Props
     */
    threshold: number;
    /**
     * Name of the icon or JSX.Element for icon.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump.
     * @group Props
     */
    behavior: 'auto' | 'smooth' | undefined;
    /**
     * A string value used to determine the display transition options.
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * A string value used to determine the hiding transition options.
     * @group Props
     */
    hideTransitionOptions: string;
    /**
     * Establishes a string value that labels the scroll-top button.
     * @group Props
     */
    buttonAriaLabel: string | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    iconTemplate: TemplateRef<any> | undefined;
    documentScrollListener: VoidFunction | null | undefined;
    parentScrollListener: VoidFunction | null | undefined;
    visible: boolean;
    overlay: any;
    private window;
    constructor(document: Document, platformId: any, renderer: Renderer2, el: ElementRef, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onClick(): void;
    onEnter(event: AnimationEvent): void;
    onLeave(event: AnimationEvent): void;
    checkVisibility(scrollY: number): void;
    bindParentScrollListener(): void;
    bindDocumentScrollListener(): void;
    unbindParentScrollListener(): void;
    unbindDocumentScrollListener(): void;
    containerClass(): {
        'p-scrolltop p-link p-component': boolean;
        'p-scrolltop-sticky': boolean;
    };
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollTop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollTop, "p-scrollTop", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "target": { "alias": "target"; "required": false; }; "threshold": { "alias": "threshold"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "behavior": { "alias": "behavior"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "buttonAriaLabel": { "alias": "buttonAriaLabel"; "required": false; }; }, {}, ["templates"], never, false, never>;
    static ngAcceptInputType_threshold: unknown;
}
export declare class ScrollTopModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollTopModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ScrollTopModule, [typeof ScrollTop], [typeof i1.CommonModule, typeof i2.ChevronUpIcon, typeof i3.SharedModule], [typeof ScrollTop, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ScrollTopModule>;
}
