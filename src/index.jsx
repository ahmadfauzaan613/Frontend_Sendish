import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css' // atau 'antd/dist/antd.css' untuk Ant Design versi 4.x
import './index.css' // File CSS Tailwind Anda
import App from './App'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
)
