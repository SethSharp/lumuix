<script lang="ts" setup>
import { ref, watch } from 'vue'
import Base from './Base.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(
  defineProps<{
    modelValue?: string | null
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

watch(selectedOption, (newSelectedOption) => {
  if (newSelectedOption) {
    emits('update:modelValue', newSelectedOption)
    return
  }

  emits('update:modelValue', null)
})
</script>

<template>
  <Base v-bind="$props">
    <div class="w-fit">
      <Select v-model="selectedOption">
        <SelectTrigger>
          <SelectValue> {{ selectedOption ?? placeholder }} </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="option in options"
            :value="option">
            <template v-if="$slots.options">
              <slot
                name="options"
                :item="option" />
            </template>
            <template v-else>
              {{ option }}
            </template>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  </Base>
</template>
