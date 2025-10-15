type __VLS_Props = {
    defaultImage?: string;
    label?: string;
    accept?: string;
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: any;
};
declare var __VLS_5: {
    curImage: string;
};
type __VLS_Slots = {} & {
    image?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: (value: any) => any;
}>, {
    accept: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
