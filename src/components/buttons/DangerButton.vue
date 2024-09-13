<script setup lang="ts">
import BaseButton from './BaseButton.vue'

withDefaults(
  defineProps<{
    is?: any
    type?: ButtonType
    disabled?: boolean
  }>(),
  {
    is: 'button',
  },
)
</script>

<template>
  <BaseButton
    :is="is"
    :type="type"
    :disabled="disabled"
    class="bg-red-500 text-slate-50 hover:bg-red-700/90 dark:bg-red-800 dark:text-slate-100 dark:hover:bg-red-800/90"
    v-bind="$attrs">
    <slot />
  </BaseButton>
</template>
