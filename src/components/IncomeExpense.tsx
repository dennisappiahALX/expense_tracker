import React from 'react'

const IncomeExpense = () => {
  return (
    <div className='container mx-auto  mt-8 w-80'>
      <div className="flex justify-center items-center space-x-6 py-4 px-4 shadow-lg">
        <div className="flex flex-col space-y-1 py-4 px-8 shadow-none">
          <span className='text-black font-semibold'>INCOME</span>
          <span className='font-bold text-lightGreen'>$500.00</span>
        </div>
        <div className="flex flex-col space-y-1 py-4 px-8 shadow-none">
          <span className='text-black font-semibold'>EXPENSE</span>
          <span className='font-bold text-red-500'>-$240.00</span>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense