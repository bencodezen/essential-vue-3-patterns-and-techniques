import AccountsPage from './pages/Accounts.vue'
import BudgetPage from './pages/Budget.vue'
import CategoriesPage from './pages/Categories.vue'
import HomePage from './pages/Home.vue'
import SettingsPage from './pages/Settings.vue'
import TransactionsPage from './pages/Transactions.vue'

const pageRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/accounts',
    component: AccountsPage
  },
  {
    path: '/budget',
    component: BudgetPage
  },
  {
    path: '/categories',
    component: CategoriesPage
  },
  {
    path: '/settings',
    component: SettingsPage
  },
  {
    path: '/transactions',
    component: TransactionsPage
  }
]

export default pageRoutes
