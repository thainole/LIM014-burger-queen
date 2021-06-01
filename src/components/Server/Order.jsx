import React/* , {useState} */ from 'react'
import { NavBar } from './NavBar'
import { Products } from './Products'
import { OrderList } from './OrderList'

export const Order = () => {

  const productList = (e) => {
    console.log(e)
  }
  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <Products choosenElements={productList}/>
        <OrderList />
      </article>
    </section>
  )
}
