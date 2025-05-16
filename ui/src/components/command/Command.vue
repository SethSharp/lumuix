<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ComboboxRoot, useForwardPropsEmits } from 'radix-vue'
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'

const props = withDefaults(defineProps<ComboboxRootProps & { class?: HTMLAttributes['class'] }>(), {
  open: true,
})

const emits = defineEmits<ComboboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :class="[
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50',
      props.class,
    ]">
    <slot />
  </ComboboxRoot>
</template>
