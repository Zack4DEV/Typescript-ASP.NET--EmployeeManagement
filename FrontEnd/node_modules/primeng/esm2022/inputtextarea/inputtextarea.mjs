import { NgModule, Directive, HostListener, Input, Output, EventEmitter, Optional, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/api";
/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
export class InputTextarea {
    el;
    ngModel;
    control;
    cd;
    config;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize = new EventEmitter();
    filled;
    cachedScrollHeight;
    ngModelSubscription;
    ngControlSubscription;
    constructor(el, ngModel, control, cd, config) {
        this.el = el;
        this.ngModel = ngModel;
        this.control = control;
        this.cd = cd;
        this.config = config;
    }
    ngOnInit() {
        if (this.ngModel) {
            this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
        if (this.control) {
            this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
    }
    ngAfterViewInit() {
        if (this.autoResize)
            this.resize();
        this.updateFilledState();
        this.cd.detectChanges();
    }
    onInput(e) {
        this.updateState();
    }
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    resize(event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = 'scroll';
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = 'hidden';
        }
        this.onResize.emit(event || {});
    }
    updateState() {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    }
    ngOnDestroy() {
        if (this.ngModelSubscription) {
            this.ngModelSubscription.unsubscribe();
        }
        if (this.ngControlSubscription) {
            this.ngControlSubscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextarea, deps: [{ token: i0.ElementRef }, { token: i1.NgModel, optional: true }, { token: i1.NgControl, optional: true }, { token: i0.ChangeDetectorRef }, { token: i2.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.1", type: InputTextarea, selector: "[pInputTextarea]", inputs: { autoResize: ["autoResize", "autoResize", booleanAttribute], variant: "variant" }, outputs: { onResize: "onResize" }, host: { listeners: { "input": "onInput($event)" }, properties: { "class.p-filled": "filled", "class.p-inputtextarea-resizable": "autoResize", "class.p-variant-filled": "variant === \"filled\" || config.inputStyle() === \"filled\"" }, classAttribute: "p-inputtextarea p-inputtext p-component p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextarea, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pInputTextarea]',
                    host: {
                        class: 'p-inputtextarea p-inputtext p-component p-element',
                        '[class.p-filled]': 'filled',
                        '[class.p-inputtextarea-resizable]': 'autoResize',
                        '[class.p-variant-filled]': 'variant === "filled" || config.inputStyle() === "filled"'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.NgModel, decorators: [{
                    type: Optional
                }] }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.PrimeNGConfig }], propDecorators: { autoResize: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], variant: [{
                type: Input
            }], onResize: [{
                type: Output
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
export class InputTextareaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: InputTextareaModule, declarations: [InputTextarea], imports: [CommonModule], exports: [InputTextarea] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextareaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: InputTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [InputTextarea],
                    declarations: [InputTextarea]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0YXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dHRleHRhcmVhL2lucHV0dGV4dGFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBeUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOU0sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRy9DOzs7R0FHRztBQVVILE1BQU0sT0FBTyxhQUFhO0lBMkJYO0lBQ1k7SUFDQTtJQUNYO0lBQ0Q7SUE5Qlg7OztPQUdHO0lBQ3FDLFVBQVUsQ0FBc0I7SUFDeEU7OztPQUdHO0lBQ00sT0FBTyxHQUEwQixVQUFVLENBQUM7SUFDckQ7Ozs7T0FJRztJQUNPLFFBQVEsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUU5RSxNQUFNLENBQXNCO0lBRTVCLGtCQUFrQixDQUFxQjtJQUV2QyxtQkFBbUIsQ0FBMkI7SUFFOUMscUJBQXFCLENBQTJCO0lBRWhELFlBQ1csRUFBYyxFQUNGLE9BQWdCLEVBQ2hCLE9BQWtCLEVBQzdCLEVBQXFCLEVBQ3RCLE1BQXFCO1FBSnJCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDRixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDN0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUM3QixDQUFDO0lBRUosUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLG1CQUFtQixHQUFJLElBQUksQ0FBQyxPQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pFLElBQUks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QkFDekY7aUJBQ0o7OzBCQTZCUSxRQUFROzswQkFDUixRQUFRO3FHQXhCMkIsVUFBVTtzQkFBakQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLN0IsT0FBTztzQkFBZixLQUFLO2dCQU1JLFFBQVE7c0JBQWpCLE1BQU07Z0JBd0NQLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBK0NyQyxNQUFNLE9BQU8sbUJBQW1CO3VHQUFuQixtQkFBbUI7d0dBQW5CLG1CQUFtQixpQkF0R25CLGFBQWEsYUFrR1osWUFBWSxhQWxHYixhQUFhO3dHQXNHYixtQkFBbUIsWUFKbEIsWUFBWTs7MkZBSWIsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0NoZWNrZWQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwsIE5nQ29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcmltZU5HQ29uZmlnIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuLyoqXG4gKiBJbnB1dFRleHRhcmVhIGFkZHMgc3R5bGluZyBhbmQgYXV0b1Jlc2l6ZSBmdW5jdGlvbmFsaXR5IHRvIHN0YW5kYXJkIHRleHRhcmVhIGVsZW1lbnQuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twSW5wdXRUZXh0YXJlYV0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWlucHV0dGV4dGFyZWEgcC1pbnB1dHRleHQgcC1jb21wb25lbnQgcC1lbGVtZW50JyxcbiAgICAgICAgJ1tjbGFzcy5wLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0dGV4dGFyZWEtcmVzaXphYmxlXSc6ICdhdXRvUmVzaXplJyxcbiAgICAgICAgJ1tjbGFzcy5wLXZhcmlhbnQtZmlsbGVkXSc6ICd2YXJpYW50ID09PSBcImZpbGxlZFwiIHx8IGNvbmZpZy5pbnB1dFN0eWxlKCkgPT09IFwiZmlsbGVkXCInXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRhcmVhIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgdGV4dGFyZWEgc2l6ZSBjaGFuZ2VzIGFzIGJlaW5nIHR5cGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvUmVzaXplOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgaW5wdXQgdmFyaWFudCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZhcmlhbnQ6ICdmaWxsZWQnIHwgJ291dGxpbmVkJyA9ICdvdXRsaW5lZCc7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIHRleHRhcmVhIHJlc2l6ZS5cbiAgICAgKiBAcGFyYW0geyhFdmVudCB8IHt9KX0gZXZlbnQgLSBDdXN0b20gcmVzaXplIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblJlc2l6ZTogRXZlbnRFbWl0dGVyPEV2ZW50IHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudCB8IHt9PigpO1xuXG4gICAgZmlsbGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgY2FjaGVkU2Nyb2xsSGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBuZ01vZGVsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG5cbiAgICBuZ0NvbnRyb2xTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBuZ01vZGVsOiBOZ01vZGVsLFxuICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbDogTmdDb250cm9sLFxuICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZ1xuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5uZ01vZGVsKSB7XG4gICAgICAgICAgICB0aGlzLm5nTW9kZWxTdWJzY3JpcHRpb24gPSAodGhpcy5uZ01vZGVsIGFzIGFueSkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbiA9ICh0aGlzLmNvbnRyb2wgYXMgYW55KS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSkgdGhpcy5yZXNpemUoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBvbklucHV0KGU6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGaWxsZWRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5maWxsZWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNpemUoZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XG5cbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCkgPj0gcGFyc2VGbG9hdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25SZXNpemUuZW1pdChldmVudCB8fCB7fSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5nTW9kZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtJbnB1dFRleHRhcmVhXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dFRleHRhcmVhXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRhcmVhTW9kdWxlIHt9XG4iXX0=