import { type HTMLAttributes } from 'vue';
import { type DropdownMenuCheckboxItemProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
    "update:checked": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onSelect?: (event: Event) => any;
    "onUpdate:checked"?: (payload: boolean) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
