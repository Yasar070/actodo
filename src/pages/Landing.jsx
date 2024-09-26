import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data=useLocation()
  return (
  <div className="bg-black p-10 m-5">
    <div className="bg-[#EFEFEF] p-10  border rounded-md">
      {/* header */}
    <Header name={data.state.user}/>
    {/* card */}
      <div className=" my-5  flex flex-wrap justify-between gap-7">
      <Card bgcolor={"orange"} title={"23"} subtitle={"Chennai"}/>
      <Card bgcolor={"violet"} title={"September"} subtitle={"19:40:04"}/>
      <Card  bgcolor={"skyblue"} title={"Built Using"} subtitle={"React"}/>
      </div>
      {/* Todo container */}

     <Todocontainer/>
    
      

  
  

  </div>
  </div>
  );
}

export default Landing;
