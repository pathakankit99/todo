import { Button, List, ListItem, ListItemText, Modal, Input } from '@material-ui/core';
import React, {useState} from 'react'
import db from '../firebase'
import '../styles/Todo.css'
import firebase from 'firebase'

function Todo(props) {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const updateTodo = () =>{
        db.collection('todos').doc(props.todo.id).set({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },{merge:true})
        setOpen(false)
    }
    return (
        <duv>
            <Modal 
            className="modal"
            open={open} 
            onClose={e=>setOpen(false)}>
                <div className="modalContainer">
                <div>
                <Button variant="outlined" color="secondary" onClick={e=>setOpen(false)}>Close Me</Button>
                <hr />
                <form>
                    <Input placeholder={props.todo.todo} value={input} onChange={e=>setInput(e.target.value)}/>
                    <Button variant="contained" color="primary" onClick={updateTodo}>Update</Button>
                </form>
                
                </div>
                </div>
            </Modal>
            <List>
            <ListItem>
                <ListItemText secondary='Task' primary={props.todo.todo}/>
            </ListItem>
            <Button onClick={(e)=>setOpen(true)} variant="contained" color="primary">Edit Me</Button>            
            <Button onClick={(e)=>db.collection('todos').doc(props.todo.id).delete()} variant="contained" color="secondary">Delete Me</Button>
            </List>
        </duv>
    );
}

export default Todo
