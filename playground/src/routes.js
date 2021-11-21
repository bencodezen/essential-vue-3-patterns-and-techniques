import AccountsPage from './pages/Accounts.vue'
import BudgetPage from './pages/Budget.vue'
import HomePage from './pages/Home.vue'
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
    path: '/transactions',
    component: TransactionsPage
  }
]

export default pageRoutes
