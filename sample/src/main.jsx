import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Slambook from './slam.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Slambook/>
  </StrictMode>,
)
