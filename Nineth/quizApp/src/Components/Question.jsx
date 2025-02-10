import React from 'react';
import Options from './Options';

function Question({ question, index, answer, dispatch }) {
  return (
    <div>
      <h1>{question.question}</h1>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
