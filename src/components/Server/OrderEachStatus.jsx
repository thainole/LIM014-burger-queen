import React from "react";
import { updateStatusOrder  } from '../../firebase/firestore'

export const OrderEachStatus = ({ ordercooked }) => {
  //const [activeButton, setActiveButton] = React.useState(false);

  const toggleActiveStyle = (status) => {
    if(status === "ready"){
      return "is-active"
    } else if (status === "pending"){
      return "inactive"
    }
  }

  const mealToDeliver = (id, status) => {
    console.log(id, status);
    updateStatusOrder(id, ordercooked.status = 'delivered');
    //aca debo agregar 1 fn para que se oculte este card despues que ya esté lista la orden
  };

  return (
    <>
      {
        (ordercooked.status === "pending" || ordercooked.status === "ready") ?
        <aside className="cards" >
          <h3>Order #1234</h3>
          <div className="smallerFont">
            <p>Cliente: {ordercooked.client} </p>
            <p>
              Mesero: {ordercooked.server} (Mesa #{ordercooked.table})
            </p>
            <p>Fecha: {ordercooked.dateInit}</p>
            <p>Hora: {ordercooked.timeInit}</p>
          </div>
          <br />
          <div>
            {ordercooked.products
              ? ordercooked.products.map((prod) => (
                  <div className="onlyrow">
                    <p>
                      <strong>{prod.amount}&nbsp;&nbsp;</strong>
                    </p>
                    <p>{prod.name}</p>
                  </div>
                ))
              : null}
          </div>
          <br />
          <button
            className={ toggleActiveStyle(ordercooked.status) }
            onClick={() => mealToDeliver(ordercooked.orderId, ordercooked.status)}
            disabled={
              /* ordercooked.status === "ready" ? activeButton : !activeButton */
              ordercooked.status === "pending" ? true : false
            }
          >
            {
            ordercooked.status === "pending" ? 'Preparando orden' : 'Orden Lista para entregar al cliente'
            }
          </button>
        </aside>
        : null
      }
    </>
  );
};
