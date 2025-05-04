import { type HTMLAttributes } from 'vue';
import type { ComboboxItemProps } from 'radix-vue';
import { ComboboxItem } from 'radix-vue';
type __VLS_Props = ComboboxItemProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue;
    disabled: boolean;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_6: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_6) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    ComboboxItem: typeof ComboboxItem;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxItem.js", { with: { "resolution-mode": "import" } }).SelectEvent<import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxItem.js", { with: { "resolution-mode": "import" } }).SelectEvent<import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxItem.js", { with: { "resolution-mode": "import" } }).SelectEvent<import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: (event: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxItem.js", { with: { "resolution-mode": "import" } }).SelectEvent<import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue>) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
