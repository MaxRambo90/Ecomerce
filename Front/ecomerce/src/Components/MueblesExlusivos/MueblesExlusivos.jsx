import React from 'react';
import LR from '../../assets/living_room.png'
import BR from '../../assets/Bedroom.png'
import WS from '../../assets/WorkSpace.png'
import KC from '../../assets/Kitchen.png'

const MueblesExlusivos = () => {
    return(
        <div className='w-[90%] m-auto'>
            <div>
                <h1 className='text-center'>Muebles Exclusivos</h1>
                <p className='text-center'>Consulte la selección de productos populares de esta semana que podrían llamarle la atención y no</p>
            </div>
            <div className='flex gap-5 justify-center'>
                <div className='w-48 h-48'>
                    <img src={LR} alt="Living Room" className='rounded-md' />
                    <p className='text-center'>Sala de estar</p>
                </div>
                <div className='w-48 h-48'>
                    <img src={BR} alt="Bedroom" className='rounded-md' />
                    <p className='text-center'>Dormitorio</p>
                </div>
                <div className='w-48 h-48'>
                    <img src={WS} alt="WorkSpace" className='rounded-md' />
                    <p className='text-center'>Espacio de Trabajo</p>
                </div>
                <div className='w-48 h-48'>
                    <img src={KC} alt="Kitchen" className='rounded-md' />
                    <p className='text-center'>Cocina</p>
                </div>
            </div>
        </div>
    )
}

export { MueblesExlusivos }