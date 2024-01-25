import React, { useEffect, useState} from 'react'

const Home = () => {
    // declaring state variables
    const [studentData, setStudentData] = useState(null)

    // fetching data with useEffect
    useEffect(() => {
        fetch('http://localhost:4000/student')
        .then((res) => res.json(res))
        .then((data) => setStudentData(data))
        .catch((err) => console.log(err))
    })

  return (
    <div className='container p-5'>
      <h1 className='text-center'>student listing</h1>
      <div className='d-flex justify-content-end'>
        <button className="btn btn-success">
            add student
            </button>
      </div>
      <table class="table">
  <thead>
            <tr>
      <th scope="col">#Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      studentData && studentData.map((student)=>(
        <tr key={student.id}>
          <th scope='row'>{student.id}</th>
          <td>{student.name}</td>
          <td>{student.phone}</td>
          <td>{student.email}</td>
          <td>
            <button className='btn btn-primary'>Edit</button>
            <button className='btn btn-danger ms-3'>Delete</button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>

    </div>
  )
}

export default Home























































// // import React from 'react'

// // const Home = () => {
// //     const fetchData = () => {
// //         fetch('https://jsonplaceholder.typicode.com/posts')
// //         .then((response) => response.json())
// //         .then((data) => console.log(data))
// //         .catch((error) => console.log(error))
// //     }
// //   return (
// //     <div>
// //       <h1>welcome to home</h1>
// //       <button onClick={fetchData}>Fetch data</button>
// //     </div>
// //   )
// // }

// // export default Home

// import React, { useEffect } from 'react'
// // const fetchData = () => {
// //     fetch('https://jsonplaceholder.typicode.com/todos')
// //     .then((chuks) => chuks.json())
// //     .then((data) => console.log(data))
// //     .then((err) => console.log(err))
// // }

// // useEffect(() => {
// //     fetchData()
// // }, [])


// const Home = () => {
//     useEffect(() => {
//         fetch('http://localhost:4000/student')
//         .then((chuks) => chuks.json())
//         .then((data) => console.log(data))
//         .then((err) => console.log(err))
//     })
    
//   return (
//     <div>
//       <h2>welcome to home</h2>
//       {/* <button onClick={fetchData}>Fetch data</button> */}
//     </div>
//   )
// }

// export default Home
