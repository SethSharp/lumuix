<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { MoveLeft } from 'lucide-vue-next'
import { PaginationPrev, type PaginationPrevProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationPrevProps & {
      href: string
      class?: HTMLAttributes['class']
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
  <PaginationPrev v-bind="delegatedProps">
    <Button
      :class="cn('size-10 p-0', props.class)"
      :href="href"
      :is="is"
      :as="as"
      variant="outline">
      <MoveLeft :size="16" />
    </Button>
  </PaginationPrev>
</template>
