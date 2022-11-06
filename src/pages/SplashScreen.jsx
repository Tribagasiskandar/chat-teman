import React from 'react'

export default function SplashScreen() {
  return (
    <main className='w-screen h-screen p-8 bg-gradient-to-t from-blue-500 to-blue-600 flex flex-col'>
        <h1 className='text-[63px] text-white font-bold '>Kini hadir aplikasi Mengobrol</h1>
        <h1 className='text-[63px] text-white font-bold'>Chat App</h1>
        <p className='text-[16px] text-white font-semibold'>berbagi cerita dan celotehan bersama temanmu kini bisa dengan genggaman dari jarak jauh</p>
        <button className='w-full h-10 bg-black text-white mt-auto rounded-lg z-[100]'>Login Sekarang</button>

        <img src="./src/assets/img/chat.png" width={500} className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0" alt="" />
    </main>
  )
}
