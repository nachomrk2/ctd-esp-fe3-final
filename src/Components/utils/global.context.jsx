import { createContext, useReducer, useContext, useState, useEffect} from "react";
import axios from "axios";

export const initialState = {
  list: [],
  dentist: {},
  favs: JSON.parse(localStorage.getItem("favData")) || [],
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
    case "ADD_FAV":
        const updatedData = state.favs
          ? [...state.favs, action.payload]
          : [action.payload];
        localStorage.setItem("favData", JSON.stringify(updatedData));
        return { ...state, favs: updatedData };
    case "REMOVE_FAV":
        const filteredData = state.favs
          ? state.favs.filter((item) => item.id !== action.payload)
          : [];
        localStorage.setItem("favData", JSON.stringify(filteredData));
        return { ...state, favs: filteredData };
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

  const addFav = (item) => {
    dispatch({ type: "ADD_FAV", payload: item });
  };

  const removeFav = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <ContextGlobal.Provider value={{state, dispatch, addFav, removeFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal= () => useContext(ContextGlobal) 