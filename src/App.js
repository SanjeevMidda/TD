import { useState } from 'react';
import './App.css';
import './index.css';

function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

let saveToDo = () =>{
  setTodos([...todos, input]);
  setInput("");
}

  return (
    <div className="App">
      <h1>TODO</h1>
      <input type="text" value={input} onChange={e => {setInput(e.target.value)}}/>
      <button onClick={saveToDo}>+</button>
      <hr />
      {todos.map((todo) => {
        return <h2>{todo}</h2>
      })}
    </div>
  );
}

export default App;
