<script lang="ts" setup>
import router from './router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { LumuixModeToggle } from '@/components/lumuix'
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from '@/components/sidebar'
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu, SidebarMenuButton,
  SidebarMenuItem
} from '@/components/sidebar'
import { SidebarMenuSub, SidebarMenuSubItem } from '@'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'

const route = useRoute()
const currentRoute = computed(() => route.path)

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div class="flex">
    <SidebarProvider>
      <SidebarTrigger class="mt-5" />

      <Sidebar side="left" variant="sidebar">
        <SidebarContent>
          <SidebarHeader>
            <RouterLink to="/">
              <img
                src="/public/images/logo.png"
                class="w-full"
                alt="Lumuix Logo" />
            </RouterLink>
          </SidebarHeader>

          <div class="flex gap-1">
            <SidebarTrigger />
            <div class="text-primary m-auto flex gap-2 font-bold">
              <a href="https://github.com/SethSharp/lumuix" class="my-auto"> 1.0.0-alpha.10.3 </a>
              <LumuixModeToggle />
            </div>
          </div>

          <SidebarContent>
            <SidebarGroup
              v-for="group in routes"
              :key="group.name">

                <SidebarGroupContent>
                  <SidebarMenu class="pl-1">
                    <CollapsibleRoot default-open class="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarGroupLabel class="text-heading">{{ group.name }}</SidebarGroupLabel>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub role="list">
                            <SidebarMenuSubItem
                              v-for="route in group.children"
                              :key="route.name"
                              class="hover:underline">
                              <SidebarMenuSubItem>
                                <SidebarMenuButton :is-active="currentRoute === route.path" as-child>
                                  <RouterLink
                                    :to="route.path"
                                    class="text-text">
                                    {{ route.name }}
                                  </RouterLink>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </CollapsibleRoot>
                  </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>

    <main class="w-full">
      <component :is="$route.meta.layout">
        <RouterView />
      </component>
    </main>
  </div>
</template>
