/* al hacer pull durante el proceso del proyecto se cambiaba la mayuscula del llamado del archivo "Card" a "card" lo que daba error, por si acaso */

import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    
  </React.StrictMode>,
)
