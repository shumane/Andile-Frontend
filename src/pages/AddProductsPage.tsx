import React from 'react';
import { Typography } from '@mui/material';
import AddProduct from '../components/AddProduct';

const AddProductsPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Add Product</Typography>
      <AddProduct/>
    </div>
  );
};

export default AddProductsPage;
