import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
/**
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
export declare class InputGroupAddon {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<InputGroupAddon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputGroupAddon, "p-inputGroupAddon", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class InputGroupAddonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputGroupAddonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputGroupAddonModule, [typeof InputGroupAddon], [typeof i1.CommonModule], [typeof InputGroupAddon, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputGroupAddonModule>;
}
