import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, PLATFORM_ID, ElementRef, booleanAttribute, Directive, Input, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';

/**
 * AutoFocus manages focus on focusable element on load.
 * @group Components
 */
class AutoFocus {
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus = false;
    focused = false;
    platformId = inject(PLATFORM_ID);
    document = inject(DOCUMENT);
    host = inject(ElementRef);
    ngAfterContentChecked() {
        // This sets the `attr.autofocus` which is different than the Input `autofocus` attribute.
        if (this.autofocus === false) {
            this.host.nativeElement.removeAttribute('autofocus');
        }
        else {
            this.host.nativeElement.setAttribute('autofocus', true);
        }
        if (!this.focused) {
            this.autoFocus();
        }
    }
    ngAfterViewChecked() {
        if (!this.focused) {
            this.autoFocus();
        }
    }
    autoFocus() {
        if (isPlatformBrowser(this.platformId) && this.autofocus) {
            setTimeout(() => {
                const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
                if (focusableElements.length === 0) {
                    this.host.nativeElement.focus();
                }
                if (focusableElements.length > 0) {
                    focusableElements[0].focus();
                }
                this.focused = true;
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AutoFocus, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.1", type: AutoFocus, isStandalone: true, selector: "[pAutoFocus]", inputs: { autofocus: ["autofocus", "autofocus", booleanAttribute] }, host: { classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AutoFocus, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pAutoFocus]',
                    standalone: true,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
class AutoFocusModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AutoFocusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: AutoFocusModule, imports: [AutoFocus], exports: [AutoFocus] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AutoFocusModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: AutoFocusModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [AutoFocus],
                    exports: [AutoFocus]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AutoFocus, AutoFocusModule };
//# sourceMappingURL=primeng-autofocus.mjs.map
