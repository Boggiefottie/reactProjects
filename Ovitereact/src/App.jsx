
import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  let myobj = {
    name : "Bhavya",
    class: "BE"
  }
  let newArr = [1,2,3]
  

  return (
    <>

    <h1 className="bg-violet-400 text-green-400 rounded-xl mb-4">chai aur react</h1>
    <Card channel="chaiourcode" someobj={myobj} someArr={newArr} btnText="click me!"/>
    <Card channel="BhavyaTUT" />
    
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Subtract Value</button>
   

    
    </>
  )
}

export default App
