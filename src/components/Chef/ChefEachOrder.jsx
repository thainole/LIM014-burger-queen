import React from 'react'
//import { duration } from '../../firebase/firestore'
import { updateStatusOrder  } from '../../firebase/firestore'

export const ChefEachOrder = ({order}) => {

  const mealCooked = (id) => {
    updateStatusOrder(id, order.status = 'ready');
  }///* CAMBIO 1*/

  return (
    <>
    {
      (order.status === "pending") ?
      <aside className="cards">
        <h3>Order #{order.orderNumber}</h3>
        <div className="smallerFont">
          {/* <p>Cliente: {order.client} </p> */}
          <p>Mesero: {order.server} {/* (Mesa #{order.table}) */}</p>
          {/* <p>Fecha: {order.dateInit}</p> */}
          <p>Hora del pedido: {order.timeInit}</p>
          {/* <p>Tiempo: {order.totalTime}</p> */}
        </div><br />
        <div>
          { order.products ?
          order.products.map((prod) => (
            <div className="onlyrow">
            <p><strong>{prod.amount}&nbsp;&nbsp;</strong></p>
            <p>{prod.name}</p>
          </div>
          )): null}
        </div><br />
        <button /* CAMBIO */onClick={()=> mealCooked(order.orderId)}>Orden culminada</button>
      </aside>
      :null
    }
    </>
  )
}
