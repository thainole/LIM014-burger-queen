import React from 'react'
import { Link } from "react-router-dom";
import mainBurger from "../img/burger.png"

export const Home = () => {
  return (
    <section className="home">
      <h1>Bienvenido al sistema de pedidos <br></br>Burger Queens</h1>
      <article>
        <figure>
          <img src={mainBurger} alt="burger" />
        </figure>
        <ul>
          <Link to="/mesero/hacer-pedidos">Mesero</Link>
          <Link to="/cocina/preparar-orden">Cocina</Link>
        </ul>
      </article>
    </section>
  )
}
