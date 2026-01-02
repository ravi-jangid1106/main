import { useState } from "react"

function User(){
    let name = "Ravi";
    let email = "Ravi@gmail.com";
    let count = 1;
    const [userName,setUserName] = useState(name)
    const [userEmail,setEmail] = useState(email)
    const [totalCount,setTotalCount] = useState(count)
    const chnageUserName=(name)=>{
        {
            setUserName(name);
        }
    } 
    const changeUSerEmail =(email)=>{
        {
            setEmail(email)
        }
    }
    const sum=(a,b,key)=>{

        key=="+"? setTotalCount(a+b)
        :key=="-"?setTotalCount(a-b)
        :key=="*"?setTotalCount(a*b)
        :setTotalCount(a/b)
        
    }
    return(

        <div>
            <h1>count : {totalCount}</h1>
            <button onClick={()=>{sum(10,20,"*")}}>Count</button>
            <h1>{userName}</h1>
            <h3>{userEmail}</h3>
            <button onClick={()=>{chnageUserName("shyam")}}>Chnage Name</button>
            <button onClick={()=>{changeUSerEmail("Update@gmail.com")}}>Chnage Email</button>
        </div>
    )

}
export default User;