import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import AssignmentCounter from './assignmentCounter'




// In Reactjs , if we write this using useState set parameter like =>     SetCounter(counter - 1);
//                                                                        SetCounter(counter - 1);
//                                                                        SetCounter(counter - 1);
//                                                                        SetCounter(counter - 1);

// then useState checks the changes and it found the similar work iterated repeatedly, so it takes it as a single work and update the value at  once  even if we wrote it multiple times.

// to avoid this problem of useState , Reactjs launches a method called prevState/prevCount which  holds its previous value on each iteration and uses IIFE function to iterate. its written as follows:-
//                                                                        SetCounter(() => {prevCount = prevCount - 1});
//                                                                        SetCounter(() => {prevCount = prevCount - 1});
//                                                                        SetCounter(() => {prevCount = prevCount - 1});
//                                                                        SetCounter(() => {prevCount = prevCount - 1});

// here on each iteration it holds a new updated value..












function App() {
  
  // const style = {
  //   'width': '80px',
  //   'height': 'auto',
  //   'marginLeft': '20px',
  //   'marginTop': '50px'
  // }


  const [counter, SetCounter] = useState(21)

  const Decrease = () => {
    // SetCounter = counter - 1;  Wrong Syntax to write SetCounter
    SetCounter(counter - 1);
    console.log('value added', counter);
    
  }

  const Increase = () => {
    // SetCounter = counter + 1;  Wrong Syntax to write SetCounter
    SetCounter(counter + 1);

  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

<div>
  
      <button 
      onClick={Decrease}
  >Decrease</button>
      <button 
      onClick={Increase}
     >Increase</button>
</div>
<AssignmentCounter />
</>
  )
}

export default App
