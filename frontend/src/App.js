import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Portada from './componentes/Portada';
import CreateUser from './componentes/CreateUser';
import Footer from './componentes/Footer';
import Login from './componentes/Login.js';
import Header from './componentes/Header'
import Content from './componentes/Content'
import Aside from './componentes/Aside'

import 'bootstrap/dist/css/adminlte.min.css'
import 'bootstrap/plugins/fontawesome-free/css/all.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'  element={<Portada/>}  />
        <Route path='/crear' element={<CreateUser/> } />
        <Route path='/dashboard' element={<>
                                  <Header />
                                  <Content />
                                  <Aside />
                                  <Footer />
        </>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;
