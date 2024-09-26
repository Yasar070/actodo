
import {Route,Link,Routes,BrowserRouter} from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Landing from "./pages/Landing"
import { useState } from "react"

function App() {
  const [userName,setUsername]=useState(
   
  
      [
          {
              username:"yasar",
              password:"123"
          },
          {
            username:"abc",
            password:"123"
          }
      ]
  )

    return(
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup  userName={userName} setUsername={setUsername}/>}></Route>
    <Route path="/" element={<Login userName={userName} setUsername={setUsername} />}></Route>
    <Route path="/landing" element={<Landing/>}></Route>
   </Routes>
    </BrowserRouter>
   
  
  
  </div>
    )
  
  }
  
  



export default App;
