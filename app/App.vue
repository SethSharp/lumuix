<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { ChevronDown, PanelLeft } from 'lucide-vue-next'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'
import router from './router'
import { LumuixModeToggle } from '@/components/lumuix'
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
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/sidebar'

const route = useRoute()
const currentRoute = computed(() => route.path)

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div class="flex">
    <SidebarProvider>
      <Sidebar
        v-slot="{ state }"
        side="left"
        variant="sidebar">
        <SidebarHeader>
          <RouterLink to="/">
            <img
              v-if="state == 'expanded'"
              src="/public/images/logo.png"
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

        <SidebarRail>
          <div class="py-3 pl-10">
            <PanelLeft />
          </div>
        </SidebarRail>

        <SidebarFooter class="h-12 text-center">
          <div class="m-auto flex gap-2 font-bold text-primary">
            <a
              href="https://github.com/SethSharp/lumuix"
              class="my-auto">
              1.0.0-alpha.10.3
            </a>
            <LumuixModeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>

    <main class="w-full p-4 px-8">
      <component :is="$route.meta.layout">
        <RouterView />
      </component>
    </main>
  </div>
</template>
