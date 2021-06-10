import React, { useState, useEffect, useRef } from 'react';


import { Route,Switch} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { Link } from 'react-router-dom';


const QuestionHis = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep,changeVisible }) => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  const [backButtonVisible, setbackButtonVisible]=useState(false);

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelectorAll('input:checked').forEach( el => el.checked = false );
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    
    setSelected(prevState =>[...prevState, e.target.value]);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    const seleLength = radiosWrapper.current.querySelectorAll('input:checked');
    if(seleLength.length==0) {
      alert("Please select atleast one option");
      return;
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    console.log(selected);
    setSelected([]);
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }

    if(activeQuestion+1>0) {
      setbackButtonVisible(true);
    } else {
      setbackButtonVisible(false);
    }
  }

  const prevHandler = () => {
    
    if(activeQuestion-1>0) {
      setbackButtonVisible(true);
    } else {
      setbackButtonVisible(false);
    }
    onSetActiveQuestion(activeQuestion - 1);
  }

  return(
    <div className="card">
      <Router>
         <div class="card-header" >
                <p class="card-header-title" style={{color:"#6e6e6e",fontWeight:"bolder",marginBottom:"3%"}}> 
                  2/10
                </p>
                  <span class="icon" style={{color:"#6e6e6e",fontWeight:"bolder",marginTop:"1%",marginRight:"2%"}} onClick={changeVisible}>
                  <Link to={"/questionOne"}><i class="fa fa-times"></i></Link>
                  </span>
           </div>
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5" style={{textAlign:"center",fontWeight:"bolder",color:"#6e6e6e",marginTop:"5%"}}>{data.question}</h2>
          <p style={{textAlign:"center",color:"#ccbebe",fontSize:"18px",marginTop:"-1%",fontWeight:"bolder"}}>
                          make selection based on options below</p>
        <div className="checkit" style={{marginLeft:"10%",textAlign:"center",color:"#6e6e6e",fontSize:"15px",fontWeight:"bolder"}}>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio" key={i}>
                <input type="checkbox" className="custombox" name="answer" value={choice} onChange={changeHandler} />
                <span>  {choice} </span>
              </label>
            ))}
          </div>
          </div>
          <div className="butttons" style={{marginLeft:"45%",marginTop:"7%"}}>
          {error && <div className="has-text-danger">{error}</div>}
          {backButtonVisible&&<button className="btn btn-outline-warning btn-sm" onClick={prevHandler}>Back</button>}
          <button className="btn btn-warning next" onClick={nextClickHandler}>Next</button>
          </div>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default QuestionHis;