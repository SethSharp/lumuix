import { createMemoryHistory, createRouter } from 'vue-router'

import TestMe from './views/TestMe.vue'
import NotFound from './views/NotFound.vue'
import TestMeTwo from './views/TestMeTwo.vue'

const routes = [
  { path: '/', name: 'Home', component: TestMe },
  { path: '/testing-page-two', name: 'Testing Page Two', component: TestMeTwo },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router