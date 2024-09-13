<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { PaginationNext, type PaginationNextProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/buttons'

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
      <ChevronRightIcon class="size-4" />
    </Button>
  </PaginationNext>
</template>
