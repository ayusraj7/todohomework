import react, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import toast from 'react-hot-toast'

import { MdDelete } from "react-icons/md";
function App() {
  const [todos,setTodos]=useState([]);
  const[todo,setTodo]=useState('');
  const[update,setUpdate]=useState(false);
 
  const addTodo=()=>{
    if(todo.length===0)
     {
       toast.error('Please Add Todo');
       return;
     }
   

     
     let i=Math.floor((Math.random()*100));
 
     todos.push({i,todo})
  
     setTodo('');
     toast.success('Todo Successfully Added')
   
     if(update)
     {
      const newTodo=todos.filter((value)=>{
        return value.i !== update;
      })
     
      setTodos(newTodo);
     }
     setUpdate(null);
     


   
     
  }

  const cancelTodo=(element)=>{
  
    setTodos(

      todos.filter((value)=>{
      return value.todo!==element})
      )

      toast.success('Todo removed Successfully');
  }

  const updateTodo=(i,element)=>{
    console.log('i',i);
    setTodo(element);
    setUpdate(i); 
  }

  

  return (
    <div className=" relative bg-slate-200 h-screen flex flex-col py-[40px] items-center">
      <h1 className="text-5xl text-orange-600 ">Todo App</h1>
      <p className='text-blue-600 text-sm mt-6'>Add,Remove and Update your Task.</p>
      {/* Search Container */}
      <div className='flex items-center  mt-[80px] gap-2' >
        <input type="search" name="todo" id="todo" required className=' border border-orange-600 px-2 py-1 rounded-sm focus:outline-none' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button size={30} className='border  rounded-sm py-1 px-1 border-orange-600 hover:bg-orange-600 hover:text-white ' onClick={()=>addTodo()}>Add Task</button>
      </div>
      <div className='border mt-[50px] border-blue-900 flex flex-col gap-2  px-3 py-5 rounded-sm h-[500px] w-[500px]'>
        {
          todos.map((element,index)=>(
            <div key={index}  className='border flex bg-orange-600 text-white  items-center justify-between pr-2 border-orange-600 rounded-sm'>
              <h1 className='px-3 py-1 rounded-sm  '>{element.todo}</h1>
              <div className='flex gap-2 '>
                <MdDelete onClick={()=>cancelTodo(element.todo)}/>
                <IoMdAdd onClick={()=>updateTodo(element.i,element.todo)  }/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
