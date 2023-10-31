import React from 'react';
import Living from '../../assets/living.png';

const SeccionHome = () => {
    return(
        <div className='flex justify-center items-center h-Home w-full'>
                <img src={Living} alt="LIVING" className='w-wDivSecundarioHome h-hDivSecundarioHome flex border rounded-xl object-cover' />
        </div>
    )
}

export { SeccionHome }


