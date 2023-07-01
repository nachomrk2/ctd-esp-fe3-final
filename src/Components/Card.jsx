import React, { useState, useContext, useEffect } from "react";
import { useContextGlobal, ContextGlobal } from "./utils/global.context";
import { Link, useLocation } from "react-router-dom";
import logoDoctor from '../assets/images/doctor.jpg';

const Card = (props) => {
  const { state } = useContextGlobal();
  const { addFav, removeFav } = useContext(ContextGlobal);
  const location = useLocation();
  const [isFaved, setIsFaved] = useState(false);

  useEffect(() => {
    setIsFaved(props.dentist.isFav);
  }, [props.dentist.isFav]);

  const favs = JSON.parse(localStorage.getItem("favData")) || [];

  useEffect(() => {
    const isDentistFav = favs.some((fav) => fav.id === props.dentist.id);
    setIsFaved(isDentistFav);
  }, [props.dentist.id, favs]);

  const handleFav = () => {
    addFav({ ...props.dentist, isFav: true });
    setIsFaved(true);
  };

  const handleDeleteFav = () => {
    removeFav(props.dentist.id);
  };

  const isFavPage = location.pathname === "/favs";

  return (
    <div className="card">
      <Link className="col" to={`detail/${props.dentist.id}`} id="detail-link">
        <img src={logoDoctor} alt=''/>
        <h1>{props.dentist.name}</h1>
        <h4>{props.dentist.username}</h4>
      </Link>

      {!isFavPage ? (
        <button
          onClick={handleFav}
          className={`favButton ${isFaved ? "isFaved" : ""}`}
          id="btnStar"
          disabled={isFaved}
        >
          {isFaved ? "Favorito" : "Agregar a favoritos"}
        </button>
      ) : (
        <button
          onClick={isFavPage ? handleDeleteFav : handleFav}
          className={`favButton ${isFaved ? "isFaved" : ""}`}
          id="btnStar"
        >
          {isFaved ? "Eliminar favorito" : "Agregar a favoritos"}
        </button>
      )}
    </div>
  );
};

export default Card;