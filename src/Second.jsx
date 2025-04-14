import React, { useState } from 'react'

const Second = () => {
  const [students, setstudents] = useState([
    {
      name: "Harsha",
      RollNo: 123456,
      email: "y=harsha25@gmail.com"
    }, {
      name: "Kishore",
      RollNo: 123440,
      email: "y=kishore@gmail.com"
    }, {
      name: "dads",
      RollNo: 420,
      email: "y=udata123@gmail.com"
    }, {
      name: "udata",
      RollNo: 18,
      email: "udata1234@gmail.com",
    }
  ])
  return (
    <>
      <div className='navbar'>
        <p>Enrollment Number</p>
        <p>Name</p>
        <p>Email</p>
        <p>Action</p>
      </div>
      {
        students.map(() => (
          <div>
            <p>{students.name}</p>
            <p>{students.RollNo}</p>
            <p>{students.email}</p>
          </div>
        ))
      }
    </>
  )
}
export default Second;
