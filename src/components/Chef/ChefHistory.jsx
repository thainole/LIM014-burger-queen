import React from 'react'
import { CardsHistory } from '../Server/CardsHistory'
import { ChefNavBar } from './ChefNavBar'
import { readAllOrders } from '../../firebase/firestore'

export const ChefHistory = () => {

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
      <ChefNavBar />
      <article className="statusCard">
        {ordersH.length > 0
          ? ordersH.map((orderH) => (
              <CardsHistory
                orderH={orderH}
<<<<<<< HEAD
                key={orderH.orderId}
=======
                key={orderH.id}
>>>>>>> e50d617 (feat orders history chef and server)
              />
            ))
          : null
        }
      </article>
    </section>
  )
}
