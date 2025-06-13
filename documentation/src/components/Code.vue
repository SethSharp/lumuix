<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { onMounted, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { Clipboard } from 'lucide-vue-next'
import { Button } from '@sethsharp/lumuix'

const props = withDefaults(
  defineProps<{
    sourceCode: string
    lang?: string
    theme?: string
  }>(), {
    lang: 'vue',
    theme: 'vitesse-dark'
  }
)

const { copy } = useClipboard()
const highlightedCode = ref('')
const recentlyCopied = ref(false)

const copyCode = () => {
  recentlyCopied.value = true
  setTimeout(() => {
    recentlyCopied.value = false
  }, 1000)
  copy(props.sourceCode)
}

onMounted(async () => {
  highlightedCode.value = await codeToHtml(props.sourceCode, {
    lang: props.lang,
    theme: props.theme,
  })
})
</script>

<template>
  <div class="relative">
    <Button
      @click="copyCode"
      class="absolute  cursor-pointer right-2 top-2 text-white">
      <Clipboard />
      <template v-if="recentlyCopied">
        Copied!
      </template>
    </Button>

    <div
      v-html="highlightedCode"
      class="shiki max-h-[800px] overflow-scroll" />
  </div>
</template>

<style>
.shiki pre {
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
}
</style>
