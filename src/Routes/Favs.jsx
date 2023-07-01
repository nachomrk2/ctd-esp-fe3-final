import React, {useContext} from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state}= useContextGlobal()

  const favs = state?.favs || [];

  return (
    <>
      <div className="favs">
      <div className="row center-row title">
        <h1 style={{ marginRight: 40 }}>Dentists Favs</h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Clear Favs
        </button>
      </div>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <Card dentist={dentist} key={dentist.id} />
          ))}
        </div>
      ) : (
        <p>No favorite dentists available.</p>
      )}
    </div>
    </>
  );
};

export default Favs;
