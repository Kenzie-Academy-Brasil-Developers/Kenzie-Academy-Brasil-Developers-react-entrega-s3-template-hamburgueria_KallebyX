import React from 'react';
import { MdDelete, MdClose } from 'react-icons/md';
import { CartItemCard } from './CartItemCard';
import './CartModal.css';

export const CartModal = ({ cartList, removeFromCart, removeAllFromCart, total, isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Carrinho de compras</h2>
          <button aria-label="close" title="Fechar" onClick={onClose}>
            <MdClose size={21} />
          </button>
        </div>
        <div className="modal-body">
          <ul>
            {cartList.map((product) => (
              <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <div>
            <span>Total</span>
            <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          <button onClick={removeAllFromCart}>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
