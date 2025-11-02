<script setup lang="ts">
import {
  Label,
  Input,
  Button,
  TabsRoot,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@sethsharp/lumuix'
</script>

<template>
  <TabsRoot
    default-value="account"
    class="w-[400px]">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="account"> Account </TabsTrigger>
      <TabsTrigger value="password"> Password </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Content
    </TabsContent>
    <TabsContent value="password">
      More Content
    </TabsContent>
  </TabsRoot>
</template>
