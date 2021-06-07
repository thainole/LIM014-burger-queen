import React, {useState} from 'react';


export const Product = ({product, choosenElements}) => {

  const choosenProducts = (product) => {
    choosenElements(product);
  };

  const [disable, setDisable] = useState(false);

  return (
    <div className="div">
      <img src={product.img} alt="" />
      <div>
        <li>{product.name}</li>
        <p>S/. {product.price}</p>
      </div>
      <button
        onClick={() => {
          choosenProducts(product);
          setDisable(true);
        }}
        disabled={disable}
      >
        Agregar
      </button>
  </div>
  )
}

