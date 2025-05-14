<script setup lang="ts">
import { ChevronsRight } from 'lucide-vue-next'
import { type HTMLAttributes, computed } from 'vue'
import { PaginationLast, type PaginationLastProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/button'

const props = withDefaults(
  defineProps<
    PaginationLastProps & {
      href: string
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
  <PaginationLast v-bind="delegatedProps">
    <Button
      :class="cn('size-10 p-0', props.class)"
      as-child
      variant="outline">
      <slot>
        <component
          :is="as"
          :href="href">
          <ChevronsRight class="size-4" />
        </component>
      </slot>
    </Button>
  </PaginationLast>
</template>
