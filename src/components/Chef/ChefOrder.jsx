import React from 'react'
import { ChefNavBar } from './ChefNavBar';

export const Chef = () => {
  return (
    <section>
      <ChefNavBar />
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
            <button>Orden lista para entregar</button>
            <div className="smallerFont">
              <p>Hora del pedido:</p>
              <p>Tiempo: *que salga corriendo*</p>
            </div>
              
            </div>
          </article>
    </section>
    
  )
}
