<script setup lang="ts">
withDefaults(
  defineProps<{
    shadow?: boolean
  }>(),
  {
    shadow: false,
  },
)
</script>

<template>
  <h1
    class="rounded bg-white px-4 py-2 text-3xl text-black dark:bg-slate-950 dark:text-slate-400"
    :class="{ shadow: shadow }">
    <slot />
  </h1>
</template>
