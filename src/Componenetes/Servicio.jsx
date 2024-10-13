import React from 'react'

export const Servicio = (props) => {
  return (
    <div className="servicio-nosotros">
        <img src={props.url} alt="" className='img-servicio'/>
        <div className="servicio-texto">
            <p className="servicio-texto_titulo">titulo {props.titulo}</p>
            <p className="servicio-texto_contenido">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolor soluta temporibus nostrum, totam aperiam.</p>
        </div>
    </div>
  )
}
