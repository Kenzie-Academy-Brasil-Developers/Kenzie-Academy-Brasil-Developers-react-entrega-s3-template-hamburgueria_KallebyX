import React, { useState, useEffect } from 'react';
import { ProductList } from './ProductList';

export const Api = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="api-container">
      <h2>Lista de Produtos</h2>

      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ProductList productList={filteredProducts} />
    </div>
  );
};
