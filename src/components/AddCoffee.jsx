import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const navigate = useNavigate();
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch('http://localhost:5000/coffee',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        navigate('/');
    })
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Coffee!</h1>
        <p className="py-6">
         Add Coffee with your favorite ingredients
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-2xl p-8">
        <form onSubmit={handleAddCoffee} className="card-body space-y-6">
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
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
