import React from 'react'
import { NavBar } from './NavBar';
import { OrderEachStatus } from './OrderEachStatus';
import { db } from "../../firebase/config";

export const OrderStatus = () => {
  const [ordersCooked, setOrdersCooked] = React.useState([]);

  const readAllOrders = () =>
    db
      .collection("orders")/* .where("status", "==", "ready") */
      .orderBy("orderDateTime", "desc")
      .onSnapshot((querySnapshot) => {
        const arrOrders = [];
        querySnapshot.docs.forEach((doc) =>
          arrOrders.push({
            orderId: doc.id,
            ...doc.data(),
          })
        );
        setOrdersCooked(arrOrders);
      });

  React.useEffect(() => {
    readAllOrders();
  }, []);

  return (
    <section>
      <NavBar />
      <article className="statusCard">
        {
          ordersCooked.length > 0
          ? ordersCooked.map((ordercooked)  => (
            <OrderEachStatus
              className="chefOrderContainer"
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
