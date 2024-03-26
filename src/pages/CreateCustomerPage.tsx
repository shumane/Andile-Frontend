import React from 'react';
import { Typography } from '@mui/material';
import AddCustomer from '../components/AddCustomer';

const CreateCustomerPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Create Customer Page</Typography>
      <AddCustomer/>
    </div>
  );
};

export default CreateCustomerPage;
