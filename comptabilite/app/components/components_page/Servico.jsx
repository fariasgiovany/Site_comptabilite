
import React from 'react'

export default function Servico({serv, descricao}) {
  return (
     <div>
      <a href='https://wa.me/5561982127834' target="_blank">
        <div className='border rounded-lg flex flex-col bg-white  hover:bg-rose-500 group  h-56 p-4 click: '>

            <p className='text-[#124968] text-2xl text-center p-2 group-hover:text-white' >{serv}</p>
            <p className='text-gray-600 text-justify p-2 group-hover:text-white'>{descricao}</p>
            <div className="flex justify-center mt-auto m-4 ">
              <button className='bg-rose-500 border rounded-lg p-2 mt-botton text-white group-hover:text-white group-hover:bg-[#124968]  '>Saiba mais pelo  nosso Whats App</button>
            </div>
        </div>
      </a>
  </div>  
  )
}
