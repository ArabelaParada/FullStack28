import React from 'react';
import ReactDOM from 'react-dom/client'; // En React 18
import App from './App';  // Importamos el componente App

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);