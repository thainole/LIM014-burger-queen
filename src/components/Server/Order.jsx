import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { ProductsContainer } from './ProductsContainer'
import { OrderSummary } from './OrderSummary'

export const Order = () => {

  const [initialState, setState] = useState({
    orderNumber: "",
    client: "",
    server: "",
    table: "",
    products: [],
    dateInit: "",
    timeInit: "",
    dateEnd: "",
    timeEnd: "",
    duracion: "",
  })

  const [orderL, setOrderL] = useState([])

  const productList = (product) => {
    // console.log(product);
    setOrderL([...orderL, product]);
  }

  const handleQty = (id, sign) => {
    // eslint-disable-next-line array-callback-return
    const filtering = orderL.map((item) => {
      if (item.id === id) {
        if (sign === "+") {
          return { ...item, amount: item.amount + 1 };
        } else if (sign === "-" && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    });
    console.log(filtering)
    setOrderL(filtering);
  };

  const handleRemove = (id) => {
    // console.log(id);
    const newList = orderL.filter(item => item.id !== id )
    setOrderL(newList);
  }

  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <ProductsContainer choosenElements={productList} sentProducts={orderL} handleQty={handleQty}/>
        <OrderSummary sentProducts={orderL} handleQty={handleQty} handleRemove={handleRemove} />
      </article>
    </section>
  )
}
