<script lang="ts" setup>
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
  <input
    v-model="input"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    class="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:ring-offset-slate-950 dark:placeholder:text-slate-500"
    :class="{
      'focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400': !error,
      'focus-visible:ring-red-600 dark:focus-visible:ring-red-400': error,
    }" />
</template>
