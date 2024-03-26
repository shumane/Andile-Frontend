import axios from 'axios';

const baseURL = 'http://localhost:5000'; 

export const addProduct = async (productData: any) => {
  const response = await axios.post(`${baseURL}/products`, productData);
  return response.data;
};

export const getAllProducts = async (page = 1, pageSize = 4) => {
  try {
    const response = await axios.get(`${baseURL}/products/all?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async (page: number) => {
  const response = await axios.get(`${baseURL}/products`);
  return response.data;
};

export const removeProducts = async (productIds: string[]) => {
  const response = await axios.post(`${baseURL}/products/remove-products`, productIds);
  return response.data;
};

export const updateProduct = async (productId: string, productData: any) => {
  const response = await axios.put(`${baseURL}/${productId}`, productData);
  return response.data;
};
