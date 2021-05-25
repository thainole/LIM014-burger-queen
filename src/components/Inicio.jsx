import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <ul>
        <li><Link to="/mesero/hacer-pedidos">Mesero</Link></li>
        <li><Link to="/cocina">Cocina</Link></li>
      </ul>
    </div>
  )
}
