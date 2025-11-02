<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'
import { Base } from '@/components/inputs'

const props = defineProps<{
  modelValue?: string | number
  class?: HTMLAttributes['class']
  placeholder?: string
  error?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
})
</script>

<template>
  <Base v-bind="$props">
    <textarea
      v-model="modelValue"
      :placeholder="placeholder"
      class="flex min-h-20 w-full rounded-md border border-slate-200 bg-muted px-3 py-2 text-sm font-normal text-text ring-offset-white placeholder:text-muted-foreground focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:focus-visible:border-slate-300"
      :class="{
        'focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400': !error,
        'focus-visible:ring-red-600 dark:focus-visible:ring-red-400': error,
      }" />
  </Base>
</template>
