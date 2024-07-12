import { Subject } from 'rxjs';
/**
 * Dynamic Dialog instance.
 * @group Components
 */
export class DynamicDialogRef {
    constructor() { }
    /**
     * Closes dialog.
     * @group Method
     */
    close(result) {
        this._onClose.next(result);
        setTimeout(() => {
            this._onClose.complete();
        }, 1000);
    }
    /**
     * Destroys the dialog instance.
     * @group Method
     */
    destroy() {
        this._onDestroy.next(null);
    }
    /**
     * Callback to invoke on drag start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    dragStart(event) {
        this._onDragStart.next(event);
    }
    /**
     * Callback to invoke on drag end.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    dragEnd(event) {
        this._onDragEnd.next(event);
    }
    /**
     * Callback to invoke on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    resizeInit(event) {
        this._onResizeInit.next(event);
    }
    /**
     * Callback to invoke on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Method
     */
    resizeEnd(event) {
        this._onResizeEnd.next(event);
    }
    /**
     * Callback to invoke on dialog is maximized.
     * @param {*} value - Size value.
     * @group Method
     */
    maximize(value) {
        this._onMaximize.next(value);
    }
    _onClose = new Subject();
    /**
     * Event triggered on dialog is closed.
     * @group Events
     */
    onClose = this._onClose.asObservable();
    _onDestroy = new Subject();
    /**
     * Event triggered on dialog instance is destroyed.
     * @group Events
     */
    onDestroy = this._onDestroy.asObservable();
    _onDragStart = new Subject();
    /**
     * Event triggered on drag start.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onDragStart = this._onDragStart.asObservable();
    _onDragEnd = new Subject();
    /**
     * Event triggered on drag end.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onDragEnd = this._onDragEnd.asObservable();
    _onResizeInit = new Subject();
    /**
     * Event triggered on resize start.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onResizeInit = this._onResizeInit.asObservable();
    _onResizeEnd = new Subject();
    /**
     * Event triggered on resize end.
     * @param {MouseEvent} event - Mouse event.
     * @group Events
     */
    onResizeEnd = this._onResizeEnd.asObservable();
    _onMaximize = new Subject();
    /**
     * Event triggered on dialog is maximized.
     * @param {*} value - Size value.
     * @group Events
     */
    onMaximize = this._onMaximize.asObservable();
    /**
     * Event triggered on child component load.
     * @param {*} value - Chi.
     * @group Events
     */
    onChildComponentLoaded = new Subject();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZy1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pY2RpYWxvZy9keW5hbWljZGlhbG9nLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDOzs7R0FHRztBQUNILE1BQU0sT0FBTyxnQkFBZ0I7SUFDekIsZ0JBQWUsQ0FBQztJQUNoQjs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBWTtRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRDs7O09BR0c7SUFDSCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsS0FBaUI7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsS0FBaUI7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFZ0IsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFDL0M7OztPQUdHO0lBQ0gsT0FBTyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXZDLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBQ2pEOzs7T0FHRztJQUNILFNBQVMsR0FBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUUzQyxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUNuRDs7OztPQUlHO0lBQ0gsV0FBVyxHQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRS9DLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBQ2pEOzs7O09BSUc7SUFDSCxTQUFTLEdBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFM0MsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFDcEQ7Ozs7T0FJRztJQUNILFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVqRCxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUNuRDs7OztPQUlHO0lBQ0gsV0FBVyxHQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRS9DLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBQ2xEOzs7O09BSUc7SUFDSCxVQUFVLEdBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFOUQ7Ozs7T0FJRztJQUNNLHNCQUFzQixHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0NBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogRHluYW1pYyBEaWFsb2cgaW5zdGFuY2UuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0RpYWxvZ1JlZjxDb21wb25lbnRUeXBlID0gYW55PiB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIC8qKlxuICAgICAqIENsb3NlcyBkaWFsb2cuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIGNsb3NlKHJlc3VsdD86IGFueSkge1xuICAgICAgICB0aGlzLl9vbkNsb3NlLm5leHQocmVzdWx0KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2UuY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBkaWFsb2cgaW5zdGFuY2UuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KG51bGwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gZHJhZyBzdGFydC5cbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IC0gTW91c2UgZXZlbnQuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIGRyYWdTdGFydChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydC5uZXh0KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGRyYWcgZW5kLlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSBNb3VzZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgZHJhZ0VuZChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLl9vbkRyYWdFbmQubmV4dChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbiByZXNpemUgc3RhcnQuXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCAtIE1vdXNlIGV2ZW50LlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICByZXNpemVJbml0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuX29uUmVzaXplSW5pdC5uZXh0KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIHJlc2l6ZSBzdGFydC5cbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IC0gTW91c2UgZXZlbnQuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIHJlc2l6ZUVuZChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLl9vblJlc2l6ZUVuZC5uZXh0KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGRpYWxvZyBpcyBtYXhpbWl6ZWQuXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFNpemUgdmFsdWUuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIG1heGltaXplKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25NYXhpbWl6ZS5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiBkaWFsb2cgaXMgY2xvc2VkLlxuICAgICAqIEBncm91cCBFdmVudHNcbiAgICAgKi9cbiAgICBvbkNsb3NlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9vbkNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiBkaWFsb2cgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxuICAgICAqIEBncm91cCBFdmVudHNcbiAgICAgKi9cbiAgICBvbkRlc3Ryb3k6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uRGVzdHJveS5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uRHJhZ1N0YXJ0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiBkcmFnIHN0YXJ0LlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSBNb3VzZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRXZlbnRzXG4gICAgICovXG4gICAgb25EcmFnU3RhcnQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uRHJhZ1N0YXJ0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb25EcmFnRW5kID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiBkcmFnIGVuZC5cbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IC0gTW91c2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEV2ZW50c1xuICAgICAqL1xuICAgIG9uRHJhZ0VuZDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb25EcmFnRW5kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb25SZXNpemVJbml0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiByZXNpemUgc3RhcnQuXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCAtIE1vdXNlIGV2ZW50LlxuICAgICAqIEBncm91cCBFdmVudHNcbiAgICAgKi9cbiAgICBvblJlc2l6ZUluaXQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uUmVzaXplSW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uUmVzaXplRW5kID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiByZXNpemUgZW5kLlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSBNb3VzZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRXZlbnRzXG4gICAgICovXG4gICAgb25SZXNpemVFbmQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX29uUmVzaXplRW5kLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb25NYXhpbWl6ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyZWQgb24gZGlhbG9nIGlzIG1heGltaXplZC5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gU2l6ZSB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgRXZlbnRzXG4gICAgICovXG4gICAgb25NYXhpbWl6ZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fb25NYXhpbWl6ZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBvbiBjaGlsZCBjb21wb25lbnQgbG9hZC5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gQ2hpLlxuICAgICAqIEBncm91cCBFdmVudHNcbiAgICAgKi9cbiAgICByZWFkb25seSBvbkNoaWxkQ29tcG9uZW50TG9hZGVkID0gbmV3IFN1YmplY3Q8Q29tcG9uZW50VHlwZT4oKTtcbn1cbiJdfQ==