function Student({name,college}){
    console.log(college)
    return(
        <div>
            <h1>Name : {name.name}</h1>
            <h1>Age : {name.Age}</h1>
            <h1>Class : {college[0]}</h1>
            <hr></hr>

        </div>

    )
}
export default Student;