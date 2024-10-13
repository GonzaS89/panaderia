import React from "react";
import "../Estilos/Seccionmenu.css";
import { Tipodemenu } from "./Tipodemenu";

export const Seccionmenu = () => {
  return (
    <div className="container-menu">
      <div className="container-seccionmenu">
        <h1>Menú dulce</h1>
        <div className="container-listamenues">
          <Tipodemenu nombre={"galletas"} />
          <Tipodemenu nombre={"bollos"} />
          <Tipodemenu nombre={"otros"} />
        </div>
      </div>
      <div className="container-pandesayuno">
        <h1>Nuestro pan recién horneado es el protagonista de nuestra carta de desayunos.
        </h1>
        <img src="https://assets.nicepagecdn.com/d2cc3eaa/3379718/images/6500c6c6-7187-44c7-bc52-1a8096e2b16a.jpg" alt="" className="img-pandesayuno"/>
      </div>
    </div>
  );
};
