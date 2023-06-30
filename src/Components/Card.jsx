import React from "react";
import { useContextGlobal } from "./utils/global.context";
import {Link} from 'react-router-dom';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const {state}= useContextGlobal()

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {state.list.map(dentist => <Link to={'/dentist/' + dentist.id} key={dentist.id}><li>{dentist.id}</li></Link>)}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
