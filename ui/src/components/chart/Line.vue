<script setup lang="ts">
import { VisLine } from '@unovis/vue'
import { CurveType } from '@unovis/ts'

type LineAccessor<T = any> = (d: T) => number

type GenericDataRecord = Record<string, any>

type LineConfig = {
  y: LineAccessor<GenericDataRecord>
  color?: string
  dashArray?: number[]
}

const props = withDefaults(defineProps<{
  x: LineAccessor
  lines: LineConfig[]
  curveType?: CurveType
  lineWidth?: number
  interpolateMissingData?: boolean
  fallbackValue?: number
}>(), {})

const defaultColors = ['#007aff', '#ff9500', '#34c759', '#ff3b30', '#af52de']

const yAccessors = props.lines.map(line => line.y)

const colorAccessor = (d: GenericDataRecord[], i: number) =>
  props.lines[i]?.color ?? defaultColors[i % defaultColors.length]

const dashAccessor = (d: GenericDataRecord[], i: number) =>
  props.lines[i]?.dashArray ?? undefined
</script>

<template>
    <VisLine
      :x="x"
      :y="yAccessors"
      :color="colorAccessor"
      :lineDashArray="dashAccessor"
      :curveType="curveType ?? CurveType.Basis"
      :lineWidth="lineWidth ?? 2"
      :fallbackValue="fallbackValue"
      :interpolateMissingData="interpolateMissingData"
    />
</template>
