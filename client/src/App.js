import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Saved} from "./components/Saved";
// import {Book} from "./components/Book";
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <NavBar/>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        <Route exact path="/search" component={Search}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
