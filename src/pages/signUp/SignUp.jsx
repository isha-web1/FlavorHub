import Lottie from "lottie-react";
import React, { useContext } from "react";
import signupData from '../../assets/register.json'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Authprovider";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={signupData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-5xl font-bold">SignUp now!</h1>
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="your name"
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
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="your email"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                   password
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="your password"
                  className="input input-bordered"
                  required
                  
                />
                
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">
                  SignUp
                </button>
              </div>
            </form>
            <p className="p-4">
              <small className="underline text-blue-500">
                All ready have account? <Link to="/login">please login</Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
