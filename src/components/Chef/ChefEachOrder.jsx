import React from 'react'
import { updateStatusOrder, updateTimeDateEnd } from '../../firebase/firestore'

export const ChefEachOrder = ({order}) => {

  const mealCooked = (id) => {
    updateStatusOrder(id, order.status = 'ready');
    updateTimeDateEnd(id, order.timeInit)

  }///* CAMBIO 1*/

  return (
    <>
    {
      (order.status === "pending") ?
      <aside className="cards">
        <section>
          <h3>Order #{order.orderNumber}</h3>
          <div className="smallerFont">
            <p>Mesero: {order.server} (Mesa #{order.table})</p>
            <p>Hora del pedido: {order.timeInit}</p>
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
        </section>
        <button /* CAMBIO */onClick={()=> mealCooked(order.orderId)}>Orden lista</button>
      </aside>
      :null
    }
    </>
  )
}
