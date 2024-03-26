import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { addCustomer } from '../services/api';

const AddCustomer: React.FC = () => {
  const [customerData, setCustomerData] = useState({
    id: '',
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleAddCustomer = async () => {
    try {
      await addCustomer(customerData); 
      console.log('Customer added successfully!');
      setCustomerData({ id: '', name: '', email: '' }); 
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <TextField
            name="id"
            label="ID"
            fullWidth
            value={customerData.id}
            onChange={handleChange}
          />
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={customerData.name}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={customerData.email}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCustomer}
            fullWidth
            sx={{ mt: 3 }}
          >
            Add Customer
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddCustomer;
