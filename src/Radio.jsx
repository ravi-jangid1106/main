import { useState } from "react";

function Radio(){
    const [value,setValue] = useState();
    const [state,setState] = useState("kota")

    const hander=(e)=>{
        setState(e.target.value)

    }
    return(
        <div>
            <hr></hr>
            <h2>
                Learning Radio button 
            </h2>
            <input onChange={(e)=>(setValue(e.target.value))} type="radio" id="male" name="gender" value="male" checked={value === "male"} />
            <label htmlFor="male">Male</label>
 
            <input onChange={(e)=>(setValue(e.target.value))} type="radio" id="female" name="gender" value="female" checked={value === "female"} />
            <label htmlFor="female">Female</label>

            <h1>{value}</h1>
                <br></br>
            <select onChange={hander} defaultValue={state} name="state" id="state">

                <option value="jaipur">Jaipur</option>
                <option value="delhi">Delhi</option>
                <option value="kota">Kota</option>
                <option value="Naguar">Naguar</option>
            </select>
        <h3>
            State : {state}
        </h3>
         <hr></hr>
        </div>
    )
}
export default Radio;