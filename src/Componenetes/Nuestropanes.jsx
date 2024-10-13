import React from "react";
import "../Estilos/Panes.css";
import listaurls from "../listaurlspanes.json";
import { Tipodepan } from "./Tipodepan";

export const Nuestropanes = () => {
  return (
    <div className="container-nuestrospanes">
      <h1>Nuestros panes</h1>
      <div className="container-panes">
        {listaurls.map((panes, index) => (
          <Tipodepan img={panes.url} numero={index + 1} />
        ))}
      </div>
      <div className="container-maspanes">
        <div className="fotosytexto">
        <div className="container-textoyfoto">
          <h1>Delicioso horneado. Excepcional Calidad.</h1>
          <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/7b78491704cb58c1a1cd9ad8/cvccv.jpg" alt="" className="img-textoyfoto"/>
        </div>
        <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/60067c0411e15541880e3293/rre.jpg" alt="" className="img-textoyfoto"/>
        </div>
        <div className="container-panesdescripcion">
        <h3>Producimos deliciosos panes, bollos y otros productos.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum error maiores ad dolores quibusdam soluta, ab facilis porro quos illum! Nam dignissimos eveniet similique itaque doloremque odio, reiciendis suscipit?</p>
        <button className="boton boton-nuestrospanes">ver más</button>
      </div>
      </div>
      
    </div>
  );
};
