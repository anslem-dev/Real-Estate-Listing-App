import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { StarRateContextProvider } from './context/StarContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <FilterContextProvider>
      <StarRateContextProvider>
             <AuthProvider>
         <App />
             </AuthProvider>
      </StarRateContextProvider>
    </FilterContextProvider>
    </CartContextProvider>
  </StrictMode>,
)
