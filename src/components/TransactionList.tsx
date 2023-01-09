import React , {useContext} from  'react'
import { StateContext } from '../context/TransactionContext'
import '../style/transactionList.css'
import { Types } from '../context/transactionReducer'


const TransactionList = () => {
  const {state, dispatch}  = useContext(StateContext)

  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className="flex flex-col space-y-6">
        <h3 className="text-black-500 text-left font-bold shadow-md">History</h3>
        <ul className='list-none ul-list'>
            {state.transactions.map(transaction => 
              <li key={transaction.id}
               className={`border-${transaction.amount < 0 ? 'red' : 'lightGreen'}-800 relative flex justify-between shadow-lg border-solid border-r-4`}>
                {transaction.text}
              <span className='text-black-500 font-semibold'>{transaction.amount < 0 ? '-': '+'}${Math.abs(transaction.amount)}</span>
              <button onClick={() => {
             dispatch({
              type: Types.Delete,
              payload: {id: transaction.id}
            })
          }} className='delete-btn'>x</button>
              </li>)}
        </ul>
      </div>
    </div>
  )
}

export default TransactionList