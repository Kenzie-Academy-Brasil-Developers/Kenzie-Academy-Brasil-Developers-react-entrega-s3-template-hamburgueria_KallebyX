import React from 'react';
import "./ProductCard.css";

export const ProductCard = ({ product, addToCart }) => {
  return (
    <li className="product-card">
      <div className="product-info">
        <img src={product.img} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <button className="add-button" onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
