import React from 'react';
import '../Estilos/Nosotros.css';
import listaurls from '../listaurlsiconos.json';
import { Servicio } from './Servicio';


export const Nosotros = () => {
  return (
    <div className="container-nosotros">
        <h1>Sobre nosotros</h1>
        <div className="aptitudes-nosotros">
           {listaurls.map( (url,index) => (
            <Servicio url = {url.url} titulo = {index + 1}/>
           ))}
        </div>
    </div>
  )
}
