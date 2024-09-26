import { useState } from "react"
import {Link }from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate=useNavigate()
    const[pname,setPnme]=useState()
    const[uname,setUname]=useState()
    const[ruser,setRuser]=useState(true)
    const userName=props.userName

   function handlePname(event){
setPnme(event.target.value)
    }

    function handleUname(event){
        setUname(event.target.value)

    }
   function handleCheck(){
    var userfound=false

    userName.forEach(function(item){
        if(item.username===uname && item.password===pname){
            console.log("success");
            userfound=true
            navigate("/landing",{state: {user:uname}})
            
        }
       
    })
    if(userfound===false)
    {
        console.log("login fail");
        setRuser(false)
      
        
    }

    }
    return(
        <div>
              <div className="bg-black p-5 m-5 border rounded-md">
            <div className="bg-white p-5 m-5 border rounded-md">
                <h1 className="text-3xl font-medium m-1">Hey Hi</h1>
                {ruser? <p className="m-1">I help you manage your activities after you login </p>:<p className=" text-red-600 m-1">Plese Signup befor you login</p>}
               
                <input value={uname} onChange={handleUname} className="border rounded border p-1 border-black m-1" placeholder="username"/><br/>
                <input value={pname} onChange={handlePname} className="border rounded border p-1 border-black m-1" placeholder="password"/><br/>

                <button onClick={handleCheck} className="bg-yellow-400 border rounded-md p-1 m-1">Login</button>
                <p>Already have an account ? <Link className="underline" to={"/signup"}>Sign Up</Link></p>


            </div>
        </div>
        </div>

    )
}
export default Login