<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ToastAction, type ToastActionProps } from 'radix-vue'
import { Button, type ButtonVariants } from '@/components/button'

const props = defineProps<ToastActionProps & {
  class?: HTMLAttributes['class'],
  variant?: ButtonVariants['variant']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps">
    <Button :variant="variant" :class="props.class">
      <slot />
    </Button>
  </ToastAction>
</template>
