<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Select,
  Combobox
} from '@/components/inputs'

const selectValue = ref(null)
const selectOptions = ref([
  'Grape',
  'Banana',
  'Strawberry'
])

const comboboxValue = ref('next.js')
const comboboxOptions = ref([
  { id: 'next.js', name: 'Next.js' },
  { id: 'sveltekit', name: 'SvelteKit' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
])

watch(comboboxValue, () => {
  console.log(comboboxValue.value)
})
</script>

<template>
  <div>
    <p>Inputs houses a lot of general use inputs especially helpful for forms. Some are opinionated inputs built using Lumuix components (such as Select and Combobox). </p>

    <div class="space-y-4 w-fit mt-4">
      <div>
        <Select v-model="selectValue" placeholder="Select a fruit..." :options="selectOptions"/>
        <p class="text-sm mt-1">
          Accepts an array of values
        </p>
      </div>

      <div>
        <Combobox v-model="comboboxValue" :options="comboboxOptions" />
        <p class="text-sm mt-1">
          Accepts options as {id: number|string, value: string}.
          Model value as: array, null or a number (id)
        </p>
      </div>
    </div>
  </div>
</template>
