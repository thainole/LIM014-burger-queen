import React from "react";
import { updateStatusOrder  } from '../../firebase/firestore'

export const OrderEachStatus = ({ ordercooked }) => {

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
  };

  return (
    <>
      {
        (ordercooked.status === "pending" || ordercooked.status === "ready") ?
        <aside className="cards">
          <section>
            <h3>Mesa #{ordercooked.table}</h3>
            <div className="smallerFont">
              <p><b>Cliente: </b>{ordercooked.client}</p>
              <p><b>Mesero: </b>{ordercooked.server}</p>
              <p><b>Fecha: </b>{ordercooked.dateInit}</p>
              <p><b>Hora: </b>{ordercooked.timeInit}</p>
              <hr />
            </div>
            <div>
              {ordercooked.products
                ? ordercooked.products.map((prod) => (
                    <div className="onlyrow">
                      <p>{prod.amount}&nbsp;&nbsp;</p>
                      <p>{prod.name}</p>
                    </div>
                  ))
                : null}
            </div>
            <br />
          </section>
         
          <section className="center">
            <h4 className="izq"><b>Total: &nbsp;&nbsp;S/. {ordercooked.totalPrice}</b></h4>
            <br />
            <button
              className={ toggleActiveStyle(ordercooked.status) }
              onClick={() => mealToDeliver(ordercooked.orderId, ordercooked.status)}
              disabled={
                ordercooked.status === "pending" ? true : false
              }
            >
              {
              ordercooked.status === "pending" ? 'Preparando orden' : 'Entregar orden'
              }
            </button>
          </section>
          
          
        </aside>
        : null
      }
    </>
  );
};
