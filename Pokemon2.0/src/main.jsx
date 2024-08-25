import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import "./index.css";
import { PokemonProvider } from "./context/PokemonProvider.jsx";

createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PokemonProvider>
);
