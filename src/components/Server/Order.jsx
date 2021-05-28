import React from 'react'
import { NavBar } from './NavBar'
import { Products } from './Products'

export const Order = () => {
  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <Products />
        <p>hola soy la orden</p>
      </article>
    </section>
  )
}
