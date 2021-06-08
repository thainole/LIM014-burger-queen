import React from 'react';


export const Product = ({product, choosenElements, sentProducts, handleQty }) => {

  // si ya existe, aplico función handle del padre
  const addProducts = (id) => {
    const findProduct = sentProducts.find(item => item.id === id)
    if (findProduct) {
      return handleQty(id, '+')
    } else {
      return choosenElements({ ...product, amount: 1 });
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

