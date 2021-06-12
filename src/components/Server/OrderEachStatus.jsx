import React from "react";

export const OrderEachStatus = ({ ordercooked }) => {
  const [activeButton, setActiveButton] = React.useState(false);

  const mealToDeliver = (id, status) => {
    console.log(status);
  };

  return (
    <aside className="cards">
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
        onClick={() => mealToDeliver(ordercooked.orderId, ordercooked.status)}
        disable={
          true
          /* ordercooked.status === "pending" ? activeButton : !activeButton */
        }
      >
        Orden Lista para entregar al cliente
      </button>
    </aside>
  );
};
