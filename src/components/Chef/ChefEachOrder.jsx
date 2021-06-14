import React from 'react'
import { updateStatusOrder, updateTimeDateEnd } from '../../firebase/firestore'

export const ChefEachOrder = ({order}) => {

  const mealCooked = (id) => {
    updateStatusOrder(id, order.status = 'ready');
    updateTimeDateEnd(id, order.timeInit)
  }

  return (
    <>
    {
      (order.status === "pending") ?
      <aside className="cards">
        <section>
          <h3>Mesa #{order.table}</h3>
          <div className="smallerFont">
            <p><b>Cliente: </b>{order.client}</p>
            <p><b>Mesero: </b>{order.server}</p>
            <p><b>Hora del pedido: </b>{order.timeInit}</p>
            <hr />
          </div>
          <div>
            { order.products ?
            order.products.map((prod) => (
              <div className="onlyrow">
              <p>{prod.amount}&nbsp;&nbsp;</p>
              <p>{prod.name}</p>
            </div>
            )): null}
          </div><br />
        </section>
        <button onClick={()=> mealCooked(order.orderId)}>Orden lista</button>
      </aside>
      :null
    }
    </>
  )
}
