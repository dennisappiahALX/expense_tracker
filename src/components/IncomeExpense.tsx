import React, {useContext} from 'react'
import { StateContext } from '../context/TransactionContext'


const IncomeExpense = () => {
  const {state, dispatch}  = useContext(StateContext)
  const amounts = state.transactions.map(transaction => transaction.amount)
  
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc+item), 0).toFixed(2)

  const expense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => (acc+item), 0)).toFixed(2)

  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className="flex justify-center items-center space-x-6 py-4 px-4 shadow-lg">
        <div className="flex flex-col space-y-1 py-4 px-8 shadow-none">
          <span className='text-black font-semibold'>INCOME</span>
          <span className='font-bold text-lightGreen'>{income}</span>
        </div>
        <div className="flex flex-col space-y-1 py-4 px-8 shadow-none">
          <span className='text-black font-semibold'>EXPENSE</span>
          <span className='font-bold text-red-500'>{expense}</span>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense