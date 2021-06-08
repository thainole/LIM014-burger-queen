import React, { useState } from "react";
import Select from "react-select";
import { OrderSummaryProd } from "./OrderSummaryProd";

export const OrderSummary = ({ handleRemove, handleQty, state, setState }) => {
  // console.log(sentProducts);
  // const [itemList, setItemList] = useState([]);

  /*   useEffect(() => {
    const newAmount = sentProducts.map((item) => {
      return { ...item, amount: 1 };
    });
    setOrderL(newAmount);
  }, [sentProducts]); */

  /* const handleQty = (id, sign) => {
    // eslint-disable-next-line array-callback-return
    const filtering = sentProducts.map((item) => {
      if (item.id === id) {
        if (sign === "+") {
          return { ...item, amount: item.amount + 1 };
        } else if (sign === "-" && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    });
    console.log(filtering)
    setOrderL(filtering);
  }; */

  const totalSum = (products) => {
    const total = products.reduce((acc, item) => acc + item.price * item.amount, 0);
    return total
    // setState((prev) => ({...prev, totalPrice: total}))
  }

  const options = [
    { value: "m1", label: "Mesa 1" },
    { value: "m2", label: "Mesa 2" },
    { value: "m3", label: "Mesa 3" },
  ];
  const initialStateValues = {
    client: "",
    server: "",
    /* table: "", */
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({...values, [name] : value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <form className="orderList" onSubmit={handleSubmit}>
      <h3>Resumen del pedido</h3>
      <section className="customerInfo">
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          onChange={handleInputChange}
          value={values.client}
        />
        <p>Mesero: </p>
        <input
          type="text"
          name="server"
          onChange={handleInputChange}
          value={values.server}
        />
        <p># Mesa : </p>
        <Select options={options} name="table" /* value={values.table} *//>
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
            // <section className="prodQty" key={obj.id}>
            //   <div className="prod">
            //     <p>{obj.name}</p>
            //     <div>
            //       <button onClick={() => handleQty(obj.id, "-")}>-</button>
            //       <p>{obj.amount}</p>
            //       <button onClick={() => handleQty(obj.id, "+")}>+</button>
            //       <button>
            //         <img
            //           src={deleteIcon}
            //           onClick={() => handleRemove(obj.id)}
            //           alt=""
            //         />
            //       </button>
            //     </div>
            //   </div>
            //   <p>S/. {obj.price * obj.amount}</p>
            // </section>
          ))}
          <h3>Total:&nbsp;&nbsp;&nbsp;S/. {totalSum(state.products)}</h3>
        </aside>
      </section>
      <button className="submitButton" /* onReset={()=>Form.reset()} */>
        Enviar a cocina
      </button>
    </form>
  );
};
