import React from 'react';

const SeccionHome = () => {
    return(
        <div className="relative h-screen w-[90%] m-auto ">
            <div className="relative h-full w-full" >

                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-10  rounded-lg"></div>

                <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-living  rounded-lg">

                    <div className="h-full w-[70%] flex flex-col text-white justify-evenly items-start">

                        <div className='pl-48 z-100 flex flex-col justify-center w-[70%]'>
                            <p className="text-5xl font-bold mb-4 text-white">
                                Encuentre aquí  los mejores muebles para su hogar.
                            </p>
                        </div>

                        <div className='pl-48 z-100 flex items-center w-[70%]'>
                            <p className="text-xl text-white">
                                   Las sillas de acento en Herman Miller incluyen un claro acento de diseño moderno de mediados del siglo
                            </p>
                        </div>

                        <div className='pl-48 z-100 flex items-center'>
                        <button className="bg-anotherBlack hover:bg-anotherGray text-white rounded-xl w-fit py-3 px-9">
                            Comprar Ahora
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { SeccionHome }