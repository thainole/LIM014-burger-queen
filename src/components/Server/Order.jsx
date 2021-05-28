import React from 'react'
import { NavBar } from './NavBar'
import { Products } from './Products'
import { OrderList } from './OrderList'

export const Order = () => {
  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <Products />
        <OrderList />
      </article>
    </section>
  )
}
