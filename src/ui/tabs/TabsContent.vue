<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="
      cn(
        'ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
        props.class,
      )
    "
    v-bind="delegatedProps">
    <slot />
  </TabsContent>
</template>
