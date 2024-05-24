import React, { useEffect, useContext, useState } from 'react';
// import 'StudentList.css'
import axios from 'axios';

import Student from './Student';
import { AppContext } from '../context/AppContext';

const StudentList = (props) => {
    const { students } = useContext(AppContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [username, setUsername] = useState('');
  
    
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);

      axios.post('http://localhost:5010/api/students', {
          "name": username,
          "email": "",
          "dateOfBirth": "2024-05-22T19:38:04.317Z",
          "address": "",
          "phoneNumber": ""
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    
    return (
        <table className='table'>
            <thead className="thead-light">
            <tr>
              <th scope="col">Studdddent ID</th>
              <th scope="col">Name</th>
              <th scope="col">Courses</th>
            </tr>
          </thead>
            <tbody>
            {students.map((student) => (
                <Student id={student.id} key={student.id} name={student.name} />
            ))}
            </tbody>
            <button onClick={togglePopup}>Add Username</button>
            
            {isPopupOpen && (
            <div className="popup">
              <div className="popup-inner">
                <h2>Enter Username</h2>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username"/>
                {/* <input type="text" value={userEmail} placeholder="Email"/>
                <input type="text" value={DateOfBirth} placeholder="DateOfBirth"/>
                <input type="text" value={Address} placeholder="Address"/>
                <input type="text" value={PhoneNumber} placeholder="PhoneNumber"/>  */}
                <button onClick={togglePopup}>AddUser</button>
                <button onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
        </table>
    );  
};

export default StudentList;