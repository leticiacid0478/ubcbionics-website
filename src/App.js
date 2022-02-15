// import logo from './logo.svg';
import React, { Component } from 'react';
// import Navbar from "./components/Navbar/Navbar";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Grasp } from './Grasp';
import { Navbar } from './components/Navbar'
import { Joinus } from './Joinus';
import { Teams } from './Teams';
import { Sponsor } from './Sponsor';
import { Admin } from './subTeams/Admin'
import { Footer } from './components/Footer'
import { ContactForm } from './ContactForm'



class App extends Component {
  render() {
      return(
        <>
          <Router>
            <Navbar />
            <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/grasp" component={Grasp} />
              <Route exact path="/teams" component={Teams} />
              <Route path="/join" component={Joinus} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/teams/admin" component={Admin} />
              <Route path='/contactform' component={ContactForm} />
            </Switch>
            </div>
            <Footer />
          </Router>
        </>
    );
  }
}

export default App;