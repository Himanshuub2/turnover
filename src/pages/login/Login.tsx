import { useRouter } from 'next/navigation'
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

const signupFields = ['Email','Password'];
const Login = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm()

    function loginUser(data){
    console.log(data);
    }

    function handleSignup (){
        router.push('/signup')
    }

  return (
    <div className="flex w-screen  items-center justify-center min-h-screen ">
      <div className="bg-white p-8  shadow-md w-[470px] h-[550px] border border-lightGray rounded-lg ">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <h2 className='text-2xl font-medium mb-2 text-center'>Welcome back to ECOMMERCE</h2>
        <h3 className='mb-6  text-center'>The next gen business marketplace</h3>

        <form className="space-y-4" onSubmit={handleSubmit(loginUser)}>
            {
                signupFields.map((field,idx)=>(
                    <div key={idx}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    id={field.toLowerCase()}
                    className="p-2 block w-full rounded-md  mb-[20px] "
                    style={{border:'1px solid gray'}}
                    placeholder="Enter"
                    {...register(field.toLowerCase(),{required:true})}
                  />
                  {
                    errors[field.toLowerCase()] && <span className='text-red-500 mt-[-20px]'>This Field is required</span>
                  }
                  </div>
                ))
            }
          <button
            type="submit"
            className="w-full flex tracking-wider justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black "
          >
            Login
          </button>
        </form>
        <hr className='my-6 border-gray-400 border-1'/>

        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an Account?{'  '}
          <a onClick={handleSignup} className="font-medium tracking-wider text-black">
            SIGN UP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
