import React, {useReducer, createContext, Dispatch} from 'react'
import { Transaction } from '../model/transaction';
import { transactionReducer, TransactionActions } from './transactionReducer';



type InitialStateType  = {
  transactions : Transaction[]
}

const initialState= {
  transactions: [],
}

export const StateContext = createContext 
<{ state: InitialStateType; dispatch: Dispatch<TransactionActions>;}>
    ({ state: initialState, dispatch: () => null});

 

const mainReducer = ({ transactions }: InitialStateType, action: TransactionActions ) => ({
   transactions: transactionReducer(transactions, action),
 
});


type StateProviderProps = {
  children: React.ReactNode
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}