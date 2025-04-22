import React from 'react'

export default function Compempresa() {
  return (
    <div className="shadow-inner bg-white" >
      <div className='invisible h-6 max-lg:h-16 py-10'> 
        <p>espaço</p>
      </div >
      <div className=' pb-10'>
            <p className='text-[#124968] text-4xl font-bold text-center'>
                A nossa empresa:
            </p>
        </div>

        <div className='md:flex items-center mx-auto max-w-screen-lg'> 
            <div className=' flex basis-1/2 justify-center align-top'>
                <img src='.\images\desktop2.jpg'  className=' w-full h-full object-contain  p-4 '/>
            </div>
            <div className=' basis-1/2 '>
                <p className='text-gray-600 text-lg text-center p-4 max-lg:my-8'>
                  Na Comptabilité, vamos além dos números - somos parceiros estratégicos do seu negócio. Com soluções contábeis inteligentes e personalizadas, transformamos dados em insights valiosos para sua tomada de decisão."Na Comptabilité, sua contabilidade é feita com clareza, precisão e um olhar estratégico - porque bons números abrem caminho para grandes resultados!"


                </p>
                <p className='text-gray-600 text-lg text-center p-4 max-lg:my-8'>
                  Nossa proposta é simples: cuidamos de toda a burocracia fiscal e contábil com excelência técnica, enquanto você se dedica ao que realmente importa - impulsionar seu negócio adiante.
                </p>
                
            </div>
        </div>
        
    </div>
  )
}
