<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { CollapsibleRoot } from 'radix-vue'
import router from './router'
import { Button } from '@sethsharp/lumuix/button'
import { LumuixModeToggle } from '@sethsharp/lumuix/lumuix'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from '@sethsharp/lumuix/sidebar'

const route = useRoute()
const currentRoute = computed(() => route.path)

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div class="mx-auto h-screen">
    <SidebarProvider>
      <Sidebar
        v-slot="{ state }"
        side="left"
        variant="sidebar">
        <SidebarHeader>
          <RouterLink to="/">
            <img
              v-if="state == 'expanded'"
              src="@/assets/logo.png"
              class="w-full"
              alt="Lumuix Logo" />
          </RouterLink>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup
            v-for="group in routes"
            :key="group.name">
            <SidebarGroupContent>
              <SidebarMenu>
                <CollapsibleRoot
                  default-open
                  class="group/collapsible">
                  <SidebarMenuItem>
                    <SidebarGroupLabel
                      as-child
                      class="text-heading">
                      <SidebarMenuButton>
                        {{ group.name }}
                      </SidebarMenuButton>
                    </SidebarGroupLabel>
                    <SidebarMenuSub role="list">
                      <SidebarMenuSubItem
                        v-for="route in group.children"
                        :key="route.name"
                        class="hover:underline">
                        <SidebarMenuButton
                          :is-active="currentRoute === route.path"
                          as-child>
                          <RouterLink
                            :to="route.path"
                            class="text-text">
                            {{ route.name }}
                          </RouterLink>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleRoot>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main class="bg-background w-full flex-1 overflow-y-auto">
        <header
          class="border-card-border flex h-12 w-full shrink-0 items-center gap-2 border-b px-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div class="flex w-full justify-between">
            <div class="flex items-center gap-2">
              <SidebarTrigger>
                <Button
                  data-sidebar="trigger"
                  variant="ghost"
                  size="icon"
                  class="size-7">
                  <span class="sr-only">Toggle Sidebar</span>
                </Button>
              </SidebarTrigger>
            </div>

            <div class="flex items-center gap-2">
              <LumuixModeToggle />
            </div>
          </div>
        </header>
        <component :is="$route.meta.layout">
          <RouterView />
        </component>
      </main>
    </SidebarProvider>
  </div>
</template>
