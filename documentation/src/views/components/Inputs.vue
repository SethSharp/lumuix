<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  Checkbox,
  ImageUpload,
  Input,
  TextArea,
  Toggle,
} from '@sethsharp/lumuix'

const checkboxValue = ref(true)

const selectValue = ref(null)
const selectOptions = ref(['Grape', 'Banana', 'Strawberry'])
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
