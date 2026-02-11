import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import { CompareProvider } from './context/CompareContext';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CompareProvider>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </CompareProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
