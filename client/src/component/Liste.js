import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Liste = () => {
    const [students,setStudents] = useState([])
    useEffect(()=>{
        const getStudents = async ()=>{
            await axios.get("http://localhost:5000/students")
            .then((response)=>{
                setStudents(response.data)
            })
            .catch((error)=>console.log(error))
        }
        getStudents()
    },[])
    console.log(students)
  return (
    <div className='d-flex justify-content-center pt-5'>
        <table class="table w-50">
  
  <tbody>
    {students?.map((student)=>(
        <tr className='' >
       
        <td><h4>{student.name}</h4></td>
        <td className='text-end'><Link to={'/students/'+student?._id} type="button" class="btn btn-outline-success">voir</Link></td>
      </tr>
    ))}
    
    
  </tbody>
</table>
    </div>
  )
}

export default Liste