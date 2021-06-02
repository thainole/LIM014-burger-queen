import React, {useState} from 'react';
import deleteIcon from "../../img/delete.png";

export const OrderList = ({sentProducts}) => {//esto tmb es props.sentProducts
  console.log(sentProducts);

  const [qty, setQty] = useState(1)
  /* const handleRemove =(id) => {
    const newList = sentProducts.filter((item) => item.id !== id);
    setOrderL(newList);
  } */

  /* const sumaryData = {
    waiter: '',
    customer: '',
    table: '',
    products: [],
    orderTime: '',
    completeTime: '',
    timeLength: '',
    completed: '',
  }
  const [values, setValues] = useState(sumaryData); */

  return (
    <form onSubmit={(e) =>e.preventDefault()} className="orderList">
      <h2>Resumen del pedido</h2>
      <section className="customerInfo">
        <p>Cliente : </p> <input type="text" />
        <p>Mesero: </p> <input type="text" />
        <p># Mesa : </p>
        <select name="# Mesa">
          <option value="value1">Mesa 1</option>
          <option value="value2">Mesa 2</option>
          <option value="value3">Mesa 3</option>
          <option value="value1">Mesa 4</option>
          <option value="value2">Mesa 5</option>
        </select>
      </section>
      <section className="orderDetails">
        <div className="titles">
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>

        <aside className="sumary">
          {
            sentProducts.map(obj => (
              <>
                <section className="prodQty" key={obj.id}>
                  <div className="prod">
                    <p>{obj.name}</p>
                    <div>
                      <button onClick={() => qty > 1 ? setQty(qty-1) : setQty(qty)}>-</button>
                      <p>{qty}</p>
                      <button onClick={() => setQty(qty+1)}>+</button>
                      <button><img src={deleteIcon} alt="" /* onClick={() => handleRemove(obj.id)} *//></button>
                    </div>
                  </div>
                  <p>S/. {obj.price*qty}</p>
                </section>
              </>
            ))
            
          }
          <h3>Total</h3>
        </aside>
      </section>
      <button className="submitButton" /* onReset={()=>Form.reset()} */>Enviar a cocina</button>
    </form>
  );
}
