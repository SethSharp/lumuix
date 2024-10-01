<script setup lang="ts">
import { Button } from '@/components/button'
import { Toaster, useToast } from '@/components/toast'
import MainLayout from '../../layouts/MainLayout.vue'

const { toast } = useToast()
</script>

<template>
  <MainLayout title="Toaster">
    <div>
      Allows for easy toast notifications, allowing real time feedback to users.
    </div>

    <Button @click="toast({
        title: 'Some title',
        description: 'some description'
      })"
    >
      Add a notification
    </Button>

    <Toaster />
  </MainLayout>
</template>
