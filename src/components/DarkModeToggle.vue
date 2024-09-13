<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import Toggle from './inputs/Toggle.vue'

const isDark = useDark({
  selector: 'html',
})
</script>

<template>
  <Toggle v-model="isDark">
    <template #checked>
      <MoonIcon class="m-auto mt-0.5 size-4 text-primary-900" />
    </template>

    <template #not-checked>
      <SunIcon class="m-auto size-5 text-primary-900" />
    </template>
  </Toggle>
</template>
