import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

// Load All State Data from Home
const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;
  const { user } = useContext(AuthContext);
  
  // State to handle the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle delete coffee
  const handleDelete = (_id) => {
    if (!user) {
      Swal.fire({
        title: "You must be logged in to delete!",
        text: "Please login first.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-node-crud-server.onrender.com/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = loadedCoffees.filter((cof) => cof._id !== _id);
              setLoadedCoffees(remaining);
            }
          });
      }
    });
  };

  // Open and close the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4 flex items-center">
      <figure className="w-40 h-40 flex-shrink-0">
        <img
          src={photo}
          alt="Coffee"
          className="object-cover w-full h-full rounded-lg"
        />
      </figure>

      <div className="flex justify-between w-full px-6">
        {/* Left side: Coffee details */}
        <div className="flex-1">
          <h2 className="card-title text-xl font-semibold">Name: {name}</h2>
          <p>
            <span className="font-medium">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-medium">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-medium">Taste:</span> {taste}
          </p>
        </div>

        {/* Right side: Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={openModal} // Open modal on "View" button click
            className="btn btn-sm btn-primary"
          >
            View
          </button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-sm btn-secondary">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-orange-500 text-white"
          >
            X
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Coffee Details</h2>
            <figure className="mb-4">
              <img
                src={photo}
                alt="Coffee"
                className="object-cover w-full h-48 rounded-lg"
              />
            </figure>
            <h3 className="text-xl font-semibold">Name: {name}</h3>
            <p>
              <span className="font-medium">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-medium">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-medium">Taste:</span> {taste}
            </p>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-primary mt-4 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coffee;
