<script setup lang="ts">
import { h } from 'vue'
import { CircleCheckIcon, XCircle } from 'lucide-vue-next'
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
    <p class="text-text">Allows for easy toast notifications, allowing real time feedback to users.</p>

    <div class="flex w-fit flex-col gap-2">
      <Button
        variant="outline"
        @click="
          toast({
            title: 'Some title',
            icon: XCircle,
            description: 'some description',
          })
        ">
        Standard
      </Button>

      <Button
        variant="outline"
        @click="
          toast({
            title: 'Action time!',
            icon: CircleCheckIcon,
            description: 'You have clicked a button, now dismiss it ->',
            iconClasses: '!size-6',
            variant: 'destructive',
            action: h(
              ToastAction,
              {
                altText: 'Dismiss',
                variant: 'ghost',
                class: 'text-white',
                onClick: someAction,
              },
              {
                default: () => 'Dismiss',
              },
            ),
          })
        ">
        Destructive Action
      </Button>

      <Button
        variant="outline"
        @click="
          toast({
            title: 'Nicework!',
            icon: CheckBadgeIcon,
            description: 'You have successfully clicked this button!',
            iconClasses: 'text-green-500',
          })
        ">
        Custom icon / class
      </Button>
    </div>

    <Toaster />
  </MainLayout>
</template>
