<script setup lang="ts">
import { VisTooltip } from '@unovis/vue'
import { ChartProvider, Line, XAxis, YAxis, Legend } from '.'
import { Line as LineType } from '@unovis/ts'

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
  color: props.colours[i],
  // todo: how can we dynamically apply other props to pass per line?
}))

const triggers = {
  [LineType.selectors.line]: (d) => {
    console.log(d)
    return `<span>${d.x}, ${d.y} </span>`
  }
}
</script>

<template>
  <div class="size-full">
    <ChartProvider :data>
      <XAxis label="X Axis" position="bottom" />
      <YAxis label="Y Axis" position="left" />

      <VisTooltip :triggers="triggers" />

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
