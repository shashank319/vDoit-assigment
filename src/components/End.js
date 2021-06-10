import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    // setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <button className="button is-success mr-2" onClick={onAnswersCheck}>Check your Submission</button>
          <button className="button is-info" onClick={onReset}>Submit again</button>
        </div>
      </div>
    </div>
  );
}

export default End;