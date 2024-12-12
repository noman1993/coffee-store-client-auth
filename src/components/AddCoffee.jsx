import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            form.reset()
            if(data.insertedId){
              Swal.fire({
                title:'success!',
                text: 'Coffee Added successfully',
                icon: 'success',
                confirmButtonText: 'cool'
              })
            }
        })
        
    }
  return (
    <div className="w-2/3 mx-auto  mt-10 bg-slate-300 p-10">
      <h2 className="text-3xl font-bold my-5">Add a Coffe</h2>

      <form onSubmit={handleAddCoffee}>
        {/* //name and quantity */}
        <div className="flex gap-5 justify-center items-center">
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* //supplier and taste */}
        <div className="flex gap-5 justify-center items-center">
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="supplier"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="taste"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* //category and details */}
        <div className="flex gap-5 justify-center items-center">
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="form-control">
            <label className=" w-full max-w-xs">
              <div className="label">
                <span className="label-text">details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>

        {/* //Photo URL */}
        <div className="form-control w-full items-center">
            <label className=" max-w-xs">
              <div className="label">
                <span className="label-text">photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="mt-10">
          <input type="submit" value="Add Coffee" className="btn btn-block" />
          </div>
        
      </form>
    </div>
  );
};

export default AddCoffee;
