<script setup lang="ts">
import { Eye, Code2 } from 'lucide-vue-next'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@sethsharp/lumuix/tabs'
import Code from '@/components/Code.vue'

withDefaults(
  defineProps<{
    sourceCode: string
    lang: string
    theme: string
  }>(), {
    lang: 'vue',
    theme: 'vitesse-dark'
  }
)
</script>

<template>
  <TabsRoot default-value="preview">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger
        value="preview"
        class="flex gap-2">
        Preview
        <Eye class="size-4" />
      </TabsTrigger>
      <TabsTrigger
        value="code"
        class="flex gap-2">
        Code
        <Code2 class="size-4" />
      </TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <div
        class="flex h-[500px] items-center justify-center overflow-scroll rounded bg-slate-50 p-4 dark:bg-slate-900">
        <slot />
      </div>
    </TabsContent>
    <TabsContent value="code">
      <Code :lang :theme :source-code />
    </TabsContent>
  </TabsRoot>
</template>
