import { useRouter } from 'next/navigation'
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { faker } from '@faker-js/faker';
const signupFields = ['Name','Email','Password'];
const SignupForm = () => {
    const randomProduct = faker.helpers.multiple(faker.commerce.productName,{count:100})
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm()

    function registerUser(data){
    console.log(data);
    }

    function handleLogin (){
        router.push('/login')
    }

  return (
    <div className="flex w-screen  items-center justify-center min-h-screen ">
      <div className="bg-white p-8  shadow-md w-[420px] h-[550px] border border-lightGray rounded-lg ">
        <h1 className="text-2xl font-bold mb-8 text-center">Create your account</h1>
        <form className="space-y-4" onSubmit={handleSubmit(registerUser)}>
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
            CREATE ACCOUNT
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Have an Account?{' '}
          <a onClick={handleLogin} className="font-medium tracking-wider text-black">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
