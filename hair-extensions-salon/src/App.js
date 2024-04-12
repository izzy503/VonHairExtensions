import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Gallery from './Gallery';
import ContactForm from './ContactForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
