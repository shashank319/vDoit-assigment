import React, { useState } from 'react';
import './App.css';

import { Route,Switch} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import  Question  from "./myComponents/question";
import { Link } from 'react-router-dom';


const App = () => {
  const [visibility, setVisibility] = useState(true);
  const quizStartHandler = () => {
    setVisibility(false);
  }


  return (
    <div>
    <Router>
          <Switch>
            <Route exact path="/questionOne" component={Question} />  
          </Switch>
         
    {visibility && <div className="App">
      <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start Choosing</h1>
          <p>Hope You Like it vDoit 😊</p>
          <p>Thank you for the opportunity ✔️</p>
          <button className="button is-info is-medium" onClick={quizStartHandler}><Link to={"/questionOne"}>Start</Link></button>
        </div>
      </div>
    </div>
    </div>}
    </Router>
    </div>
  );
}

export default App;
