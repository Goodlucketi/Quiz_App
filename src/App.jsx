import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./views/Homepage";
import Register from "./views/Register";
import Login from "./views/Login";
const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="/login" element = { <Login /> } />
        <Route path="/signup" element = { <Register /> } />
        {/* <Route path="/categories" element = { <Categories /> } /> */}
      </Routes>
    </Router>
   );
}
 
export default App;