import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * AutoFocus manages focus on focusable element on load.
 * @group Components
 */
export declare class AutoFocus {
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean;
    focused: boolean;
    platformId: Object;
    document: Document;
    host: ElementRef;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    autoFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocus, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocus, "[pAutoFocus]", never, { "autofocus": { "alias": "autofocus"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_autofocus: unknown;
}
export declare class AutoFocusModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AutoFocusModule, never, [typeof AutoFocus], [typeof AutoFocus]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AutoFocusModule>;
}
