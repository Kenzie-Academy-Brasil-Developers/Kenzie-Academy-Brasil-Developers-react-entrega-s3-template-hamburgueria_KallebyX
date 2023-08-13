import React from "react";
import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeFromCart }) => {
  const handleRemoveClick = () => {
    removeFromCart(product.id); 
  };

  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
      <button aria-label="delete" title="Remover item" onClick={handleRemoveClick}>
        <MdDelete size={21} />
      </button>
    </li>
  );
};
