import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Components/Router/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
