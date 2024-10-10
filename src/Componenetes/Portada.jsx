import React from 'react';
import '../Estilos/Portada.css';

export const Portada = () => {
  return (
    <div className='container-portada'>
        <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8ab91149eb155af29f11496c/d0f3edac-474b-42be-b569-946cd98464a7.jpg" alt="img-portada" className='img-portada'/>
        <div className="texto-portada">
            <h3 className="subtitulo-portada">familia de pasteleros</h3>
            <h1 className="titulo-portada">panadería <br /> delicias</h1>
            <div className="infocontacto-portada"></div>
        </div>
    </div>
  )
}
