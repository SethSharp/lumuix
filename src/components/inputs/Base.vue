<script lang="ts" setup>
import Label from './Label.vue'
import Error from './Error.vue'

withDefaults(
  defineProps<{
    id?: string
    modelValue?: any
    label?: string
    showLabel?: boolean
    description?: string
    showCharacterCount?: boolean
    error?: string
  }>(),
  {
    showLabel: true,
    showCharacterCount: false,
  },
)
</script>

<script lang="ts">
export default {
  name: 'Base',
  inheritAttrs: false,
}
</script>

<template>
  <div>
    <Label
      v-if="label && showLabel"
      :id="id">
      {{ label }}
    </Label>

    <div class="relative">
      <slot />

      <div
        v-if="showCharacterCount"
        class="absolute right-0 mt-[3px] text-xs text-slate-600 dark:text-slate-300">
        Characters: {{ modelValue?.length }}
      </div>
    </div>

    <div class="mt-[3px] w-4/5 text-sm text-slate-600 dark:text-slate-300">{{ description }}</div>

    <Error :message="error" />
  </div>
</template>
