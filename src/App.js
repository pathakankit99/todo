import React, { useEffect, useState } from 'react';
import Todo from './components/Todo'
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
//import logo from './logo.svg';
import './App.css';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]) //react hook state
  const [input, setInput] = useState('')

  useEffect(()=>{
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     setTodos(snapshot.docs.map(doc=>({id: doc.id, timestamp: doc.data().timestamp, todo: doc.data().todo})))
   })
  },[])

  const addTodo = (e) =>{
    e.preventDefault();//prevents refresh of page
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   //setTodos([...todos, input])
   setInput('')
  }

  return (
    <div className="App">
     <h1>Todo App by AK99</h1>
    <form>
     <FormControl>
       <InputLabel>Write a Task</InputLabel>
       <Input 
       type="text"
       value={input}
       onChange={(e)=>setInput(e.target.value)} />
     </FormControl>
     <Button disabled={!input} color='primary' variant="contained" type='submit' onClick={addTodo}>Add Todo</Button>
    </form>
    <ul>
    {todos.map(todo => (
      <Todo todo={todo}/>
    ))}
    </ul>    
    </div>
  );
}

export default App;
