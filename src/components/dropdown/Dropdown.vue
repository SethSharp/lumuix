<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/ui/dropdown-menu'

withDefaults(
  defineProps<{
    triggerClass?: HTMLAttributes['class']
    widthClass?: string
  }>(),
  {
    widthClass: 'w-56',
  },
)
</script>

<template>
  <DropdownMenu v-slot="{ open }">
    <DropdownMenuTrigger
      as-child
      :class="[triggerClass]">
      <slot
        name="trigger"
        :open="open" />
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="[widthClass]">
      <slot name="content" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
