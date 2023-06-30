import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {state, dispatch} = useContextGlobal()
  const {id}= useParams()
  const url= 'https://jsonplaceholder.typicode.com/users/' + id


  useEffect(() => {
    axios(url)
    .then(res => dispatch({type:'GET_DENTIST', payload: res.data}))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {state.dentist.name}
      {state.dentist.email}
      {state.dentist.website}
      {state.dentist.phone}
    </>
  )
}

export default Detail