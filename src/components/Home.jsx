import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const coffees = useLoaderData();

    // better use tanstack query or similar packages
    const [loadedCoffees, setLoadedCoffees] = useState(coffees);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center m-8'>Welcome To Coffee Shop</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    loadedCoffees.map(coffee => <Coffee
                        coffee={coffee}
                        loadedCoffees={loadedCoffees}
                        setLoadedCoffees={setLoadedCoffees}
                        key={coffee._id}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;