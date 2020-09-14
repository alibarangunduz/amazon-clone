import React, { createContext, useContext, useReducer } from 'react';

// prepares the data Layer
export const StateContext = createContext();

//Wrap our app probide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);