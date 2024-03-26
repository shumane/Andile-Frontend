// components/Basket.tsx
import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { getProductsByIds } from '../services/api';

const Basket: React.FC = () => {
  const [basketProducts, setBasketProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchBasketProducts();
  }, []);

  const fetchBasketProducts = async () => {
    try {
      const basketIds = await fetchBasketProductIds();
      const products = await getProductsByIds(basketIds);
      setBasketProducts(products);
    } catch (error) {
      console.error('Error fetching basket products:', error);
    }
  };

  const fetchBasketProductIds = async () => {
    try {
      const response = await fetch('http://localhost:5000/basket/products');
      const data = await response.json();
      return data.ids;
    } catch (error) {
      console.error('Error fetching basket product IDs:', error);
      return [];
    }
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
  };

  return (
    <div>
      <Typography variant="h4">Basket Page</Typography>
      {basketProducts.map(product => (
        <div key={product.id}>
          <Typography variant="body1">{product.name}</Typography>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Basket;
