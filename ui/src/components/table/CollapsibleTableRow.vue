<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'
import { TableRow, TableCell, TableRowAction } from '@/components/table/index'

type Header<Value extends string = string> = {
  value: Value
  name: string
}

type Row<Headers extends readonly Header[]> = {
  [K in Headers[number] as K['value']]: string | number
}

type CollapsibleTableRowProps<Headers extends readonly Header[]> = {
  row: Row<Headers>
  headers: Headers
  subRows?: Array<Row<Headers>>
}

const props = withDefaults(
  defineProps<
    CollapsibleTableRowProps<Header[]> & {
      setOpenTo?: boolean
      class?: string
    }
  >(),
  {
    setOpenTo: false,
  },
)

const isOpen = ref(props.setOpenTo)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <TableRow
    @click="toggleOpen"
    :class="props.class">
    <TableCell
      v-for="header in headers"
      :key="header.value">
      <template v-if="$slots[`cell_header_${header.value}`]">
        <slot
          :name="`cell_header_${header.value}`"
          :item="row"
          :open="isOpen" />
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

  <TableRow
    v-if="isOpen"
    v-for="(subRow, subRowIndex) in subRows"
    :key="subRowIndex">
    <TableCell
      v-for="header in headers"
      :key="header.value">
      <template v-if="$slots[`subrow_cell_${header.value}`]">
        <slot
          :name="`subrow_cell_${header.value}`"
          :item="subRow"
          :open="isOpen" />
      </template>
      <template v-else>
        {{ 'subrow_cell_' + header.value }}
      </template>
    </TableCell>
    <TableRowAction v-if="$slots['sub_row_actions']">
      <slot
        name="sub_row_actions"
        :item="row"
        :open="isOpen" />
    </TableRowAction>
  </TableRow>
</template>
