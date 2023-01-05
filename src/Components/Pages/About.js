import React, { useState } from 'react'
import axios from 'axios'
import { Button }from 'bootstrap'
const About = () => {

  const [state,setState]=useState([])

  const click=()=>{
 axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
console.log(response.data);
setState(response.data.splice(0,10))

 })
  }
  return (
     <div className=' bg-success p-2'>
     <h1 className='text-center'>About page</h1>
      <div>
        <button onClick={click}> click me</button>
      </div>
   {state.map((data)=>(
    <div key={data.id}>

      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
   ))}
   </div>
  )
}

export default About
