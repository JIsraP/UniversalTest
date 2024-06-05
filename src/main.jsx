import React from 'react'
import ReactDOM from 'react-dom/client'
import { ElUniversal } from './ElUniversal'
import { BrowserRouter } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <ElUniversal />
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>,
)