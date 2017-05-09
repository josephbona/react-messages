import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Messages from './components/messages';
const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Go to <Link to="/messages">/messages</Link></p>
  </div>
)

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Home}/>
      <Route path="/messages" component={Messages}/>
    </div>
  </Router>
)

export default App;
