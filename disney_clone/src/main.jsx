import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=' w-full h-full bg-slate-900'>
      <Header />
      <App />
    </div>
  </React.StrictMode>
);
