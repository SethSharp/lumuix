<script setup lang="ts">
import {
  DraggableArea,
  DraggableItem,
  useDraggable,
} from "@sethsharp/lumuix"
import { ref } from "vue"

const {
  draggedFromArea,
  draggableItem,
  draggableIndex,
  resetDraggable,
} = useDraggable()

const items = ref([
  {
    id: 1,
    value: 'Item 1',
  },
  {
    id: 2,
    value: 'Item 2',
  },
  {
    id: 3,
    value: 'Item 3',
  },
  {
    id: 4,
    value: 'Item 4',
  },
  {
    id: 5,
    value: 'Item 5',
  },
])

const handleDrop = (e: DragEvent) => {
  if (!draggableItem.value || draggableIndex.value == null) return

  // Remove from the original
  items.value = items.value.filter((m) => m.id !== draggableItem.value.id)

  items.value.splice(
    draggableIndex.value,
    0,
    draggableItem.value,
  )

  resetDraggable()
}
</script>

<template>
  <DraggableArea data="area-1" @drop="handleDrop" class="min-h-20 w-full rounded border-2 border-dashed p-4 space-y-2">
    <DraggableItem
      v-for="(item, idx) in items"
      :key="idx"
      :data="item"
      :index="idx"
      class="cursor-move rounded border bg-white p-2"
    >
      {{ item.value }}
    </DraggableItem>
  </DraggableArea>
</template>
