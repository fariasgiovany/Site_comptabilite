import React from 'react'

export default function IRPF() {
  return (
    <div className='bg-white'>
        <div className='invisible h-6 max-lg:h-16 py-10'>
            <p>espaço</p>
            </div>
            <div className=' pb-10'>
                <p className='text-[#124968] text-4xl font-bold text-center'>
                    Faça seu Imposto de Renda conosco:
                </p>
            <div className='md:flex items-center mx-auto max-w-screen-lg'> 
                <div className=' flex basis-1/2 justify-center '>
                    <img src='.\images\LionFace.png'  className=' w-full h-full object-contain  p-4 max-lg:max-h-60 lg:max-h-80'/>
            
                </div>
                <div className=' basis-1/2 '>
                    <p className='text-gray-600 text-lg text-center p-4 max-lg:mt-8'>
                        Realizamos sua declaração com precisão, garantindo que você aproveite todos os benefícios fiscais disponíveis.
                    </p>
                    <p className='text-gray-600 text-lg text-center px-4 max-lg:'>
                        Aproveite ao máximo as deduções permitidas, como despesas médicas, educação e previdência privada, para reduzir seu imposto a pagar e aumentar as possibilidades de restituição.
                                       
                    </p>
                    <p className='text-gray-600 text-lg text-center p-4 max-lg:mb-8'>
                        Deixe a burocracia conosco e desfrute o seu tempo fazendo o que gosta.             
                    </p>
                    <div className='flex justify-center mt-auto m-4'>
                        <a href='https://wa.me/5561982127834' target="_blank">
                            <button className='bg-rose-500 border justify-center rounded-lg p-2  text-white hoover:text-white hover:bg-[#124968]  mt-4 '> 
                                Fale conosco sobre o Imposto de Renda.
                            </button>
                        </a>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}
