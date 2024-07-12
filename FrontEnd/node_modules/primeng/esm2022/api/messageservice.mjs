import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Message service used in messages and toast components.
 * @group Service
 */
export class MessageService {
    messageSource = new Subject();
    clearSource = new Subject();
    messageObserver = this.messageSource.asObservable();
    clearObserver = this.clearSource.asObservable();
    /**
     * Inserts single message.
     * @param {Message} message - Message to be added.
     * @group Method
     */
    add(message) {
        if (message) {
            this.messageSource.next(message);
        }
    }
    /**
     * Inserts new messages.
     * @param {Message[]} messages - Messages to be added.
     * @group Method
     */
    addAll(messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    }
    /**
     * Clears the message with the given key.
     * @param {string} key - Key of the message to be cleared.
     * @group Method
     */
    clear(key) {
        this.clearSource.next(key || null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: MessageService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL21lc3NhZ2VzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGNBQWM7SUFDZixhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFDbkQsV0FBVyxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0lBRW5ELGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BELGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsT0FBZ0I7UUFDaEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxRQUFtQjtRQUN0QixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLEdBQVk7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzt1R0FqQ1EsY0FBYzsyR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG4vKipcbiAqIE1lc3NhZ2Ugc2VydmljZSB1c2VkIGluIG1lc3NhZ2VzIGFuZCB0b2FzdCBjb21wb25lbnRzLlxuICogQGdyb3VwIFNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1lc3NhZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxNZXNzYWdlIHwgTWVzc2FnZVtdPigpO1xuICAgIHByaXZhdGUgY2xlYXJTb3VyY2UgPSBuZXcgU3ViamVjdDxzdHJpbmcgfCBudWxsPigpO1xuXG4gICAgbWVzc2FnZU9ic2VydmVyID0gdGhpcy5tZXNzYWdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNsZWFyT2JzZXJ2ZXIgPSB0aGlzLmNsZWFyU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIC8qKlxuICAgICAqIEluc2VydHMgc2luZ2xlIG1lc3NhZ2UuXG4gICAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIC0gTWVzc2FnZSB0byBiZSBhZGRlZC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgYWRkKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNvdXJjZS5uZXh0KG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgbmV3IG1lc3NhZ2VzLlxuICAgICAqIEBwYXJhbSB7TWVzc2FnZVtdfSBtZXNzYWdlcyAtIE1lc3NhZ2VzIHRvIGJlIGFkZGVkLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBhZGRBbGwobWVzc2FnZXM6IE1lc3NhZ2VbXSkge1xuICAgICAgICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTb3VyY2UubmV4dChtZXNzYWdlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBtZXNzYWdlIHdpdGggdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gS2V5IG9mIHRoZSBtZXNzYWdlIHRvIGJlIGNsZWFyZWQuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIGNsZWFyKGtleT86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsZWFyU291cmNlLm5leHQoa2V5IHx8IG51bGwpO1xuICAgIH1cbn1cbiJdfQ==