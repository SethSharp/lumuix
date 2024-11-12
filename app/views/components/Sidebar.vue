<script setup lang="ts">
// Sidebar is currently a WIP with 1/2 parts merged
// https://github.com/unovue/shadcn-vue/pull/827
// https://github.com/unovue/shadcn-vue/issues/805
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from '@/components/sidebar'
</script>

<template>
  <SidebarProvider>
    <SidebarTrigger />
    <Sidebar side="right" variant="floating">
      <SidebarContent>
        Some content
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>