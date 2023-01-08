import React, { useState, useContext } from 'react'
import { StateContext } from '../context/TransactionContext'
import { Types } from '../context/transactionReducer'


const NewTransaction:React.FC = () => {
  const { dispatch } = useContext(StateContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: Types.Add,
      payload: {
        id: Math.floor(Math.random() * 10000),
        text: text, 
        amount: amount
      }
    })
    setText('');
    setAmount(0);
  }

  return (
    <div className='container mx-auto  mt-8 w-80'>
      <form onSubmit={onSubmit} className='flex flex-col space-y-2' >
       <h3 className="text-black-500 text-left font-bold shadow-md">Add Transaction</h3>
       <label className='text-black-500 font-semibold' htmlFor="text">Text</label>
       <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
        className='text-black-500 outline-0 focus-0 border-2 border-gray-200 py-1 rounded-sm' 
       placeholder='Enter text...'/>
       <label className='text-black-500 font-semibold'  htmlFor="amount">Amount</label>
       <span className='text-black-500 font-semibold'>(negative-expensive, positive-income)</span>
       <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} 
       className='text-black-500 outline-0 focus-0 border-solid border-2 border-solid border-gray-200 py-1 rounded-sm'
        placeholder='Enter amount...'/>
       <button type='submit'
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
            Add Transaction
        </button>
      </form>
    </div>
  )
}

export default NewTransaction