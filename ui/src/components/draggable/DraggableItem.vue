<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { DraggableContext } from './useDraggable'
import { injectDraggableRootContext } from './DraggableArea.vue'

const props = defineProps<{
  class?: string
  data: any
  index: number
}>()

const emit = defineEmits<{
    (e: 'dragstart', payload: { event: DragEvent, data: any }): void
    (e: 'dragend', event: DragEvent): void
    (e: 'dragover', index: number): void
}>()

const context: DraggableContext = injectDraggableRootContext() as DraggableContext

const onDragStart = (event: DragEvent) => {
    context.draggableItem.value = props.data
    emit('dragstart', {
        event: event,
        data: props.data,
    })
}

const onDragOver = () => {
    context.draggableIndex.value = props.index

    emit('dragover', props.index)
}

const onDragEnd = (event: DragEvent) => {
    context.draggableItem.value = null
    context.draggableIndex.value = null

    emit('dragend', event)
}
</script>

<template>
    <div
        :class="props.class"
        draggable="true"
        @dragstart="onDragStart"
        @dragend="onDragEnd"
        @dragover="onDragOver">
        <slot :item="data" />
    </div>
</template>
