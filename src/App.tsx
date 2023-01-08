import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import NewTransaction from './components/NewTransaction'
import { StateProvider } from './context/TransactionContext'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransaction />
      </ StateProvider>
    </div>
  )
}

export default App
