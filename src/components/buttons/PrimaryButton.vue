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
    class="bg-primary-500 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90"
    v-bind="$attrs">
    <slot />
  </BaseButton>
</template>
