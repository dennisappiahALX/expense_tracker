import React , {useContext} from  'react'
import { StateContext } from '../context/TransactionContext'
import { Types } from '../context/transactionReducer'


const TransactionList = () => {
  const {state, dispatch }  = useContext(StateContext)

  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className="flex flex-col space-y-6">
        <h3 className="text-black-500 text-left font-bold shadow-md">History</h3>
          <ul className='list-none flex flex-col space-y-4 '>
              {state.transactions.map(transaction => 
              <li key={transaction.id} className='flex space-x-60 shadow-lg border-r-4 border-red-500'>
              <span className='text-black-500 font-semibold'>{transaction.text}</span>
              <span className='text-black-500 font-semibold'>{transaction.amount}</span>
            </li>)}
          </ul>
      </div>
    </div>
  )
}

export default TransactionList