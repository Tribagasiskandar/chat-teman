
import React, {useContext} from 'react'
import { AvatarContext } from '../Context/AvatarContextProvider'


export default function Login() {

    const {avatar, setAvatar} = useContext(AvatarContext)
    const handleAvatar = ()=>{
        setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`)
    }

    const handleLogin = (e)=>{
      e.preventDefault()

      let username = e.target.username.value
      localStorage.setItem("Chat_App_user", JSON.stringify({
        id : Date.now,
        username: username,
        avatar: avatar
      }))
      window.location.href = "/chat"
    }
  return (
    <main className='w-screen h-screen p-8 bg-gradient-to-t from-blue-500 to-blue-600 flex flex-col'>
     <form className='w-full flex flex-col bg-white shadow-lg rounded-lg p-6 z-[100] gap-4 ' onSubmit={handleLogin}>
    <div className='relative w-28 mx-auto'>
    <img src={avatar} className='w-28 h-28 mx-auto' alt="avatar" />
    <button className='w-8 h-8 bg-blue-400 text-white rounded-full absolute -right-4 top-16' type='button'
    onClick={handleAvatar}>?</button>
    </div>
    <div className='flex flex-col gap-2'>
        
        <label htmlFor="username" >usernamen</label>
        <input type="text" id='username'className='w-full h-12 px-3 border-[1px] border-gray-400 rounded-lg'/>
    </div>
    <button className='w-full h-12 bg-black text-white rounded-lg' type='submit'>Login</button>
     </form>
        <img src="./src/assets/img/chat.png" width={500} className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0 " alt="" />
    </main>
  )
}
