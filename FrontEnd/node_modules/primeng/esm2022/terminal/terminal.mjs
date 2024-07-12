import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import * as i0 from "@angular/core";
import * as i1 from "./terminalservice";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
/**
 * Terminal is a text based user interface.
 * @group Components
 */
export class Terminal {
    el;
    terminalService;
    cd;
    /**
     * Initial text to display on terminal.
     * @group Props
     */
    welcomeMessage;
    /**
     * Prompt text for each command.
     * @group Props
     */
    prompt;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    commands = [];
    command;
    container;
    commandProcessed;
    subscription;
    constructor(el, terminalService, cd) {
        this.el = el;
        this.terminalService = terminalService;
        this.cd = cd;
        this.subscription = terminalService.responseHandler.subscribe((response) => {
            this.commands[this.commands.length - 1].response = response;
            this.commandProcessed = true;
        });
    }
    ngAfterViewInit() {
        this.container = DomHandler.find(this.el.nativeElement, '.p-terminal')[0];
    }
    ngAfterViewChecked() {
        if (this.commandProcessed) {
            this.container.scrollTop = this.container.scrollHeight;
            this.commandProcessed = false;
        }
    }
    set response(value) {
        if (value) {
            this.commands[this.commands.length - 1].response = value;
            this.commandProcessed = true;
        }
    }
    handleCommand(event) {
        if (event.keyCode == 13) {
            this.commands.push({ text: this.command });
            this.terminalService.sendCommand(this.command);
            this.command = '';
        }
    }
    focus(element) {
        element.focus();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Terminal, deps: [{ token: i0.ElementRef }, { token: i1.TerminalService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.1", type: Terminal, selector: "p-terminal", inputs: { welcomeMessage: "welcomeMessage", prompt: "prompt", style: "style", styleClass: "styleClass", response: "response" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">
            <div *ngIf="welcomeMessage">{{ welcomeMessage }}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{ prompt }}</span>
                    <span class="p-terminal-command">{{ command.text }}</span>
                    <div class="p-terminal-response" [attr.aria-live]="'polite'">{{ command.response }}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{ prompt }}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus />
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: Terminal, decorators: [{
            type: Component,
            args: [{ selector: 'p-terminal', template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">
            <div *ngIf="welcomeMessage">{{ welcomeMessage }}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{ prompt }}</span>
                    <span class="p-terminal-command">{{ command.text }}</span>
                    <div class="p-terminal-response" [attr.aria-live]="'polite'">{{ command.response }}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{ prompt }}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus />
            </div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{display:flex;align-items:center}.p-terminal-input{flex:1 1 auto;border:0 none;background-color:transparent;color:inherit;padding:0;outline:0 none}.p-terminal-input::-ms-clear{display:none}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.TerminalService }, { type: i0.ChangeDetectorRef }], propDecorators: { welcomeMessage: [{
                type: Input
            }], prompt: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], response: [{
                type: Input
            }] } });
