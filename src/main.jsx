import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './RouterApp.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
