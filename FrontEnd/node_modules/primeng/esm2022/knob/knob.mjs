import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, NgModule, Output, ViewEncapsulation, booleanAttribute, forwardRef, numberAttribute } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export const KNOB_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Knob),
    multi: true
};
/**
 * Knob is a form component to define number inputs with a dial.
 * @group Components
 */
export class Knob {
    document;
    renderer;
    cd;
    el;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Background of the value.
     * @group Props
     */
    valueColor = 'var(--primary-color, Black)';
    /**
     * Background color of the range.
     * @group Props
     */
    rangeColor = 'var(--surface-border, LightGray)';
    /**
     * Color of the value text.
     * @group Props
     */
    textColor = 'var(--text-color-secondary, Black)';
    /**
     * Template string of the value.
     * @group Props
     */
    valueTemplate = '{value}';
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Size of the component in pixels.
     * @group Props
     */
    size = 100;
    /**
     * Step factor to increment/decrement the value.
     * @group Props
     */
    step = 1;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min = 0;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max = 100;
    /**
     * Width of the knob stroke.
     * @group Props
     */
    strokeWidth = 14;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Whether the show the value inside the knob.
     * @group Props
     */
    showValue = true;
    /**
     * When present, it specifies that the component value cannot be edited.
     * @group Props
     */
    readonly = false;
    /**
     * Callback to invoke on value change.
     * @param {number} value - New value.
     * @group Emits
     */
    onChange = new EventEmitter();
    radius = 40;
    midX = 50;
    midY = 50;
    minRadians = (4 * Math.PI) / 3;
    maxRadians = -Math.PI / 3;
    value = 0;
    windowMouseMoveListener;
    windowMouseUpListener;
    windowTouchMoveListener;
    windowTouchEndListener;
    onModelChange = () => { };
    onModelTouched = () => { };
    constructor(document, renderer, cd, el) {
        this.document = document;
        this.renderer = renderer;
        this.cd = cd;
        this.el = el;
    }
    mapRange(x, inMin, inMax, outMin, outMax) {
        return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    onClick(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
        }
    }
    updateValue(offsetX, offsetY) {
        let dx = offsetX - this.size / 2;
        let dy = this.size / 2 - offsetY;
        let angle = Math.atan2(dy, dx);
        let start = -Math.PI / 2 - Math.PI / 6;
        this.updateModel(angle, start);
    }
    updateModel(angle, start) {
        let mappedValue;
        if (angle > this.maxRadians)
            mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
        else if (angle < start)
            mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
        else
            return;
        let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
        this.value = newValue;
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }
    onMouseDown(event) {
        if (!this.disabled && !this.readonly) {
            const window = this.document.defaultView || 'window';
            this.windowMouseMoveListener = this.renderer.listen(window, 'mousemove', this.onMouseMove.bind(this));
            this.windowMouseUpListener = this.renderer.listen(window, 'mouseup', this.onMouseUp.bind(this));
            event.preventDefault();
        }
    }
    onMouseUp(event) {
        if (!this.disabled && !this.readonly) {
            if (this.windowMouseMoveListener) {
                this.windowMouseMoveListener();
                this.windowMouseUpListener = null;
            }
            if (this.windowMouseUpListener) {
                this.windowMouseUpListener();
                this.windowMouseMoveListener = null;
            }
            event.preventDefault();
        }
    }
    onTouchStart(event) {
        if (!this.disabled && !this.readonly) {
            const window = this.document.defaultView || 'window';
            this.windowTouchMoveListener = this.renderer.listen(window, 'touchmove', this.onTouchMove.bind(this));
            this.windowTouchEndListener = this.renderer.listen(window, 'touchend', this.onTouchEnd.bind(this));
            event.preventDefault();
        }
    }
    onTouchEnd(event) {
        if (!this.disabled && !this.readonly) {
            if (this.windowTouchMoveListener) {
                this.windowTouchMoveListener();
            }
            if (this.windowTouchEndListener) {
                this.windowTouchEndListener();
            }
            this.windowTouchMoveListener = null;
            this.windowTouchEndListener = null;
            event.preventDefault();
        }
    }
    onMouseMove(event) {
        if (!this.disabled && !this.readonly) {
            this.updateValue(event.offsetX, event.offsetY);
            event.preventDefault();
        }
    }
    onTouchMove(event) {
        if (!this.disabled && !this.readonly && event instanceof TouchEvent && event.touches.length === 1) {
            const rect = this.el.nativeElement.children[0].getBoundingClientRect();
            const touch = event.targetTouches.item(0);
            if (touch) {
                const offsetX = touch.clientX - rect.left;
                const offsetY = touch.clientY - rect.top;
                this.updateValue(offsetX, offsetY);
            }
        }
    }
    updateModelValue(newValue) {
        if (newValue > this.max)
            this.value = this.max;
        else if (newValue < this.min)
            this.value = this.min;
        else
            this.value = newValue;
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }
    onKeyDown(event) {
        if (!this.disabled && !this.readonly) {
            switch (event.code) {
                case 'ArrowRight':
                case 'ArrowUp': {
                    event.preventDefault();
                    this.updateModelValue(this._value + 1);
                    break;
                }
                case 'ArrowLeft':
                case 'ArrowDown': {
                    event.preventDefault();
                    this.updateModelValue(this._value - 1);
                    break;
                }
                case 'Home': {
                    event.preventDefault();
                    this.updateModelValue(this.min);
                    break;
                }
                case 'End': {
                    event.preventDefault();
                    this.updateModelValue(this.max);
                    break;
                }
                case 'PageUp': {
                    event.preventDefault();
                    this.updateModelValue(this._value + 10);
                    break;
                }
                case 'PageDown': {
                    event.preventDefault();
                    this.updateModelValue(this._value - 10);
                    break;
                }
            }
        }
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    containerClass() {
        return {
            'p-knob p-component': true,
            'p-disabled': this.disabled
        };
    }
    rangePath() {
        return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
    }
    valuePath() {
        return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
    }
    zeroRadians() {
        if (this.min > 0 && this.max > 0)
            return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
        else
            return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    }
    valueRadians() {
        return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
    }
    minX() {
        return this.midX + Math.cos(this.minRadians) * this.radius;
    }
    minY() {
        return this.midY - Math.sin(this.minRadians) * this.radius;
    }
    maxX() {
        return this.midX + Math.cos(this.maxRadians) * this.radius;
    }
    maxY() {
        return this.midY - Math.sin(this.maxRadians) * this.radius;
    }
    zeroX() {
        return this.midX + Math.cos(this.zeroRadians()) * this.radius;
    }
    zeroY() {
        return this.midY - Math.sin(this.zeroRadians()) * this.radius;
    }
    valueX() {
        return this.midX + Math.cos(this.valueRadians()) * this.radius;
    }
    valueY() {
        return this.midY - Math.sin(this.valueRadians()) * this.radius;
    }
    largeArc() {
        return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
    }
    sweep() {
        return this.valueRadians() > this.zeroRadians() ? 0 : 1;
    }
    valueToDisplay() {
        return this.valueTemplate.replace('{value}', this._value.toString());
    }
    get _value() {
        return this.value != null ? this.value : this.min;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Knob, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.1", type: Knob, selector: "p-knob", inputs: { styleClass: "styleClass", style: "style", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", tabindex: ["tabindex", "tabindex", numberAttribute], valueColor: "valueColor", rangeColor: "rangeColor", textColor: "textColor", valueTemplate: "valueTemplate", name: "name", size: ["size", "size", numberAttribute], step: ["step", "step", numberAttribute], min: ["min", "min", numberAttribute], max: ["max", "max", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], showValue: ["showValue", "showValue", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute] }, outputs: { onChange: "onChange" }, host: { classAttribute: "p-element" }, providers: [KNOB_VALUE_ACCESSOR], ngImport: i0, template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" [attr.data-pc-name]="'knob'" [attr.data-pc-section]="'root'">
            <svg
                viewBox="0 0 100 100"
                role="slider"
                [style.width]="size + 'px'"
                [style.height]="size + 'px'"
                (click)="onClick($event)"
                (keydown)="onKeyDown($event)"
                (mousedown)="onMouseDown($event)"
                (mouseup)="onMouseUp($event)"
                (touchstart)="onTouchStart($event)"
                (touchend)="onTouchEnd($event)"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="_value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.tabindex]="readonly || disabled ? -1 : tabindex"
                [attr.data-pc-section]="'svg'"
            >
                <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" class="p-knob-range"></path>
                <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" class="p-knob-value"></path>
                <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" class="p-knob-text" [attr.name]="name">{{ valueToDisplay() }}</text>
            </svg>
        </div>
    `, isInline: true, styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}@layer primeng{.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Knob, decorators: [{
            type: Component,
            args: [{ selector: 'p-knob', template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" [attr.data-pc-name]="'knob'" [attr.data-pc-section]="'root'">
            <svg
                viewBox="0 0 100 100"
                role="slider"
                [style.width]="size + 'px'"
                [style.height]="size + 'px'"
                (click)="onClick($event)"
                (keydown)="onKeyDown($event)"
                (mousedown)="onMouseDown($event)"
                (mouseup)="onMouseUp($event)"
                (touchstart)="onTouchStart($event)"
                (touchend)="onTouchEnd($event)"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="_value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.tabindex]="readonly || disabled ? -1 : tabindex"
                [attr.data-pc-section]="'svg'"
            >
                <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" class="p-knob-range"></path>
                <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" class="p-knob-value"></path>
                <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" class="p-knob-text" [attr.name]="name">{{ valueToDisplay() }}</text>
            </svg>
        </div>
    `, providers: [KNOB_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}@layer primeng{.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }], propDecorators: { styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], tabindex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], valueColor: [{
                type: Input
            }], rangeColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }], valueTemplate: [{
                type: Input
            }], name: [{
                type: Input
            }], size: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], step: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], min: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], max: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], strokeWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showValue: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], onChange: [{
                type: Output
            }] } });
