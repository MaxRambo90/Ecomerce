import React from 'react';

const SeccionHome = () => {
    return(
        <div className="relative h-screen w-[90%] m-auto">
            <div className="relative h-full w-full">

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>

                <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-living">

                    <div className="h-full w-[90%] m-auto flex flex-col text-white justify-center items-start">

                        <div className='h-[33%] z-100 flex items-center'>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Encuentre aquí los mejores muebles para su hogar
                            </h1>
                            <h1>Hola</h1>
                            <h1>Hola</h1>
                        </div>

                        <div className='h-[33%] z-100 flex items-center'>
                            <p className="text-sm md:text-base lg:text-lg mb-6 text-white">
                                   Las sillas de acento en Herman Miller incluyen un claro acento de diseño moderno de mediados del siglo
                            </p>
                        </div>

                        <div className='h-[33%] z-100 flex items-center'>
                            <button className="text-white bg-transparent border border-white py-2 px-4 rounded-full transition-all hover:bg-white   hover:text-black w-fit">
                                Comprar ahora
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { SeccionHome }