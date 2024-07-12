import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OverlayService {
    clickSource = new Subject();
    clickObservable = this.clickSource.asObservable();
    add(event) {
        if (event) {
            this.clickSource.next(event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: OverlayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: OverlayService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: OverlayService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL292ZXJsYXlzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJL0IsTUFBTSxPQUFPLGNBQWM7SUFDZixXQUFXLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFFekQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFbEQsR0FBRyxDQUFDLEtBQVU7UUFDVixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNMLENBQUM7dUdBVFEsY0FBYzsyR0FBZCxjQUFjLGNBREQsTUFBTTs7MkZBQ25CLGNBQWM7a0JBRDFCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNlcnZpY2Uge1xuICAgIHByaXZhdGUgY2xpY2tTb3VyY2UgPSBuZXcgU3ViamVjdDxNZXNzYWdlIHwgTWVzc2FnZVtdPigpO1xuXG4gICAgY2xpY2tPYnNlcnZhYmxlID0gdGhpcy5jbGlja1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIGFkZChldmVudDogYW55KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja1NvdXJjZS5uZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==