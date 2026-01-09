// import { useState } from "react";
import Student from "./Student";
import Collage from "./Collage";
import CheckBoxes from "./Checkboxes";
import Radio from "./Radio";
import Table from "./Table";
function App() {
// let student1 = {
//   name : "ravi Jangid",
//   email : "ravi@test.com"
// }
// let student2 = {
//   name : "Arun Jangid",
//   email : "Arun@test.com"
// }
// let student3 = {
//   name : "Shaym Jangid",
//   email : "Arun@test.com"
// }

// let collageAry = ["IIT","NIT","ARYA"];

// // const [val,setVal] = useState("");


// // let contact = "779797999"
// const [val,setVal] = useState("");
  return (
    <div>
     {/* <h1>Props in React js</h1> */}
      {/* <Student name={student} contact={contact}/> */}
      {/* <Student user={student1} collage={collageAry}/>
      <Student user={student2} collage={collageAry}/>

      <Student user={student3} collage={collageAry}/>
      <Collage collage={collageAry} />
      <h1>{val}</h1>
      <button onClick={()=>setVal("Clicked")}>Click Me</button>
      <h1> checkboxes in React </h1>
       <CheckBoxes /> */}

       <h1>Radio Button</h1>
       <Radio />
       <Table />
    </div>
  )
}


export default App;
