import { type Ref } from 'vue';
export type DraggableContext = {
    draggedFromArea: Ref<any>;
    draggedToArea: Ref<any>;
    draggableItem: Ref<any | null>;
    draggableIndex: Ref<number | null>;
    resetDraggable: () => void;
};
export declare function useDraggable(): DraggableContext;
