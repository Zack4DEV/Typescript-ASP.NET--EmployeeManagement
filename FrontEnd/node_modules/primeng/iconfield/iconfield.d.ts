import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
/**
 * IconField wraps an input and an icon.
 * @group Components
 */
export declare class IconField {
    /**
     * Position of the icon.
     * @group Props
     */
    iconPosition: 'right' | 'left';
    get containerClass(): {
        'p-icon-field-left': boolean;
        'p-icon-field-right': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<IconField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconField, "p-iconField", never, { "iconPosition": { "alias": "iconPosition"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class IconFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IconFieldModule, [typeof IconField], [typeof i1.CommonModule], [typeof IconField, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IconFieldModule>;
}
