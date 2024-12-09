<script setup lang="ts">
import { BlocksIcon, MoreHorizontal, PersonStanding, CheckCircle } from 'lucide-vue-next'
// Sidebar is currently a WIP with 1/2 parts merged
// https://github.com/unovue/shadcn-vue/pull/827
// https://github.com/unovue/shadcn-vue/issues/805
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup, SidebarMenu, SidebarGroupContent, SidebarGroupLabel
} from '@/components/sidebar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/dropdown-menu'

const projects = [
  {
    name: 'Lumuix',
    icon: BlocksIcon
  },
  {
    name: 'Portfolio',
    icon: PersonStanding
  },
  {
    name: 'Habit Tracker',
    icon: CheckCircle
  }
]
</script>

<template>
  <SidebarProvider :default-open="false">
    <SidebarTrigger />
    <Sidebar collapsible="icon" side="right" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Projects
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarGroupContent>
              <SidebarMenuItem v-for="project in projects">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <component :is="project.icon" />
                    <span>{{ project.name }} </span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left" align="start">
                    <DropdownMenuItem>
                      <span>Edit Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>