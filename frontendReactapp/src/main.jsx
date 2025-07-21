//Importa el componente BrowserRouter desde la biblioteca react-router-dom.
//BrowserRouter se encarfa de manejar el enrutamiento del lado del cliente (navegación entre páginas sin recargar)
import React from 'react';
import { BrowserRouter } from "react-router-dom";

//Importa el objeto ReactDOM desde la biblioteca ´react-dom/client´, necesario para renderizar la aplicación React en el DOM.
import ReactDOM from "react-dom/client";

//Importa el componente principal de tu aplicación, que está definido en el archivo App.jsx.
import App from "./App.jsx";
import './index.css' //

//Crea un punto de entrada para la aplicación React.
//Busca un elemento HTML con el id 'root' (normalmente en el index.html) y lo usa como raiz del renderizado.
//Luego, renderiza el componente <APP />, pero lo envuelve en <BrowserRouter> para que toda la aplicación pueda usar rutas.
ReactDOM.createRoot(document.getElementById("root")).render(
//<BrowserRouter> permite que dentro de <App /> se puedan definir rutas usando <Route>, <link>,  <Navigate>, etc.
  //  <BrowserRouter>
   // <App />
    //</BrowserRouter>
     <React.StrictMode>
    <App />
  </React.StrictMode>
);