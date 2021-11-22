import AreasPage from './pages/Areas.vue'
import DashboardPage from './pages/Dashboard.vue'
import ProjectPage from './pages/Projects.vue'
import HomePage from './pages/Home.vue'
import TasksPage from './pages/Tasks.vue'

const pageRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/areas',
    component: AreasPage
  },
  {
    path: '/dashboard',
    component: DashboardPage
  },
  {
    path: '/projects',
    component: ProjectPage
  },
  {
    path: '/tasks',
    component: TasksPage
  }
]

export default pageRoutes
