<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Select
} from '@/components/inputs'

const selectValue = ref(null)
const selectOptions = ref([
  'Grape',
  'Banana',
  'Strawberry'
])

watch(selectValue, () => {
  console.log(selectValue.value)
})
</script>

<template>
  <div>
    <p>Inputs houses a lot of general use inputs especially helpful for forms.</p>

    <div class="space-y-4 w-fit">
      <Select v-model="selectValue" :options="selectOptions" />
    </div>
  </div>
</template>
