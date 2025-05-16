<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { onMounted, ref } from 'vue'
import { Clipboard } from 'lucide-vue-next'
import { useClipboardItems } from '@vueuse/core'
import { Eye, Code2 } from 'lucide-vue-next'
import { Button, TabsContent, TabsList, TabsRoot, TabsTrigger } from '@sethsharp/lumuix'

const props = defineProps<{
  sourceCode: string
}>()

const mime = 'text/plain'
const source = ref([
  new ClipboardItem({
    [mime]: new Blob([props.sourceCode], { type: mime }),
  }),
])

const highlightedCode = ref('')
const { copy } = useClipboardItems({ source })

onMounted(async () => {
  highlightedCode.value = await codeToHtml(props.sourceCode, {
    lang: 'vue',
    theme: 'vitesse-dark',
  })
})
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
      <div class="relative">
        <Button
          @click="copy"
          class="absolute right-2 top-2 text-white">
          <Clipboard />
        </Button>

        <div
          v-html="highlightedCode"
          class="shiki max-h-[800px] overflow-scroll" />
      </div>
    </TabsContent>
  </TabsRoot>
</template>

<style>
.shiki pre {
  padding: 2rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
</style>
