import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { Products } from './Products'
import { OrderList } from './OrderList'

export const Order = () => {

  //3.
  const [orderL, setOrderL] = useState([])
  //2. Crear funcion y pasarle el parametro que enviamos desde el hijo products.jsx
  const productList = (p) => {
    console.log(p); // 1 objeto por cada card escogido
    setOrderL([...orderL, p]);// setList modifica la copia del array del estado inicial y añade los nuevos elementos
    // console.log(orderL);
  }

  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <Products choosenElements={productList}/>{/* 1 */}
        <OrderList sentProducts={orderL}/>
      </article>
    </section>
  )
}
