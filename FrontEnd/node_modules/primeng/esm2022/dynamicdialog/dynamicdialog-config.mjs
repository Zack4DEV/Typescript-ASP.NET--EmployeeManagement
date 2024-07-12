/**
 * Dialogs can be created dynamically with any component as the content using a DialogService.
 * @group Components
 */
export class DynamicDialogConfig {
    /**
     * An object to pass to the component loaded inside the Dialog.
     * @group Props
     */
    data;
    /**
     * Header text of the dialog.
     * @group Props
     */
    header;
    /**
     * Identifies the element (or elements) that labels the element it is applied to.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Footer text of the dialog.
     * @group Props
     */
    footer;
    /**
     * Width of the dialog.
     * @group Props
     */
    width;
    /**
     * Height of the dialog.
     * @group Props
     */
    height;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape;
    /**
     * Specifies if autofocus should happen on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask;
    /**
     * Inline style of the component.
     * @group Props
     */
    rtl;
    /**
     * Inline style of the comopnent.
     * @group Props
     */
    style;
    /**
     * Inline style of the content.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
     * @group Props
     */
    position;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * A boolean to determine if it can be duplicate.
     * @group Props
     */
    duplicate;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Dialog templates.
     * @group Props
     */
    templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZy1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pY2RpYWxvZy9keW5hbWljZGlhbG9nLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0lBQzVCOzs7T0FHRztJQUNILElBQUksQ0FBSztJQUNUOzs7T0FHRztJQUNILE1BQU0sQ0FBVTtJQUNoQjs7O09BR0c7SUFDSCxjQUFjLENBQVU7SUFDeEI7OztPQUdHO0lBQ0gsTUFBTSxDQUFVO0lBQ2hCOzs7T0FHRztJQUNILEtBQUssQ0FBVTtJQUNmOzs7T0FHRztJQUNILE1BQU0sQ0FBVTtJQUNoQjs7O09BR0c7SUFDSCxhQUFhLENBQVc7SUFDeEI7OztPQUdHO0lBQ0gsV0FBVyxHQUFhLElBQUksQ0FBQztJQUM3Qjs7O09BR0c7SUFDSCxTQUFTLEdBQWEsSUFBSSxDQUFDO0lBQzNCOzs7T0FHRztJQUNILFVBQVUsQ0FBVTtJQUNwQjs7O09BR0c7SUFDSCxVQUFVLENBQVc7SUFDckI7OztPQUdHO0lBQ0gsZUFBZSxDQUFXO0lBQzFCOzs7T0FHRztJQUNILEdBQUcsQ0FBVztJQUNkOzs7T0FHRztJQUNILEtBQUssQ0FBK0M7SUFDcEQ7OztPQUdHO0lBQ0gsWUFBWSxDQUErQztJQUMzRDs7O09BR0c7SUFDSCxVQUFVLENBQVU7SUFDcEI7OztPQUdHO0lBQ0gsaUJBQWlCLENBQVU7SUFDM0I7OztPQUdHO0lBQ0gsUUFBUSxDQUFXO0lBQ25COzs7T0FHRztJQUNILFVBQVUsQ0FBVztJQUNyQjs7O09BR0c7SUFDSCxLQUFLLENBQVc7SUFDaEI7OztPQUdHO0lBQ0gsY0FBYyxDQUFVO0lBQ3hCOzs7T0FHRztJQUNILFNBQVMsQ0FBVztJQUNwQjs7O09BR0c7SUFDSCxTQUFTLENBQVc7SUFDcEI7OztPQUdHO0lBQ0gsY0FBYyxDQUFXO0lBQ3pCOzs7T0FHRztJQUNILElBQUksQ0FBVTtJQUNkOzs7T0FHRztJQUNILElBQUksQ0FBVTtJQUNkOzs7T0FHRztJQUNILFdBQVcsQ0FBVztJQUN0Qjs7O09BR0c7SUFDSCxZQUFZLENBQVU7SUFDdEI7OztPQUdHO0lBQ0gsWUFBWSxDQUFVO0lBQ3RCOzs7T0FHRztJQUNILFFBQVEsQ0FBVTtJQUNsQjs7O09BR0c7SUFDSCxjQUFjLENBQVU7SUFDeEI7OztPQUdHO0lBQ0gsUUFBUSxDQUFPO0lBQ2Y7OztPQUdHO0lBQ0gsU0FBUyxDQUFXO0lBQ3BCOzs7T0FHRztJQUNILFdBQVcsQ0FBTztJQUNsQjs7O09BR0c7SUFDSCxTQUFTLENBQTBCO0NBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERpYWxvZ3MgY2FuIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgd2l0aCBhbnkgY29tcG9uZW50IGFzIHRoZSBjb250ZW50IHVzaW5nIGEgRGlhbG9nU2VydmljZS5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRGlhbG9nQ29uZmlnPFQgPSBhbnk+IHtcbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdG8gcGFzcyB0byB0aGUgY29tcG9uZW50IGxvYWRlZCBpbnNpZGUgdGhlIERpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBkYXRhPzogVDtcbiAgICAvKipcbiAgICAgKiBIZWFkZXIgdGV4dCBvZiB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBsYWJlbHMgdGhlIGVsZW1lbnQgaXQgaXMgYXBwbGllZCB0by5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBGb290ZXIgdGV4dCBvZiB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGZvb3Rlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHdpZHRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGhlaWdodD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgcHJlc3NpbmcgZXNjYXBlIGtleSBzaG91bGQgaGlkZSB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGNsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBhdXRvZm9jdXMgc2hvdWxkIGhhcHBlbiBvbiBzaG93LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGZvY3VzT25TaG93PzogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogV2hlbiBlbmFibGVkLCBjYW4gb25seSBmb2N1cyBvbiBlbGVtZW50cyBpbnNpZGUgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBmb2N1c1RyYXA/OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBCYXNlIHpJbmRleCB2YWx1ZSB0byB1c2UgaW4gbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgYmFzZVpJbmRleD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgbWFuYWdlIGxheWVyaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGF1dG9aSW5kZXg/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBjbGlja2luZyB0aGUgbW9kYWwgYmFja2dyb3VuZCBzaG91bGQgaGlkZSB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGRpc21pc3NhYmxlTWFzaz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgcnRsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbW9wbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBzdHlsZT86IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb250ZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGNvbnRlbnRTdHlsZT86IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBzdHlsZUNsYXNzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb3B0aW9ucyBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHRyYW5zaXRpb25PcHRpb25zPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjbG9zZSBpY29uIHRvIHRoZSBoZWFkZXIgdG8gaGlkZSB0aGUgZGlhbG9nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGNsb3NhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIGhlYWRlciBvciBub3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgc2hvd0hlYWRlcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBiYWNrZ3JvdW5kIHNob3VsZCBiZSBibG9ja2VkIHdoZW4gZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtb2RhbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIG1hc2suXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgbWFza1N0eWxlQ2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyByZXNpemluZyBvZiB0aGUgY29udGVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICByZXNpemFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgZHJhZ2dpbmcgdG8gY2hhbmdlIHRoZSBwb3NpdGlvbiB1c2luZyBoZWFkZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBLZWVwcyBkaWFsb2cgaW4gdGhlIHZpZXdwb3J0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGtlZXBJblZpZXdwb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBNaW5pbXVtIHZhbHVlIGZvciB0aGUgbGVmdCBjb29yZGluYXRlIG9mIGRpYWxvZyBpbiBkcmFnZ2luZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtaW5YPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIE1pbmltdW0gdmFsdWUgZm9yIHRoZSB0b3AgY29vcmRpbmF0ZSBvZiBkaWFsb2cgaW4gZHJhZ2dpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgbWluWT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBkaWFsb2cgY2FuIGJlIGRpc3BsYXllZCBmdWxsIHNjcmVlbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgbWF4aW1pemUgaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtYXhpbWl6ZUljb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgbWluaW1pemUgaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtaW5pbWl6ZUljb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIGRpYWxvZywgb3B0aW9ucyBhcmUgXCJjZW50ZXJcIiwgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJ0b3AtbGVmdFwiLCBcInRvcC1yaWdodFwiLCBcImJvdHRvbS1sZWZ0XCIgb3IgXCJib3R0b20tcmlnaHRcIi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBjbG9zZSBidXR0b24gZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgY2xvc2VBcmlhTGFiZWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGFyZ2V0IGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBvdmVybGF5LCB2YWxpZCB2YWx1ZXMgYXJlIFwiYm9keVwiIG9yIGEgbG9jYWwgbmctdGVtcGxhdGUgdmFyaWFibGUgb2YgYW5vdGhlciBlbGVtZW50IChub3RlOiB1c2UgYmluZGluZyB3aXRoIGJyYWNrZXRzIGZvciB0ZW1wbGF0ZSB2YXJpYWJsZXMsIGUuZy4gW2FwcGVuZFRvXT1cIm15ZGl2XCIgZm9yIGEgZGl2IGVsZW1lbnQgaGF2aW5nICNteWRpdiBhcyB2YXJpYWJsZSBuYW1lKS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBhcHBlbmRUbz86IGFueTtcbiAgICAvKipcbiAgICAgKiBBIGJvb2xlYW4gdG8gZGV0ZXJtaW5lIGlmIGl0IGNhbiBiZSBkdXBsaWNhdGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgZHVwbGljYXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPYmplY3QgbGl0ZXJhbCB0byBkZWZpbmUgd2lkdGhzIHBlciBzY3JlZW4gc2l6ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBicmVha3BvaW50cz86IGFueTtcbiAgICAvKipcbiAgICAgKiBEaWFsb2cgdGVtcGxhdGVzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHRlbXBsYXRlcz86IER5bmFtaWNEaWFsb2dUZW1wbGF0ZXM7XG59XG5cbi8qKlxuICogRGVmaW5lcyB2YWxpZCB0ZW1wbGF0ZXMgaW4gRHluYW1pYyBEaWFsb2cuXG4gKiBAZ3JvdXAgSW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0RpYWxvZ1RlbXBsYXRlcyB7XG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgb2YgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICBoZWFkZXI/OiBUeXBlPGFueT47XG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgb2YgdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgY29udGVudD86IFR5cGU8YW55PjtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgZm9vdGVyLlxuICAgICAqL1xuICAgIGZvb3Rlcj86IFR5cGU8YW55PjtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgbWluaW1pemUgaWNvbi5cbiAgICAgKi9cbiAgICBtaW5pbWl6ZWljb24/OiBUeXBlPGFueT47XG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgb2YgdGhlIG1heGltaXplIGljb24uXG4gICAgICovXG4gICAgbWF4aW1pemVpY29uPzogVHlwZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIG9mIHRoZSBjbG9zZSBpY29uLlxuICAgICAqL1xuICAgIGNsb3NlaWNvbj86IFR5cGU8YW55Pjtcbn1cbiJdfQ==