import { Link } from "react-router-dom"

export const Auth = () =>{
    return <div className="flex h-screen w-full  ">
        <div className ="w-1/2  justify-items-center pt-50">
            <h1> Create an account</h1>
       <p>Already have an account?
        <Link to = "/Signin" className="underline">login</Link>
        </p> 
        <div className="pt-5">
           <LabledInput  label ="Username" placeholder = "Enter your username "/>
        </div>
        <div>
           <LabledInput  label ="Email address" placeholder = "Enter your email "/>
        </div>
        <div>
           <LabledInput  label ="Password" placeholder = "Enter your password"/>
        </div>
        <div className="pt-5">
           <Link to ="/Signin"  className=" text-white bg-black box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Signup</Link>

        </div>
        </div>
        
       
        <div className="w-1/2 bg-slate-200 justify-center pt-50 pl-5 " >
        <div  className="font-bold"> 
            <h1>"The customer service i recived was exceptional.The support team went above and beyond to address my concern."</h1>
         </div >
         <div className="pt-5">
            <div>
                <p>Jules Winnfield</p>
                <div className="text-slate-400">
                    <p>CEO, Acme hc</p>
                </div>
            </div>
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