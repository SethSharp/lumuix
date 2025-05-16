<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationNext, type PaginationNextProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
      class?: HTMLAttributes['class']
    }
  >(),
  {},
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <Button
      :class="cn('size-10 p-0', props.class)"
      as-child
      variant="outline">
      <slot :icon="ChevronRight" />
    </Button>
  </PaginationNext>
</template>
