import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Divider is used to separate contents.
 * @group Components
 */
export declare class Divider {
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
     * Specifies the orientation.
     * @group Props
     */
    layout: 'horizontal' | 'vertical' | undefined;
    /**
     * Border style type.
     * @group Props
     */
    type: 'solid' | 'dashed' | 'dotted' | undefined;
    /**
     * Alignment of the content.
     * @group Props
     */
    align: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom' | undefined;
    containerClass(): {
        'p-divider p-component': boolean;
        'p-divider-horizontal': boolean;
        'p-divider-vertical': boolean;
        'p-divider-solid': boolean;
        'p-divider-dashed': boolean;
        'p-divider-dotted': boolean;
        'p-divider-left': boolean;
        'p-divider-center': boolean;
        'p-divider-right': boolean;
        'p-divider-top': boolean;
        'p-divider-bottom': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<Divider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Divider, "p-divider", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "type": { "alias": "type"; "required": false; }; "align": { "alias": "align"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class DividerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DividerModule, [typeof Divider], [typeof i1.CommonModule], [typeof Divider]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DividerModule>;
}
