import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto p-0 '>
    <RouterProvider router={router}/>
    </div>
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
