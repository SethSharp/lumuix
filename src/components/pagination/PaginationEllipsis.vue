<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('flex size-9 items-center justify-center text-text', props.class)">
    <slot>
      <MoreHorizontal />
    </slot>
  </PaginationEllipsis>
</template>
