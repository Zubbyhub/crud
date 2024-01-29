import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('')
  const  [name,setName] = useState('')
  const  [email,setEmail] = useState('')
  const  [phone,setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name,email,phone})

    const studentData ={name, email, phone}

     fetch('http://localhost:4000/student' ,{
      method: 'POST' ,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(studentData)
     })
     .then((response) => alert('student data sent succesful'))
     navigate('/')
    //  .catch((error) => console.log(error))
  }
  return (
    <div className='container d-flex justify-content-center p-5'>
      <form onSubmit={handleSubmit} className='border w-50 shadow p-5'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">ID</label>
          <input  disabled="number" value={id} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Full Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
        </div>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Phone Number</label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Create
