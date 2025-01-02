import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hook2 from './Hook2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hook2 />
  </StrictMode>,
)
