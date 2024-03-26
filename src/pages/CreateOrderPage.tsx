import React from 'react';
import { Typography } from '@mui/material';
import AddOrder from '../components/AddOrder';

const CreateOrderPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Create Order Page</Typography>
      <AddOrder/>
    </div>
  );
};

export default CreateOrderPage;
