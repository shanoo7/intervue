import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './components/SignupPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Card />,
      },
      {
        path: '/signup/page',
        element: <SignupPage />,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
