import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//Load All State Datas from Home
const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;
//DELETE A Coffee
  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
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

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4 flex items-center">
      <figure className="w-40 h-40 flex-shrink-0">
        <img src={photo} alt="Coffee" className="object-cover w-full h-full rounded-lg" />
      </figure>
      
      <div className="flex justify-between w-full px-6">
        {/* Left side: Coffee details */}
        <div className="flex-1">
          <h2 className="card-title text-xl font-semibold">Name: {name}</h2>
          <p><span className="font-medium">Quantity:</span> {quantity}</p>
          <p><span className="font-medium">Supplier:</span> {supplier}</p>
          <p><span className="font-medium">Taste:</span> {taste}</p>
        </div>

        {/* Right side: Buttons */}
        <div className="flex flex-col space-y-2">
          <button className="btn btn-sm btn-primary">View</button>
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
    </div>
  );
};

export default Coffee;
