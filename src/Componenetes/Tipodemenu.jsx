import React, { useEffect, useState } from 'react';


export const Tipodemenu = (props) => {

    const [listaMenuDefinitiva, setListaMenuDefinitiva] = useState(null);

    useEffect(() => {

        const menuGalletas = ['galletas', 'chispas de chocolate', 'nuez de avena', 'barra de avena y jengibre','especiales de temporada'];

        const menuBollos = ['bollo de manteca clásico','bollos de suero de leche con fruta fresca','bollos hechos a mano'];

        const menuOtros = ['galletas de temporada', 'tartaletas','pan de plátano', 'budín de pan', 'granola de arándanos y nueces'];

        switch (props.nombre) {
            case 'galletas':
                setListaMenuDefinitiva(menuGalletas);
                break;
            case 'bollos'    :
                setListaMenuDefinitiva(menuBollos);
                break;
            case 'otros':
                setListaMenuDefinitiva(menuOtros);
                break;
            default:
                break;
        }

    },[props.nombre])

  return (
    <div className="container-menusdulce">
        <p className='tipomenu-nombre'>{props.nombre}</p>
        <ul>
            {listaMenuDefinitiva !== null && listaMenuDefinitiva.map( elemento => (
                <li>{elemento}</li>
            ))}
        </ul>
    </div>
  )
}
