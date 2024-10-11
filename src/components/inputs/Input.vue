<script lang="ts" setup>
import { Base } from '@/components/inputs'

withDefaults(
  defineProps<{
    modelValue?: string
    type?: string
    disabled?: boolean
    placeholder?: string
    error?: string
    required?: boolean
  }>(),
  {
    type: 'text',
  },
)

const input = defineModel()
</script>

<template>
  <Base v-bind="$props">
    <input
      v-model="input"
      :disabled="disabled"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      class="flex h-10 w-full rounded-md border text-black border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300"
      :class="{
      'focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400': !error,
      'focus-visible:ring-red-600 dark:focus-visible:ring-red-400': error,
    }" />
  </Base>
</template>
