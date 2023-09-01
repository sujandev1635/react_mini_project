import React, { useState } from 'react'

function Colors() {
    const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-20 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>ColorChange</button>
                <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>ColorChange</button>
                <button  onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>ColorChange</button>
                <button  onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>ColorChange</button>
                <button  onClick={()=>setColor("MidnightBlue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"MidnightBlue"}}>ColorChange</button>
                <button  onClick={()=>setColor("MediumVioletRed")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"MediumVioletRed"}}>ColorChange</button>
                <button  onClick={()=>setColor("RebeccaPurple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"RebeccaPurple"}}>ColorChange</button>
            </div>
        </div>

    </div>
  )
}

export default Colors