<script lang="ts" setup>
import router from './router'
import { RouterLink, RouterView } from 'vue-router'
import { LumuixModeToggle } from '@/components/lumuix'

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div>
    <nav
      id="nav-bar"
      class="sticky top-0 z-10 flex h-fit w-full justify-between border-b border-slate-400 bg-background backdrop-blur dark:border-white">
      <RouterLink to="/">
        <img
          src="/public/images/logo.png"
          class="w-32"
          alt="Lumuix Logo" />
      </RouterLink>
      <div class="text-primary my-auto mr-6 flex gap-2 font-bold">
        <a href="https://github.com/SethSharp/lumuix"> 1.0.0-alpha.10.3 </a>
        <LumuixModeToggle />
      </div>
    </nav>
    <main>
      <div class="flex">
        <div class="h-screen w-1/4 bg-background">
          <nav class="space-y-4 border-r border-slate-400 p-4 dark:border-white">
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
          </nav>
        </div>
        <div class="w-3/4 text-text">
          <component :is="$route.meta.layout">
            <RouterView />
          </component>
        </div>
      </div>
    </main>
  </div>
</template>
