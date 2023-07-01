import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useContextGlobal } from '../Components/utils/global.context';
import logoDoctor from '../assets/images/doctor.jpg'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {state, dispatch} = useContextGlobal()
  const {id}= useParams()

  const [dentist, setDentist] = useState({})

  const fetchDentistByID = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {setDentist(res.data)});
  };

  useEffect(() => {
    fetchDentistByID();
  }, []);

  return (
    <div>
    <div className="detail">
      <div className="detail-container">
        <h1>{dentist.id}</h1>
        <img src={logoDoctor} alt="dentist-img" />
        <div className="right">
          <h2>{dentist.name}</h2>
          <h3>{dentist.username}</h3>
          <p>{dentist.email}</p>
          <p>{dentist.phone}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Detail