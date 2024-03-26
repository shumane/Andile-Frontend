import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { addProduct } from '../services/productService';
import { useHistory } from 'react-router-use-history';

const AddProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await addProduct(productData);
      console.log('Product added successfully!');
      setProductData({
        name: '',
        description: '',
        price: 0,
      });
      // Redirecting to DashboardPage after successful submission
      history.push('/'); 
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom>Add Product</Typography>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={productData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="description"
            label="Description"
            fullWidth
            value={productData.description}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={productData.price}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading || !productData.name || !productData.description || !productData.price}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Add Product'}
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
