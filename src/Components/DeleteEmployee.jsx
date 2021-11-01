import axios from 'axios'
    import React , {useState,useEffect} from 'react'
    
    export default function DeleteEmployee(){
    
        const[userid,setUserid]=useState()
        const[employee,setEmployee]=useState({})
        const[idFromBtn,setIdFromBtn]=useState()
    
        useEffect(()=>
        {
            axios.delete(`http://localhost:8080/employee/${userid}`)
            .then(response=>
                {
                    console.log(response.data)
                    setEmployee(response.data)
                })
                .catch(error=>console.log(error))
        }, [idFromBtn]
        )
    
        return(
            <div className="container mt-3">
                <form className="form-wrapper">
                
                <hr/>
                <div className="name">
                <h3>Get Employee</h3>
                    <label>User ID</label>
                    <input value={userid} onChange={(event)=>setUserid(event.target.value)} className="form-control"/>
                </div>
                <div>
                <button onClick={ ()=>setIdFromBtn(userid)} className="btn btn-primary m-2">Delete</button>
                </div>
                <hr/>
                {
                  employee && <div>
                        <h3>User ID: {userid} Details</h3>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">Employee First Name: {employee.firstName}</li>
                            <li className="list-group-item list-group-item-success">Employee Last Name: {employee.lastName}</li>
                            <li className="list-group-item list-group-item-success">Employee DOB: {employee.dob}</li>
                            <li className="list-group-item list-group-item-success">Employee Email ID: {employee.email}</li>
                        </ul>
                        </div>
                }
                </form>
            </div>
        )
    }