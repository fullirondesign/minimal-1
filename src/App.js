import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import indexPage from "./indexPage";
import servicesPage from "./servicesPage";
import contactsPage from "./contactsPage";



class App extends Component {
  

  render() {
    
    return (
      <Router>
        {/* header */}
        <div className="App">

          <div className="section header">
            <div className="container logo">
              <img src="..\icons\logo.png" alt="" />
            </div>
            <div className="container nav">
              <Link to="/products" className="nav-link">
                products
              </Link>
              <Link to="/services" className="nav-link">
                services
              </Link>
              <Link to="/contacts" className="nav-link">
                contacts
              </Link>
            </div>
          </div>


          <Route path="/products" exact component={indexPage} />
          <Route path="/services" exact component={servicesPage} />
          <Route path="/contacts" exact component={contactsPage} />
          <Route path="/" exact component={indexPage} />
        </div>
        
        
      </Router>
    );
  }
}

export default App;
