import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { ProductsContainer } from './ProductsContainer'
import { OrderSummary } from './OrderSummary'
import { orderTime, orderDate, orderDateTime } from '../../firebase/firestore'

export const Order = () => {
  
  const initialValues = {
    orderNumber: 0,
    client: "",
    server: "",
    table: "",
    products: [],
    totalPrice: 0,
    dateInit: orderDate(),
    timeInit: orderTime(),
    orderDateTime: orderDateTime(),
    dateEnd: "",
    timeEnd: "",
    totalTime: "",
    status: "pending"
  }

  const [state, setState] = useState(initialValues)

  const chosenProduct = (product) => {
    setState((prev) => ({...prev, products: [...prev.products, product]}))
  }

  const handleQty = (id, sign) => {
    // eslint-disable-next-line array-callback-return
    const filtering = state.products.map((item) => {
      if (item.id === id) {
        if (sign === "+") {
          return { ...item, amount: item.amount + 1 };
        } else if (sign === "-" && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    });
    setState((prev) => ({...prev, products: filtering}))
  };

  const handleRemove = (id) => {
    const newList = state.products.filter(item => item.id !== id )
    setState((prev) => ({...prev, products: newList}));
  }

  return (
    <section className="order">
      <NavBar />
      <article className="orderContainer">
        <ProductsContainer
          chosenProduct={chosenProduct}
          state={state}
          handleQty={handleQty}
        />

        <OrderSummary
          state={state}
          setState={setState}
          handleQty={handleQty}
          handleRemove={handleRemove}
          initialValues={initialValues}
        />
      </article>
    </section>
  )
}
