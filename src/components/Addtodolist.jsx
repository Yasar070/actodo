import { useState } from "react"

function Addtodolist(props){
    const newarr=props.newarr
    const addarr=props.addarr
    const[newActivity,addActivity]=useState("")

    function handleChange(event){
        addActivity(event.target.value)
    }
    function addChange(){
        addarr([...newarr,{id:newarr.length+1,activity:newActivity}])
        addActivity("")
    }
    return(
        <div>
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <input value={newActivity} onChange={handleChange} placeholder="Activities" className=" border border-black  m-2 p-1"/>
            <button onClick={addChange} className="bg-black text-white p-1">Add</button>
        </div>
    )
}
export default Addtodolist