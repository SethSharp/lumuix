<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import BaseDropdownMenuItem from './BaseDropdownMenuItem.vue'

const props = defineProps<
  DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <BaseDropdownMenuItem :class="props.class">
    <DropdownMenuItem
      v-bind="forwardedProps"
      class="size-full">
      <slot />
    </DropdownMenuItem>
  </BaseDropdownMenuItem>
</template>
