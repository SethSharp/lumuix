<script setup lang="ts">
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@sethsharp/lumuix'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline"> Hover over me </Button>
      </TooltipTrigger>
      <TooltipContent align="center">
        <p>This is some hovered content</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
