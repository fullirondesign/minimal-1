import React, { Component } from "react"
import css from "./css/index.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import indexPage from "./pages/indexPage"
import servicesPage from "./pages/servicesPage"
import contactsPage from "./pages/contactsPage"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        

        {/* Router is a "higher order" component, that is looking for URL entered,
         checks with option given and renders needed component for us */}
        <Router>
        <Header /> 
          <Route path="/products" exact component={indexPage} />{" "}
          <Route path="/services" exact component={servicesPage} />{" "}
          <Route path="/contacts" exact component={contactsPage} />{" "}
          <Route path="/" exact component={indexPage} />
        </Router>
      </div>
    );
  }
}

export default App;
