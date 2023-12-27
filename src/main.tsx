import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import { conf } from './conf.ts'
// console.log(conf.clerkPublishableKey)

if (!conf.clerkPublishableKey) throw new Error('Missing Clerk Publishable Key')

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Home</div>
      },
      {
        path: '/login',
        element: <div>Login</div>
      },
      {
        path: '/register',
        element: <div>Register</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={conf.clerkPublishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
