<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    class="w-32 p-4 text-center align-middle dark:text-slate-300"
    :class="props.class">
    <slot />
  </td>
</template>
