import React from 'react'; import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';

function App() {
   return (
      <Router>
         <Navbar />
         <div style={{ minHeight: '100vh' }}>
            <Routes>

               <Route path="/" element={<Home />} />

               <Route path="/home" element={<Home />} />

               <Route path="/login" element={<Login />} />

               <Route path="/contato" element={<Contato />} />
            </Routes>
         </div>
         <Footer />
      </Router>);
}
export default App;