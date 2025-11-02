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
      class="flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-input ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
      :class="{
        'focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400': !error,
        'focus-visible:ring-red-600 dark:focus-visible:ring-red-400': error,
      }" />
  </Base>
</template>
