import { CommonModule } from '@angular/common';
import { Directive, EventEmitter, HostListener, Input, NgModule, Output, booleanAttribute } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
/**
 * pDraggable directive apply draggable behavior to any element.
 * @group Components
 */
export class Draggable {
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
export class Droppable {
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
export class DragDropModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHJhZ2Ryb3AvZHJhZ2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFLLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxTQUFTO0lBMENQO0lBQ0E7SUFDQztJQTNDUyxLQUFLLENBQXFCO0lBQy9DOzs7T0FHRztJQUNNLFVBQVUsQ0FBaUg7SUFDcEk7OztPQUdHO0lBQ00sVUFBVSxDQUFxQjtJQUN4Qzs7OztPQUlHO0lBQ08sV0FBVyxHQUE0QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3BFOzs7O09BSUc7SUFDTyxTQUFTLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEU7Ozs7T0FJRztJQUNPLE1BQU0sR0FBNEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUvRCxNQUFNLENBQU07SUFFWixZQUFZLENBQWU7SUFFM0IsaUJBQWlCLENBQWU7SUFFaEMsZUFBZSxDQUFlO0lBRTlCLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUVyQyxZQUNXLEVBQWMsRUFDZCxJQUFZLEVBQ1gsUUFBbUI7UUFGcEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzVCLENBQUM7SUFFSixJQUFhLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxtQkFBNEI7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQzthQUFNLENBQUM7WUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNHLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWdCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxTQUFTLENBQUMsS0FBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLFlBQTZCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekUsQ0FBQztZQUNBLEtBQUssQ0FBQyxZQUE2QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQU0sQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7YUFBTSxDQUFDO1lBQ0osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBR0QsT0FBTyxDQUFDLEtBQWdCO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQ3ZGLE9BQU8sSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQzt1R0FuSlEsU0FBUzsyRkFBVCxTQUFTOzsyRkFBVCxTQUFTO2tCQU5yQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLFdBQVc7cUJBQ3JCO2lCQUNKOzRIQUV3QixLQUFLO3NCQUF6QixLQUFLO3VCQUFDLFlBQVk7Z0JBS1YsVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQU1JLFdBQVc7c0JBQXBCLE1BQU07Z0JBTUcsU0FBUztzQkFBbEIsTUFBTTtnQkFNRyxNQUFNO3NCQUFmLE1BQU07Z0JBa0JNLGtCQUFrQjtzQkFBOUIsS0FBSztnQkErRE4sU0FBUztzQkFEUixZQUFZO3VCQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFpQnJDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBd0J2Qzs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sU0FBUztJQTZCUDtJQUNBO0lBQ0M7SUE5QlMsS0FBSyxDQUFnQztJQUMxRDs7O09BR0c7SUFDcUMsa0JBQWtCLEdBQVksS0FBSyxDQUFDO0lBQzVFOzs7T0FHRztJQUNNLFVBQVUsQ0FBZ0Q7SUFDbkU7OztPQUdHO0lBQ08sV0FBVyxHQUE0QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3BFOzs7T0FHRztJQUNPLFdBQVcsR0FBNEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNwRTs7O09BR0c7SUFDTyxNQUFNLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFL0QsWUFDVyxFQUFjLEVBQ2QsSUFBWSxFQUNYLFFBQW1CO1FBRnBCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM1QixDQUFDO0lBRUosZ0JBQWdCLENBQWU7SUFFL0IsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9CQUFvQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWdCO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsSUFBSSxDQUFDLEtBQWdCO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3hCLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNuRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFHRCxTQUFTLENBQUMsS0FBZ0I7UUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxZQUE2QixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RFLENBQUM7UUFFRCxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFnQjtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUN2RCxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBZ0I7UUFDdEIsSUFBSSxTQUFTLEdBQUksS0FBSyxDQUFDLFlBQTZCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDN0IsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQzt1R0E5R1EsU0FBUzsyRkFBVCxTQUFTLHVJQU1FLGdCQUFnQjs7MkZBTjNCLFNBQVM7a0JBTnJCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7aUJBQ0o7NEhBRXdCLEtBQUs7c0JBQXpCLEtBQUs7dUJBQUMsWUFBWTtnQkFLcUIsa0JBQWtCO3NCQUF6RCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUs3QixVQUFVO3NCQUFsQixLQUFLO2dCQUtJLFdBQVc7c0JBQXBCLE1BQU07Z0JBS0csV0FBVztzQkFBcEIsTUFBTTtnQkFLRyxNQUFNO3NCQUFmLE1BQU07Z0JBc0NQLElBQUk7c0JBREgsWUFBWTt1QkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBVWhDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBYXJDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBa0N6QyxNQUFNLE9BQU8sY0FBYzt1R0FBZCxjQUFjO3dHQUFkLGNBQWMsaUJBclJkLFNBQVMsRUErSlQsU0FBUyxhQWtIUixZQUFZLGFBalJiLFNBQVMsRUErSlQsU0FBUzt3R0FzSFQsY0FBYyxZQUpiLFlBQVk7OzJGQUliLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO29CQUMvQixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgTmdNb2R1bGUsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXQsIFJlbmRlcmVyMiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFZvaWRMaXN0ZW5lciB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG4vKipcbiAqIHBEcmFnZ2FibGUgZGlyZWN0aXZlIGFwcGx5IGRyYWdnYWJsZSBiZWhhdmlvciB0byBhbnkgZWxlbWVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BEcmFnZ2FibGVdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ3BEcmFnZ2FibGUnKSBzY29wZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGN1cnNvciBzdHlsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkcmFnRWZmZWN0OiAnbm9uZScgfCAnY29weScgfCAnY29weUxpbmsnIHwgJ2NvcHlNb3ZlJyB8ICdsaW5rJyB8ICdsaW5rTW92ZScgfCAnbW92ZScgfCAnYWxsJyB8ICd1bmluaXRpYWxpemVkJyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciB0byBkZWZpbmUgdGhlIGRyYWcgaGFuZGxlLCBieSBkZWZhdWx0IGFueXdoZXJlIG9uIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGRyYWcgaGFuZGxlIHRvIHN0YXJ0IGRyYWdnaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRyYWdIYW5kbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBkcmFnIGJlZ2lucy5cbiAgICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnQgLSBEcmFnIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gZHJhZyBlbmRzLlxuICAgICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudCAtIERyYWcgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGRyYWdnaW5nLlxuICAgICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudCAtIERyYWcgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRHJhZzogRXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBoYW5kbGU6IGFueTtcblxuICAgIGRyYWdMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgbW91c2VEb3duTGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIG1vdXNlVXBMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgX3BEcmFnZ2FibGVEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7fVxuXG4gICAgQElucHV0KCkgZ2V0IHBEcmFnZ2FibGVEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BEcmFnZ2FibGVEaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IHBEcmFnZ2FibGVEaXNhYmxlZChfcERyYWdnYWJsZURpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3BEcmFnZ2FibGVEaXNhYmxlZCA9IF9wRHJhZ2dhYmxlRGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMucERyYWdnYWJsZURpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRHJhZ0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZHJhZ0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZHJhZycsIHRoaXMuZHJhZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRHJhZ0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTGlzdGVuZXIgJiYgdGhpcy5kcmFnTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRNb3VzZUxpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkxpc3RlbmVyICYmICF0aGlzLm1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZWRvd24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtb3VzZXVwJywgdGhpcy5tb3VzZXVwLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRNb3VzZUxpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duTGlzdGVuZXIgJiYgdGhpcy5tb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciAmJiB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgJiYgdGhpcy5tb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKVxuICAgIGRyYWdTdGFydChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93RHJhZygpICYmICF0aGlzLnBEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ0VmZmVjdCkge1xuICAgICAgICAgICAgICAgIChldmVudC5kYXRhVHJhbnNmZXIgYXMgRGF0YVRyYW5zZmVyKS5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGV2ZW50LmRhdGFUcmFuc2ZlciBhcyBEYXRhVHJhbnNmZXIpLnNldERhdGEoJ3RleHQnLCB0aGlzLnNjb3BlISk7XG5cbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZERyYWdMaXN0ZW5lcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnLCBbJyRldmVudCddKVxuICAgIGRyYWdFbmQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy51bmJpbmREcmFnTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBtb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBldmVudC50YXJnZXQ7XG4gICAgfVxuXG4gICAgbW91c2V1cChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYWxsb3dEcmFnKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlICYmIHRoaXMuaGFuZGxlKSByZXR1cm4gRG9tSGFuZGxlci5tYXRjaGVzKHRoaXMuaGFuZGxlLCB0aGlzLmRyYWdIYW5kbGUpO1xuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuLyoqXG4gKiBwRHJvcHBhYmxlIGRpcmVjdGl2ZSBhcHBseSBkcm9wcGFibGUgYmVoYXZpb3IgdG8gYW55IGVsZW1lbnQuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRHJvcHBhYmxlXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCdwRHJvcHBhYmxlJykgc2NvcGU6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZHJvcHBhYmxlLCB1c2VmdWwgZm9yIGNvbmRpdGlvbmFsIGNhc2VzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBwRHJvcHBhYmxlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBjdXJzb3Igc3R5bGUsIHZhbGlkIHZhbHVlcyBhcmUgbm9uZSwgY29weSwgbW92ZSwgbGluaywgY29weU1vdmUsIGNvcHlMaW5rLCBsaW5rTW92ZSBhbmQgYWxsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRyb3BFZmZlY3Q6ICdub25lJyB8ICdjb3B5JyB8ICdsaW5rJyB8ICdtb3ZlJyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIGRyYWdnYWJsZSBlbnRlcnMgZHJvcCBhcmVhLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBkcmFnZ2FibGUgbGVhdmUgZHJvcCBhcmVhLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBkcmFnZ2FibGUgaXMgZHJvcHBlZCBvbnRvIGRyb3AgYXJlYS5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICAgICkge31cblxuICAgIGRyYWdPdmVyTGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBEcm9wcGFibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kRHJhZ092ZXJMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERyYWdPdmVyTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kcmFnT3Zlckxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRHJhZ092ZXJMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyTGlzdGVuZXIgJiYgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnT3Zlckxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICAgIGRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3AoZXZlbnQpKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtZHJhZ2dhYmxlLWVudGVyJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxuICAgIGRyYWdFbnRlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcEVmZmVjdCkge1xuICAgICAgICAgICAgKGV2ZW50LmRhdGFUcmFuc2ZlciBhcyBEYXRhVHJhbnNmZXIpLmRyb3BFZmZlY3QgPSB0aGlzLmRyb3BFZmZlY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtZHJhZ2dhYmxlLWVudGVyJyk7XG4gICAgICAgIHRoaXMub25EcmFnRW50ZXIuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgICBkcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtZHJhZ2dhYmxlLWVudGVyJyk7XG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsb3dEcm9wKGV2ZW50OiBEcmFnRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGRyYWdTY29wZSA9IChldmVudC5kYXRhVHJhbnNmZXIgYXMgRGF0YVRyYW5zZmVyKS5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zY29wZSA9PSAnc3RyaW5nJyAmJiBkcmFnU2NvcGUgPT0gdGhpcy5zY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNjb3BlKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNjb3BlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdTY29wZSA9PSB0aGlzLnNjb3BlW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRHJhZ092ZXJMaXN0ZW5lcigpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbRHJhZ2dhYmxlLCBEcm9wcGFibGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0RyYWdnYWJsZSwgRHJvcHBhYmxlXVxufSlcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcE1vZHVsZSB7fVxuIl19