import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    name: 'Components',
    children: [
      { path: '/components/button', name: 'Button', component: Home },
      { path: '/components/calendar', name: 'Calendar', component: Home },
      { path: '/components/command', name: 'Command', component: Home },
      { path: '/components/Dialog', name: 'Dialog', component: Home },
      { path: '/components/dropdown-menu', name: 'Dropdown Menu', component: Home },
      { path: '/components/inputs', name: 'Form', component: Home },
      { path: '/components/page', name: 'Page', component: Home },
      { path: '/components/pagination', name: 'Pagination', component: Home },
      { path: '/components/popover', name: 'Popover', component: Home },
      { path: '/components/pre-built', name: 'Prebuilt', component: Home },
      { path: '/components/range-calendar', name: 'Range Calendar', component: Home },
      { path: '/components/select', name: 'Select', component: Home },
      { path: '/components/table', name: 'Table', component: Home },
      { path: '/components/tabs', name: 'Tabs', component: Home },
    ]
  },
  {
    name: 'Form',
    children: [
      // ready for when we implement
      { path: '/components/form', name: 'Form', component: Home },
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router