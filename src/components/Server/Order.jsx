import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { Products } from './Products'
import { OrderList } from './OrderList'

export const Order = () => {

  const [orderL, setOrderL] = useState([])
  
  const productList = (p) => {
    console.log(p); 
    setOrderL([...orderL, p]);
  }

  const deleteProduct = (id) => {
    console.log(id);
    const newList = orderL.filter(item => item.id !== id )
    setOrderL(newList)
  }

  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <Products choosenElements={productList}/>{/* 1 */}
        <OrderList sentProducts={orderL} handleRemove={deleteProduct}/>
      </article>
    </section>
  )
}
