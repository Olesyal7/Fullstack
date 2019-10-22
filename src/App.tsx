import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import FirstPage from './components/FirstPage'
import Tape from "./components/Tape";
import Place from "./components/Place";
import AddPlace from "./components/AddPlace";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={FirstPage} />
      <Route path="/Tape/" component={Tape} />
      <Route path="/Place/" component={Place} />
      <Route path="/AddPlace/" component={AddPlace} />
      <Route path="/Login/" component={Login} />
    </Router>
  );
}

export default App;
