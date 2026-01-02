// function Student({name ,contact}){ objecyt data 
function Student({user,collage}){
    return(
        <div>
            <h1>Student Data in object </h1>
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Ccollage Name : {collage[0]}</h1>
            <hr></hr>
        </div>
    )
}

export default Student;