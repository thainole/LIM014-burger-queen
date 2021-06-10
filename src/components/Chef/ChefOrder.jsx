import React from 'react'
import { db } from '../../firebase/config'
// import { readAllOrders } from '../../firebase/firestore'
import { ChefEachOrder } from './ChefEachOrder';
import { ChefNavBar } from './ChefNavBar';

export const ChefOrder = () => {

  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    db.collection('orders')
    .orderBy('orderDate', 'desc')
    .onSnapshot((querySnapshot) => {
      const arrOrders = [];
      querySnapshot.docs.forEach((doc) => arrOrders.push({
        orderId: doc.id,
        ...doc.data(),
      }))
      setOrders(arrOrders)
    });
  }, [])

  return (
    <section>
      <ChefNavBar />
      <article className="statusCard">
        { orders.length > 0 ?
          orders.map((order) => (
            <ChefEachOrder className="chefOrderContainer" order={order} key={order.id}/>
          )): null
        }
      </article>
    </section>
  )
}
