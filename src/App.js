
"use client"
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Task, setTask] = useState("")
  const [Desc, setDesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { Task, Desc }])
    setDesc("")
    setTask('')
    console.log(MainTask) //for cheaking pupose//

  }

  const deleteHandler = (i) => {
    let copytask = [...MainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>no Task Available</h2>

  if (MainTask.length > 0) {
    renderTask = MainTask.map((i, e) => {
      return (
        <li className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between mb-5  w-2/3'>

            <h5 className='font-semibold text-2xl'>{i.Task}</h5>
            <h3 className='font-medium text-lg'>{i.Desc}</h3>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }} className='bg-red-800 rounded-md px-3 py-2 border-2 text-white text-bold'>delete</button>
        </li>

      )

    })
  }

  return (
    <>
      <div className='bg-zinc-600 w-full h-screen'>
        <h1 className='text-3xl text-white font-bold text-center bg-black p-4'>Todo-Chart-List</h1>

        <form onSubmit={submitHandler} className='mt-4 mb-20 justify-center items-center flex'>
          <div>
            <input type='text' className='outline-none font-light text-xl border-4 border-black rounded-md px-4 py-2 ml-20' placeholder='enter your Task here' value={Task} onChange={(e) => {
              setTask(e.target.value)
            }} ></input>
            <input type='text' className='outline-none font-light text-xl border-4 border-black rounded-md px-4 py-2 ml-6' placeholder='enter your Desription here' value={Desc} onChange={(e) => {
              setDesc(e.target.value)
            }} ></input>
          </div>

          <button type='submit' className='rounded-md bg-black text-white p-3 m-5' >Add Task</button>
        </form>
        <hr />
        <div className='bg-gray-200 p-8 mt-8'>
          <ul>{renderTask}</ul>
        </div>
      </div>
      <div className='w-full relative top-3/4 bg-zinc-600 p-3 mb-10 text-white text-center text-lg'>
        Made with ❤️ by Sam
      </div>

    </>


  )
}

export default App