import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Modifier = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const getStudent = async ()=>{
            await axios.get("http://localhost:5000/students/update-student/"+window.location.pathname.split('/')[3])
            .then((response)=>{
                setName(response.data.name)
                setEmail(response.data.email)
                setAge(response.data.age)
            })
            .catch((error)=>console.log(error))
        }
        getStudent()
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await axios({
            method:'put',
            url:("http://localhost:5000/students/update-student/"+window.location.pathname.split('/')[3]),
            data:{
                name:name,
                email:email,
                age:age
            }
        })
        .then((response)=>{
            navigate("/students/"+window.location.pathname.split('/')[3])
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div className='d-flex flex-column justify-content-center pt-5'>
        <form className='w-75' onSubmit={handleSubmit}>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nom</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control" id="" value={age} onChange={(e)=>setAge(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Modifier</button>
</form>

    </div>
  )
}

export default Modifier