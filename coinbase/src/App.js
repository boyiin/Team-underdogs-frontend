import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route  , Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar  />
      <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
       <Route exact path='/blog' component={Blog} />
       <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
    </Router>   
  );
}

export default App;
