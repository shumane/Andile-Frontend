import axios from 'axios';

const baseURL = 'http://localhost:5000/customers';

export const addCustomer = async (customerData: any) => {
    const response = await axios.post(`${baseURL}/customers`, customerData);
    return response.data;
  };
  
  export const deleteCustomer = async (customerId: string) => {
    const response = await axios.delete(`${baseURL}/${customerId}`);
    return response.data;
  };

  export const getCustomers = async () => {
    const response = await axios.get(`${baseURL}/all-customers`);
    return response.data;
  };
