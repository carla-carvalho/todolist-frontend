import './App.css';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </div>
  );
}

export default App;
