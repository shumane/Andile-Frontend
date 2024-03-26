import axios from 'axios';

const baseURL = 'http://localhost:5000'; 

export const addCustomer = async (customerData: any) => {
  const response = await axios.post(`${baseURL}/customers`, customerData);
  return response.data;
};

export const deleteCustomer = async (customerId: string) => {
  const response = await axios.delete(`${baseURL}/customers/${customerId}`);
  return response.data;
};

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

export const updateOrder = async (orderId: string, orderData: any) => {
  const response = await axios.put(`${baseURL}/orders/${orderId}`, orderData);
  return response.data;
};

export const addProduct = async (productData: any) => {
  const response = await axios.post(`${baseURL}/products`, productData);
  return response.data;
};

export const getProducts = async () => {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
};

export const removeProducts = async (productIds: string[]) => {
  const response = await axios.post(`${baseURL}/products/remove-products`, productIds);
  return response.data;
};

export const getProductsByIds = async (ids: string[]) => {
  const response = await axios.post(`${baseURL}/products/products`, ids);
  return response.data;
};

export const getProductById = async (productId: string) => {
  const response = await axios.get(`${baseURL}/products/${productId}`);
  return response.data;
};

export const updateProduct = async (productId: string, productData: any) => {
  const response = await axios.put(`${baseURL}/products/${productId}`, productData);
  return response.data;
};
