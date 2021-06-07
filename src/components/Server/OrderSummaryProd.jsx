import React from 'react';
import deleteIcon from "../../img/delete.png";

export const OrderSummaryProd = (item) => {

  return (
  <section className="prodQty" key={item.id}>
    <div className="prod">
      <p>{item.name}</p>
      <div>
        {/* <button onClick={() => handleQty(item.id, "-")}>-</button>
        <p>{item.amount}</p>
        <button onClick={() => handleQty(item.id, "+")}>+</button>
        <button>
          <img
            src={deleteIcon}
            onClick={() => handleRemove(item.id)}
            alt=""
          />
        </button> */}
      </div>
    </div>
    <p>S/. {item.price * item.amount}</p>
  </section>
  )
}


