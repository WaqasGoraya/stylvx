import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
