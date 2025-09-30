import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import ComponentLayout from '../layouts/ComponentLayout.vue'
import {
  Installation,
  Home,
  NotFound,
  Accordion,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  Chart,
  Combobox,
  Command,
  Dialog,
  Draggable,
  DropdownMenu,
  Inputs,
  Pagination,
  Popover,
  RangeCalendar,
  Select,
  Separator,
  Sheet,
  Sidebar,
  Skeleton,
  Slider,
  Table,
  Tabs,
  Toast,
  ToolTip,
  Badge,
  Lumuix,
  NavigationMenu
} from '../views'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    isExternal: false,
    meta: {
      layout: MainLayout,
    },
  },
  {
    name: 'Getting Started',
    children: [
      {
        path: '/getting-started/installation',
        name: 'Installation',
        component: Installation,
        meta: {
          layout: MainLayout,
        },
      },
    ],
  },
  {
    name: 'Components',
    children: [
      {
        path: '/components/accordion',
        name: 'Accordion',
        component: Accordion,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/alert',
        name: 'Alert',
        component: Alert,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/avatar',
        name: 'Avatar',
        component: Avatar,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/badge',
        name: 'Badge',
        component: Badge,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/breadcrumbs',
        name: 'Breadcrumbs',
        component: Breadcrumbs,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/button',
        name: 'Button',
        component: Button,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/card',
        name: 'Card',
        component: Card,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/chart',
        name: 'Chart',
        component: Chart,
        meta: {
          layout: ComponentLayout,
          contributor: 'lumuix',
          label: 'Lumuix Component',
          alpha: true,
          alertMessage: true,
          alertMessageContent: 'Alpha release of Chart, the API can change anytime outside of major version updates.'
        },
      },
      {
        path: '/components/combobox',
        name: 'Combobox',
        component: Combobox,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/command',
        name: 'Command',
        component: Command,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/dialog',
        name: 'Dialog',
        component: Dialog,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/draggable',
        name: 'Draggable',
        component: Draggable,
        meta: {
          layout: ComponentLayout,
          contributor: 'lumuix',
          alpha: true
        },
      },
      {
        path: '/components/dropdown-menu',
        name: 'Dropdown Menu',
        component: DropdownMenu,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/inputs',
        name: 'Inputs',
        component: Inputs,
        meta: {
          layout: ComponentLayout,
          contributor: 'lumuix',
          label: 'Collection of Shadcn Components'
        },
      },
      {
        path: '/components/pagination',
        name: 'Pagination',
        component: Pagination,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/popover',
        name: 'Popover',
        component: Popover,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/lumuix',
        name: 'Lumuix',
        component: Lumuix,
        meta: {
          layout: ComponentLayout,
          contributor: 'lumuix',
          label: 'Pre-built components',
          alertMessage: true,
          alertMessageContent: 'These components are deprecated and may be removed in non-major versions'
        },
      },
      {
        path: '/components/navigation-menu',
        name: 'Navigation Menu',
        component: NavigationMenu,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/range-calendar',
        name: 'Range Calendar',
        component: RangeCalendar,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/select',
        name: 'Select',
        component: Select,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/sheet',
        name: 'Sheet',
        component: Sheet,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/separator',
        name: 'Separator',
        component: Separator,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/sidebar',
        name: 'Sidebar',
        component: Sidebar,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/skeleton',
        name: 'Skeleton',
        component: Skeleton,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/slider',
        name: 'Slider',
        component: Slider,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/table',
        name: 'Table',
        component: Table,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/tabs',
        name: 'Tabs',
        component: Tabs,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/toast',
        name: 'Toast',
        component: Toast,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
      {
        path: '/components/tooltip',
        name: 'ToolTip',
        component: ToolTip,
        meta: {
          layout: ComponentLayout,
          contributor: 'shadcn',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Your Page could not be found',
    component: NotFound,
    isExternal: true,
    meta: {
      layout: ComponentLayout,
      contributor: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '',
  routes,
})

export default router
