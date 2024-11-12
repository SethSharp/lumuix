<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <slot />
      </TooltipTrigger>
      <TooltipContent align="center">
        <slot name="tool-tip" />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
