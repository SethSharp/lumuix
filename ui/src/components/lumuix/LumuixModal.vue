<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'

const emits = defineEmits(['close'])

withDefaults(
  defineProps<{
    open?: boolean
    headerData?: {
      title: string
      description: string
    }
    size?: string
  }>(),
  {
    size: 'md',
  },
)

const closeModal = () => emits('close')
</script>

<template>
  <Dialog :open="open">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogContent
      @close="closeModal"
      @escape-key-down="closeModal"
      @pointer-down-outside="closeModal"
      :class="'max-w-' + size">
      <DialogHeader>
        <DialogTitle>
          <template v-if="$slots.title">
            <slot name="title" />
          </template>
          <template v-else-if="headerData?.title">
            {{ headerData.title }}
          </template>
        </DialogTitle>
        <DialogDescription>
          <template v-if="$slots.description">
            <slot name="description" />
          </template>
          <template v-else-if="headerData?.description">
            {{ headerData.description }}
          </template>
        </DialogDescription>
      </DialogHeader>

      <div class="text-text">
        <template v-if="$slots.content">
          <slot name="content" />
        </template>
        <template v-else>
          <slot />
        </template>
      </div>

      <DialogFooter>
        <slot name="footer" />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
