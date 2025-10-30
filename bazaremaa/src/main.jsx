import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
//mport { AuthProvider } from "./contexts/AuthContext"; // <-- aqui
//import { CartProvider } from "./contexts/CartContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
  
  
  </React.StrictMode>
);