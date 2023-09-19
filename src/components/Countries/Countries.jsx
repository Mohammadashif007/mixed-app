import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div className='mt-10'>
            <h1 className='text-2xl'>Countries count = {countries.length}</h1>
            <div className='grid grid-cols-3 gap-3 mt-10'>
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;