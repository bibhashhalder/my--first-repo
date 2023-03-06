import React from 'react';
import { UilSearchAlt, UilLocationPinAlt  } from '@iconscout/react-unicons'

const Input = () => {
    return (
        <div className='flex justify-around '>
            <div className='flex justify-center w-3/4'>
            <input type="text" className='w-full p-1 mt-5 text-xl font-light rounded shadow-xl' />
            </div>
            <div className='flex mt-6 text-white'>
            <UilSearchAlt></UilSearchAlt>
            <UilLocationPinAlt></UilLocationPinAlt>
            </div>
            <div className="flex mt-2">
                <button className='font-light text-white'>°C</button>
                <p className='mx-1 mt-3 text-white'>|</p>
                <button className='font-light text-white'>°F</button>
            </div>
        </div>
    );
};

export default Input;
