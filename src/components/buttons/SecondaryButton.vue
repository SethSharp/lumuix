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
    class="bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80"
    v-bind="$attrs">
    <slot />
  </BaseButton>
</template>
