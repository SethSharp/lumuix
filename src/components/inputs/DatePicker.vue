<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { CalendarIcon } from 'lucide-vue-next'
import { createDecade, createYear, toDate } from 'radix-vue/date'
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
          initial-focus>
          <template #header>
            <CalendarHeader>
              <CalendarHeading class="flex w-full items-center justify-between gap-2">
                <Select
                  :default-value="placeholder.month.toString()"
                  @update:model-value="(v) => {
                    if (!v || !placeholder) return;
                    if (Number(v) === placeholder?.month) return;
                      placeholder = placeholder.set({
                        month: Number(v),
                      })
                    }"
                  >
                  <SelectTrigger aria-label="Select month" class="w-[60%]">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent class="max-h-[200px]">
                    <SelectItem
                      v-for="month in createYear({ dateObj: date })"
                      :key="month.toString()" :value="month.month.toString()"
                    >
                      {{ formatter.custom(toDate(month), { month: 'long' }) }}
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  :default-value="placeholder.year.toString()"
                  @update:model-value="(v) => {
                    if (!v || !placeholder) return;
                      if (Number(v) === placeholder?.year) return;
                      placeholder = placeholder.set({
                        year: Number(v),
                      })
                    }"
                  >
                  <SelectTrigger aria-label="Select year" class="w-[40%]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent class="max-h-[200px]">
                    <SelectItem
                      v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
                      :key="yearValue.toString()" :value="yearValue.year.toString()"
                    >
                      {{ yearValue.year }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CalendarHeading>
            </CalendarHeader>
          </template>
        </Calendar>
      </PopoverContent>
    </Popover>
  </Base>
</template>
