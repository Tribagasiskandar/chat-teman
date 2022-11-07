import React, { useState } from 'react'
import {CgMenuGridO} from "react-icons/cg"
import  { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'


function ChatMenu (){
    return(
        <div className='w-[30%] flex flex-col fixed top-16 right-0 bg-white shadow-lg'>
            <div className='flex h-10 w-full justify-between px-3 items-center'>
        <AiOutlineSetting /> Setting
            </div>
            <div className='flex h-10 w-full justify-between px-3 items-center'>
        <AiOutlineLogout /> Logout
            </div>
        </div>
    )
}

export default function Chat() {

    const [showMenu, setShowMenu] = useState(false)
    const [message,setMessage] = useState([])

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    const handleMessage = (e)=>{
        e.preventDefault()
        let msg = e.target.message.value
        let user = JSON.parse(localStorage.getItem("curhatan_chat"))
        e.target.message.value = ""
        setMessage([...message, {
            id: Date.now(),
            message: msg
        }])
       
    }
  return (
    <div className='w-screen h-screen flex flex-col'>
        <header className='w-full h-16 px-6 flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700  fixed top-0 left-0'>
           
            <div className='flex gap-2 text-white items-center'>
                <img src="https://api.multiavatar.com/women.svg" alt="" className='w-12 h-10'/>
                <h1>@bagas</h1>
            </div>
            <CgMenuGridO className='text-2xl text-white' onClick={toggleMenu}/>
        </header>
        {/* <ChatMenu /> */}
        {showMenu && <ChatMenu />}
        <div className='w-full mt-auto flex flex-col  py-[80px] px-3 gap-2 '>
            {message.map((e)=>{
                return(

                <div className='w-auto p-4 bg-white flex flex-col rounded-lg shadow-md max-w-[40%] ml-auto' key={e.id}>
                <p>{e.message}</p>
                
                        </div>
                )
            })}
            

        </div>

        <form className='w-full h-16 flex px-6 items-center bg-gradient-to-r from-blue-500 to-blue-700 fixed bottom-0 left-0 gap-2' onSubmit={handleMessage}>
    <input type="text" className='rounded-full px-4 bg-white h-10 flex-1' id='message'/>
    <button className='h-10 w-10 bg-green-400 text-white rounded-full'>
        {">"}
    </button>
        </form>
    </div>
  )
}