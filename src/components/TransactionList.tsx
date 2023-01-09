import React , {useContext} from  'react'
import { StateContext } from '../context/TransactionContext'
import '../style/transactionList.css'


const TransactionList = () => {
  const {state}  = useContext(StateContext)

  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className="flex flex-col space-y-6">
        <h3 className="text-black-500 text-left font-bold shadow-md">History</h3>
        <ul className='list-none ul-list'>
            {state.transactions.map(transaction => 
              <li key={transaction.id} className='relative flex justify-between shadow-lg border-r-4 border-red-500'>
                {transaction.text}
              <span className='text-black-500 font-semibold'>{transaction.amount}</span>
              <button className='delete-btn'>x</button>
              </li>)}
        </ul>
      </div>
    </div>
  )
}

export default TransactionList