<script setup lang="ts">
import { Button } from '@/components/button'
</script>

<template>
  <div class="text-text">
    <p>
      This is a generic and relatively un-opinionated library. Offering components from `shadcn` to
      build form and page components for consuming apps.
    </p>

    <Button as-child>
      <router-link to="/getting-started/installation"> Get Started </router-link>
    </Button>
  </div>
</template>
