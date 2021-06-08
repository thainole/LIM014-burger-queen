import React from 'react';
import deleteIcon from "../../img/delete.png";

export const OrderSummaryProd = ({item, handleQty, handleRemove}) => {

  return (
  <section className="prodQty" >
    <div className="prod">
      <p>{item.name}</p>
      <div>
        <button onClick={(e) => {
          e.preventDefault()
          handleQty(item.id, "-")}}>-</button>
        <p>{item.amount}</p>
        <button onClick={(e) => {
          e.preventDefault()
          handleQty(item.id, "+")}}>+</button>
        <button>
          <img
            src={deleteIcon}
            onClick={(e) => {
              e.preventDefault()
              handleRemove(item.id)}}
            alt=""
          />
        </button>
      </div>
    </div>
    <p>S/. {item.price * item.amount}</p>
  </section>
  )
}


