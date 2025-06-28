import React,{useReducer,useEffect} from 'react'
import './index.css'
import QUIZ_DATA from './Data/questions'
import Question from './Components/Question'


//We are going to use UseReducer hook right.
//Initial State of the Component 
const InitialState={
  question:[],
  status:'loading',
  index:0,
  answer:null,
  secondRemaing:null
}

const reducer=(state,action)=>{
     switch(action.type){
       case 'dataReceived':
       return{
         ...state,
         question:action.payload,
         status:'ready'
       }
       
     }
} 

function App() {

  const [{question,status,index,answer,secondRemaing}, dispatch] = useReducer(reducer, InitialState)

  useEffect(() => {
    dispatch({type:'dataReceived',payload:QUIZ_DATA.quizQuestions})
  }, [])
  

  return (
    <>
    <h1 className='text-3xl'>Hii, there Today we are going to building an Quiz App.</h1>
      <Question question={question[index]} index={index} answer={answer} dispatch={dispatch}/>
    </>
  )
}

export default App
