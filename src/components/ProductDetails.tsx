import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../services/api';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>(); 
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      if (id) {
        const data = await getProductById(id);
        setProduct(data);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      if (id) {
        await updateProduct(id, product);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (!id) {
    return <Typography variant="h6">Product ID not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1">Description: {product.description}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleUpdateProduct}>
            Update Product
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
