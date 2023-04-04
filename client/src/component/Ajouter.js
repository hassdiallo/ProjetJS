import axios from 'axios'
import React, { useState } from 'react'

const Ajouter = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState("")
    const [show,setShow] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios({
            method:'post',
            url:"http://localhost:5000/students/create-student",
            data:{
                name:name,
                email:email,
                age:age
            }
        })
        .then((response)=>{
            setName("")
            setEmail("")
            setAge("")
            setShow(true)
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
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
{show?<div class="alert w-50 alert-success alert-dismissible fade show mt-4" role="alert">
  étudiant ajouté avec succès
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>:null}
    </div>
  )
}

export default Ajouter