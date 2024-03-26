import React, { useState, useEffect } from 'react';
import { Typography, Checkbox, Button, Pagination, Card, CardContent, CardActions, Box, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { getAllProducts, removeProducts } from '../services/productService';
import { CircularProgress } from '@mui/material';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const PAGE_SIZE = 4; 

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    try {
      setLoading(true); 
      const data = await getAllProducts(page, PAGE_SIZE); 
      setProducts(data);
      setTotalPages(Math.ceil(data.totalCount / PAGE_SIZE)); 
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.error('Error fetching products:', error);
      setTimeout(() => setLoading(false), 1000); 
    }
  };

  const handleDeleteProducts = async () => {
    try {
      setLoading(true); 
      await removeProducts(selectedProducts);
      fetchProducts(); 
      setSelectedProducts([]); 
      setTimeout(() => setLoading(false), 1000); 
    } catch (error) {
      console.error('Error deleting products:', error);
      setTimeout(() => setLoading(false), 1000); 
    }
  };

  const handleToggleProduct = (productId: string) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value); 
  };

  return (
    <Box maxWidth="800px" mx="auto"> 
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">Product List</Typography>
        <Button 
          variant="contained"
          startIcon={<Delete />}
          onClick={handleDeleteProducts} 
          disabled={selectedProducts.length === 0}
        >
          Delete
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {products.map((product) => (
        <Card key={product.id} sx={{ minWidth: 275, marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6" component="div">{product.name}</Typography>
            <Typography variant="body1" color="text.secondary" component="p">{product.description}</Typography>
            <Typography variant="body1" component="p">Price: R{product.price}</Typography>
          </CardContent>
          <CardActions>
            <Checkbox
              edge="start"
              checked={selectedProducts.includes(product.id)}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggleProduct(product.id)}
            />
          </CardActions>
        </Card>
      ))}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default ProductList;
