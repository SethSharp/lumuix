<script setup lang="ts">
import { defineProps } from 'vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowAction,
} from '@/components/table'

type Header<Value extends string = string> = {
  value: Value
  name: string
}

type Row<Headers extends readonly Header[]> = {
  [K in Headers[number] as K['value']]: string | number
}

type DataTableProps<Headers extends readonly Header[]> = {
  headers: Headers
  rows: Array<Row<Headers>>
}

defineProps<
  DataTableProps<Header[]> & {
    caption?: string
    rowActions?: boolean
  }
>()
</script>

<template>
  <Table>
    <TableCaption v-if="caption"> {{ caption }}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead v-for="(header, headerIndex) in headers">
          <template v-if="$slots[`header_${headers[headerIndex].value}`]">
            <slot
              :name="`header_${headers[headerIndex].value}`"
              :item="header" />
          </template>
          <template v-else>
            {{ header.name }}
          </template>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, rowIndex) in rows"
        :key="rowIndex">
        <TableCell
          v-for="header in headers"
          :key="header.value">
          <template v-if="$slots[`cell_${header.value}`]">
            <slot
              :name="`cell_${header.value}`"
              :item="row" />
          </template>
          <template v-else>
            {{ row[header.value] }}
          </template>
        </TableCell>

        <TableRowAction v-if="$slots['row_actions']">
          <slot
            name="row_actions"
            :item="row" />
        </TableRowAction>
      </TableRow>
    </TableBody>
  </Table>
</template>
