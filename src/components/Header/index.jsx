import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "./Header.css";

export const Header = ({ cartCount, setShowCart }) => {
  const [value, setValue] = useState("");

  return (
    <header className="header">
      <img src={Logo} alt="Logo Kenzie Burguer" className="logo" />
      <div className="header-content">
        <button
          className="cart-button"
          onClick={() => setShowCart(true)}
        >
          <MdShoppingCart size={21} />
          <span className="cart-count">{cartCount}</span>
        </button>
        <form className="search-form">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="search-input"
            placeholder="Buscar produtos"
          />
          <button type="submit" className="search-button">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
