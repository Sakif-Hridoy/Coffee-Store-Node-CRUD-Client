import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const user = useLoaderData(); 
    const {_id,name,email} = user;
    // Initially loaded user data
    const navigate = useNavigate();

    // Function to handle user update
    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        

        const updateUser = { name, email };

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });

                    // Fetch the updated data and update state
                }
                navigate('/users', { replace: true });

            });

        // After update, redirect to home page
    };

    // Function to fetch updated user data

    // Initially load the user data
// Dependency array ensures it only runs on the first render or when _id changes

    return (
        <div className="lg:w-3/4 mx-auto">
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update User: {name}</h1>
                <p className="py-6">
                    Update your personal details below.
                </p>
            </div>
            <div className="card bg-base-100 w-full shadow-2xl p-8">
                <form onSubmit={handleUpdateUser} className="card-body space-y-6">
                    {/* form first row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Full Name"
                                // defaultValue={name}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={email}
                                // defaultValue={email}
                                placeholder="Email Address"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* form second row */}
                

                  

                    {/* Submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