export class KnobModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KnobModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: KnobModule, declarations: [Knob], imports: [CommonModule], exports: [Knob] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KnobModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: KnobModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Knob],
                    declarations: [Knob]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9rbm9iL2tub2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOU4sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBUTtJQUNwQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ25DLEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUNGOzs7R0FHRztBQXNDSCxNQUFNLE9BQU8sSUFBSTtJQTJIaUI7SUFDbEI7SUFDQTtJQUNBO0lBN0haOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFDeEM7OztPQUdHO0lBQ00sS0FBSyxDQUE4QztJQUM1RDs7O09BR0c7SUFDTSxTQUFTLENBQXFCO0lBQ3ZDOzs7T0FHRztJQUNNLGNBQWMsQ0FBcUI7SUFDNUM7OztPQUdHO0lBQ29DLFFBQVEsR0FBVyxDQUFDLENBQUM7SUFDNUQ7OztPQUdHO0lBQ00sVUFBVSxHQUFXLDZCQUE2QixDQUFDO0lBQzVEOzs7T0FHRztJQUNNLFVBQVUsR0FBVyxrQ0FBa0MsQ0FBQztJQUNqRTs7O09BR0c7SUFDTSxTQUFTLEdBQVcsb0NBQW9DLENBQUM7SUFDbEU7OztPQUdHO0lBQ00sYUFBYSxHQUFXLFNBQVMsQ0FBQztJQUMzQzs7O09BR0c7SUFDTSxJQUFJ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LElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQ2xILE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0QsQ0FBQztJQUVELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxF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QUFTLEVBQUUsZUFBZSxFQUFFO2dCQUtFLFdBQVc7c0JBQWpELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUtHLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0UsU0FBUztzQkFBaEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU01QixRQUFRO3NCQUFqQixNQUFNOztBQXlSWCxNQUFNLE9BQU8sVUFBVTt1R0FBVixVQUFVO3dHQUFWLFVBQVUsaUJBelhWLElBQUksYUFxWEgsWUFBWSxhQXJYYixJQUFJO3dHQXlYSixVQUFVLFlBSlQsWUFBWTs7MkZBSWIsVUFBVTtrQkFMdEIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDZixZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uLCBib29sZWFuQXR0cmlidXRlLCBmb3J3YXJkUmVmLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVm9pZExpc3RlbmVyIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IEtOT0JfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBLbm9iKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogS25vYiBpcyBhIGZvcm0gY29tcG9uZW50IHRvIGRlZmluZSBudW1iZXIgaW5wdXRzIHdpdGggYSBkaWFsLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWtub2InLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbYXR0ci5kYXRhLXBjLW5hbWVdPVwiJ2tub2InXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb290J1wiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInNsaWRlclwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cInNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cInNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAobW91c2V1cCk9XCJvbk1vdXNlVXAoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICh0b3VjaGVuZCk9XCJvblRvdWNoRW5kKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVtaW5dPVwibWluXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJfdmFsdWVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cInJlYWRvbmx5IHx8IGRpc2FibGVkID8gLTEgOiB0YWJpbmRleFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidzdmcnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInJhbmdlUGF0aCgpXCIgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCIgW2F0dHIuc3Ryb2tlXT1cInJhbmdlQ29sb3JcIiBjbGFzcz1cInAta25vYi1yYW5nZVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInZhbHVlUGF0aCgpXCIgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCIgW2F0dHIuc3Ryb2tlXT1cInZhbHVlQ29sb3JcIiBjbGFzcz1cInAta25vYi12YWx1ZVwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8dGV4dCAqbmdJZj1cInNob3dWYWx1ZVwiIFthdHRyLnhdPVwiNTBcIiBbYXR0ci55XT1cIjU3XCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBbYXR0ci5maWxsXT1cInRleHRDb2xvclwiIGNsYXNzPVwicC1rbm9iLXRleHRcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIj57eyB2YWx1ZVRvRGlzcGxheSgpIH19PC90ZXh0PlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbS05PQl9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9rbm9iLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBLbm9iIHtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBpbnB1dCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgb25lIG9yIG1vcmUgSURzIGluIHRoZSBET00gdGhhdCBsYWJlbHMgdGhlIGlucHV0IGZpZWxkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgdGhlIGVsZW1lbnQgaW4gdGFiYmluZyBvcmRlci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB0YWJpbmRleDogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIG9mIHRoZSB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YWx1ZUNvbG9yOiBzdHJpbmcgPSAndmFyKC0tcHJpbWFyeS1jb2xvciwgQmxhY2spJztcbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSByYW5nZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByYW5nZUNvbG9yOiBzdHJpbmcgPSAndmFyKC0tc3VyZmFjZS1ib3JkZXIsIExpZ2h0R3JheSknO1xuICAgIC8qKlxuICAgICAqIENvbG9yIG9mIHRoZSB2YWx1ZSB0ZXh0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRleHRDb2xvcjogc3RyaW5nID0gJ3ZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5LCBCbGFjayknO1xuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIHN0cmluZyBvZiB0aGUgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmFsdWVUZW1wbGF0ZTogc3RyaW5nID0gJ3t2YWx1ZX0nO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiBwaXhlbHMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgc2l6ZTogbnVtYmVyID0gMTAwO1xuICAgIC8qKlxuICAgICAqIFN0ZXAgZmFjdG9yIHRvIGluY3JlbWVudC9kZWNyZW1lbnQgdGhlIHZhbHVlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHN0ZXA6IG51bWJlciA9IDE7XG4gICAgLyoqXG4gICAgICogTWluaW51bSBib3VuZGFyeSB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBtaW46IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBib3VuZGFyeSB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBtYXg6IG51bWJlciA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUga25vYiBzdHJva2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgc3Ryb2tlV2lkdGg6IG51bWJlciA9IDE0O1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNob3cgdGhlIHZhbHVlIGluc2lkZSB0aGUga25vYi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc2hvd1ZhbHVlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgdmFsdWUgY2Fubm90IGJlIGVkaXRlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gdmFsdWUgY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIE5ldyB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICByYWRpdXM6IG51bWJlciA9IDQwO1xuXG4gICAgbWlkWDogbnVtYmVyID0gNTA7XG5cbiAgICBtaWRZOiBudW1iZXIgPSA1MDtcblxuICAgIG1pblJhZGlhbnM6IG51bWJlciA9ICg0ICogTWF0aC5QSSkgLyAzO1xuXG4gICAgbWF4UmFkaWFuczogbnVtYmVyID0gLU1hdGguUEkgLyAzO1xuXG4gICAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICB3aW5kb3dNb3VzZU1vdmVMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgd2luZG93TW91c2VVcExpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICB3aW5kb3dUb3VjaE1vdmVMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgd2luZG93VG91Y2hFbmRMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICAgKSB7fVxuXG4gICAgbWFwUmFuZ2UoeDogbnVtYmVyLCBpbk1pbjogbnVtYmVyLCBpbk1heDogbnVtYmVyLCBvdXRNaW46IG51bWJlciwgb3V0TWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICgoeCAtIGluTWluKSAqIChvdXRNYXggLSBvdXRNaW4pKSAvIChpbk1heCAtIGluTWluKSArIG91dE1pbjtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKG9mZnNldFg6IG51bWJlciwgb2Zmc2V0WTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkeCA9IG9mZnNldFggLSB0aGlzLnNpemUgLyAyO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnNpemUgLyAyIC0gb2Zmc2V0WTtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICBsZXQgc3RhcnQgPSAtTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gNjtcbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbChhbmdsZSwgc3RhcnQpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vZGVsKGFuZ2xlOiBudW1iZXIsIHN0YXJ0OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1hcHBlZFZhbHVlO1xuICAgICAgICBpZiAoYW5nbGUgPiB0aGlzLm1heFJhZGlhbnMpIG1hcHBlZFZhbHVlID0gdGhpcy5tYXBSYW5nZShhbmdsZSwgdGhpcy5taW5SYWRpYW5zLCB0aGlzLm1heFJhZGlhbnMsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlIDwgc3RhcnQpIG1hcHBlZFZhbHVlID0gdGhpcy5tYXBSYW5nZShhbmdsZSArIDIgKiBNYXRoLlBJLCB0aGlzLm1pblJhZGlhbnMsIHRoaXMubWF4UmFkaWFucywgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgICAgZWxzZSByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZCgobWFwcGVkVmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwICsgdGhpcy5taW47XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3IHx8ICd3aW5kb3cnO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dNb3VzZU1vdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLndpbmRvd01vdXNlVXBMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53aW5kb3dNb3VzZU1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMud2luZG93TW91c2VNb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvd01vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLndpbmRvd01vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMud2luZG93TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5kb3dNb3VzZU1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldyB8fCAnd2luZG93JztcbiAgICAgICAgICAgIHRoaXMud2luZG93VG91Y2hNb3ZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dUb3VjaEVuZExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4od2luZG93LCAndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudDogVG91Y2hFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndpbmRvd1RvdWNoTW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5kb3dUb3VjaE1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMud2luZG93VG91Y2hFbmRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMud2luZG93VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53aW5kb3dUb3VjaE1vdmVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLndpbmRvd1RvdWNoRW5kTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5ICYmIGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlcy5pdGVtKDApO1xuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRvdWNoLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRvdWNoLmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgPiB0aGlzLm1heCkgdGhpcy52YWx1ZSA9IHRoaXMubWF4O1xuICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA8IHRoaXMubWluKSB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbFZhbHVlKHRoaXMuX3ZhbHVlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG5cbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWxWYWx1ZSh0aGlzLl92YWx1ZSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlICdIb21lJzoge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsVmFsdWUodGhpcy5taW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgJ0VuZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbFZhbHVlKHRoaXMubWF4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FzZSAnUGFnZVVwJzoge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsVmFsdWUodGhpcy5fdmFsdWUgKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2VEb3duJzoge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsVmFsdWUodGhpcy5fdmFsdWUgLSAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3Ata25vYiBwLWNvbXBvbmVudCc6IHRydWUsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByYW5nZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiBgTSAke3RoaXMubWluWCgpfSAke3RoaXMubWluWSgpfSBBICR7dGhpcy5yYWRpdXN9ICR7dGhpcy5yYWRpdXN9IDAgMSAxICR7dGhpcy5tYXhYKCl9ICR7dGhpcy5tYXhZKCl9YDtcbiAgICB9XG5cbiAgICB2YWx1ZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiBgTSAke3RoaXMuemVyb1goKX0gJHt0aGlzLnplcm9ZKCl9IEEgJHt0aGlzLnJhZGl1c30gJHt0aGlzLnJhZGl1c30gMCAke3RoaXMubGFyZ2VBcmMoKX0gJHt0aGlzLnN3ZWVwKCl9ICR7dGhpcy52YWx1ZVgoKX0gJHt0aGlzLnZhbHVlWSgpfWA7XG4gICAgfVxuXG4gICAgemVyb1JhZGlhbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbiA+IDAgJiYgdGhpcy5tYXggPiAwKSByZXR1cm4gdGhpcy5tYXBSYW5nZSh0aGlzLm1pbiwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLm1pblJhZGlhbnMsIHRoaXMubWF4UmFkaWFucyk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMubWFwUmFuZ2UoMCwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLm1pblJhZGlhbnMsIHRoaXMubWF4UmFkaWFucyk7XG4gICAgfVxuXG4gICAgdmFsdWVSYWRpYW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBSYW5nZSh0aGlzLl92YWx1ZSwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLm1pblJhZGlhbnMsIHRoaXMubWF4UmFkaWFucyk7XG4gICAgfVxuXG4gICAgbWluWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWCArIE1hdGguY29zKHRoaXMubWluUmFkaWFucykgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBtaW5ZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWRZIC0gTWF0aC5zaW4odGhpcy5taW5SYWRpYW5zKSAqIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIG1heFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFggKyBNYXRoLmNvcyh0aGlzLm1heFJhZGlhbnMpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgbWF4WSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWSAtIE1hdGguc2luKHRoaXMubWF4UmFkaWFucykgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICB6ZXJvWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWCArIE1hdGguY29zKHRoaXMuemVyb1JhZGlhbnMoKSkgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICB6ZXJvWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWSAtIE1hdGguc2luKHRoaXMuemVyb1JhZGlhbnMoKSkgKiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICB2YWx1ZVgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pZFggKyBNYXRoLmNvcyh0aGlzLnZhbHVlUmFkaWFucygpKSAqIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIHZhbHVlWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlkWSAtIE1hdGguc2luKHRoaXMudmFsdWVSYWRpYW5zKCkpICogdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgbGFyZ2VBcmMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnplcm9SYWRpYW5zKCkgLSB0aGlzLnZhbHVlUmFkaWFucygpKSA8IE1hdGguUEkgPyAwIDogMTtcbiAgICB9XG5cbiAgICBzd2VlcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVSYWRpYW5zKCkgPiB0aGlzLnplcm9SYWRpYW5zKCkgPyAwIDogMTtcbiAgICB9XG5cbiAgICB2YWx1ZVRvRGlzcGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUZW1wbGF0ZS5yZXBsYWNlKCd7dmFsdWV9JywgdGhpcy5fdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgZ2V0IF92YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsID8gdGhpcy52YWx1ZSA6IHRoaXMubWluO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbS25vYl0sXG4gICAgZGVjbGFyYXRpb25zOiBbS25vYl1cbn0pXG5leHBvcnQgY2xhc3MgS25vYk1vZHVsZSB7fVxuIl19