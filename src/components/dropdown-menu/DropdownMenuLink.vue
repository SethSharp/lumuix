<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import BaseDropdownMenuItem from './BaseDropdownMenuItem.vue'

const props = withDefaults(
  defineProps<
    DropdownMenuItemProps & {
      class?: HTMLAttributes['class']
      inset?: boolean
      as?: any
      href?: string
      method?: string
    }
  >(),
  {
    as: 'a',
  },
)

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
      :as="as"
      :href="href"
      class="size-full">
      <slot />
    </DropdownMenuItem>
  </BaseDropdownMenuItem>
</template>
