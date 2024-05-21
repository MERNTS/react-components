// https://gurindernarang.medium.com/side-effect-useeffect-in-react-2dc6cdf0b9c5
import React, { useState, useEffect } from "react";

function App() {
    const [studentList, setStudentList] = useState([]);
    const api = "https://hp-api.onrender.com/api/characters/house/gryffindor";

    useEffect(()=>{
    //Fetching data from the API
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                setStudentList(data);
            })
            .catch((error) => {
                console.log("Error while fetcing data: ", error);
            });
    }, [])
    return (
        <>
            <h1>List of students in Howarts</h1>
            {studentList.map((student) => (
                <>
                    <h4>{student.name}</h4>
                </>
            ))}
        </>
    );
}

export default App;