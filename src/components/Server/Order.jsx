import React, {useState} from 'react'
import { NavBar } from './NavBar'
import { ProductsContainer } from './ProductsContainer'
import { OrderSummary } from './OrderSummary'

export const Order = () => {
  const initialValues = {
    orderNumber: "",
    client: "",
    server: "",
    table: "",
    products: [],
    totalPrice: 0,
    dateInit: "",
    timeInit: "",
    dateEnd: "",
    timeEnd: "",
    totalTime: "",
  }

  const [state, setState] = useState(initialValues)

  // const [orderL, setOrderL] = useState([])

  const chosenProduct = (product) => {
    // console.log(product);
    // setOrderL([...orderL, product]);
    setState((prev) => ({...prev, products: [...prev.products, product]}))
    // solo queremos que cambie products (que traiga los products previos y agregue uno nuevo)
    // y que traiga todo lo anterior sin cambiarlo
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
    // console.log(filtering)
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
