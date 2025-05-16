<script setup lang="ts">
import { isVNode } from 'vue'
import { cn } from '@/lib/utils'
import { useToast } from './use-toast'
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '.'

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast"
      class="my-1">
      <div class="flex gap-3">
        <component
          :is="toast.icon"
          :class="cn(toast.iconClasses, 'size-4')" />
        <div class="grid gap-1">
          <ToastTitle v-if="toast.title">
            {{ toast.title }}
          </ToastTitle>
          <template v-if="toast.description">
            <ToastDescription v-if="isVNode(toast.description)">
              <component :is="toast.description" />
            </ToastDescription>
            <ToastDescription v-else>
              {{ toast.description }}
            </ToastDescription>
          </template>
          <ToastClose />
        </div>
        <component :is="toast.action" />
      </div>
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
