import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {

    const coffees = useLoaderData();
    const { user } = useContext(AuthContext);

    // load default state with existing Coffees
    const [loadedCoffees, setLoadedCoffees] = useState(coffees);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center m-8'>Welcome To Coffee Shop</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Pass State Datas to Coffee Component */}
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