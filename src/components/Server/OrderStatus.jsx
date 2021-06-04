import React from 'react'
import { NavBar } from './NavBar'

export const OrderStatus = () => {
  return (
    <section>
      <NavBar />
        <article className="statusCard">
          <div className="cards">
            <h3>Order #1234</h3>
            <div>
              <div className="onlyrow">
                <p><strong>1&nbsp;&nbsp;</strong></p>
                <p>Hamburguesa simple de pollo con huevo</p>
              </div>
              <div className="onlyrow">
                <p><strong>1&nbsp;&nbsp;</strong></p>
                <p>Hamburguesa simple de pollo con huevo</p>
              </div>
            </div>
            <button>Pedido finalizado</button>
            <div className="smallerFont">
              <p>Hora del pedido:</p>
              <p>Hora de terminado:</p>
              <p>Tiempo de duración:</p>
            </div>
              
          </div>
        </article>
    </section>
  )
}
