import { Base } from '@/components/inputs';
import { Button } from '@/components/button';
type __VLS_Props = {
    modelValue?: any;
    currentImage?: string;
    defaultImage?: string;
    accept?: string;
};
declare const uniqueId: string;
declare const newImage: import("vue").ComputedRef<string>;
declare const curImg: string;
declare const handleFileChange: (event: any) => void;
declare const fileUpload: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_7: {
    newImage: string;
    curImage: string;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    image?: (props: typeof __VLS_7) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    Base: typeof Base;
    Button: typeof Button;
    uniqueId: typeof uniqueId;
    newImage: typeof newImage;
    curImg: typeof curImg;
    handleFileChange: typeof handleFileChange;
    fileUpload: typeof fileUpload;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    accept: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
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
