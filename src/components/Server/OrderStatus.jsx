import React from 'react'
import { NavBar } from './NavBar'

export const OrderStatus = () => {
  return (
    <section>
      <NavBar />
        <article className="statusCard">
          {/* {products.map(p => (
            <div key={p.id}>
              <img src={p.img} alt="" />
              <li>{p.name}</li>
              <p>S/. {p.price}</p>
              <button onClick={()=>choosenProducts(p)}>Agregar</button>
            </div>
          ))} */}
          <div className="cards">
            <h5>Order # 1234</h5>
            <div>
              <p>1 Hamburguesa simple de pollo con huevo</p>
              <p>1 Hamburguesa doble de carne con queso</p>
            </div>
            <button>Agregar</button>
            <div>
              <p>Hora del pedido:</p>
              <p>Hora de terminado:</p>
              <p>Tiempo de duración:</p>
            </div>
              
            </div>
          </article>
    </section>
  )
}
