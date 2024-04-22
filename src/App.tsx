import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-[80vh]'>
        {/* Conteúdo da página */}
      </div>
      <Footer />
    </>
  );
}

export default App;
