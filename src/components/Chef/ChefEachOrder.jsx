import React from 'react'

export const ChefEachOrder = ({order}) => {
  return (
    <aside className="cards">
      <h3>Order #1234</h3>
      <div>
        {order.map((prod) => (
          <div className="onlyrow">
          <p><strong>{prod.amount}&nbsp;&nbsp;</strong></p>
          <p>{prod.name}</p>
        </div>
        ))}
        
      </div>
      <button>Orden lista para entregar</button>
      <div className="smallerFont">
        <p>Hora del pedido: {order.dateInit} {order.timeInit}</p>
        <p>Tiempo: {order.totalTime}</p>
      </div>
    </aside>
  )
}
