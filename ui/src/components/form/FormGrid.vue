<script lang="ts" setup>
import FormElement from './FormElement.vue'
</script>

<template>
  <FormElement>
    <div class="grid gap-4 md:grid-cols-2">
      <slot />
    </div>
  </FormElement>
</template>
