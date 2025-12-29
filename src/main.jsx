import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './AppRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './app/context/CartContext.jsx'
import { SearchProvider } from './app/context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <CartProvider>
          <AppRoutes/>
        </CartProvider>
      </BrowserRouter>
    </SearchProvider>
  </StrictMode>,
)
