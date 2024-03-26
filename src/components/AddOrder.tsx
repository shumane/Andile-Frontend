import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Grid, Typography, Paper, CircularProgress, MenuItem, Select, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { createOrder } from '../services/orderService'; 
import { getAllProducts } from '../services/productService';

const AddOrder: React.FC = () => {
  const [orderData, setOrderData] = useState({
    id: '',
    hasPaid: false,
    customerId: '',
    products: [] as string[], 
    total: 0,
  });

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
       // Fetching all products with a large page size to ensure all product IDs are retrieved
      const data = await getAllProducts(1, 100);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOrderData({ ...orderData, [name]: checked });
  };

  const handleProductChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setOrderData({ ...orderData, products: value as string[] });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createOrder(orderData);
      console.log('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom>Order Details</Typography>
          <TextField
            name="id"
            label="Order ID"
            fullWidth
            value={orderData.id}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            variant="outlined"
          />
          <TextField
            name="customerId"
            label="Customer ID"
            fullWidth
            value={orderData.customerId}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            variant="outlined"
          />
          <TextField
            name="total"
            label="Total"
            type="number"
            fullWidth
            value={orderData.total}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            variant="outlined"
          />
          <Typography variant="h5" gutterBottom>Products</Typography>
          <InputLabel id="products-label">Select Products</InputLabel>
          <Select
            labelId="products-label"
            id="products"
            name="products"
            multiple
            fullWidth
            value={orderData.products}
            onChange={handleProductChange}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="h5" gutterBottom>Payment Status</Typography>
          <FormControlLabel
            control={<Checkbox checked={orderData.hasPaid} onChange={handleCheckboxChange} name="hasPaid" />}
            label="Has Paid"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Create Order'}
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddOrder;