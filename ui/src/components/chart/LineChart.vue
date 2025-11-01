<script setup lang="ts">
import { ChartProvider, Line, XAxis, YAxis, Legend } from '.'

const props = defineProps<{
  data: any
  index: string
  categories: string[]
  colours: string[]
  items: {
    name: string,
    color: string
  }[]
}>()

const x = (d: (typeof props.data)[number]) => d[props.index]

const lines = props.categories.map((key, i) => ({
  y: (d: Record<string, any>) => d[key],
  color: props.colours[key],
  // todo: how can we dynamically apply other props to pass per line?
}))
</script>

<template>
  <div class="size-full">
    <ChartProvider :data>
      <XAxis label="X Axis" position="bottom" />
      <YAxis label="Y Axis" position="left" />

      <Line
        :x="x"
        :lines="lines"
        :lineWidth="3"
        interpolateMissingData
        :fallbackValue="null"
      />
    </ChartProvider>

    <Legend v-if="items" :items />
  </div>
</template>
