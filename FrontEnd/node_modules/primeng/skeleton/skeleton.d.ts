import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Skeleton is a placeholder to display instead of the actual content.
 * @group Components
 */
export declare class Skeleton {
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
     * Shape of the element.
     * @group Props
     */
    shape: string;
    /**
     * Type of the animation.
     * @gruop Props
     */
    animation: string;
    /**
     * Border radius of the element, defaults to value from theme.
     * @group Props
     */
    borderRadius: string | undefined;
    /**
     * Size of the skeleton.
     * @group Props
     */
    size: string | undefined;
    /**
     * Width of the element.
     * @group Props
     */
    width: string;
    /**
     * Height of the element.
     * @group Props
     */
    height: string;
    containerClass(): {
        'p-skeleton p-component': boolean;
        'p-skeleton-circle': boolean;
        'p-skeleton-none': boolean;
    };
    get containerStyle(): {
        width: string;
        height: string;
        borderRadius: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<Skeleton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Skeleton, "p-skeleton", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "animation": { "alias": "animation"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class SkeletonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SkeletonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SkeletonModule, [typeof Skeleton], [typeof i1.CommonModule], [typeof Skeleton]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SkeletonModule>;
}
