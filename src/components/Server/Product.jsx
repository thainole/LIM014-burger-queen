import React from 'react';


export const Product = ({product, chosenProduct, state, handleQty }) => {

  // si ya existe, aplico función handle del padre
  const addProducts = (id) => {
    const findProduct = state.products.find(item => item.id === id)
    if (findProduct) {
      return handleQty(id, '+')
    } else {
      return chosenProduct({ ...product, amount: 1 });
    }
  }

  return (
    <div className="div">
      <img src={product.img} alt="" />
      <div>
        <li>{product.name}</li>
        <p>S/. {product.price}</p>
      </div>
      <button
        onClick={() => addProducts(product.id)}
      >
        Agregar
      </button>
  </div>
  )
}

