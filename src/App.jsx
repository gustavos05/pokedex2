import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokemonDetail from "./Pages/PokemonDetail";
function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Aquello que queremos en TODAS las vistas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:name" element={<PokemonDetail/>} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
