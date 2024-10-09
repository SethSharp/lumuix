<script setup lang="ts">
import { ref, watch } from 'vue'
import { Combobox } from '@/components/inputs'

const options = [
  { id: 'next.js', name: 'Next.js' },
  { id: 'sveltekit', name: 'SvelteKit' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
]

const isMultiple = ref(true)
const selectedOptions = ref([])

watch(selectedOptions, () => {
  console.log(selectedOptions.value)
})
</script>

<template>
  <Combobox :options="options" v-model="selectedOptions" :multiple="isMultiple"/>
</template>