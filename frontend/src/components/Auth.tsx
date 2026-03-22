import { Link } from "react-router-dom"

export const Auth = () =>{
    return <div className="flex h-screen w-full ">
        <div className ="w-1/2 bg-red-200 justify-items-center pt-50">
            <h1> Create an account</h1>
       <p>Already have an account?
        <Link to = "/Signin" className="underline">login</Link>
        </p> 
        <div>
           <LabledInput  label ="Username" placeholder = "Enter your username "/>
        </div>
        <div>
           <LabledInput  label ="Email" placeholder = "example@gmail.comn "/>
        </div>
        <div>
           <LabledInput  label ="Password" placeholder = "Enter your password"/>
        </div>
        </div>
        
       
        <div className="w-1/2 bg-blue-200 justify-items-center pt-50 pl-8" >
            <h1>"The customer service i recived was exceptional.The support team went above and beyond to address my concern."</h1>
            <div>
                <p>Jules Winnfield</p>
                <div>
                    <p>CEO, Acme hc</p>
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
    <label className="pt-5">{label}</label>
  <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder={placeholder} required/>
</div>
    </div>
}