import './App.css';
import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Detail from './pages/detail/Detail';
import About from './pages/About/About';

import axios from "axios"
axios.defaults.baseURL = "https://proyecto-pokemon-api.vercel.app/"


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path={"/"} component={LandingPage}></Route>
          <Route exact path={"/home"} component={Home}></Route>
          <Route path={"/create"} component={Create}></Route>
          <Route path={"/pokemon/:id"} component={Detail}></Route>
          <Route path={"/about"} component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
