import React from 'react';
import logo from './logo.svg';
import '../css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Singin from './Singin';
import Singup from './Singup';
import Footer from './Footer';
import Home from './Home';

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Route path='/' component={Nav} />
        <Route path='/' exact component={Home} />
        <Route path='/singin' component={Singin} />
        <Route path='/singup' component={Singup} />
      </BrowserRouter>
      <Footer></Footer>


    </>
  );
}

export default App;
