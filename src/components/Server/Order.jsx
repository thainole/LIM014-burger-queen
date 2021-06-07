import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { ProductsContainer } from './ProductsContainer'
import { OrderSummary } from './OrderSummary'

export const Order = () => {

  const [orderL, setOrderL] = useState([])

  const productList = (product) => {
    // console.log(product);
    setOrderL([...orderL, product]);
  }

  const deleteProduct = (id) => {
    console.log(id);
    const newList = orderL.filter(item => item.id !== id )
    setOrderL(newList);
  }

  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <ProductsContainer choosenElements={productList}/>{/* 1 */}
        <OrderSummary sentProducts={orderL} handleRemove={deleteProduct}/>
      </article>
    </section>
  )
}
