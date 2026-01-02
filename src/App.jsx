import { useState } from "react";
import Student from "./Student";
import User from "./User";
function App() {
 
  let studentData ={
    name : "Ravi Jangid",
    Age : "29",
    class : "KI"
  }

  let collageName = ["IIT","IIIT","NIT","AIT"]
  const [val,setVal]= useState("Ravi");

  return (
   <div>
      <input type="text" onChange={()=>{setVal(event.target.value)}} value={val} name="input"></input>
      <br></br>
      <h1>{val}</h1>
      <button type="button" onClick={()=>{setVal("")}}>  clear val</button>

        <Student name={studentData} college={collageName} />



      { 
        <User />

      }

   </div>
  )
}


export default App;
