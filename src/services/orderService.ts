import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const createOrder = async (orderData: any) => {
  const response = await axios.post(`${baseURL}/orders`, orderData);
  return response.data;
};

export const getOrdersByIds = async (ids: string[], customerId?: string) => {
  const response = await axios.get(`${baseURL}/orders`, { params: { ids, customerId } });
  return response.data;
};

export const getOrderById = async (orderId: string) => {
  const response = await axios.get(`${baseURL}/orders/${orderId}`);
  return response.data;
};

export const getAllOrders = async () => {
    try{
        const response = await axios.get(`${baseURL}/orders/all-orders`);
        return response.data;
    } catch(error){
        console.log(error);
    }
};

export const updateOrder = async (orderId: string, orderData: any) => {
  const response = await axios.put(`${baseURL}/orders/${orderId}`, orderData);
  return response.data;
};
