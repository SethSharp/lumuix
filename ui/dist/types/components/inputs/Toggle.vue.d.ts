import { type HTMLAttributes } from 'vue';
import { type SwitchRootProps } from 'radix-vue';
type __VLS_Props = SwitchRootProps & {
    modelValue?: boolean | null;
    class?: HTMLAttributes['class'];
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: boolean | undefined;
};
declare var __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    checked?: (props: typeof __VLS_14) => any;
} & {
    'not-checked'?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:checked": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:checked"?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
