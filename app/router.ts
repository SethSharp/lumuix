import { createWebHistory, createRouter } from 'vue-router'

import { Installation,
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
      { path: '/getting-started/installation', name: 'Installation', component: Installation, isExternal: false },
      { path: '/getting-started/configure-styles', name: 'Configure Styles', component: Styles, isExternal: false },
    ],
  },
  {
    name: 'Components',
    children: [
      { path: '/components/badge', name: 'Badge', component: Badge, isExternal: true },
      { path: '/components/button', name: 'Button', component: Button, isExternal: true },
      { path: '/components/calendar', name: 'Calendar', component: Calendar, isExternal: true },
      { path: '/components/command', name: 'Command', component: Command, isExternal: true },
      { path: '/components/dialog', name: 'Dialog', component: Dialog, isExternal: true },
      { path: '/components/dropdown-menu', name: 'Dropdown Menu', component: DropdownMenu, isExternal: true },
      { path: '/components/inputs', name: 'Inputs', component: Inputs, isExternal: true },
      { path: '/components/page', name: 'Page', component: Page, isExternal: true },
      { path: '/components/pagination', name: 'Pagination', component: Pagination, isExternal: true },
      { path: '/components/popover', name: 'Popover', component: Popover, isExternal: true },
      { path: '/components/pre-built', name: 'Prebuilt', component: Prebuilt, isExternal: true },
      { path: '/components/range-calendar', name: 'Range Calendar', component: RangeCalendar, isExternal: true },
      { path: '/components/select', name: 'Select', component: Select, isExternal: true },
      { path: '/components/table', name: 'Table', component: Table, isExternal: true },
      { path: '/components/tabs', name: 'Tabs', component: Tabs, isExternal: true },
      { path: '/components/toast', name: 'Toast', component: Toast, isExternal: true },
    ],
  },
  {
    name: 'Form',
    children: [{ path: '/form/overview', name: 'Overview', component: Overview, isExternal: true }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, isExternal: true },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '!font-medium !text-slate-500 dark:!text-slate-400',
  routes,
})

export default router
