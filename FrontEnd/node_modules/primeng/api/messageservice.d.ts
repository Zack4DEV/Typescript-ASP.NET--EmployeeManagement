import { Message } from './message';
import * as i0 from "@angular/core";
/**
 * Message service used in messages and toast components.
 * @group Service
 */
export declare class MessageService {
    private messageSource;
    private clearSource;
    messageObserver: import("rxjs").Observable<Message | Message[]>;
    clearObserver: import("rxjs").Observable<string>;
    /**
     * Inserts single message.
     * @param {Message} message - Message to be added.
     * @group Method
     */
    add(message: Message): void;
    /**
     * Inserts new messages.
     * @param {Message[]} messages - Messages to be added.
     * @group Method
     */
    addAll(messages: Message[]): void;
    /**
     * Clears the message with the given key.
     * @param {string} key - Key of the message to be cleared.
     * @group Method
     */
    clear(key?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
