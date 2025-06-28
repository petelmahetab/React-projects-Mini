import React from 'react'
import './Options.css';

function Options({question,answer,dispatch}) {
  return (
    <div>
        {question.options.map((opn,id)=>{
            return<button key={id}>{opn}</button>
        })}
    </div>
  )
}

export default Options