<script setup lang="ts">
import { Button } from '@/components/button'
</script>

<template>
  <div>
    This is a generic and relatively un-opinionated library. Offering components from `shadcn` to
    build form and page components for consuming apps.

    <Button as-child>
      <router-link to="/getting-started/installation"> Get Started </router-link>
    </Button>
  </div>
</template>
