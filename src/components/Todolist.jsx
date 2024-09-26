import { useState } from "react"
import Todolistitem from "./Todolistitem"

function Todolist(props)
{
  const newarr=props.newarr
  const addarr=props.addarr
    return(
        <div className="bg-violet-400 p-4 border rounded flex-grow">
        <h1 className="text-2xl font-medium">Today's Activities</h1>
       
        {newarr.length===0?<p>You haven't added anything yet</p>:""}
      {
        newarr.map(function(item,index){
            return <Todolistitem id={item.id} activity={item.activity} index={index} newarr={newarr} addarr={addarr}/>
        })
      }
    </div>
    )
}
export default Todolist