import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ContextMenuService {
    activeItemKeyChange = new Subject();
    activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
    activeItemKey;
    changeKey(key) {
        this.activeItemKey = key;
        this.activeItemKeyChange.next(this.activeItemKey);
    }
    reset() {
        this.activeItemKey = null;
        this.activeItemKeyChange.next(this.activeItemKey);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ContextMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ContextMenuService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: ContextMenuService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dG1lbnVzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9jb250ZXh0bWVudXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQU8sa0JBQWtCO0lBQ25CLG1CQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFFcEQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRS9ELGFBQWEsQ0FBbUI7SUFFaEMsU0FBUyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBdUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBb0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7dUdBZlEsa0JBQWtCOzJHQUFsQixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudVNlcnZpY2Uge1xuICAgIHByaXZhdGUgYWN0aXZlSXRlbUtleUNoYW5nZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAgIGFjdGl2ZUl0ZW1LZXlDaGFuZ2UkID0gdGhpcy5hY3RpdmVJdGVtS2V5Q2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgYWN0aXZlSXRlbUtleTogTnVsbGFibGU8c3RyaW5nPjtcblxuICAgIGNoYW5nZUtleShrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbUtleUNoYW5nZS5uZXh0KHRoaXMuYWN0aXZlSXRlbUtleSBhcyBzdHJpbmcpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXkgPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1LZXlDaGFuZ2UubmV4dCh0aGlzLmFjdGl2ZUl0ZW1LZXkgYXMgYW55KTtcbiAgICB9XG59XG4iXX0=