import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
type __VLS_Props = {
    open?: boolean;
    headerData?: {
        title: string;
        description: string;
    };
    size?: string;
};
declare const closeModal: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_10: {}, __VLS_30: {}, __VLS_36: {}, __VLS_38: {}, __VLS_40: {}, __VLS_46: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    trigger?: (props: typeof __VLS_10) => any;
} & {
    title?: (props: typeof __VLS_30) => any;
} & {
    description?: (props: typeof __VLS_36) => any;
} & {
    content?: (props: typeof __VLS_38) => any;
} & {
    default?: (props: typeof __VLS_40) => any;
} & {
    footer?: (props: typeof __VLS_46) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    Dialog: typeof Dialog;
    DialogContent: typeof DialogContent;
    DialogDescription: typeof DialogDescription;
    DialogFooter: typeof DialogFooter;
    DialogHeader: typeof DialogHeader;
    DialogTitle: typeof DialogTitle;
    DialogTrigger: typeof DialogTrigger;
    closeModal: typeof closeModal;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (...args: any[]) => any;
}>, {
    size: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (...args: any[]) => any;
}>, {
    size: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
