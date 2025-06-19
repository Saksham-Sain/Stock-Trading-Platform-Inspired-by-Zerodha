import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './landingPage/home/Homepage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div>
    <Homepage></Homepage>
   </div>
  </StrictMode>,
)
