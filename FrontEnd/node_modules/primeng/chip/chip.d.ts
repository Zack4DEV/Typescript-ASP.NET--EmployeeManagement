import { AfterContentInit, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/icons/timescircle";
import * as i3 from "primeng/api";
/**
 * Chip represents people using icons, labels and images.
 * @group Components
 */
export declare class Chip implements AfterContentInit {
    /**
     * Defines the text to display.
     * @group Props
     */
    label: string | undefined;
    /**
     * Defines the icon to display.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Defines the image to display.
     * @group Props
     */
    image: string | undefined;
    /**
     * Alt attribute of the image.
     * @group Props
     */
    alt: string | undefined;
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
     * Whether to display a remove icon.
     * @group Props
     */
    removable: boolean | undefined;
    /**
     * Icon of the remove element.
     * @group Props
     */
    removeIcon: string | undefined;
    /**
     * Callback to invoke when a chip is removed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onRemove: EventEmitter<MouseEvent>;
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError: EventEmitter<Event>;
    config: PrimeNGConfig;
    visible: boolean;
    removeIconTemplate: TemplateRef<any> | undefined;
    get removeAriaLabel(): any;
    templates: QueryList<PrimeTemplate> | undefined;
    ngAfterContentInit(): void;
    containerClass(): {
        'p-chip p-component': boolean;
        'p-chip-image': boolean;
    };
    close(event: MouseEvent): void;
    onKeydown(event: any): void;
    imageError(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Chip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Chip, "p-chip", never, { "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "removeIcon": { "alias": "removeIcon"; "required": false; }; }, { "onRemove": "onRemove"; "onImageError": "onImageError"; }, ["templates"], ["*"], false, never>;
    static ngAcceptInputType_removable: unknown;
}
export declare class ChipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChipModule, [typeof Chip], [typeof i1.CommonModule, typeof i2.TimesCircleIcon, typeof i3.SharedModule], [typeof Chip, typeof i3.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChipModule>;
}
