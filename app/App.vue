<script lang="ts" setup>
import router from './router'
import { RouterLink, RouterView } from 'vue-router'
import { LumuixModeToggle } from '@/components/lumuix'
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from '@/components/sidebar'

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div class="flex">
    <SidebarProvider>
      <SidebarTrigger class="mt-5" />

      <Sidebar side="left" variant="sidebar">
        <SidebarContent>
          <RouterLink to="/">
            <img
              src="/public/images/logo.png"
              class="w-full"
              alt="Lumuix Logo" />
          </RouterLink>

          <div class="flex gap-1">
            <SidebarTrigger />
            <div class="text-primary m-auto flex gap-2 font-bold">
              <a href="https://github.com/SethSharp/lumuix" class="my-auto"> 1.0.0-alpha.10.3 </a>
              <LumuixModeToggle />
            </div>
          </div>

          <div class="p-4">
            <div
              v-for="group in routes"
              :key="group.name">
              <h3 class="text-lg font-medium text-heading">{{ group.name }}</h3>

              <ul
                role="list"
                class="flex flex-1 flex-col py-2">
                <li>
                  <ul class="space-y-2">
                    <li
                      v-for="route in group.children"
                      :key="route.name"
                      class="flex items-center hover:underline">
                      <RouterLink
                        :to="route.path"
                        class="px-2 text-text">
                        {{ route.name }}
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
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
