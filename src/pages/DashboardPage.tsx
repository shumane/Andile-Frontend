// DashboardPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { getProductById, updateProduct, removeProducts } from '../services/api';
import ProductList from '../components/ProductList';

const DashboardPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleRemoveSelectedProducts = async () => {
    try {
      await removeProducts(selectedProducts);
      setSelectedProducts([]); 
    } catch (error) {
      console.error('Error removing products:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <ProductList/>
      {selectedProducts.length > 0 && (
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleRemoveSelectedProducts}>
              Remove Selected Products
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default DashboardPage;
