<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { CalendarIcon } from 'lucide-vue-next'
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'
import { Base } from '@/components/inputs'
import { Button } from '@/components/button'
import { Calendar } from '@/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(
  defineProps<{
    modelValue?: DateValue | undefined
    defaultValue?: DateValue | undefined
    placeholder?: string
  }>(),
  {
    placeholder: 'Pick a date',
  },
)

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue | undefined>(props.modelValue)

watch(value, () => {
  emits('update:modelValue', value.value)
})

onMounted(() => {
  // need to do this, otherwise build complains about a type mismatch
  // if we passed default value / modelValue to the value
  if (props.defaultValue) {
    value.value = props.defaultValue
  }
})
</script>

<template>
  <Base v-bind="$props">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="['w-[280px] justify-start text-left font-normal text-text']">
          <CalendarIcon class="mr-2 size-4" />
          {{ value ? df.format(value.toDate(getLocalTimeZone())) : placeholder }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar
          v-model="value as DateValue | undefined"
          :default-value="defaultValue"
          :multiple="false"
          initial-focus />
      </PopoverContent>
    </Popover>
  </Base>
</template>
