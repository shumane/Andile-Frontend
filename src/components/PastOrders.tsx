import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Table, TableHead, TableBody, TableRow, TableContainer, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { getAllOrders } from '../services/orderService'; 

interface Order {
  id: string;
  hasPaid: boolean;
  customerId: string;
  products: string[];
  total: number;
}

// Styled components for custom TableCell and TableRow
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: '20px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: '20px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  height: '80px',
}));

const PastOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPastOrders();
  }, []);

  const fetchPastOrders = async () => {
    try {
      // Fetch all past orders from backend
      const ordersData = await getAllOrders();
      setOrders(ordersData);
      console.log("orders", ordersData);
    } catch (error) {
      console.error('Error fetching past orders:', error);
    }
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <TableContainer component={Paper} style={{ maxWidth: 1500,margin: 'auto' }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell align="right">Paid</StyledTableCell>
            <StyledTableCell align="right">Products</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order.id}>
              <StyledTableCell component="th" scope="row">
                {order.customerId}
              </StyledTableCell>
              <StyledTableCell align="right">{order.hasPaid ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell align="right">{order.products ? order.products.join(', ') : 'No products'}</StyledTableCell>
              <StyledTableCell align="right">R{order.total.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PastOrders;
