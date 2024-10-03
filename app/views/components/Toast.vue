<script setup lang="ts">
import { h } from 'vue'
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { Button } from '@/components/button'
import MainLayout from '../../layouts/MainLayout.vue'
import { Toaster, useToast, ToastAction } from '@/components/toast'

const { toast } = useToast()

const someAction = () => {
  alert('dismissed')
}
</script>

<template>
  <MainLayout title="Toaster">
    <div>
      Allows for easy toast notifications, allowing real time feedback to users.
    </div>

    <div class="flex flex-col gap-2 w-fit">
      <Button variant="outline" @click="toast({
        title: 'Some title',
        icon: XCircleIcon,
        description: 'some description',
      })"
      >
        Standard
      </Button>

      <Button variant="outline" @click="toast({
        title: 'Action time!',
        icon: XCircleIcon,
        description: 'You have clicked a button, now dismiss it ->',
        action: h(ToastAction, {
          altText: 'Dismiss',
          variant: 'ghost',
          onClick: someAction,
        }, {
          default: () => 'Dismiss',
        }),
      })"
      >
        Action
      </Button>

      <Button variant="outline" @click="toast({
        title: 'Nicework!',
        icon: CheckBadgeIcon,
        description: 'You have successfully clicked this button!',
        iconClasses: 'text-green-500'
      })"
      >
        Custom icon / class
      </Button>
    </div>

    <Toaster />
  </MainLayout>
</template>
