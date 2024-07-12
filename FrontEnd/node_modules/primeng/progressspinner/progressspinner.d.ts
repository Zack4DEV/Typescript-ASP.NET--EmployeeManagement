import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * ProgressSpinner is a process status indicator.
 * @group Components
 */
export declare class ProgressSpinner {
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
     * Width of the circle stroke.
     * @group Props
     */
    strokeWidth: string;
    /**
     * Color for the background of the circle.
     * @group Props
     */
    fill: string;
    /**
     * Duration of the rotate animation.
     * @group Props
     */
    animationDuration: string;
    /**
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel: string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSpinner, "p-progressSpinner", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "animationDuration": { "alias": "animationDuration"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ProgressSpinnerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ProgressSpinnerModule, [typeof ProgressSpinner], [typeof i1.CommonModule], [typeof ProgressSpinner]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ProgressSpinnerModule>;
}
