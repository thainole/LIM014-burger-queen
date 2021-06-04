import React from 'react'

export const CardsHistory = () => {
  return (
    <section className="statusCard">
        <aside className="cards">
          <h3>Orden #1234</h3>
          <div className="smallerFont">
            <p><b>Mesero: </b>Thais (mesa 6)</p>
            <p><b>Cliente: </b>Taylor Swift</p>
          </div>
          <br />
          <div className="onlyrow">
            <div className="onlyrow">
              <p>1&nbsp;&nbsp;</p>
              <p>Hamburguesa simple de carne con huevo</p>
            </div>
            <p className="p">S/.15</p>
          </div>
          <div className="smallerFont">
            <br />
            <p>Hora del pedido:</p>
            <p>Hora de terminado:</p>
            <p>Tiempo de duración:</p>
          </div>
          
        </aside>
      </section>
  )
}
