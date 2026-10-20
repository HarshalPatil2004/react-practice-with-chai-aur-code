import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function AssignmentCounter() {
  
  // const style = {
  //   'width': '80px',
  //   'height': 'auto',
  //   'marginLeft': '20px',
  //   'marginTop': '50px'
  // }


  const [counter, SetCounter] = useState(21)

  const Decrease = () => {
    // SetCounter = counter - 1;  Wrong Syntax to write SetCounter
    if(counter<1){
      return (
        console.log("Value Not  Found")
      )
    }
    else {
          SetCounter(counter - 1);
    }
    
}

  const Increase = () => {
    // SetCounter = counter + 1;  Wrong Syntax to write SetCounter
    if(counter > 29){
      console.log("Value is Too Big")
    }
    else{
          SetCounter(counter + 1);

    }
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
    </>
  )
}

export default AssignmentCounter
