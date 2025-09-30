<script lang="ts">
import { createContext } from '@/lib/createContext'

export const [injectDraggableRootContext, provideDraggableRootContext] =
    createContext('DraggableRoot')
</script>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { useDraggable } from '.'

const props = defineProps<{
    class?: string
    data: any
}>()


const draggable = useDraggable()

provideDraggableRootContext(draggable)

const emit = defineEmits<{
    (e: 'drop', payload: DragEvent): void
}>()

const handleDrop = (event: DragEvent) => emit('drop', event)

const allowDrop = (event: DragEvent) => {
    event.preventDefault()
    draggable.draggedToArea.value = props.data
}

const onDragStart = () => (draggable.draggedFromArea.value = props.data)
</script>

<template>
    <div
        :class="props.class"
        @drop="handleDrop"
        @dragstart="onDragStart"
        @dragover="allowDrop">
        <slot />
    </div>
</template>
