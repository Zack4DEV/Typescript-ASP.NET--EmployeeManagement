import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, HostListener, booleanAttribute, NgModule } from '@angular/core';
import { DomHandler } from 'primeng/dom';

/**
 * pDraggable directive apply draggable behavior to any element.
 * @group Components
 */
class Draggable {
    el;
    zone;
    renderer;
    scope;
    /**
     * Defines the cursor style.
     * @group Props
     */
    dragEffect;
    /**
     * Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging.
     * @group Props
     */
    dragHandle;
    /**
     * Callback to invoke when drag begins.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragStart = new EventEmitter();
    /**
     * Callback to invoke when drag ends.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd = new EventEmitter();
    /**
     * Callback to invoke on dragging.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDrag = new EventEmitter();
    handle;
    dragListener;
    mouseDownListener;
    mouseUpListener;
    _pDraggableDisabled = false;
    constructor(el, zone, renderer) {
        this.el = el;
        this.zone = zone;
        this.renderer = renderer;
    }
    get pDraggableDisabled() {
        return this._pDraggableDisabled;
    }
    set pDraggableDisabled(_pDraggableDisabled) {
        this._pDraggableDisabled = _pDraggableDisabled;
        if (this._pDraggableDisabled) {
            this.unbindMouseListeners();
        }
        else {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    ngAfterViewInit() {
        if (!this.pDraggableDisabled) {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    bindDragListener() {
        if (!this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.dragListener = this.renderer.listen(this.el.nativeElement, 'drag', this.drag.bind(this));
            });
        }
    }
    unbindDragListener() {
        if (this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.dragListener && this.dragListener();
                this.dragListener = null;
            });
        }
    }
    bindMouseListeners() {
        if (!this.mouseDownListener && !this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.mousedown.bind(this));
                this.mouseUpListener = this.renderer.listen(this.el.nativeElement, 'mouseup', this.mouseup.bind(this));
            });
        }
    }
    unbindMouseListeners() {
        if (this.mouseDownListener && this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.mouseDownListener && this.mouseDownListener();
                this.mouseUpListener && this.mouseUpListener();
                this.mouseDownListener = null;
                this.mouseUpListener = null;
            });
        }
    }
    drag(event) {
        this.onDrag.emit(event);
    }
    dragStart(event) {
        if (this.allowDrag() && !this.pDraggableDisabled) {
            if (this.dragEffect) {
                event.dataTransfer.effectAllowed = this.dragEffect;
            }
            event.dataTransfer.setData('text', this.scope);
            this.onDragStart.emit(event);
            this.bindDragListener();
        }
        else {
            event.preventDefault();
        }
    }
    dragEnd(event) {
        this.onDragEnd.emit(event);
        this.unbindDragListener();
    }
    mousedown(event) {
        this.handle = event.target;
    }
    mouseup(event) {
        this.handle = null;
    }
    allowDrag() {
        if (this.dragHandle && this.handle)
            return DomHandler.matches(this.handle, this.dragHandle);
        else
            return true;
    }
    ngOnDestroy() {
        this.unbindDragListener();
        this.unbindMouseListeners();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Draggable, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: Draggable, selector: "[pDraggable]", inputs: { scope: ["pDraggable", "scope"], dragEffect: "dragEffect", dragHandle: "dragHandle", pDraggableDisabled: "pDraggableDisabled" }, outputs: { onDragStart: "onDragStart", onDragEnd: "onDragEnd", onDrag: "onDrag" }, host: { listeners: { "dragstart": "dragStart($event)", "dragend": "dragEnd($event)" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Draggable, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pDraggable]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }], propDecorators: { scope: [{
                type: Input,
                args: ['pDraggable']
            }], dragEffect: [{
                type: Input
            }], dragHandle: [{
                type: Input
            }], onDragStart: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }], onDrag: [{
                type: Output
            }], pDraggableDisabled: [{
                type: Input
            }], dragStart: [{
                type: HostListener,
                args: ['dragstart', ['$event']]
            }], dragEnd: [{
                type: HostListener,
                args: ['dragend', ['$event']]
            }] } });
/**
 * pDroppable directive apply droppable behavior to any element.
 * @group Components
 */
class Droppable {
    el;
    zone;
    renderer;
    scope;
    /**
     * Whether the element is droppable, useful for conditional cases.
     * @group Props
     */
    pDroppableDisabled = false;
    /**
     * Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all.
     * @group Props
     */
    dropEffect;
    /**
     * Callback to invoke when a draggable enters drop area.
     * @group Emits
     */
    onDragEnter = new EventEmitter();
    /**
     * Callback to invoke when a draggable leave drop area.
     * @group Emits
     */
    onDragLeave = new EventEmitter();
    /**
     * Callback to invoke when a draggable is dropped onto drop area.
     * @group Emits
     */
    onDrop = new EventEmitter();
    constructor(el, zone, renderer) {
        this.el = el;
        this.zone = zone;
        this.renderer = renderer;
    }
    dragOverListener;
    ngAfterViewInit() {
        if (!this.pDroppableDisabled) {
            this.bindDragOverListener();
        }
    }
    bindDragOverListener() {
        if (!this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.dragOver.bind(this));
            });
        }
    }
    unbindDragOverListener() {
        if (this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.dragOverListener && this.dragOverListener();
                this.dragOverListener = null;
            });
        }
    }
    dragOver(event) {
        event.preventDefault();
    }
    drop(event) {
        if (this.allowDrop(event)) {
            DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            event.preventDefault();
            this.onDrop.emit(event);
        }
    }
    dragEnter(event) {
        event.preventDefault();
        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }
        DomHandler.addClass(this.el.nativeElement, 'p-draggable-enter');
        this.onDragEnter.emit(event);
    }
    dragLeave(event) {
        event.preventDefault();
        if (!this.el.nativeElement.contains(event.relatedTarget)) {
            DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            this.onDragLeave.emit(event);
        }
    }
    allowDrop(event) {
        let dragScope = event.dataTransfer.getData('text');
        if (typeof this.scope == 'string' && dragScope == this.scope) {
            return true;
        }
        else if (Array.isArray(this.scope)) {
            for (let j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    ngOnDestroy() {
        this.unbindDragOverListener();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Droppable, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.1", type: Droppable, selector: "[pDroppable]", inputs: { scope: ["pDroppable", "scope"], pDroppableDisabled: ["pDroppableDisabled", "pDroppableDisabled", booleanAttribute], dropEffect: "dropEffect" }, outputs: { onDragEnter: "onDragEnter", onDragLeave: "onDragLeave", onDrop: "onDrop" }, host: { listeners: { "drop": "drop($event)", "dragenter": "dragEnter($event)", "dragleave": "dragLeave($event)" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Droppable, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pDroppable]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }], propDecorators: { scope: [{
                type: Input,
                args: ['pDroppable']
            }], pDroppableDisabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], dropEffect: [{
                type: Input
            }], onDragEnter: [{
                type: Output
            }], onDragLeave: [{
                type: Output
            }], onDrop: [{
                type: Output
            }], drop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }], dragEnter: [{
                type: HostListener,
                args: ['dragenter', ['$event']]
            }], dragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }] } });
class DragDropModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DragDropModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: DragDropModule, declarations: [Draggable, Droppable], imports: [CommonModule], exports: [Draggable, Droppable] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DragDropModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DragDropModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [Draggable, Droppable],
                    declarations: [Draggable, Droppable]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DragDropModule, Draggable, Droppable };
//# sourceMappingURL=primeng-dragdrop.mjs.map
