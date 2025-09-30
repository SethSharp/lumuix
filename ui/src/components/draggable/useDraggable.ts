import { ref, type Ref } from 'vue'

export type DraggableContext = {
    draggedFromArea: Ref<any>
    draggedToArea: Ref<any>
    draggableItem: Ref<any | null>
    draggableIndex: Ref<number | null>
    resetDraggable: () => void
}

const draggedFromArea = ref<any>(null)
const draggedToArea = ref<any>(null)
const draggableItem = ref<any | null>(null)
const draggableIndex = ref<number | null>(null)

const resetDraggable = () => {
    draggedFromArea.value = null
    draggedToArea.value = null
    draggableItem.value = null
    draggableIndex.value = null
}

export function useDraggable(): DraggableContext {
    return {
        draggedFromArea,
        draggedToArea,
        draggableItem,
        draggableIndex,
        resetDraggable,
    }
}
