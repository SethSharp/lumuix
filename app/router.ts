import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import FormWrapper from './views/FormWrapper.vue'
import ComponentWrapper from './views/ComponentWrapper.vue'
import Overview from './views/form/Overview.vue'
import Installation from './views/gettingstarted/Installation.vue'
import Styles from './views/gettingstarted/Styles.vue'
import Button from './views/components/Button.vue'
import Calendar from './views/components/Calendar.vue'
import Command from './views/components/Command.vue'
import Dialog from './views/components/Dialog.vue'
import DropdownMenu from './views/components/DropdownMenu.vue'
import Inputs from './views/components/Inputs.vue'
import Page from './views/components/Page.vue'
import Pagination from './views/components/Pagination.vue'
import Popover from './views/components/Popover.vue'
import Prebuilt from './views/components/Prebuilt.vue'
import RangeCalendar from './views/components/RangeCalendar.vue'
import Select from './views/components/Select.vue'
import Table from './views/components/Table.vue'
import Tabs from './views/components/Tabs.vue'

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
    component: ComponentWrapper,
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
    ],
  },
  {
    name: 'Form',
    component: FormWrapper,
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
