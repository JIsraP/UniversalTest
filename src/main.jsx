import React from 'react'
import ReactDOM from 'react-dom/client'
import { ElUniversal } from './ElUniversal'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ElUniversal />
    </BrowserRouter>
  </React.StrictMode>,
)