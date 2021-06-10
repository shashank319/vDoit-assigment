import React, { useState } from 'react';
import Select from "react-select";

import Start from '../components/Start';
import QuestionHis from '../components/Question';
import End from '../components/End';
import Modal from '../components/Modal';
import quizData from "./data/adultQ.json";
import juniorQData from "./data/juniorQ.json";



let interval;

function Question(onChange) {

    const [state,setState] = useState("");
    const [visible,setvisible]=useState(true);
    const [adultVisibility,setAdultVisibility]=useState(false);
    const [juniorVisibility,setjuniorVisibility]=useState(false);
    const [step, setStep] = useState(2);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);
    
    const prevClickHandler = () => {
        
    }

    const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
    
      const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }

    const optionsSize = [

        {value:'adult' ,label: '🧑‍🤝‍🧑 Adult'},
        {value:'junior', label: '🤼 Junior'},
        
    ];

    const nextClickHandler= () => {
        if(state==="adult") {
            setvisible(false);
            console.log("adult is selected")
            setAdultVisibility(true);
            
        } else if(state==="junior") {
            setvisible(false);
            console.log("junior is selected");
            setjuniorVisibility(true);
        }
        else {
            alert("Please select an option");    
        }
    }

    const setDualVisibility= () => {
      setAdultVisibility(false);
      setjuniorVisibility(false);
      setvisible(true);
    }


    return (
         <div className="selection">
        {visible && <div className="card">
              <header class="card-header">
                <p class="card-header-title" style={{fontSize:"18px",color:"#6e6e6e",fontWeight:"bolder"}}> 
                  1/10
                </p>
                  <span class="icon" style={{color:"#6e6e6e",fontWeight:"bolder",marginTop:"1%",marginRight:"2%"}}>
                  <i class="fa fa-times"></i>
                  </span>
                  </header>
          <div className="card-content">
            <div className="content">
              <h2 className="mb-5 question">{}</h2>
              <div className="selectit">
              <h3 style={{textAlign:"center",fontWeight:"bolder",color:"#504242",fontSize:"25px"}}>
                          what type of age bracket is needed?
                        </h3>
                        <p style={{textAlign:"center",color:"#6e6e6e",fontSize:"20px",fontWeight:"bolder",marginTop:"-1%"}}>
                          make selection based on desired age group</p>
              </div>
              <div className="control" >
                  <div className="selectit">
                    <Select  
                        onChange={onChange= (value) =>{
                              console.log(value);
                              setState(value.value);                          
                              }} 
                                options={optionsSize} 
                                placeholder={<div style={{color:"#6e6e6e",fontSize:"18px",fontWeight:"bolder"}}>
                                  🍰 &nbsp;Age Bracket</div>}
                                /> 
                  </div>          
              </div>  
              <div className="btnss"  style={{marginTop:"10%"}}> 
                            &nbsp;
                          <button onClick={prevClickHandler}  className="btn btn-outline-warning btn-sm">Back</button> 
                            
                          <button  onClick={nextClickHandler} className="btn btn-warning next">Next</button>     
                  </div>
                </div>
              </div>
            </div>}
        <div>
        {adultVisibility && <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <QuestionHis 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        changeVisible={setDualVisibility}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>}
        </div>

        <div>
        {juniorVisibility && <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <QuestionHis 
        data={juniorQData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={juniorQData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        changeVisible={setDualVisibility}
      />}
      {step === 3 && <End 
        results={answers}
        data={juniorQData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={juniorQData.data}
      />}
    </div>}
        </div>
        
        </div>
    )
}


export default Question;
