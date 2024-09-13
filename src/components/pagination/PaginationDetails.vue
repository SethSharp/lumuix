<script setup lang="ts">
defineProps<{
  min: number,
  max: number
  total: number
}>()
</script>

<template>
  <div class="my-auto text-slate-400 dark:text-slate-100">
    Showing {{ min }} to {{ max }} of {{ total }} results
  </div>
</template>