<script setup lang="ts">
import { ArrowUpRightIcon, FolderCode } from "lucide-vue-next"
import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@sethsharp/lumuix"
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderCode />
      </EmptyMedia>
      <EmptyTitle>No Projects Yet</EmptyTitle>
      <EmptyDescription>
        You haven't created any projects yet. Get started by creating your first
        project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div class="flex gap-2">
        <Button variant="primary">Create Project</Button>
        <Button variant="outline">
          Import Project
        </Button>
      </div>
    </EmptyContent>
    <Button variant="link" as-child class="text-muted-foreground" size="sm">
      <a href="#">
        Learn More <ArrowUpRightIcon />
      </a>
    </Button>
  </Empty>
</template>
