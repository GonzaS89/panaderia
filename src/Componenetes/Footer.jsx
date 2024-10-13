import React from 'react'
import '../Estilos/Footer.css';

export const Footer = () => {
  return (
    <div className="container-footer">
        <div className="container-contacto">
        <div className="footer-infocontacto">
            <h1>Contactáte con nosotros</h1>
            <div className="footer-horarios">
                <p>Lunes - Viernes 07:00 - 18:00 Hrs.</p>
                <p>Sábados 07:00 - 16:00 Hrs.</p>
            </div>
            <div className="footer-telefonomail">
                <p><strong>Teléfono: </strong>(0381) - 4223694</p>
                <p><strong>Email: </strong><span>panaderiadelicias@gmail.com</span></p>
            </div>
            <div className="footer-direccion">
                <p><strong>Dirección: <br /></strong>Solana Vera 570 <br />San miguel de tucumán <br />Tucumán</p>
            </div>
        </div>
        </div>
    </div>
  )
}
