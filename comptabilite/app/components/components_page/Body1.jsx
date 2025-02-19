import { Container } from 'postcss'
import React from 'react'

export default function Body1() {
  return (
    <div  >
      <div className='invisible h-6 max-lg:h-16'> 
        <p>espaço</p>
      </div>
      <p className='text-[#124968] text-4xl font-bold text-center  lg:hidden pt-10 pb-4'>
            Uma contabilidade simples e prática para seu negócio.
          </p>
      <div className='md:flex items-center mx-auto max-w-screen-lg'> 
        <div className=' basis-1/2 '>
          
          <p className='text-[#124968] text-4xl font-bold text-center max-lg:hidden '>
            Uma contabilidade simples e prática para seu negócio.
          </p>
          <p className='text-gray-600 text-lg text-justify p-4 max-lg:my-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar lobortis ante, vel ornare nisi maximus sed. Fusce at elit nec lorem consequat pulvinar non laoreet nisi. Cras non pulvinar tortor. Morbi aliquet ante at ullamcorper faucibus. Ut sit amet dictum leo. Nullam fringilla vulputate tempus. 
          adsadasdsad
          
          </p>
      
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
