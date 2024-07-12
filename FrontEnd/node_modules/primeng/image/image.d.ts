import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/icons/refresh";
import * as i4 from "primeng/icons/eye";
import * as i5 from "primeng/icons/undo";
import * as i6 from "primeng/icons/searchminus";
import * as i7 from "primeng/icons/searchplus";
import * as i8 from "primeng/icons/times";
import * as i9 from "primeng/focustrap";
/**
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 * @group Components
 */
export declare class Image implements AfterContentInit {
    private document;
    private config;
    private cd;
    el: ElementRef;
    /**
     * Style class of the image element.
     * @group Props
     */
    imageClass: string | undefined;
    /**
     * Inline style of the image element.
     * @group Props
     */
    imageStyle: {
        [klass: string]: any;
    } | null | undefined;
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
     * The source path for the main image.
     * @group Props
     */
    src: string | SafeUrl | undefined;
    /**
     * The srcset definition for the main image.
     * @group Props
     */
    srcSet: string | SafeUrl | undefined;
    /**
     * The sizes definition for the main image.
     * @group Props
     */
    sizes: string | undefined;
    /**
     * The source path for the preview image.
     * @group Props
     */
    previewImageSrc: string | SafeUrl | undefined;
    /**
     * The srcset definition for the preview image.
     * @group Props
     */
    previewImageSrcSet: string | SafeUrl | undefined;
    /**
     * The sizes definition for the preview image.
     * @group Props
     */
    previewImageSizes: string | undefined;
    /**
     * Attribute of the preview image element.
     * @group Props
     */
    alt: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    width: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    height: string | undefined;
    /**
     * Attribute of the image element.
     * @group Props
     */
    loading: 'lazy' | 'eager' | undefined;
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Controls the preview functionality.
     * @group Props
     */
    preview: boolean;
    /**
     * Transition options of the show animation
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation
     * @group Props
     */
    hideTransitionOptions: string;
    /**
     * Triggered when the preview overlay is shown.
     * @group Emits
     */
    onShow: EventEmitter<any>;
    /**
     * Triggered when the preview overlay is hidden.
     * @group Emits
     */
    onHide: EventEmitter<any>;
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError: EventEmitter<Event>;
    mask: ElementRef | undefined;
    previewButton: ElementRef | undefined;
    closeButton: ElementRef | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    indicatorTemplate: TemplateRef<any> | undefined;
    rotateRightIconTemplate: TemplateRef<any> | undefined;
    rotateLeftIconTemplate: TemplateRef<any> | undefined;
    zoomOutIconTemplate: TemplateRef<any> | undefined;
    zoomInIconTemplate: TemplateRef<any> | undefined;
    closeIconTemplate: TemplateRef<any> | undefined;
    maskVisible: boolean;
    previewVisible: boolean;
    rotate: number;
    scale: number;
    previewClick: boolean;
    container: Nullable<HTMLElement>;
    wrapper: Nullable<HTMLElement>;
    get isZoomOutDisabled(): boolean;
    get isZoomInDisabled(): boolean;
    private zoomSettings;
    constructor(document: Document, config: PrimeNGConfig, cd: ChangeDetectorRef, el: ElementRef);
    ngAfterContentInit(): void;
    onImageClick(): void;
    onMaskClick(): void;
    onMaskKeydown(event: any): void;
    onPreviewImageClick(): void;
    rotateRight(): void;
    rotateLeft(): void;
    zoomIn(): void;
    zoomOut(): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    moveOnTop(): void;
    appendContainer(): void;
    imagePreviewStyle(): {
        transform: string;
    };
    get zoomImageAriaLabel(): string;
    containerClass(): {
        'p-image p-component': boolean;
        'p-image-preview-container': boolean;
    };
    handleToolbarClick(event: MouseEvent): void;
    closePreview(): void;
    imageError(event: Event): void;
    rightAriaLabel(): string;
    leftAriaLabel(): string;
    zoomInAriaLabel(): string;
    zoomOutAriaLabel(): string;
    closeAriaLabel(): string;
    onKeydownHandler(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Image, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Image, "p-image", never, { "imageClass": { "alias": "imageClass"; "required": false; }; "imageStyle": { "alias": "imageStyle"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "src": { "alias": "src"; "required": false; }; "srcSet": { "alias": "srcSet"; "required": false; }; "sizes": { "alias": "sizes"; "required": false; }; "previewImageSrc": { "alias": "previewImageSrc"; "required": false; }; "previewImageSrcSet": { "alias": "previewImageSrcSet"; "required": false; }; "previewImageSizes": { "alias": "previewImageSizes"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "preview": { "alias": "preview"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; "onImageError": "onImageError"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_preview: unknown;
}
export declare class ImageModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ImageModule, [typeof Image], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.RefreshIcon, typeof i4.EyeIcon, typeof i5.UndoIcon, typeof i6.SearchMinusIcon, typeof i7.SearchPlusIcon, typeof i8.TimesIcon, typeof i9.FocusTrapModule], [typeof Image, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ImageModule>;
}
