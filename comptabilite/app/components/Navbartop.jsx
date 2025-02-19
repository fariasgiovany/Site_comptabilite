"use client"
import React from 'react'
import Link from 'next/link'
import Dropdown from'./Dropdown'

export default function Navbartop() {
  const [itens]=React.useState([
    {ID:1, nome:"Serviços",link:"#servicos"},
    {ID:2, nome:"Nossa Empresa", link:"#empresa"},
    
  ]);
  console.log("Desenvolvido por Giovany de Farias Lima");


  return (
    <div>
      <nav className="bg-rose-500 p-1 shadow-lg">
        
        <div className="max-w-screen-lg flex flex-row items-center justify-between mx-auto p-2">
          <Link href="/" >
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img src="/images/complogo.jpg" className='size-10 '   alt="comp" />
              <img src="/images/nome.svg" className='size-44 max-h-10'   alt="nomecomptabilite" />
            </div>
          </Link>
          

          <div className="flex items-center space-x-3 rtl:space-x-reverse text-xl">
          {itens.map((itens) =>(
            <div className='hidden   lg:contents text-white' key={itens.ID}>
              <Link href={itens.link} className='px-5'>
                {itens.nome}
              </Link>
              
            </div> 
            ))}
            
            <div className='px-2'>
              <a href="https://wa.me/5561982127834" target="_blank">
                <img src="/images/zaplogo.png" className='size-9'   alt="comp" />
              </a>
            </div>
            <div className="hidden max-lg:contents">
              <Dropdown itens={itens}/>
            </div>
          </div>
          
        </div>
      </nav>

    </div>
   
    
)
}
