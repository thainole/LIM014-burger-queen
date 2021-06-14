import React from "react";
import { readAllOrders } from '../../firebase/firestore'
import { ChefEachOrder } from "./ChefEachOrder";
import { ChefNavBar } from "./ChefNavBar";

export const ChefOrder = () => {
  const [orders, setOrders] = React.useState([]);

  const callback = (data) => setOrders(data)

  React.useEffect(() => {
    readAllOrders(callback, 'asc');
  }, [orders]);

  return (
    <section>
      <ChefNavBar />
      <article className="statusCard">
        {orders.length > 0
          ? orders.map((order) => (
              <ChefEachOrder
                order={order}
               key={order.orderId}
              />
            ))
          : null
        }
      </article>
    </section>
  );
};
