import React from 'react'

export const CardsHistory = ({orderH}) => {
  return (
    <>
    {
      (orderH.status === "delivered") ? 
      <aside className="cards">
        <h3>Orden {orderH.orderNumber}</h3>
        <div className="smallerFont">
          <p><b>Cliente: </b>{orderH.client}</p>
          <p><b>Mesero: </b>{orderH.server} (Mesa #{orderH.table})</p>
        </div>
        <br />
        <div>
          {orderH.products
            ? orderH.products.map((prod) => (
              <div className="onlyrow spc-btwn">
                <div className="onlyrow">
                  <p>
                    <strong>{prod.amount}&nbsp;&nbsp;</strong>
                  </p>
                  <p>{prod.name}</p>
                </div>
                <p className="p">S/.{prod.price*prod.amount}</p>
              </div>  
              ))
            : null
          }
        </div>
        <div className="smallerFont">
          <br />
          <p>Inicio: {orderH.dateInit} {orderH.timeInit}</p>
          <p>Fin: {orderH.dateEnd} {orderH.timeEnd}</p>
          <p>Duración: {orderH.totalTime}</p>
        </div>
      </aside>
      : 
        null
    }
      
    </>
  )
}
