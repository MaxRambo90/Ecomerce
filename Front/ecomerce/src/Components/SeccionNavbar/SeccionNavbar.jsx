import React from 'react';

const SeccionNavbar = () => {
    return (
        <div className='flex items-center w-full h-20 fixed z-200 bg-white'>
            
            <div className='flex w-[90%] m-auto justify-between '>
            <div className='flex flex-row justify-evenly  h-full items-center'>
                <div className='pr-20'>
                    <a href="#home"><h1 className='font-bold text-2xl text-anotherBlack '>KURSIKU</h1></a>
                </div>

                <nav className='flex '>
                    <ul className='flex flex-row gap-12 font-light'>
                        <li className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><a href="#inicio">Inicio</a></li>
                        <li className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><a href="#productos">Productos</a></li>
                        <li className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><a href="#nuevos">Nuevos</a></li>
                        <li className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><a href="#promo">Promo</a></li>
                    </ul>
                </nav>
            </div>

            <div className='flex flex-row  justify-end'>
                <div className='flex flex-row justify-around gap-6 items-center '>
                    <div>
                        <button className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><i class="bi bi-search text-black p-3"></i></button> 
                        <button className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'><i class="bi bi-cart text-black p-3"></i></button> 
                    </div>

                    <div className='flex gap-3'>
                        <button className='hover:bg-gray-300 p-2 rounded-md active:bg-slate-500 transition-all'>Registrate</button>
                        <button className='bg-anotherBlack text-white rounded-lg px-6 py-2 hover:bg-gray-300 p-2 active:bg-slate-500 transition-all' >Iniciar Sesion</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export { SeccionNavbar }

