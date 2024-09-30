<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="leading-loose text-black dark:text-slate-400 space-y-4">
    <h1 class="text-3xl"> {{ title }} </h1>
    <slot />
  </div>
</template>