<script lang="ts" setup>
import router from './router'
import { RouterLink, RouterView } from 'vue-router'
import { DarkModeToggle } from '@/components/pre-built'

const routes = router.getRoutes().filter((route) => route.children.length > 0)
</script>

<template>
  <div>
    <nav
      id="nav-bar"
      class="sticky top-0 z-10 flex h-fit w-full justify-between bg-gradient-to-r from-green-400 to-green-500 dark:from-gray-800 dark:to-gray-950">
      <RouterLink
        to="/"
        class="p-4 text-xl text-gray-100 transition hover:text-white dark:text-primary-200 sm:text-3xl">
        <b> Lumuix </b>- Generic Vue Component Library
      </RouterLink>
      <div class="my-auto mr-6 flex gap-2 font-bold text-white dark:text-primary-200">
        <a href="https://github.com/SethSharp/lumuix"> 1.0.0-alpha.3.0 </a>
        <DarkModeToggle />
      </div>
    </nav>
    <main>
      <div class="flex gap-4">
        <div class="w-1/4 bg-slate-100 dark:bg-slate-950">
          <nav class="space-y-4 p-4">
            <div
              v-for="group in routes"
              :key="group.name">
              <h3 class="text-lg font-medium">{{ group.name }}</h3>

              <ul
                role="list"
                class="flex flex-1 flex-col">
                <li>
                  <ul class="space-y-2">
                    <li
                      v-for="route in group.children"
                      :key="route.name"
                      class="flex items-center underline-offset-2 hover:underline">
                      <RouterLink
                        :to="route.path"
                        class="px-2">
                        {{ route.name }}
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="w-3/4 p-6">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
