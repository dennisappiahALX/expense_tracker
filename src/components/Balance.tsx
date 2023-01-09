import React, {useContext} from 'react'
import { StateContext } from '../context/TransactionContext'

const Balance = () => {
  const {state, dispatch}  = useContext(StateContext)

  const amounts = state.transactions.map(transaction => transaction.amount);
  const total_amount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)


  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className='flex flex-col space-y-1'>
      <span className='text-black-500 text-left font-semibold'>YOUR BALANCE</span>
      <span className='text-black-500 text-left text-3xl font-bold'>${total_amount}</span>
      </div>
    </div>
  )
}

export default Balance