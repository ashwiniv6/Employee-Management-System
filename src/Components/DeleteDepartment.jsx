import React, { useState, useEffect } from 'react'

import axios from 'axios'
export default function DeleteDepartment() {
    const [departid, setDepartid] = useState()

    const [idFromBtn, setIdFromBtn] = useState()

    const [departments, setDepartments] = useState([])
    useEffect(() => {

        axios.delete(`http://localhost:8080/department/department/${departid}`)

            .then(response => {

                console.log(response.data)

                setDepartments(response.data)
                alert("Deleted  Sucessfully");



            })

            .catch(error => console.log(error))

    }, [idFromBtn]

    )
    return (
        <div>

            <h3>DeleteDepartment</h3>

            <hr />

            <div className="form-group">

                <label>Department ID</label>

                <input value={departid} onChange={(event) => setDepartid(event.target.value)} className="form-control" />



            </div>

            <button onClick={() => setIdFromBtn(departid)} className="m-2 btn btn-primary">Delete</button>

            <hr />
            
       </div>

    )

}