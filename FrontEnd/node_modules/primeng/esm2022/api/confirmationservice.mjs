import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Methods used in confirmation service.
 * @group Service
 */
export class ConfirmationService {
    requireConfirmationSource = new Subject();
    acceptConfirmationSource = new Subject();
    requireConfirmation$ = this.requireConfirmationSource.asObservable();
    accept = this.acceptConfirmationSource.asObservable();
    /**
     * Callback to invoke on confirm.
     * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
     * @group Method
     */
    confirm(confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    }
    /**
     * Closes the dialog.
     * @group Method
     */
    close() {
        this.requireConfirmationSource.next(null);
        return this;
    }
    /**
     * Accepts the dialog.
     * @group Method
     */
    onAccept() {
        this.acceptConfirmationSource.next(null);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmationService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ConfirmationService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvY29uZmlybWF0aW9uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRS9COzs7R0FHRztBQUVILE1BQU0sT0FBTyxtQkFBbUI7SUFDcEIseUJBQXlCLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFDL0Qsd0JBQXdCLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFFdEUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JFLE1BQU0sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxZQUEwQjtRQUM5QixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsUUFBUTtRQUNKLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzt1R0E3QlEsbUJBQW1COzJHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuL2NvbmZpcm1hdGlvbic7XG4vKipcbiAqIE1ldGhvZHMgdXNlZCBpbiBjb25maXJtYXRpb24gc2VydmljZS5cbiAqIEBncm91cCBTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlcXVpcmVDb25maXJtYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdDxDb25maXJtYXRpb24gfCBudWxsPigpO1xuICAgIHByaXZhdGUgYWNjZXB0Q29uZmlybWF0aW9uU291cmNlID0gbmV3IFN1YmplY3Q8Q29uZmlybWF0aW9uIHwgbnVsbD4oKTtcblxuICAgIHJlcXVpcmVDb25maXJtYXRpb24kID0gdGhpcy5yZXF1aXJlQ29uZmlybWF0aW9uU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGFjY2VwdCA9IHRoaXMuYWNjZXB0Q29uZmlybWF0aW9uU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbiBjb25maXJtLlxuICAgICAqIEBwYXJhbSB7Q29uZmlybWF0aW9ufSBjb25maXJtYXRpb24gLSBSZXByZXNlbnRzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBjb25maXJtKGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUNvbmZpcm1hdGlvblNvdXJjZS5uZXh0KGNvbmZpcm1hdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUNvbmZpcm1hdGlvblNvdXJjZS5uZXh0KG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWNjZXB0cyB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRDb25maXJtYXRpb25Tb3VyY2UubmV4dChudWxsKTtcbiAgICB9XG59XG4iXX0=