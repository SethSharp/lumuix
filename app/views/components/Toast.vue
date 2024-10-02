<script setup lang="ts">
import { h } from 'vue'
import { XCircleIcon } from '@heroicons/vue/24/outline'
import { Button } from '@/components/button'
import MainLayout from '../../layouts/MainLayout.vue'
import { Toaster, useToast, ToastAction } from '@/components/toast'

const { toast } = useToast()

const someAction = () => {
  alert('some action')
}
</script>

<template>
  <MainLayout title="Toaster">
    <div>
      Allows for easy toast notifications, allowing real time feedback to users.
    </div>

    <Button variant="outline" @click="toast({
        title: 'Some title',
        icon: XCircleIcon,
        description: 'some description',
      })"
    >
      Standard
    </Button>

    <Button variant="outline" @click="toast({
        title: 'Some title',
        icon: XCircleIcon,
        description: 'some description',
        action: h(ToastAction, {
          altText: 'Try again',
          variant: 'ghost',
          onClick: someAction,
        }, {
          default: () => 'Try again',
        }),
      })"
    >
      Action
    </Button>

    <Toaster />
  </MainLayout>
</template>
