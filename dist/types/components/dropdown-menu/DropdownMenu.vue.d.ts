import { type DropdownMenuRootProps } from 'radix-vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            open: boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<DropdownMenuRootProps> & Readonly<{
    "onUpdate:open"?: (payload: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
