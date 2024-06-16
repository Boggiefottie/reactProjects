import { useState,useEffect } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {
       setTodos((prev)=> [{id :Date.now(), ...todo},...prev])
    }
    const updateTodo = (id,todo) => {
      setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo  : prevTodo)))// preveTodo.id is hr todo array ki id while === id is for updatedTodo , prevTodo is individual todo
    } // agr id mil gyi to todo daldo nhi to prevTodo (purana hai usko rehne do as it is) 
    // prev is previous array ki state 
    // prev array mil gya usme map lga diya usme hr ek element(prevTodo) mai jao or uska id find kro phir kya prevTodo ki id kya match krti hai const updatedTodo = (id,todo) => {
    // wale id se ya nhi
    const deleteTodo = (id) => {
      setTodos((prev)=> prev.filter((todo) => todo.id !== id)) //todo is variable's name it can be anything like horse , elephany any name
      // filter hr ek value k pass jaega usko todo bol , to saari values aane do bs ek wo n aane do ki wo hai id  
    }
    const toggleComplete = (id) => {
      setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed}  : prevTodo)))
      // toggleCompleted means wheather todo is completed or not
      //by this prev.map((prevTodo)=>(prevTodo.id === id we have matched prevTodo id with id agr nhi mili to prevTodo rehne do or agr mil gyi tb
      // or id mil gyi tb baaki saari values ko as it is rkho bss ek value change krdo
      // ...prevTodo se saari values aagyi means (plzz look down)
      // todos: [
    //Properties
  //   {
  //     id: 1,
  //     todo: "Todo Mssg",
  //     completed: false,
  //   },
  // ],
  // isme se bss completed ko change krna hai by overriding
    }
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
