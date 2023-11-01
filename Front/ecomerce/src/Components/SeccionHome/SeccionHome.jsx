import React from 'react';
import Living from '../../assets/living.png';

const SeccionHome = () => {
    return(
        <div className='flex justify-center items-center h-Home w-full'>
                <div className='w-wDivSecundarioHome h-hDivSecundarioHome z-100 relative'>
                    <img src={Living} alt="LIVING" className='w-full h-full flex border rounded-xl object-cover relative' />
                    <h1 className='font-bold text-6xl absolute w-full top-10 left-48 text-gray-300'>Encuentre aqui <br /> los mejores <br />muebles para su hogar</h1>
                    <p className='font-bold absolute w-full bottom-40 left-48 text-gray-300' >Las sillas de acento en Herman Miller incluyen un claro acento de diseño moderno de mediados del siglo</p>
                    <button className='bg-black p-4 border-black rounded-2xl text-white absolute left-44 bottom-8'>Comprar ahora</button>
                </div>
        </div>
    )
}

export { SeccionHome }


