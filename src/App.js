import React from 'react'
import Style from 'styled-components';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home'>

    </div>
  );
}

function About() {
  return (<div id='about'>About page.</div>);
}

function Projects() {
  return (<div id='projects'>Projects page.</div>);
}

function Contact() {
  return (<div id='contact'>Contacts page.</div>);
}

function App() {
  return (
    <Router>
      <div>
        <nav id='navbar'>
          <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Projects'>Projects</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ol>
        </nav>
        
        <Switch>
          <Route path='/' exact component={Home}>
            <Home/>
          </Route>
          <Route path='/About' exact component={About}>
            <About/>
          </Route>
          <Route path='/Projects' exact component={Projects}>
            <Projects/>
          </Route>
          <Route path='/Contact' exact component={Contact}>
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
