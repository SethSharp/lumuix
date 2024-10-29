<script setup lang="ts">
import { Badge } from '@/components/badge'
</script>

<template>
  <div>
    The Badge can take many forms using the variant prop
  </div>

  <div class="flex gap-x-2">
    <Badge> Default </Badge>
    <Badge variant="primary"> Primary </Badge>
    <Badge variant="destructive"> Destructive </Badge>
    <Badge variant="secondary"> Secondary </Badge>
    <Badge variant="outline"> Outline </Badge>
  </div>
</template>
