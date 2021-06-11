import React from 'react'
//import { duration } from '../../firebase/firestore'

export const ChefEachOrder = ({order}) => {

  /* const abc = duration(order.timeInit)
  console.log(order.timeInit)
  console.log(abc)
  //console.log(order) */
  
  return (
    <aside className="cards">
      <h3>Order #{order.orderNumber}</h3>
      <div className="smallerFont">
        <p>Cliente: {order.client} </p>
        <p>Mesero: {order.server} (Mesa #{order.table})</p>
        <p>Fecha: {order.dateInit}</p>
        <p>Hora: {order.timeInit}</p>
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
      <button>Pedido listo</button>
    </aside>
  )

}
