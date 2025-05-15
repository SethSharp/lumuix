<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { onMounted, ref } from 'vue'
import { Clipboard } from 'lucide-vue-next'
import { useClipboardItems } from '@vueuse/core'
import { Button } from '@/components/button'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@/components/tabs'

const props = defineProps<{
  sourceCode: string
}>()

const mime = 'text/plain'
const source = ref([
  new ClipboardItem({
    [mime]: new Blob([props.sourceCode], { type: mime }),
  })
])

const highlightedCode = ref('')
const { copy } = useClipboardItems({ source })

onMounted(async () => {
  highlightedCode.value = await codeToHtml(props.sourceCode, {
    lang: 'vue',
    theme: 'vitesse-dark'
  })
})
</script>

<template>
  <TabsRoot default-value="preview">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="preview">
        Preview
      </TabsTrigger>
      <TabsTrigger value="code">
        Code
      </TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <slot />
    </TabsContent>
    <TabsContent value="code">
      <div class="relative">
        <Button @click="copy" class="absolute top-2 right-2 text-white">
          <Clipboard />
        </Button>

        <div v-html="highlightedCode" class="shiki" />
      </div>
    </TabsContent>
  </TabsRoot>
</template>

<style>
.shiki pre {
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
</style>