import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppRoutes } from './AppRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './app/context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AppRoutes/>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
