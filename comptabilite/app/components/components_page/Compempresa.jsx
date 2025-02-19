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
                <p className='text-gray-600 text-lg text-justify p-4 max-lg:my-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum at risus eu elementum. Vestibulum in ex ultricies, suscipit dolor in, sollicitudin lectus. Etiam nisi tortor, lacinia et suscipit tristique, suscipit lobortis ante. Curabitur diam libero, imperdiet sit amet urna vitae, gravida sodales eros. Proin in condimentum nisl. Duis semper lacus ut mi dignissim aliquet. In lobortis leo a arcu congue, id semper orci suscipit. In quis tellus lectus. Nullam iaculis pharetra nulla, a tincidunt dui mattis vel. In hac habitasse platea dictumst. Mauris laoreet lectus a diam semper, vitae ornare neque mattis.
                </p>
            
            </div>
        </div>
        
    </div>
  )
}
