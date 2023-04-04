import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Student = () => {
    const [student,setStudent] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        const getStudent = async ()=>{
            await axios.get("http://localhost:5000/students/update-student/"+window.location.pathname.split('/')[2])
            .then((response)=>{
                setStudent(response.data)
            })
            .catch((error)=>console.log(error))
        }
        getStudent()
    })

    const deleteStudent = async()=>{
        await axios({
            method:'delete',
            url:("http://localhost:5000/students/delete-student/"+window.location.pathname.split('/')[2])
        })
        .then((response)=>{
            navigate('/')
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div className='container pt-5'>
        <h3>Nom : {student?.name}</h3>
        <hr></hr>
        <h3>Email : {student?.email}</h3>
        <hr></hr>
        <h3>Age : {student?.age} ans</h3>
        <hr></hr>
        <div className='d-flex'>
            <Link to={'/students/update/'+student?._id} type="button" class="btn btn-outline-success">Modifier</Link>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger" onClick={deleteStudent}>Supprimer</button>
        </div>
    </div>
  )
}

export default Student