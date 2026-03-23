import { Link } from "react-router-dom"
export const Signin = () =>{
    return <div className="flex h-screen w-full  ">
        <div className ="w-full justify-items-center pt-50">
            <h1>Login to your account</h1>
       <p>Don't have an account?
        <Link to = "/Signup" className="underline">Signup</Link>
        </p> 
        <div>
           <LabledInput  label ="Email address" placeholder = "Enter your email "/>
        </div>
        <div>
           <LabledInput  label ="Password" placeholder = "Enter your password"/>
        </div>
        <div className="pt-5">
           <Link to ="/Signin"  className=" text-white bg-black box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Signin</Link>

        </div>
        </div>
        </div>

}

interface LabledInputTypes{
    label :string;
    placeholder:string;

}

function  LabledInput ({label ,placeholder}:LabledInputTypes){
    return <div>
        <div className="w-full max-w-sm min-w-50">
    <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
  <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder={placeholder} required/>
</div>
    </div>
}