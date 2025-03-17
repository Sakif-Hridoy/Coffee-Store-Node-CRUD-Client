import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();  // Initially loaded coffee data
    const navigate = useNavigate();
    // const [updatedCoffee, setUpdatedCoffee] = useState(coffee);  // State for updated coffee data
    const { _id, name, quantity, supplier, category, taste, details, photo } = coffee;

    // Function to handle coffee update
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });

                    // Fetch the updated data and update state
                   
                }
                navigate('/', { replace: true });

            });

        // After update, redirect to home page
    };


    return (
        <div className="lg:w-3/4 mx-auto">
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update Coffee: {name}</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda
                    excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                    id nisi.
                </p>
            </div>
            <div className="card bg-base-100 w-full shadow-2xl p-8">
                <form onSubmit={handleUpdateCoffee} className="card-body space-y-6">
                    {/* form first row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Coffee name"
                                defaultValue={name}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                defaultValue={quantity}
                                placeholder="Quantity"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* form second row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={supplier}
                                placeholder="Coffee supplier"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input
                                type="text"
                                name="taste"
                                defaultValue={taste}
                                placeholder="Taste name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* form third row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Coffee Category"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                type="text"
                                name="details"
                                defaultValue={details}
                                placeholder="Coffee Details"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
