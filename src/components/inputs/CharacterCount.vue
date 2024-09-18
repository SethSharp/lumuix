<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>

<template>
  <div class="text-xs text-slate-600 dark:text-slate-300">Characters: {{ count }}</div>
</template>
