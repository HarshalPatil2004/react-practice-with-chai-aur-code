import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}


// const ReactElement = {
//     type: "a",
//     props: {
//         href: 'https://google.com',
//         target: "_blank"
//     },
//     children: 'Click me to visit Google'
// }

const anotherUser = 'Chai Aur React With Harshal';


const reactElement = React.createElement(
  'a',
  {
    href: 'https://youtube.com',
    target : "_blank"
  },
  'click me to visit YT',
    anotherUser

)

const AnotherElement = (
  <a href='https://google.com' target='_blank'>vist google</a>
)




createRoot(document.getElementById('root')).render(
reactElement
)


// createRoot(document.getElementById('root')).render(
//     ReactElement()

// )
