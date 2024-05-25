import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import Student from './Student';
import { AppContext } from '../context/AppContext';

const StudentList = (props) => {
  const { students, dispatch } = useContext(AppContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (username) {
      axios.post('http://localhost:5010/api/students', {
        "name": username,
        "email": "",
        "dateOfBirth": "2024-05-22T19:38:04.317Z",
        "address": "",
        "phoneNumber": ""
      })
        .then(function (response) {
          console.log(response);
          fetchStudents();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchStudents = () => {
    axios.get("http://localhost:5010/api/students")
      .then(response => {
        dispatch({ type: 'SET_STUDENTS', payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };  

  const handleDelete = async (studentId) => {
    if (studentId) {
      try {
        await axios.delete(`http://localhost:5010/api/${studentId}`);
        console.log('Student deleted successfully');
        // Update the local state to reflect the deletion
        // setStudents(students.filter(student => student.id !== studentId));
        dispatch({ type: 'DELETE_STUDENT', payload: studentId });
        fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    } else {
      console.log('Student ID is empty. No request sent.');
    }
  };

  return (
    <table className='table'>
      <thead className="thead-light">
        <tr>
          <th scope="col">Student ID</th>
          <th scope="col">Name</th>
          <th scope="col">Courses</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <Student id={student.id} key={student.id} name={student.name} >
            <button class="btn btn-primary" onClick={() => handleDelete(student.id)}>Delete</button>
          </Student>
        ))}
      </tbody>
      <button type="submit" class="btn btn-primary" onClick={togglePopup}>Add Username</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <form>
              <h3>Enter a new student</h3>
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-person"></i>
                </span>
                <input type="text" class="form-control" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" />
              </div>
              {/* <input type="text" value={userEmail} placeholder="Email"/>
                <input type="text" value={DateOfBirth} placeholder="DateOfBirth"/>
                <input type="text" value={Address} placeholder="Address"/>
                <input type="text" value={PhoneNumber} placeholder="PhoneNumber"/>  */}
              <select class="form-select" aria-label='Math-Default select example'>
                <option selected>Open this select menu</option>
                <option value="1">o_Math</option>
                <option value="2">o_Art</option>
              </select>
              <button type="submit" class="btn btn-primary" onClick={togglePopup}>AddUser</button>
              <button type="submit" class="btn btn-primary" onClick={togglePopup}>Close</button>
            </form>
          </div>
        </div>
      )}
    </table>
  );
};

export default StudentList;