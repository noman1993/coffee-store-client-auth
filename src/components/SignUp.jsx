import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, name)
        .then(result =>{
            console.log(result.user);
            const createdAt = result?.user?.metadata?.creationTime
            const newUser ={name, email, createdAt}
            //save new user to the database
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newUser)

            })
            .then(res => res.json())
            .then(data =>{
                console.log('user created to db', data);
                
            })
            form.reset()
        })
        .catch(error =>{
            console.log(error.message);
            
        })
         
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
