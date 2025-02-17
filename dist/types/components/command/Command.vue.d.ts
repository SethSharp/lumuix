import { type HTMLAttributes } from 'vue';
import { ComboboxRoot } from 'radix-vue';
import type { ComboboxRootProps } from 'radix-vue';
type __VLS_Props = ComboboxRootProps & {
    class?: HTMLAttributes['class'];
};
declare const forwarded: import("vue").ComputedRef<{
    modelValue: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue | import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue[];
    defaultValue: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue | import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue[];
    defaultOpen: boolean;
    searchTerm: string;
    selectedValue: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue;
    multiple: boolean;
    disabled: boolean;
    name: string;
    dir: import("../../../node_modules/radix-vue/dist/shared/types.js", { with: { "resolution-mode": "import" } }).Direction;
    filterFunction: (val: string[] | number[] | false[] | true[] | Record<string, any>[], term: string) => string[] | number[] | false[] | true[] | Record<string, any>[];
    displayValue: (val: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => string;
    resetSearchTermOnBlur: boolean;
    resetSearchTermOnSelect: boolean;
    asChild: boolean;
    as: import("radix-vue", { with: { "resolution-mode": "import" } }).AsTag | import("vue").Component;
    open: boolean;
} & Record<string, any>>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_7: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_7) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    ComboboxRoot: typeof ComboboxRoot;
    forwarded: typeof forwarded;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    "update:open": (value: boolean) => any;
    "update:searchTerm": (value: string) => any;
    "update:selectedValue": (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    "onUpdate:open"?: (value: boolean) => any;
    "onUpdate:searchTerm"?: (value: string) => any;
    "onUpdate:selectedValue"?: (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
}>, {
    open: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    "update:open": (value: boolean) => any;
    "update:searchTerm": (value: string) => any;
    "update:selectedValue": (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
    "onUpdate:open"?: (value: boolean) => any;
    "onUpdate:searchTerm"?: (value: string) => any;
    "onUpdate:selectedValue"?: (value: import("../../../node_modules/radix-vue/dist/Combobox/ComboboxRoot.js", { with: { "resolution-mode": "import" } }).AcceptableValue) => any;
}>, {
    open: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
