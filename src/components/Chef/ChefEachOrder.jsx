import React from 'react'

export const ChefEachOrder = ({order}) => {
  console.log(order)
  return (
    <aside className="cards">
      <h3>Order #1234</h3>
      <div className="smallerFont">
        <p>Cliente: {order.client} </p>
        <p>Mesero: {order.server} (Mesa #{order.table})</p>
        <p>Hora del pedido: {order.dateInit}{/*  {order.timeInit} */}</p>
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
      <button>Orden lista para entregar</button>
    </aside>
  )

}
