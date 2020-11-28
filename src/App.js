import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">        
        <Navbar />
        <Wrapper>
          
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} /> */}

        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
