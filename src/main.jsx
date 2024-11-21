import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Tictactoc } from './components/Tictactoc.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tictactoc/>

  </StrictMode>,
)
