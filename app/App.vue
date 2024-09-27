<script lang="ts" setup>
import router from './router'
import { RouterLink } from 'vue-router'
import { DarkModeToggle } from '@/components/pre-built'
console.log(router.getRoutes())
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
        <a href="https://github.com/SethSharp/lumuix">
          1.0.0-alpha.3.0
        </a>
        <DarkModeToggle />
      </div>
    </nav>
    <main>
      <div class="flex gap-4">
        <div class="w-1/4">
          <div v-for="route in router.getRoutes()">
            <router-link v-if="route.name !== 'NotFound'" :to="route.path">
              {{ route.path }}
            </router-link>
          </div>
        </div>
        <div class="w-3/4">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
