<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

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
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    class="flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300"
    :class="{
      'focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400': !error,
      'focus-visible:ring-red-600 dark:focus-visible:ring-red-400': error,
    }" />
</template>
