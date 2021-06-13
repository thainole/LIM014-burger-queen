import React from "react";
import { readAllOrders } from '../../firebase/firestore'
import { ChefEachOrder } from "./ChefEachOrder";
import { ChefNavBar } from "./ChefNavBar";

export const ChefOrder = () => {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    readAllOrders(setOrders);
  }, []);

  return (
    <section>
      <ChefNavBar />
      <article className="statusCard">
        {orders.length > 0
          ? orders.map((order) => (
              <ChefEachOrder
                order={order}
                key={order.id}
              />
            ))
          : null
        }
      </article>
    </section>
  );
};
