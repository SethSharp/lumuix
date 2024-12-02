<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion'
</script>

<template>
  <Accordion
    type="single"
    collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is Lumuix the best UI component library?</AccordionTrigger>
      <AccordionContent> No. But it works for me. </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>How does the routing work?</AccordionTrigger>
      <AccordionContent> VueRouter </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
