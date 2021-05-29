import React from 'react'
import data from './data.json'

export const Products = () => {
  return (
    <article className="productsList">
      <nav>
        <ul>
          <div>
            <li>Desayuno</li>
            <li>Hamburguesas</li>
            <li>Acompañamientos</li>
            <li>Bebidas</li>
          </div>
        </ul>
      </nav>
      <article>
      <ul className="cards">
        {data.map(p => (
          <div>
            <img src={p.img} alt="" />
            <li key={`p--${p.id}`}>{p.name}</li>
            <p>S/. {p.price}</p>  
          </div>  
        ))}
        </ul>
      </article>
    </article>
  )

}
