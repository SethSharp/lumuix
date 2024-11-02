import type { SliderRootProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
declare const _default: import("vue").DefineComponent<SliderRootProps & {
    class?: HTMLAttributes["class"];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: number[]) => any;
    valueCommit: (payload: number[]) => any;
}, string, import("vue").PublicProps, Readonly<SliderRootProps & {
    class?: HTMLAttributes["class"];
}> & Readonly<{
    "onUpdate:modelValue"?: (payload: number[]) => any;
    onValueCommit?: (payload: number[]) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
