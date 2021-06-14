import React from "react";
import { OrderSummaryProd } from "./OrderSummaryProd";
import { createOrder } from '../../firebase/firestore'

export const OrderSummary = ({ handleRemove, handleQty, state, setState, initialValues }) => {
  
  const totalSum = (products) => {
    const total = products.reduce((acc, item) => acc + item.price * item.amount, 0);
    return total
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name] : value})
  };

  const dataStore = async(state) => {
    await createOrder(state);
    await setState(initialValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    state.totalPrice = totalSum(state.products)
    dataStore(state);
  };

  return (
    <form className="orderList" onSubmit={handleSubmit}>
      <h3>Resumen del pedido</h3>
      <section className="customerInfo">
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          onChange={handleInputChange}
          value={state.client}
          required
        />
        <p>Mesero: </p>
        <input
          type="text"
          name="server"
          onChange={handleInputChange}
          value={state.server}
          required
        />
        <p># Mesa : </p>
        <input
          type="number"
          name="table"
          min ="1" max="9"
          placeholder="1-9"
          onChange={handleInputChange}
          value={state.table}
          required
        />
      </section>
      <section className="orderDetails">
        <div className="titles">
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
          {state.products.map((item) => (
            <OrderSummaryProd
              key={item.id}
              item={item}
              handleQty={handleQty}
              handleRemove={handleRemove}
            />
          ))}
          {
            state.products.length > 0 ? 
            <h3 className="h3">Total:&nbsp;&nbsp;&nbsp;S/. {totalSum(state.products)}</h3>
            : <h5>No has agregado ningún producto :(</h5>
          } 
          
        </aside>
      </section>
      <div>
        {
           state.products.length > 0 ?
           <>
            <button className="submitButton grey" 
              onClick={e=> {
                e.preventDefault()
                setState(initialValues)
              }}>
              Borrar orden
            </button>
            <button className="submitButton" >
              Enviar a cocina
            </button>
          </>
         : ''
        }
        
      </div>
      
    </form>
  );
};
