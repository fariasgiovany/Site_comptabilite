import React from 'react'
import Link from 'next/link'


export default function Bottonmobile() {
  return (
    <nav className="bg-rose-500 p-5 shadow-inner  text-center " >
        <div className="flex justify-center items-center ">
            <img src="/images/nome.svg" className='  max-h-12  '   alt="nomecomptabilite" />
            
                
        </div>
        <div className='pt-8 pb-8 flex justify-center items-center'>
            
                <Link href="https://wa.me/5561982127834" >
                    <img src="/images/zaplogo2.png" className='max-h-10 m-4'   alt="Whats app" />
                
                </Link>
            
            
                <a href="https://www.instagram.com/comptabilitebsb?igsh=MWRjNm1tZDUzNnR5Ng==">
                    <img src="/images/instalogo2.png" className='max-h-11 m-4'   alt="instagram" />
                
                </a>
            
            <a href="mailto:comptabilitecontabil@gmail.com">
                <img src="/images/email.png" className='max-h-11 m-4'   alt="email" />
                
            </a>

            <a href="tel:61 98212-7834">
                <img src="/images/telefone.png" className='max-h-11 m-4'   alt="email" />
                
            </a>
            
    
        </div>
        <div className='text-white text-left'>
            <h1>Comptabilite Contabilidade LTDA</h1>
            <h1>CNPJ: 44.749.020/0001-35</h1>
            <h1>Contato: <a href='tel:61 98212-7834'>(61) 98212-7834</a></h1>
            <h1>CRC: DF 003618/O</h1>
            <h1>Email: <a href='mailto:comptabilitecontabil@gmail.com'>comptabilitecontabil@gmail.com </a></h1>
        </div>
  </nav>
  )
}
