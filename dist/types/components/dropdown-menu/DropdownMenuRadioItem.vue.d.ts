import { type HTMLAttributes } from 'vue';
import { type DropdownMenuRadioItemProps } from 'radix-vue';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<DropdownMenuRadioItemProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<DropdownMenuRadioItemProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    onSelect?: (event: Event) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
