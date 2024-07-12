import { Injectable, Inject, createComponent } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import { DynamicDialogComponent } from './dynamicdialog';
import { DynamicDialogInjector } from './dynamicdialog-injector';
import { DynamicDialogConfig } from './dynamicdialog-config';
import { DynamicDialogRef } from './dynamicdialog-ref';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * Dynamic Dialog component methods.
 * @group Service
 */
export class DialogService {
    appRef;
    injector;
    document;
    dialogComponentRefMap = new Map();
    constructor(appRef, injector, document) {
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {*} componentType - Dynamic component for content template.
     * @param {DynamicDialogConfig} config - DynamicDialog object.
     * @returns {DynamicDialogRef} DynamicDialog instance.
     * @group Method
     */
    open(componentType, config) {
        if (!this.duplicationPermission(componentType, config)) {
            return null;
        }
        const dialogRef = this.appendDialogComponentToBody(config, componentType);
        this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;
        return dialogRef;
    }
    /**
     * Returns the dynamic dialog component instance.
     * @param {ref} DynamicDialogRef - DynamicDialog instance.
     * @group Method
     */
    getInstance(ref) {
        return this.dialogComponentRefMap.get(ref).instance;
    }
    appendDialogComponentToBody(config, componentType) {
        const map = new WeakMap();
        map.set(DynamicDialogConfig, config);
        const dialogRef = new DynamicDialogRef();
        map.set(DynamicDialogRef, dialogRef);
        const sub = dialogRef.onClose.subscribe(() => {
            this.dialogComponentRefMap.get(dialogRef).instance.close();
        });
        const destroySub = dialogRef.onDestroy.subscribe(() => {
            this.removeDialogComponentFromBody(dialogRef);
            destroySub.unsubscribe();
            sub.unsubscribe();
        });
        const componentRef = createComponent(DynamicDialogComponent, { environmentInjector: this.appRef.injector, elementInjector: new DynamicDialogInjector(this.injector, map) });
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        if (!config.appendTo || config.appendTo === 'body') {
            this.document.body.appendChild(domElem);
        }
        else {
            DomHandler.appendChild(domElem, config.appendTo);
        }
        this.dialogComponentRefMap.set(dialogRef, componentRef);
        return dialogRef;
    }
    removeDialogComponentFromBody(dialogRef) {
        if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
            return;
        }
        const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
        this.appRef.detachView(dialogComponentRef.hostView);
        dialogComponentRef.destroy();
        this.dialogComponentRefMap.delete(dialogRef);
    }
    duplicationPermission(componentType, config) {
        if (config.duplicate) {
            return true;
        }
        let permission = true;
        for (const [key, value] of this.dialogComponentRefMap) {
            if (value.instance.childComponentType === componentType) {
                permission = false;
                break;
            }
        }
        return permission;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DialogService, deps: [{ token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DialogService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: DialogService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.ApplicationRef }, { type: i0.Injector }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9keW5hbWljZGlhbG9nL2RpYWxvZ3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBaUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0M7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUFJVjtJQUNBO0lBQ2tCO0lBTDlCLHFCQUFxQixHQUFxRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRXBHLFlBQ1ksTUFBc0IsRUFDdEIsUUFBa0IsRUFDQSxRQUFrQjtRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUM3QyxDQUFDO0lBQ0o7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUFJLGFBQXNCLEVBQUUsTUFBMkI7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFJLE1BQU0sRUFBRSxhQUFhLENB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TUFBMkI7UUFDL0UsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDcEQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUN0RCxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO3VHQTNGUSxhQUFhLHdFQU1WLFFBQVE7MkdBTlgsYUFBYTs7MkZBQWIsYUFBYTtrQkFEekIsVUFBVTs7MEJBT0YsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yLCBUeXBlLCBFbWJlZGRlZFZpZXdSZWYsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljZGlhbG9nJztcbmltcG9ydCB7IER5bmFtaWNEaWFsb2dJbmplY3RvciB9IGZyb20gJy4vZHluYW1pY2RpYWxvZy1pbmplY3Rvcic7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9keW5hbWljZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nUmVmIH0gZnJvbSAnLi9keW5hbWljZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuLyoqXG4gKiBEeW5hbWljIERpYWxvZyBjb21wb25lbnQgbWV0aG9kcy5cbiAqIEBncm91cCBTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgICBkaWFsb2dDb21wb25lbnRSZWZNYXA6IE1hcDxEeW5hbWljRGlhbG9nUmVmPGFueT4sIENvbXBvbmVudFJlZjxEeW5hbWljRGlhbG9nQ29tcG9uZW50Pj4gPSBuZXcgTWFwKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcbiAgICApIHt9XG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIGRpYWxvZyB1c2luZyB0aGUgZHluYW1pYyBkaWFsb2cgb2JqZWN0IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHsqfSBjb21wb25lbnRUeXBlIC0gRHluYW1pYyBjb21wb25lbnQgZm9yIGNvbnRlbnQgdGVtcGxhdGUuXG4gICAgICogQHBhcmFtIHtEeW5hbWljRGlhbG9nQ29uZmlnfSBjb25maWcgLSBEeW5hbWljRGlhbG9nIG9iamVjdC5cbiAgICAgKiBAcmV0dXJucyB7RHluYW1pY0RpYWxvZ1JlZn0gRHluYW1pY0RpYWxvZyBpbnN0YW5jZS5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIG9wZW48VD4oY29tcG9uZW50VHlwZTogVHlwZTxUPiwgY29uZmlnOiBEeW5hbWljRGlhbG9nQ29uZmlnKTogRHluYW1pY0RpYWxvZ1JlZjxUPiB7XG4gICAgICAgIGlmICghdGhpcy5kdXBsaWNhdGlvblBlcm1pc3Npb24oY29tcG9uZW50VHlwZSwgY29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmFwcGVuZERpYWxvZ0NvbXBvbmVudFRvQm9keTxUPihjb25maWcsIGNvbXBvbmVudFR5cGUpO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmTWFwLmdldChkaWFsb2dSZWYpLmluc3RhbmNlLmNoaWxkQ29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGU7XG5cbiAgICAgICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZHluYW1pYyBkaWFsb2cgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7cmVmfSBEeW5hbWljRGlhbG9nUmVmIC0gRHluYW1pY0RpYWxvZyBpbnN0YW5jZS5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIGdldEluc3RhbmNlKHJlZjogRHluYW1pY0RpYWxvZ1JlZjxhbnk+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5nZXQocmVmKS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZERpYWxvZ0NvbXBvbmVudFRvQm9keTxUPihjb25maWc6IER5bmFtaWNEaWFsb2dDb25maWcsIGNvbXBvbmVudFR5cGU6IFR5cGU8VD4pOiBEeW5hbWljRGlhbG9nUmVmPFQ+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgbWFwLnNldChEeW5hbWljRGlhbG9nQ29uZmlnLCBjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG5ldyBEeW5hbWljRGlhbG9nUmVmPFQ+KCk7XG4gICAgICAgIG1hcC5zZXQoRHluYW1pY0RpYWxvZ1JlZiwgZGlhbG9nUmVmKTtcblxuICAgICAgICBjb25zdCBzdWIgPSBkaWFsb2dSZWYub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dDb21wb25lbnRSZWZNYXAuZ2V0KGRpYWxvZ1JlZikuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzdHJveVN1YiA9IGRpYWxvZ1JlZi5vbkRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRGlhbG9nQ29tcG9uZW50RnJvbUJvZHkoZGlhbG9nUmVmKTtcbiAgICAgICAgICAgIGRlc3Ryb3lTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjcmVhdGVDb21wb25lbnQoRHluYW1pY0RpYWxvZ0NvbXBvbmVudCwgeyBlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLmFwcFJlZi5pbmplY3RvciwgZWxlbWVudEluamVjdG9yOiBuZXcgRHluYW1pY0RpYWxvZ0luamVjdG9yKHRoaXMuaW5qZWN0b3IsIG1hcCkgfSk7XG5cbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICghY29uZmlnLmFwcGVuZFRvIHx8IGNvbmZpZy5hcHBlbmRUbyA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFwcGVuZENoaWxkKGRvbUVsZW0sIGNvbmZpZy5hcHBlbmRUbyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZk1hcC5zZXQoZGlhbG9nUmVmLCBjb21wb25lbnRSZWYpO1xuXG4gICAgICAgIHJldHVybiBkaWFsb2dSZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keShkaWFsb2dSZWY6IER5bmFtaWNEaWFsb2dSZWY8YW55Pikge1xuICAgICAgICBpZiAoIWRpYWxvZ1JlZiB8fCAhdGhpcy5kaWFsb2dDb21wb25lbnRSZWZNYXAuaGFzKGRpYWxvZ1JlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbXBvbmVudFJlZiA9IHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmTWFwLmdldChkaWFsb2dSZWYpO1xuICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KGRpYWxvZ0NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmTWFwLmRlbGV0ZShkaWFsb2dSZWYpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHVwbGljYXRpb25QZXJtaXNzaW9uKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiwgY29uZmlnOiBEeW5hbWljRGlhbG9nQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChjb25maWcuZHVwbGljYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGVybWlzc2lvbiA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmTWFwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaW5zdGFuY2UuY2hpbGRDb21wb25lbnRUeXBlID09PSBjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwZXJtaXNzaW9uO1xuICAgIH1cbn1cbiJdfQ==