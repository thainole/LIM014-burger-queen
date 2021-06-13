import React from 'react'
import { NavBar } from './NavBar';
import { OrderEachStatus } from './OrderEachStatus';
import { readAllOrders } from '../../firebase/firestore'

export const OrderStatus = () => {
  const [ordersCooked, setOrdersCooked] = React.useState([]);

  React.useEffect(() => {
    readAllOrders(setOrdersCooked);
  }, []);

  return (
    <section>
      <NavBar />
      <article className="statusCard">
        {
          ordersCooked.length > 0
          ? ordersCooked.map((ordercooked)  => (
            <OrderEachStatus
              ordercooked={ordercooked}
              key={ordercooked.id}
            />
          ))
          : null
        }
      </article>
    </section>
  )
}
