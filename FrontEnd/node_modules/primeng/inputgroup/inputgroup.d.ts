import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
/**
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
export declare class InputGroup {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<InputGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputGroup, "p-inputGroup", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class InputGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputGroupModule, [typeof InputGroup], [typeof i1.CommonModule], [typeof InputGroup, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputGroupModule>;
}
