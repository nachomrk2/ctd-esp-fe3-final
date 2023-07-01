import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/DH.png";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <nav id="desktop">
        <img src={img} alt="logo" />

        <div className="row">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/favs"}>Favs</Link>
        </div>


      </nav>
    </>
  );
};

export default Navbar;