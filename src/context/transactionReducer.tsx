import React from 'react'
import { Transaction } from './../model/transaction';


type ActionMap<T extends { [property: string]: any }> = {
    [property in keyof T]: T[property] extends undefined ? { type: property;  } : { type: property; payload: T[property]; }
  };

  export enum Types {
    Delete = 'DELETE_COUNTER',
    Add = 'ADD_COUNTER',
  }

  type TransactionPayload = {
    [Types.Delete]: {id: number;},
    [Types.Add] : {
      id: number,
      text: string,
      amount: number
    }

  }

  export type TransactionActions = ActionMap<TransactionPayload>[keyof ActionMap<TransactionPayload>];

  export const transactionReducer = (state: Transaction[], action: TransactionActions) => {
    switch (action.type) {
      case Types.Delete:
        return [
          ...state.filter(counter => counter.id !== action.payload.id),
        ];

        case Types.Add:
        return [
          ...state, {
            id: action.payload.id,
            text: action.payload.text,
            amount: action.payload.amount
          }
        ];
      
      default:
        return state;
    }
  }
  

