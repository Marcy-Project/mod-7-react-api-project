import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import SavedPokemonPage from "./pages/SavedPokemonPage";

const App = () => {
  return (
    <div className='App'>
      <NavBar>
        <li><Link to="/">Find a Pokemon</Link></li>
        <li><Link to="/saved">Saved Pokemon</Link></li>
      </NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        <Route path="/saved" element={<SavedPokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
