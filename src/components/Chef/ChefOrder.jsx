import React from 'react'
import { readAllOrders } from '../../firebase/firestore'
import { ChefEachOrder } from './ChefEachOrder';
import { ChefNavBar } from './ChefNavBar';

export const Chef = () => {

  const [orders, setOrders] = React.useState([])

  const readOrders = () => {
    setOrders(readAllOrders) 
  }
  console.log(setOrders(readAllOrders));

  React.useEffect(() => {
    readOrders()
  }, [])

  return (
    <section>
      <ChefNavBar />
      <article className="statusCard">
        {orders.map(order => (
          <ChefEachOrder order={order} key={order.id}/>
        ))}
      </article>
    </section>
    
  )
}
