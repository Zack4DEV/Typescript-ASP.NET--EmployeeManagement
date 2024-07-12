import { AfterViewInit, ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Defer postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
 * @group Components
 */
export declare class DeferredLoader implements AfterViewInit, OnDestroy {
    private document;
    private platformId;
    el: ElementRef;
    renderer: Renderer2;
    viewContainer: ViewContainerRef;
    private cd;
    /**
     * Callback to invoke when deferred content is loaded.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onLoad: EventEmitter<Event>;
    template: TemplateRef<any> | undefined;
    documentScrollListener: Nullable<Function>;
    view: Nullable<EmbeddedViewRef<any>>;
    window: Window;
    constructor(document: Document, platformId: any, el: ElementRef, renderer: Renderer2, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    shouldLoad(): boolean;
    load(): void;
    isLoaded(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeferredLoader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DeferredLoader, "[pDefer]", never, {}, { "onLoad": "onLoad"; }, ["template"], never, false, never>;
}
export declare class DeferModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DeferModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DeferModule, [typeof DeferredLoader], [typeof i1.CommonModule], [typeof DeferredLoader]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DeferModule>;
}
