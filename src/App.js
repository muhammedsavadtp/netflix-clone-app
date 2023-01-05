import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import PageRouter from "./Components/Router/PageRouter";
import './App.css'

function App() {
  return (
    <Router>
      <PageRouter />
    </Router>
  );
}

export default App;
