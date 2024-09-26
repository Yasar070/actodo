function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className= "py-5 px-10 mx-5 my-5 border rounded-md text-center flex-grow " >
    <h1 className="text-3xl font-medium">{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>

    )
}

export default Card