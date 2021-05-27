import React from 'react'
import { Link } from "react-router-dom";
import mainBurger from "../img/burger.png"

export const Inicio = () => {
  return (
    <section className="home">
      <h1 className="h1">Bienvenido al sistema de pedidos de Burger Queens</h1>
      <article className="">
        <figure>
          <img className="" src={mainBurger} width="100px" alt="burger" />
        </figure>
        <ul>
          <li><Link to="/mesero/hacer-pedidos">Mesero</Link></li>
          <li><Link to="/cocina">Cocina</Link></li>
        </ul>
      </article>
    </section>
  )
}
