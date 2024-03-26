import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import BasketPage from './pages/BasketPage';
import CheckoutPage from './pages/CheckoutPage';
import PastOrdersPage from './pages/PastOrdersPage';
import Navigation from './components/Nav';
import AddProductsPage from './pages/AddProductsPage';
import CreateOrderPage from './pages/CreateOrderPage';
import CreateCustomerPage from './pages/CreateCustomerPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/product" element={<AddProductsPage />} />
        <Route path="/order" element={<CreateOrderPage/>}/>
        <Route path="/customer" element={<CreateCustomerPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/past-orders" element={<PastOrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
