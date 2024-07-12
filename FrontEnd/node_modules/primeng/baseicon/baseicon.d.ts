import * as i0 from "@angular/core";
export declare class BaseIcon {
    label: string;
    spin: boolean;
    styleClass: string;
    role: string;
    ariaLabel: string;
    ariaHidden: boolean;
    ngOnInit(): void;
    getAttributes(): void;
    getClassNames(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseIcon, "ng-component", never, { "label": { "alias": "label"; "required": false; }; "spin": { "alias": "spin"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_spin: unknown;
}
