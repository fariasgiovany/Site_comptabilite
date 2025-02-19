"use client"
import React from 'react'
import Servico from "./Servico"
import { useState } from 'react';


export default function Body2() {
    const [prestados]=React.useState([
        {id: 1, tipo: "Abertura de empresas", descricao: ""},
        {id: 2, tipo: "Regularização fiscal", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
        {id: 3, tipo: "Abertura de empresas", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
        {id: 4, tipo: "Abertura de empresas", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
        {id: 5, tipo: "Abertura de empresas", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
        {id: 6, tipo: "Abertura de empresas", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
        {id: 7, tipo: "Abertura de empresas", descricao: "Regualrizar sua empresa na União Estados e Municípios"},
    ]);
    



  return (
    <div className=' py-14 shadow-inner shadow-slate-200'>
        
        <div className=' pb-10'>
            <p className='text-[#124968] text-4xl font-bold text-center'>Principais serviços prestados:</p>

        </div>


     
        <div className='max-w-screen-lg flex mx-auto justify-center'>
            <div className=' grid md:grid-cols-3 p-2 gap-2'>
                {prestados.map((prestados)=>(

                    <Servico serv={prestados.tipo} descricao={prestados.descricao} key={prestados.id}  />
                    
                ))}
            
            </div>
        </div>
      

    </div>
  )
}
