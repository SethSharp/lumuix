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
  Toast
} from './views'

const routes = [
  { path: '', name: 'Home', component: Home },
  {
    name: 'Getting Started',
    children: [
      { path: '/getting-started/installation', name: 'Installation', component: Installation },
      { path: '/getting-started/configure-styles', name: 'Configure Styles', component: Styles },
    ],
  },
  {
    name: 'Components',
    children: [
      { path: '/components/button', name: 'Button', component: Button },
      { path: '/components/calendar', name: 'Calendar', component: Calendar },
      { path: '/components/command', name: 'Command', component: Command },
      { path: '/components/dialog', name: 'Dialog', component: Dialog },
      { path: '/components/dropdown-menu', name: 'Dropdown Menu', component: DropdownMenu },
      { path: '/components/inputs', name: 'Inputs', component: Inputs },
      { path: '/components/page', name: 'Page', component: Page },
      { path: '/components/pagination', name: 'Pagination', component: Pagination },
      { path: '/components/popover', name: 'Popover', component: Popover },
      { path: '/components/pre-built', name: 'Prebuilt', component: Prebuilt },
      { path: '/components/range-calendar', name: 'Range Calendar', component: RangeCalendar },
      { path: '/components/select', name: 'Select', component: Select },
      { path: '/components/table', name: 'Table', component: Table },
      { path: '/components/tabs', name: 'Tabs', component: Tabs },
      { path: '/components/toast', name: 'Toast', component: Toast },
    ],
  },
  {
    name: 'Form',
    children: [{ path: '/form/overview', name: 'Overview', component: Overview }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '!font-medium',
  routes,
})

export default router
