import React, { useState, useEffect } from "react";
import deleteIcon from "../../img/delete.png";

export const OrderList = ({ sentProducts, handleRemove }) => {
  // console.log(sentProducts);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const newAmount = sentProducts.map((item) => {
      return { ...item, amount: 1 };
    });
    setItemList(newAmount);
  }, [sentProducts]);

  const handleQty = (id, sign) => {
    // eslint-disable-next-line array-callback-return
    const filtering = itemList.map((item) => {
      if (item.id === id) {
        if(sign === '+'){
          return { ...item, amount: item.amount + 1 };
        } else if(sign === '-' && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    });
    setItemList(filtering);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="orderList">
      <h3>Resumen del pedido</h3>
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
            itemList.map((obj) => (
              <section className="prodQty" key={obj.id}>
                <div className="prod">
                  <p>{obj.name}</p>
                  <div>
                    <button onClick={() => handleQty(obj.id, "-")}>-</button>
                    <p>{obj.amount}</p>
                    <button onClick={() => handleQty(obj.id, "+")}>+</button>
                    <button>
                      <img
                        src={deleteIcon}
                        onClick={() => handleRemove(obj.id)}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <p>S/. {obj.price * obj.amount}</p>
              </section>
            ))}
          <h3>Total</h3>
        </aside>
      </section>
      <button className="submitButton" /* onReset={()=>Form.reset()} */>
        Enviar a cocina
      </button>
    </form>
  );
};
