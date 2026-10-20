import Card from "../components/card"


function App() {

  const info = {
    name: 'Harshal',
    age: '22',
    gender: 'male'
  }

  return (
 <>
  <Card channel="chaiaurcode"  info = {info}/>
 </>
  )
}

export default App
