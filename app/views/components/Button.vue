<script setup lang="ts">
import { Button } from '@/components/button'
</script>

<template>
  <div>
    The Button can take many forms using the variant prop
  </div>

  <div class="flex flex-col w-fit gap-y-2">
    <Button> Default </Button>
    <Button variant="primary"> Primary </Button>
    <Button variant="destructive"> Destructive </Button>
    <Button variant="secondary"> Secondary </Button>
    <Button variant="ghost"> Ghost </Button>
    <Button variant="outline"> Outline </Button>
  </div>
</template>
