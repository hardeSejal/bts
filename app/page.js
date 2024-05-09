"use client"
import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const handleTitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setdesc(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && desc.trim() !== '') { // Check if title and desc are not empty
      setmainTask([...mainTask, { title, desc }]);
      setdesc("");
      settitle("");
    } else {
      // Optionally, you can provide feedback to the user that both fields are required
      alert('Please fill in both the title and description fields.');
    }
  };
  const deleteHandler=(i)=>{
let copyTask=[...mainTask]
copyTask.splice(i,1)
setmainTask(copyTask)
  }

  let renderTask=<h2>no task available</h2>
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div   className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-semibold'>{t.desc}</h6>

      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 text-white rounded font-bold px-4 py-2 mb-5'><MdDelete /></button>
        </li>
      )
    })
  }
  return (
    <>
       <h1 className='bg-purple-300 text-white p-5 text-5xl font-bold flex items-center font-style: italic'><LuListTodo className="mr-4" />todo list</h1>
      <form onSubmit={submitHandler}>
         <input type='text' className='text-2xl border-blue-300 border-2 m-5 px-4 py-2' placeholder='Enter task here' value={title} onChange={handleTitleChange}/>
         <input type='text' className='text-2xl border-blue-300 border-2 m-5 px-4 py-2' placeholder='Enter description here'  value={desc} onChange={handleDescChange}/>
        <button className='bg-pink-400 text-white px-4 py-3  mt-rounded text-2xl font-bold' ><IoIosAddCircle /></button>
         
      </form>
      <hr></hr>
    <div className='p-8 bg-green-200'>
<ul>
  {renderTask}
</ul>

    </div>

    </>
  )
}

export default page