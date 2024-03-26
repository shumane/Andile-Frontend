import React from 'react';
import { Typography } from '@mui/material';
import PastOrders from '../components/PastOrders';

const PastOrdersPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Past Orders</Typography>
      <PastOrders/>
    </div>
  );
};

export default PastOrdersPage;
