import React from "react";

export const OrderEachStatus = ({ ordercooked }) => {
  //const [activeButton, setActiveButton] = React.useState(false);

  const mealToDeliver = (status) => {
    console.log(status);
    // if(status==="ready"){

    // }
    //aca debo agregar 1 fn para que se oculte este card despues que ya esté lista la orden
  };
  const toggleActiveStyle = (status) => {
    if(status === "ready"){
      return "is-active"
    } else if (status === "pending"){
      return "inactive"
    }
  }

  return (
    <aside className="cards" >
      <h3>Order #1234</h3>
      <div className="smallerFont">
        <p>Cliente: {ordercooked.client} </p>
        <p>
          Mesero: {ordercooked.server} (Mesa #{ordercooked.table})
        </p>
        <p>Fecha: {ordercooked.dateInit}</p>
        <p>Hora: {ordercooked.timeInit}</p>
      </div>
      <br />
      <div>
        {ordercooked.products
          ? ordercooked.products.map((prod) => (
              <div className="onlyrow">
                <p>
                  <strong>{prod.amount}&nbsp;&nbsp;</strong>
                </p>
                <p>{prod.name}</p>
              </div>
            ))
          : null}
      </div>
      <br />
      <button
        className={ toggleActiveStyle(ordercooked.status) }
        onClick={() => mealToDeliver(ordercooked.status)}
        disabled={
          /* ordercooked.status === "ready" ? activeButton : !activeButton */
          ordercooked.status === "pending" ? false : true
      }
      >
        {
         ordercooked.status === "pending" ? 'Preparando orden' : 'Orden Lista para entregar al cliente'
        }
      </button>
    </aside>
  );
};
