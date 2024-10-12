<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { MoveRight } from 'lucide-vue-next'
import { PaginationNext, type PaginationNextProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
      href: string
      class?: HTMLAttributes['class']
      disabled?: boolean
      is?: any
      as?: string
    }
  >(),
  {
    is: 'a',
    asChild: true,
  },
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
      :is="is"
      :as="as"
      :href="href"
      variant="outline">
      <MoveRight :size="16" />
    </Button>
  </PaginationNext>
</template>
