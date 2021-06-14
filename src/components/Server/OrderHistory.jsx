import React from 'react'
import { CardsHistory } from './CardsHistory'
import { NavBar } from './NavBar'
import { readAllOrders } from '../../firebase/firestore'

export const OrderHistory = () => {

  const [ordersH, setOrdersH] = React.useState([]);

<<<<<<< HEAD
  const callback = (data) => setOrdersH(data)

  React.useEffect(() => {
    readAllOrders(callback);
  }, [ordersH]);
=======
  React.useEffect(() => {
    readAllOrders(setOrdersH);
  }, []);
>>>>>>> e50d617 (feat orders history chef and server)

  return (
    <section>
      <NavBar />
      <article className="statusCard">
        {ordersH.length > 0
          ? ordersH.map((orderH) => (
              <CardsHistory
                orderH={orderH}
                key={orderH.id}
              />
            ))
          : null
        }
      </article>
    </section>
  )
}
