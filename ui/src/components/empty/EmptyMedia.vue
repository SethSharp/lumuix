<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { EmptyMediaVariants } from "./index.js"
import { cn } from "@/lib/utils.js"
import { emptyMediaVariants } from "./index.js"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: EmptyMediaVariants["variant"]
}>()
</script>

<template>
  <div
    data-slot="empty-icon"
    :data-variant="variant"
    :class="cn(emptyMediaVariants({ variant }), props.class)"
  >
    <slot />
  </div>
</template>
