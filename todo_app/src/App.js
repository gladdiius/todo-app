import {useState} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['what is c?','learnig react']);
  const [input, setInput] = useState('');
  const addTodo = (event) =>{
    event.preventDefault();
    console.log('elias');
    setTodos([...todos, input]);
  }
  return (
    <div className="App">
     <h1>hello world 🌍 !</h1>
     <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type='submit' onClick={addTodo}>Add todo</button>
     </form>
     
     <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
      
     </ul>
    </div>
  );
}

export default App;
