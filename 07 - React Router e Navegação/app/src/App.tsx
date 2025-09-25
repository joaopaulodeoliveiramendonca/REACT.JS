import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Importando os componentes de página
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/item/1">Item 1</Link> | 
        <Link to="/item/2">Item 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
