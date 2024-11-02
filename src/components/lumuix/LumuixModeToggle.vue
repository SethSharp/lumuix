<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import Toggle from '../inputs/Toggle.vue'

const isDark = useDark({
  selector: 'html',
})
</script>

<template>
  <Toggle v-model="isDark">
    <template #checked>
      <MoonIcon class="m-auto mt-0.5 size-4 text-primary" />
    </template>

    <template #not-checked>
      <SunIcon class="m-auto mt-0.5 size-4 text-primary" />
    </template>
  </Toggle>
</template>
