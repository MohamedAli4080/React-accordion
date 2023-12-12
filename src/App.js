
import { useEffect, useState } from 'react';
import './App.css';
import  data from './data'
import { SingleQuestion } from './SingleQuestion';

function App() {
  const [questions,setquestions]=useState(data);

  useEffect(() => {
    console.log(data);
  }, [])
  
  return (
    <main >
      <section className="container">
      <h3>questions and answers about login</h3>
      <div  className='info'>
        {questions.map((question)=>{
         return <SingleQuestion key={question.id} {...question} />
        })} 
        </div>
      </section>
    </main>
  );
}

export default App;
