// components/Checkout.tsx
import React from 'react';
import { Typography } from '@mui/material';

const Checkout: React.FC = () => {
  const handleOrderConfirmation = () => {
    console.log('Order confirmed');
  };

  return (
    <div>
      <Typography variant="h4">Checkout Page</Typography>
      <button onClick={handleOrderConfirmation}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
