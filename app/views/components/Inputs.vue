<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Select,
  Combobox,
  Checkbox,
  DatePicker,
  ImageUpload,
  Input,
  TextArea,
  Toggle,
} from '@/components/inputs'
import { CalendarDate } from '@internationalized/date'

const checkboxValue = ref(true)

const selectValue = ref(null)
const selectOptions = ref(['Grape', 'Banana', 'Strawberry'])

const comboboxValue = ref('next.js')
const comboboxOptions = ref([
  { id: 'next.js', name: 'Next.js' },
  { id: 'sveltekit', name: 'SvelteKit' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
])

const datePickerValue = ref(new CalendarDate(2024, 12, 6))

watch(datePickerValue, () => {
  console.log(datePickerValue.value)
})
</script>

<template>
  <div>
    <p class="text-text">
      Inputs houses a lot of general use inputs especially helpful for forms. Some are opinionated
      inputs built using Lumuix components (such as Select and Combobox).
    </p>

    <div class="mt-4 w-fit space-y-4">
      <div>
        <Checkbox
          v-model="checkboxValue"
          text="This is a checkbox" />
      </div>

      <div>
        <Combobox
          v-model="comboboxValue"
          label="This is a combobox"
          description="Accepts options as {id: number|string, value: string}. Model value as: array, null or a number (id)"
          :options="comboboxOptions" />
      </div>

      <div>
        <DatePicker
          v-model="datePickerValue"
          label="Date picker"
          description="Select a date for this example page" />
      </div>

      <div>
        <ImageUpload
          label="Image upload"
          description="Allows you to upload an image" />
      </div>

      <div>
        <Input
          label="This is a input"
          description="Allows you to enter some short text"
          placeholder="This is a placeholder, guiding users to a sensible response" />
      </div>

      <div>
        <Select
          v-model="selectValue"
          label="This is a select (custom)"
          placeholder="Select a fruit..."
          :options="selectOptions"
          description="Accepts an array of values" />
      </div>

      <div>
        <TextArea
          label="This is a textarea"
          description="Allows you to enter a body of text"
          placeholder="Do not enter the text of a book here please."
          error="Oops! There is an error - this is available on all input components" />
      </div>

      <div>
        <Toggle
          label="This is a toggle"
          description="Toggle a setting or light and dark mode" />
      </div>
    </div>
  </div>
</template>
