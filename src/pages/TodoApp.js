import React, { useState } from 'react'
import NavBar from '../Component/TodoApp/NavBar'
import CreatNote from '../Component/TodoApp/CreatNote';
import Note from '../Component/TodoApp/Note';

function TodoApp() {
    const [additem, setAdditem] = useState([]);

    const AddCreatNote = (note)=>{
      // alert('I am alert')
      setAdditem((prevalue)=>{
        return [...prevalue,note]
      })
      console.log(note)  
  
    }
  
    const deletenote = (id)=>{
      setAdditem((olddataa)=>
        olddataa.filter((curentdata, indexx)=>{
          return indexx !== id;
        })
      );
    }
  return (
    <>
    <NavBar/>    
     
    <CreatNote protype={AddCreatNote} />
    <div className='main-todo-app-wraper'>
    {
      additem.map((val,index)=>{
        return (<Note
          key={index}
          id={index}
          titles={val.title}
          contents={val.content}
          deltclick={deletenote}
        />)
      })
    }
    </div>
    </>
  )
}

export default TodoApp
