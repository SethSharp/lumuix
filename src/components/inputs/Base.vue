<script lang="ts" setup>
import { CharacterCount, Description, Error, Label } from '@/components/inputs'

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

      <CharacterCount v-if="showCharacterCount" :count="modelValue?.length" class="mt-[3px] absolute right-0" />
    </div>

    <Description class="mt-[3px] w-4/5 ">
      {{ description }}
    </Description>

    <Error :message="error" />
  </div>
</template>
