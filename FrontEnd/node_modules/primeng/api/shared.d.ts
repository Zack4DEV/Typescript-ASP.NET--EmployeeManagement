import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class Header {
    static ɵfac: i0.ɵɵFactoryDeclaration<Header, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Header, "p-header", never, {}, {}, never, ["*"], true, never>;
}
export declare class Footer {
    static ɵfac: i0.ɵɵFactoryDeclaration<Footer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Footer, "p-footer", never, {}, {}, never, ["*"], true, never>;
}
export declare class PrimeTemplate {
    template: TemplateRef<any>;
    type: string | undefined;
    name: string | undefined;
    constructor(template: TemplateRef<any>);
    getType(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrimeTemplate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrimeTemplate, "[pTemplate]", never, { "type": { "alias": "type"; "required": false; }; "name": { "alias": "pTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, never, [typeof Header, typeof Footer, typeof PrimeTemplate], [typeof Header, typeof Footer, typeof PrimeTemplate]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
