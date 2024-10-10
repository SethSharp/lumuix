<script lang="ts" setup>
import { ref, watch } from 'vue'
import {
  SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    options: string[]
    placeholder?: string
  }>(),
  {
    placeholder: 'Select an Option',
  },
)

const selectedOption = ref(
  props.modelValue ? props.options.find((option) => option === props.modelValue) : null,
)

watch(selectedOption, () => {
  emits('update:modelValue', selectedOption.value)
})
</script>

<template>
  <SelectRoot v-model="selectedOption">
    <SelectTrigger>
      <SelectValue :placeholder="placeholder ?? 'Select an option'" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="option in options" :value="option">
        {{ option }}
      </SelectItem>
    </SelectContent>
  </SelectRoot>
</template>
