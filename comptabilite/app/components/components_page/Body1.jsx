import { Container } from 'postcss'
import React from 'react'

export default function Body1() {
  return (
    <div  >
      <div className='invisible h-6 max-lg:h-16'> 
        <p>espaço</p>
      </div>
      <h1 className='text-[#124968] text-4xl font-bold text-center  lg:hidden pt-10 pb-4'>
            Uma contabilidade simples e prática para seu negócio.
          </h1>
      <div className='md:flex items-center mx-auto max-w-screen-lg'> 
        <div className=' basis-1/2 '>
          
          <h1 className='text-[#124968] text-4xl font-bold text-center max-lg:hidden '>
            Uma contabilidade simples e prática para seu negócio.
          </h1>
          <h2 className='text-gray-600 text-lg text-center p-4 max-lg:my-8'>
          Na Comptabilité, entendemos que a contabilidade vai além de números e impostos – ela é a base para decisões estratégicas e o crescimento sustentável da sua empresa. Com expertise, tecnologia e atendimento personalizado, oferecemos serviços contábeis que simplificam sua rotina e garantem segurança fiscal e financeira.
          
          </h2>
      
        </div>
        <div className=' flex basis-1/2 '>
          <img src='.\images\calculator.jpg'  className=' w-full h-full object-contain  p-4 '/>
        </div>
        <div className='invisible h-6 max-lg:h-16'> 
        <p>espaço</p>
        </div>

      </div>
      
      
    </div>
    
  )
}
