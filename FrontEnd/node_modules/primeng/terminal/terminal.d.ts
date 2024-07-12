import { AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TerminalService } from './terminalservice';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
/**
 * Terminal is a text based user interface.
 * @group Components
 */
export declare class Terminal implements AfterViewInit, AfterViewChecked, OnDestroy {
    el: ElementRef;
    terminalService: TerminalService;
    cd: ChangeDetectorRef;
    /**
     * Initial text to display on terminal.
     * @group Props
     */
    welcomeMessage: string | undefined;
    /**
     * Prompt text for each command.
     * @group Props
     */
    prompt: string | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    commands: any[];
    command: string;
    container: Element;
    commandProcessed: boolean;
    subscription: Subscription;
    constructor(el: ElementRef, terminalService: TerminalService, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    set response(value: string);
    handleCommand(event: KeyboardEvent): void;
    focus(element: HTMLElement): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Terminal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Terminal, "p-terminal", never, { "welcomeMessage": { "alias": "welcomeMessage"; "required": false; }; "prompt": { "alias": "prompt"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "response": { "alias": "response"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TerminalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TerminalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TerminalModule, [typeof Terminal], [typeof i1.CommonModule, typeof i2.FormsModule], [typeof Terminal]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TerminalModule>;
}
