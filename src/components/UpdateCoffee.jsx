import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUt",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="w-2/3 mx-auto  mt-10 bg-slate-300 p-10">
        <h2 className="text-3xl font-bold my-5">Update Coffe: {name}</h2>

        <form onSubmit={handleUpdateCoffee}>
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
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                defaultValue={photo}
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
