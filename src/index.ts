import preset from '@/presets/preset'

// button components
import { Button } from './components/buttons'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import DangerButton from './components/buttons/DangerButton.vue'

// pre-built
import Datatable from './components/pre-built/Datatable.vue'
import DarkModeToggle from './components/pre-built/DarkModeToggle.vue'
import Dropdown from './components/pre-built/Dropdown.vue'
import Container from './components/page/Container.vue'
import Pagination from './components/pre-built/Pagination.vue'
import Modal from './components/pre-built/Modal.vue'
import Notifications from './components/page/Notifications.vue'
import Tabs from './components/pre-built/Tabs.vue'

export * from '@/components/tabs'
export * from '@/components/table'
export * from '@/components/select'
export * from '@/components/popover'
export * from '@/components/pagination'
export *from '@/components/dropdown-menu'
export * from '@/components/dialog'
export * from '@/components/command'
export * from '@/components/calendar'
export * from '@/components/form'
export * from '@/components/inputs'

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  Notifications,
  Tabs,
  Pagination,
  Modal,
  DarkModeToggle,
  Container,
  Datatable,
  Dropdown,
}

export { preset }