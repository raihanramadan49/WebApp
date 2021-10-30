import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
