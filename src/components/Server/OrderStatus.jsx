import React from 'react'
import { NavBar } from './NavBar';
import { OrderEachStatus } from './OrderEachStatus';
import { readAllOrders } from '../../firebase/firestore'

export const OrderStatus = () => {
  const [ordersCooked, setOrdersCooked] = React.useState([]);

  const callback = (data) => setOrdersCooked(data)

  React.useEffect(() => {
    readAllOrders(callback, 'asc');
  }, [ordersCooked]);

  return (
    <section>
      <NavBar />
      <article className="statusCard">
        {
          ordersCooked.length > 0
          ? ordersCooked.map((ordercooked)  => (
            <OrderEachStatus
              ordercooked={ordercooked}
              key={ordercooked.orderId}
            />
          ))
          : null
        }
      </article>
    </section>
  )
}
