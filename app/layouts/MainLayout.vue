<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="leading-loose text-black dark:text-slate-300 space-y-4">
    <h1 class="text-3xl"> {{ title }} </h1>

    <slot />

    <div class="text-slate-600 dark:text-slate-500">
      <slot name="content" />
    </div>
  </div>
</template>