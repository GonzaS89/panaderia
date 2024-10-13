import React from 'react'

export const Tipodepan = (props) => {
  return (
    <div className="container-pan">
        <img src={props.img} alt="" className="img-pan"/>
        <p className="titulo-pan">pan #{props.numero}</p>
        <p className="detalle-pan">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, atque accusamus voluptatem nisi voluptatibus aut hic ullam</p>
    </div>
  )
}
