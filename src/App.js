import React from 'react';
import Header from './Component/Template/Header';

import Footer from './Component/Template/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <>
   <Header/>
      <Outlet/>
    <Footer/>
   </>
  );
}

export default App;
