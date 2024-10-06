import { createWebHistory, createRouter } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import ComponentLayout from './layouts/ComponentLayout.vue'
import {
  Installation,
  Styles,
  Home,
  NotFound,
  Overview,
  Button,
  Calendar,
  Command,
  Dialog,
  DropdownMenu,
  Inputs,
  Page,
  Pagination,
  Popover,
  Prebuilt,
  RangeCalendar,
  Select,
  Table,
  Tabs,
  Toast,
  Badge,
} from './views'

const routes = [
  { path: '', name: 'Home', component: Home, isExternal: true },
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
      {
        path: '/getting-started/configure-styles',
        name: 'Configure Styles',
        component: Styles,
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
        path: '/components/badge',
        name: 'Badge',
        component: Badge,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/button',
        name: 'Button',
        component: Button,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/command',
        name: 'Command',
        component: Command,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/dialog',
        name: 'Dialog',
        component: Dialog,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/dropdown-menu',
        name: 'Dropdown Menu',
        component: DropdownMenu,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/inputs',
        name: 'Inputs',
        component: Inputs,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/page',
        name: 'Page',
        component: Page,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/pagination',
        name: 'Pagination',
        component: Pagination,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/popover',
        name: 'Popover',
        component: Popover,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/pre-built',
        name: 'Prebuilt',
        component: Prebuilt,
        meta: {
          layout: ComponentLayout,
          shadcn: false,
        },
      },
      {
        path: '/components/range-calendar',
        name: 'Range Calendar',
        component: RangeCalendar,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/select',
        name: 'Select',
        component: Select,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/table',
        name: 'Table',
        component: Table,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/tabs',
        name: 'Tabs',
        component: Tabs,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
      {
        path: '/components/toast',
        name: 'Toast',
        component: Toast,
        meta: {
          layout: ComponentLayout,
          shadcn: true,
        },
      },
    ],
  },
  {
    name: 'Form',
    children: [
      {
        path: '/form/overview',
        name: 'Overview',
        component: Overview,
        isExternal: true,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    isExternal: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '!font-medium !text-slate-500 dark:!text-slate-400',
  routes,
})

export default router
