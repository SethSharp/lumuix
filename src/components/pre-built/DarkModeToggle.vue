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
      <MoonIcon
        :size="16"
        class="m-auto mt-0.5 text-primary-900" />
    </template>

    <template #not-checked>
      <SunIcon
        :size="16"
        class="m-auto mt-0.5 text-primary-900" />
    </template>
  </Toggle>
</template>
