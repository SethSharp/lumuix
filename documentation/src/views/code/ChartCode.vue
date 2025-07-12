<script setup lang="ts">
import { ChartProvider, Line, XAxis, YAxis } from '@sethsharp/lumuix'

const sampleData = [
  { x: 1, a: 1, b: 2 },
  { x: 5, a: 10, b: 15 },
  { x: 10, a: 40, b: 30 },
]

const x = (d: (typeof sampleData)[number]) => d.x

const lines = [
  { y: (d) => d.a, color: '#ff0000', dashArray: [5, 5] },
  { y: (d) => d.b, color: '#00ff00' },
]

const xLabels = ['one', 'two', 'three', 'four', 'five']

const xTickFormat = (tick, i, ticks) => {
  return xLabels[i]
}
</script>

<template>
  <ChartProvider :data="sampleData">
    <XAxis label="X Axis" position="bottom" :tickFormat="xTickFormat" :tickTextAngle="45" />
    <YAxis label="Y Axis" position="right" />

    <Line
      :x="x"
      :lines="lines"
      curveType="basis"
      :lineWidth="3"
      :interpolateMissingData="true"
      :fallbackValue="null"
    />
  </ChartProvider>
</template>
