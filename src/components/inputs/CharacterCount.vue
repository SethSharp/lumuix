<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>

<template>
  <div
    class="absolute right-0 text-xs text-slate-600 dark:text-slate-300">
    Characters: {{ count }}
  </div>
</template>