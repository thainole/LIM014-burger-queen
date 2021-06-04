import React from 'react'
import { Link } from "react-router-dom";
import mainBurger from "../../img/burger.png"

export const ChefNavBar = () => {
  return (
    <nav className="navServer">
        <img src={mainBurger} alt="burger" />
        <ul>
          <li><Link to="/cocina/preparar-orden">Órdenes a preparar</Link></li>
          <li><Link to="/cocina/historial-pedidos">Historial de los pedidos</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </nav>
  )
}
