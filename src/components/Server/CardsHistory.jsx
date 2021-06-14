import React from 'react'

export const CardsHistory = ({orderH}) => {
  return (
    <>
    {
      (orderH.status === "delivered") ? 
      <aside className="cards" >
        <section>
          <h3>Mesa #{orderH.table}</h3>
          <div>
            <p><b>Cliente: </b>{orderH.client}</p>
            <p><b>Mesero: </b>{orderH.server}</p>
            <p><b>Inicio:</b> {orderH.dateInit} {orderH.timeInit}</p>
            <p><b>Fin:</b> {orderH.dateEnd} {orderH.timeEnd}</p>
            <p><b>Tiempo:</b> {orderH.totalTime}</p>
            <hr />
          </div>
          <div>
            {orderH.products
              ? orderH.products.map((prod) => (
                <div className="onlyrow spc-btwn">
                  <div className="onlyrow">
                    <p>{prod.amount}&nbsp;&nbsp;</p>
                    <p>{prod.name}</p>
                  </div>
                  <p className="p">S/.{prod.price*prod.amount}</p>
                </div>  
                ))
              : null
            }
          </div>
        </section>
        <br />
        <h4><b>Total: &nbsp;&nbsp;S/. {orderH.totalPrice}</b></h4>
      </aside>
      : null
    }
    </>
  )
}
