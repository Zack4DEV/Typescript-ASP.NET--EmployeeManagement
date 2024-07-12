import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * BlockUI can either block other components or the whole page.
 * @group Components
 */
export declare class BlockUI implements AfterViewInit, OnDestroy {
    private document;
    el: ElementRef;
    cd: ChangeDetectorRef;
    config: PrimeNGConfig;
    private renderer;
    platformId: any;
    /**
     * Name of the local ng-template variable referring to another component.
     * @group Props
     */
    target: any;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex: boolean;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex: number;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Current blocked state as a boolean.
     * @group Props
     */
    get blocked(): boolean;
    set blocked(val: boolean);
    templates: QueryList<PrimeTemplate> | undefined;
    mask: ElementRef | undefined;
    _blocked: boolean;
    animationEndListener: VoidFunction | null | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    constructor(document: Document, el: ElementRef, cd: ChangeDetectorRef, config: PrimeNGConfig, renderer: Renderer2, platformId: any);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    block(): void;
    unblock(): void;
    destroyModal(): void;
    unbindAnimationEndListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUI, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockUI, "p-blockUI", never, { "target": { "alias": "target"; "required": false; }; "autoZIndex": { "alias": "autoZIndex"; "required": false; }; "baseZIndex": { "alias": "baseZIndex"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "blocked": { "alias": "blocked"; "required": false; }; }, {}, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_autoZIndex: unknown;
    static ngAcceptInputType_baseZIndex: unknown;
}
export declare class BlockUIModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUIModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BlockUIModule, [typeof BlockUI], [typeof i1.CommonModule], [typeof BlockUI]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BlockUIModule>;
}
