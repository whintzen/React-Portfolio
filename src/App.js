import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
// import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <div className="App">        
        <Wrapper>
          
            <Route exact path="/React-Portfolio" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />

        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
