import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn= e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`http://localhost:5000/users`,{
                method: 'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('updated signin info in db', data);
                
            })
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
            <h1 className="text-5xl font-bold">SignIn</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
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
                <button className="btn btn-primary">SignIn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;