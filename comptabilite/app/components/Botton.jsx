import React from 'react'
import Link from 'next/link'

export default function Botton() {
  return (
    <nav className="bg-rose-500 p-5 shadow-inner">
       <div className="max-w-screen-lg flex flex-row items-center justify-between mx-auto p-2" >
          <div className="text-white flex justify-center items-center">
            <img src="/images/nome.svg" className='size-44 max-h-10'   alt="nomecomptabilite" />
            <div className=" flex justify-center items-center">
                <Link href="https://wa.me/5561982127834" target="_blank">
                      <img src="/images/zaplogo2.png" className='max-h-10 m-4'   alt="Whats app" />
                  
                </Link>
            
            
                <a href="https://www.instagram.com/comptabilitebsb?igsh=MWRjNm1tZDUzNnR5Ng==" target="_blank">
                    <img src="/images/instalogo2.png" className='max-h-11 m-4'   alt="instagram" />
                
                </a>
            
                <a href="mailto:comptabilitecontabil@gmail.com" target="_blank">
                    <img src="/images/email.png" className='max-h-11 m-4'   alt="email" />
                    
                </a>

                <a href="tel:61 98212-7834" target="_blank">
                    <img src="/images/telefone.png" className='max-h-11 m-4'   alt="email" />
                    
                </a>
  
            </div>
          </div>
          <div className='text-white'>
            <h1>Comptabilite Contabilidade LTDA</h1>
            <h1>CNPJ: 44.749.020/0001-35</h1>
            <h1>Contato: <a href='tel:61 98212-7834'>(61) 98212-7834</a></h1>
            <h1>CRC: DF 003618/O</h1>
            <h1>Email: <a href='mailto:comptabilitecontabil@gmail.com'>comptabilitecontabil@gmail.com </a></h1>
          </div>

          

        </div>
        
    </nav>
  )
}
