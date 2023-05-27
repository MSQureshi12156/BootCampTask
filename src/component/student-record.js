import React from 'react';


const StudentTable = () => {
  const student = [
    { id: 1, name: 'Salman', fname: 'Ghafoor', email: 'salman@gmail.com', phone: '1234567890', address: 'Lahore' },
    { id: 1, name: 'Junaid', fname: 'Junaid', email: 'junaid@gmail.com', phone: '1234567890', address: 'Lahore' },
    { id: 1, name: 'Khalid', fname: 'khalid', email: 'khalid@gmail.com', phone: '1234567890', address: 'Lahore' },
    { id: 1, name: 'Shakeel', fname: 'Shakeel', email: 'shakeel@gmail.com', phone: '1234567890', address: 'Lahore' },
    // Add more Student records here
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>FName</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.fname}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;