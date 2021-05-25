import React from 'react'
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mesero/hacer-pedidos">Realizar pedidos</Link></li>
        <li><Link to="/mesero/estado-pedidos">Estado de los pedidos</Link></li>
        <li><Link to="/mesero/historial-pedidos">Historial de los pedidos</Link></li>
        <li><Link to="/">Salir</Link></li>
      </ul>
    </nav>
  )
}
