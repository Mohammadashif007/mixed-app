import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name, flags, id} = country
    return (
        <div className='border p-3 rounded'>
            <img className='w-full h-56' src={flags.png} alt="" />
            <p className='text-2xl'>{name.common}</p>
            <button className='border px-5 py-2 my-3 bg-cyan-900 text-white rounded hover:bg-cyan-700'>Details</button>
        </div>
    );
};

export default Country;