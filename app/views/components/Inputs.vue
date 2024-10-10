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

const comboboxValue = ref(null)
const comboboxOptions = ref([
  { id: 'next.js', name: 'Next.js' },
  { id: 'sveltekit', name: 'SvelteKit' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
])

watch(selectValue, () => {
  console.log(selectValue.value)
})
</script>

<template>
  <div>
    <p>Inputs houses a lot of general use inputs especially helpful for forms.</p>

    <div class="space-y-4 w-fit">
      <Select v-model="selectValue" placeholder="Select a fruit..." :options="selectOptions" />

      <Combobox v-model="comboboxValue" :options="comboboxOptions" :multiple="true" />
    </div>
  </div>
</template>
