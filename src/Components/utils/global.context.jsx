import { createContext, useReducer, useContext, useState, useEffect} from "react";
import axios from "axios";

export const initialState = {
  list: [],
  dentist: {}
/*   theme: "", 
  data: [] */
}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_LIST':
      return {...state, list: [...action.payload]}
    case 'GET_DENTIST':
      return {list: state.list, dentist: action.payload}
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch]= useReducer(reducer, initialState)

  const url= 'https://jsonplaceholder.typicode.com/users' 

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
    .catch(err => console.log(err))
  }, [])

  console.log(state);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal= () => useContext(ContextGlobal) 