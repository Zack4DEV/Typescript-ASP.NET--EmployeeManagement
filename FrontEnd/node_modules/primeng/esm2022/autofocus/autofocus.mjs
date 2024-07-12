import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, NgModule, PLATFORM_ID, booleanAttribute, inject } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
/**
 * AutoFocus manages focus on focusable element on load.
 * @group Components
 */
export class AutoFocus {
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
export class AutoFocusModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2F1dG9mb2N1cy9hdXRvZm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUN6Qzs7O0dBR0c7QUFRSCxNQUFNLE9BQU8sU0FBUztJQUNsQjs7O09BR0c7SUFDcUMsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUVuRSxPQUFPLEdBQVksS0FBSyxDQUFDO0lBRXpCLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFakMsUUFBUSxHQUFhLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QyxJQUFJLEdBQWUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXRDLHFCQUFxQjtRQUNqQiwwRkFBMEY7UUFDMUYsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFcEYsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUMvQixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO3VHQWpEUSxTQUFTOzJGQUFULFNBQVMsZ0dBS0UsZ0JBQWdCOzsyRkFMM0IsU0FBUztrQkFQckIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7aUJBQ0o7OEJBTTJDLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7O0FBbUQxQyxNQUFNLE9BQU8sZUFBZTt1R0FBZixlQUFlO3dHQUFmLGVBQWUsWUF4RGYsU0FBUyxhQUFULFNBQVM7d0dBd0RULGVBQWU7OzJGQUFmLGVBQWU7a0JBSjNCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNwQixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBQTEFURk9STV9JRCwgYm9vbGVhbkF0dHJpYnV0ZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuLyoqXG4gKiBBdXRvRm9jdXMgbWFuYWdlcyBmb2N1cyBvbiBmb2N1c2FibGUgZWxlbWVudCBvbiBsb2FkLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcEF1dG9Gb2N1c10nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1cyB7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IGdldCBmb2N1cyBvbiBsb2FkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBsYXRmb3JtSWQgPSBpbmplY3QoUExBVEZPUk1fSUQpO1xuXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50ID0gaW5qZWN0KERPQ1VNRU5UKTtcblxuICAgIGhvc3Q6IEVsZW1lbnRSZWYgPSBpbmplY3QoRWxlbWVudFJlZik7XG5cbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgICAgIC8vIFRoaXMgc2V0cyB0aGUgYGF0dHIuYXV0b2ZvY3VzYCB3aGljaCBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgSW5wdXQgYGF1dG9mb2N1c2AgYXR0cmlidXRlLlxuICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Gb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF1dG9Gb2N1cygpIHtcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gRG9tSGFuZGxlci5nZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLmhvc3Q/Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQXV0b0ZvY3VzXSxcbiAgICBleHBvcnRzOiBbQXV0b0ZvY3VzXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNNb2R1bGUge31cbiJdfQ==