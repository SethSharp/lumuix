// button components
import { Button } from './ui/button'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import DangerButton from './components/buttons/DangerButton.vue'

// dropdown components
import Dropdown from './components/dropdown/Dropdown.vue'
import {
  BaseDropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

// form components
import Form from './components/form/Form.vue'
import FormGrid from './components/form/FormGrid.vue'
import FormElement from './components/form/FormElement.vue'

// input components
import Checkbox from './components/inputs/Checkbox.vue'
import ImageUpload from './components/inputs/ImageUpload.vue'
import Error from './components/form/Error.vue'
import Label from './components/inputs/Label.vue'
import Combobox from './components/inputs/Combobox.vue'
import Select from './components/inputs/Select.vue'
import TextArea from './components/inputs/TextArea.vue'
import Text from './components/inputs/Text.vue'

// page components
import Container from './components/page/Container.vue'
import Datatable from './components/page/Datatable.vue'
import { CollapsibleTableRow } from './ui/table'
import Notifications from './components/page/Notifications.vue'
import Toggle from './components/inputs/Toggle.vue'
import Tabs from './components/pre-built/Tabs.vue'
import { TabsRoot, TabsTrigger, TabsItem, TabsList, TabsContent } from 'src/components/tabs'
import Pagination from './components/pre-built/Pagination.vue'

// popover components
import Modal from './components/popovers/Modal.vue'

// other
import DarkModeToggle from './components/DarkModeToggle.vue'

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  Dropdown,
  BaseDropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuTrigger,
  Form,
  FormGrid,
  FormElement,
  Checkbox,
  ImageUpload,
  Error,
  Label,
  Combobox,
  Select,
  TextArea,
  Text,
  Toggle,
  Container,
  Datatable,
  CollapsibleTableRow,
  Notifications,
  Tabs,
  TabsRoot,
  TabsTrigger,
  TabsItem,
  TabsList,
  TabsContent,
  Pagination,
  Modal,
  DarkModeToggle,
}
