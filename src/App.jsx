import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./views/Homepage";
import Register from "./views/Register";
import Login from "./views/Login";
import QuizCategory from "./views/QuizCategory";
import AddQuizView from "./views/AddQuizView";
import QuizView from "./views/QuizView";
import PrivateRoute from "./components/ProtectedRoute";
const App = () => {
  return ( 
    <Router>
      <Routes>
        
        <Route path="/" element = { <Home /> } />
        <Route path="/login" element = { <Login /> } />
        <Route path="/signup" element = { <Register /> } />
        <Route path="/categories" 
          element = { <PrivateRoute><QuizCategory /></PrivateRoute> } 
        />
        <Route path="/addquiz" element = { <AddQuizView /> } />
        <Route path="/quiz" 
          element = { <PrivateRoute><QuizView /></PrivateRoute> } />
      </Routes>
    </Router>
   );
}
 
export default App;