<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/components/slider'

const modelValue = ref([50])
</script>

<template>
  <div class="mt-6 flex w-full flex-col justify-center">
    <span class="mx-auto"> {{ modelValue?.[0] }}% </span>
    <Slider
      v-model="modelValue"
      :max="100"
      :step="1" />
  </div>
</template>
