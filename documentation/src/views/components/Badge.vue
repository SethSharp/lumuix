<script setup lang="ts">
import { Badge } from '@sethsharp/lumuix'

const variants = ['primary', 'secondary', 'destructive', 'warning'] as const
const sizes = ['xs', 'sm', 'md', 'lg'] as const
</script>

<template>
  <p class="text-text">The Badge can take many forms using the variant prop</p>

  <h2>Outline</h2>
  <div class="flex w-1/2 flex-col gap-2">
    <template
      v-for="variant in variants"
      :key="variant">
      <div class="flex gap-2">
        <template
          v-for="size in sizes"
          :key="`${variant}-${size}`">
          <Badge
            :variant="variant"
            :size="size"
            type="outline"
            >{{ variant }}</Badge
          >
        </template>
      </div>
    </template>
  </div>

  <h2>Fill</h2>
  <div class="flex w-1/2 flex-col gap-2">
    <template
      v-for="variant in variants"
      :key="variant">
      <div class="flex gap-2">
        <template
          v-for="size in sizes"
          :key="`${variant}-${size}-fill`">
          <Badge
            :variant="variant"
            :size="size"
            type="fill"
            >{{ variant }}</Badge
          >
        </template>
      </div>
    </template>
  </div>
</template>
