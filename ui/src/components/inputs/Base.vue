<script lang="ts" setup>
import { Error } from '@/components/form'
import { CharacterCount, Description, Label } from '@/components/form'

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

      <CharacterCount
        v-if="showCharacterCount"
        :count="modelValue?.length"
        class="absolute right-0 mt-[5px]" />
    </div>

    <Description class="mt-[2px]">
      {{ description }}
    </Description>

    <Error :error="error" />
  </div>
</template>
