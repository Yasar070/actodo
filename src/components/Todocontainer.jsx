import Addtodolist from "./Addtodolist"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer(){
    const[newarr,addarr]=useState([
        {
             id:1,
             activity:"Go for a walk"
         },{
             id:2,
             activity:"Read Books"
         }
     ])
    return(
        <div>
            <div className="flex gap-4 flex-wrap">
            <Addtodolist  newarr={newarr} addarr={addarr}/>
       
        <Todolist newarr={newarr} addarr={addarr}/>

            </div>
       
      </div>
     
    )
}

export default Todocontainer