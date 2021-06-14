import React from 'react'
import { CardsHistory } from '../Server/CardsHistory'
import { ChefNavBar } from './ChefNavBar'
import { readAllOrders } from '../../firebase/firestore'

export const ChefHistory = () => {

  const [ordersH, setOrdersH] = React.useState([]);

  React.useEffect(() => {
    readAllOrders(setOrdersH);
  }, []);

  return (
    <section>
      <ChefNavBar />
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
