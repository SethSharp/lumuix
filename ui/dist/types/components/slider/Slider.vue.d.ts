import type { SliderRootProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
type __VLS_Props = SliderRootProps & {
    class?: HTMLAttributes['class'];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: number[]) => any;
    valueCommit: (payload: number[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (payload: number[]) => any;
    onValueCommit?: (payload: number[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
