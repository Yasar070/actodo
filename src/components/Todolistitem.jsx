function Todolistitem(props){


    const newarr=props.newarr
    const addarr=props.addarr
   

   function handleDelete(removeid){
var temparr=newarr.filter(function(item){
    if(item.id===removeid)
    {
        return false
    }
    else{
        return true
    }

})
addarr(temparr)

    }
    return(
        <div className="flex justify-between">
   <p>{props.index+1}.{props.activity}</p>
   <button  className="text-red-700" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
     
    )
    
}
export default Todolistitem