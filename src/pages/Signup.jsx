import Login from "./Login"
import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const navigate=useNavigate()
    const userName=props.userName
    const setUserName=props.setUsername

    const[pname,setPname]=useState()
    const[uname,setUname]=useState()

   

    function handlePname(event){
        setPname(event.target.value)
            }
        
            function handleUname(event){
                setUname(event.target.value)
        
            }
            function handleChange(){
                setUserName([...userName,{username:uname,password:pname}])
                navigate("/")
            }
    return(
        <div className="bg-black p-5 m-5 border rounded-md">
            <div className="bg-white p-5 m-5 border rounded-md">
                <h1 className="text-3xl font-medium m-1">Hey Hi</h1>
                <p className="m-1">Signup here</p>
                <input onChange={handleUname} className="border rounded border  border-black p-1 m-1" placeholder="username"/><br/>
                <input onChange={handlePname} className="border rounded border  border-black p-1 m-1" placeholder="password"/><br/>
                <input className="border rounded border  border-black p-1 m-1" placeholder="confirm password"/><br/>
                <button onClick={handleChange} className="bg-green-400 border rounded-md p-1 m-1">Sign Up</button>
                <p>Already have an account ? <Link className="underline" to={"/"}>Login</Link></p>


            </div>
        </div>
    )
}
export default Signup