import { useEffect, useState } from "react";

function Clock({color}){
    const [time,setTime] = useState(0);

    useEffect(()=>{
            const timer = setInterval(()=>{
                setTime(new Date().toLocaleTimeString());
                    return()=>clearTimeout(timer)
            },1000)
        })
    return(
        <div>
            <h1>Dynmic Clock</h1>
            

                <h1 style={
                    {backgroundColor:"#000",color:color, width:"130px",padding:"10px",borderRadius:"5px"}
                }>
                    {time}
                </h1>

        </div>
    )
}
export default Clock;