export class TerminalModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TerminalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: TerminalModule, declarations: [Terminal], imports: [CommonModule, FormsModule], exports: [Terminal] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TerminalModule, imports: [CommonModule, FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: TerminalModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    exports: [Terminal],
                    declarations: [Terminal]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvdGVybWluYWwvdGVybWluYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQThDLEtBQUssRUFBYyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEwsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUd6Qzs7O0dBR0c7QUEwQkgsTUFBTSxPQUFPLFFBQVE7SUFpQ047SUFDQTtJQUNBO0lBbENYOzs7T0FHRztJQUNNLGNBQWMsQ0FBcUI7SUFDNUM7OztPQUdHO0lBQ00sTUFBTSxDQUFxQjtJQUNwQzs7O09BR0c7SUFDTSxLQUFLLENBQThDO0lBQzVEOzs7T0FHRztJQUNNLFVBQVUsQ0FBcUI7SUFFeEMsUUFBUSxHQUFVLEVBQUUsQ0FBQztJQUVyQixPQUFPLENBQVU7SUFFakIsU0FBUyxDQUFXO0lBRXBCLGdCQUFnQixDQUFXO0lBRTNCLFlBQVksQ0FBZTtJQUUzQixZQUNXLEVBQWMsRUFDZCxlQUFnQyxFQUNoQyxFQUFxQjtRQUZyQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRTVCLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQ3RCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFvQjtRQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQW9CO1FBQ3RCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7dUdBOUVRLFFBQVE7MkZBQVIsUUFBUSx5TkF2QlA7Ozs7Ozs7Ozs7Ozs7OztLQWVUOzsyRkFRUSxRQUFRO2tCQXpCcEIsU0FBUzsrQkFDSSxZQUFZLFlBQ1o7Ozs7Ozs7Ozs7Ozs7OztLQWVULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs2SUFPUSxjQUFjO3NCQUF0QixLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csVUFBVTtzQkFBbEIsS0FBSztnQkFtQ0YsUUFBUTtzQkFEWCxLQUFLOztBQWdDVixNQUFNLE9BQU8sY0FBYzt1R0FBZCxjQUFjO3dHQUFkLGNBQWMsaUJBdEZkLFFBQVEsYUFrRlAsWUFBWSxFQUFFLFdBQVcsYUFsRjFCLFFBQVE7d0dBc0ZSLGNBQWMsWUFKYixZQUFZLEVBQUUsV0FBVzs7MkZBSTFCLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNuQixZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95LCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFRlcm1pbmFsU2VydmljZSB9IGZyb20gJy4vdGVybWluYWxzZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBUZXJtaW5hbCBpcyBhIHRleHQgYmFzZWQgdXNlciBpbnRlcmZhY2UuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdGVybWluYWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtdGVybWluYWwgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIChjbGljayk9XCJmb2N1cyhpbilcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ3ZWxjb21lTWVzc2FnZVwiPnt7IHdlbGNvbWVNZXNzYWdlIH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10ZXJtaW5hbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29tbWFuZCBvZiBjb21tYW5kc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGVybWluYWwtcHJvbXB0XCI+e3sgcHJvbXB0IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGVybWluYWwtY29tbWFuZFwiPnt7IGNvbW1hbmQudGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdGVybWluYWwtcmVzcG9uc2VcIiBbYXR0ci5hcmlhLWxpdmVdPVwiJ3BvbGl0ZSdcIj57eyBjb21tYW5kLnJlc3BvbnNlIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRlcm1pbmFsLXByb21wdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGVybWluYWwtY29udGVudC1wcm9tcHRcIj57eyBwcm9tcHQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNpbiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29tbWFuZFwiIGNsYXNzPVwicC10ZXJtaW5hbC1pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIChrZXlkb3duKT1cImhhbmRsZUNvbW1hbmQoJGV2ZW50KVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtaW5hbC5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVGVybWluYWwgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWwgdGV4dCB0byBkaXNwbGF5IG9uIHRlcm1pbmFsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHdlbGNvbWVNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogUHJvbXB0IHRleHQgZm9yIGVhY2ggY29tbWFuZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwcm9tcHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGNvbW1hbmRzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29tbWFuZCE6IHN0cmluZztcblxuICAgIGNvbnRhaW5lciE6IEVsZW1lbnQ7XG5cbiAgICBjb21tYW5kUHJvY2Vzc2VkITogYm9vbGVhbjtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIHRlcm1pbmFsU2VydmljZTogVGVybWluYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGVybWluYWxTZXJ2aWNlLnJlc3BvbnNlSGFuZGxlci5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzW3RoaXMuY29tbWFuZHMubGVuZ3RoIC0gMV0ucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBEb21IYW5kbGVyLmZpbmQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtdGVybWluYWwnKVswXTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbW1hbmRQcm9jZXNzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMuY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFByb2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgcmVzcG9uc2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHNbdGhpcy5jb21tYW5kcy5sZW5ndGggLSAxXS5yZXNwb25zZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNvbW1hbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7IHRleHQ6IHRoaXMuY29tbWFuZCB9KTtcbiAgICAgICAgICAgIHRoaXMudGVybWluYWxTZXJ2aWNlLnNlbmRDb21tYW5kKHRoaXMuY29tbWFuZCk7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVGVybWluYWxdLFxuICAgIGRlY2xhcmF0aW9uczogW1Rlcm1pbmFsXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJtaW5hbE1vZHVsZSB7fVxuIl19