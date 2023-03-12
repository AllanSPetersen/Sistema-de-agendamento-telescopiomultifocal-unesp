import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pesquisador from "./Pages/CadPesq.js";
import Reagente from "./Pages/CadRea"
import Tecnico from "./Pages/CadTec"
import Equipamento from "./Pages/CadEquip.js";
import Experimento from "./Pages/CadExp.js";
import Agendamento from "./Pages/CadAgend";
import Relatorio from "./Pages/CadRelatorio";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Relatorio />}/>
        <Route path="/Pesquisador" element={<Pesquisador />}/>
        <Route path="/Reagente" element={<Reagente />}/>
        <Route path="/Tecnico" element={<Tecnico />}/>
        <Route path="/Equipamento" element={<Equipamento />}/>
        <Route path="/Experimento" element={<Experimento />}/>
        <Route path="/Agendamento" element={<Agendamento />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);