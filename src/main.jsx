import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Tictactoc } from './Components/tictactoc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tictactoc/>

  </StrictMode>,
)
