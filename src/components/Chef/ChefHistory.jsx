import React from 'react'
import { CardsHistory } from '../Server/CardsHistory'
import { ChefNavBar } from './ChefNavBar'
import { readAllOrders } from '../../firebase/firestore'

export const ChefHistory = () => {

  const [ordersH, setOrdersH] = React.useState([]);

  const callback = (data) => setOrdersH(data)

  React.useEffect(() => {
    readAllOrders(callback, 'desc');
  }, [ordersH]);

  return (
    <section>
      <ChefNavBar />
      <article className="statusCard">
        {ordersH.length > 0
          ? ordersH.map((orderH) => (
              <CardsHistory
                orderH={orderH}
                key={orderH.orderId}
              />
            ))
          : null
        }
      </article>
    </section>
  )
}
