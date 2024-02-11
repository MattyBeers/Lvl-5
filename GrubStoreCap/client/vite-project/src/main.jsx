import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { ContextProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Router>
    <ContextProvider>
                 <App/> 
    </ContextProvider>
       </Router>
  </React.StrictMode>
)
