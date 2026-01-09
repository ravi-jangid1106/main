function Table() {

    const userData = ["Ravi", "Vishal", "Govind", "Shyam"];
    const oficeData = [{
        name: "Ravi",
        id: "1",
        age: "29",
        collage: "IIT"
    },
    {
        name: "Gopdal",
        id: "2",
        age: "34",
        collage: "ITI"
    },
    {
        name: "Shyam",
        id: "3",
        age: "39",
        collage: "III"
    }, {
        name: "Govind",
        id: "5",
        age: "27",
        collage: "MIT"
    }
    ]


    return (
        <div>
            <hr>
            </hr>
            <h1> Array Loop</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item, index) => (

                            <tr key={index + 1}>
                                <td> id :{index + 1}</td>
                                <td>Name :{item}</td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <hr />
            <h1>Array in object in Loop</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Collage</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        oficeData.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.collage}</td>
                                <td>{e.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Table;