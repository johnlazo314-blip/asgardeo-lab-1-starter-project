import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider 
      clientId='YPzMBSpLWZL9yTFZxYbkBLK8xgIa'
      baseUrl='https://api.asgardeo.io/t/jlazo'>
    <App />
    </AsgardeoProvider>
  </StrictMode>,
)
