import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * AvatarGroup is a helper component for Avatar.
 * @group Components
 */
export declare class AvatarGroup {
    /**
     * Style class of the component
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarGroup, "p-avatarGroup", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class AvatarGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AvatarGroupModule, [typeof AvatarGroup], [typeof i1.CommonModule], [typeof AvatarGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AvatarGroupModule>;
}
