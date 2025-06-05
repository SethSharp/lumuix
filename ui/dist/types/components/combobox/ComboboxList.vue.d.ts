import type { ComboboxContentProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
type __VLS_Props = ComboboxContentProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_14: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any;
    focusOutside: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    interactOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: (event: KeyboardEvent) => any;
    onPointerDownOutside?: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any;
    onFocusOutside?: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    onInteractOutside?: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
}>, {
    position: "inline" | "popper";
    sideOffset: number;
    align: "end" | "start" | "center";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
