import React, { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const savedCartList = localStorage.getItem("cartList");
    if (savedCartList) {
      setCartList(JSON.parse(savedCartList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartList.filter((item) => item.id !== productId);
    setCartList(updatedCart);
  };

  const calculateTotal = () => {
    const total = cartList.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    return total.toFixed(2);
  };

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue, productList]);

  return (
    <>
      <Header
        cartCount={cartList.length}
        setShowCart={setShowCart}
        setSearchValue={setSearchValue}
      />
      <main>
        <ProductList
          productList={filteredProducts}
          addToCart={addToCart}
        />
        {showCart && (
          <CartModal
            cartList={cartList}
            removeFromCart={removeFromCart}
            total={calculateTotal()}
            isOpen={showCart}
            onClose={() => setShowCart(false)}
          />
        )}
      </main>
    </>
  );
};
