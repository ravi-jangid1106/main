import { useState } from "react";

function CheckBoxes(){
    const [name,setName] = useState([]);
    const handelCheckbox=(event)=>{
        
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setName([...name,event.target.value]);
        }
        else{
            setName([...name.filter((e)=>e !== event.target.value)])
        }
        
    }

    return(
        <div>
            <h1>
                CheckBox value get and checked
            </h1>
            <input type="checkbox" onChange={handelCheckbox} value="php" id="php" />
            <label htmlFor="php"> PHP</label>
            <br></br>
            <input type="checkbox" onChange={handelCheckbox} value="node" id="node" />
            <label htmlFor="node">Node</label><br />
            <input type="checkbox" onChange={handelCheckbox} value="java" id="java" />
            <label htmlFor="java">Java</label><br />
            <input type="checkbox" onChange={handelCheckbox} value="html" id="html" />
            <label htmlFor="html">Html</label><br />
            <input type="checkbox" onChange={handelCheckbox} value="react" id="react" />
            <label htmlFor="react">React</label><br />

        <h1>{name.toString()}</h1>
        </div>
    )
}
export default CheckBoxes;