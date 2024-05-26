import React, { useContext, useState } from 'react';
import axios from 'axios';
import Student from './Student';
import { AppContext } from '../context/AppContext';

const StudentList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedCourses, setSelectedCourses] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCourseChange = (event) => {
    const courseId = parseInt(event.target.value); // Convert the value to integer
    if (event.target.checked) {
        // If the checkbox is checked, add the courseId to the selectedCourses array
        setSelectedCourses([...selectedCourses, courseId]);
        console.log("Selected courses:", courseId, selectedCourses);
    } else {
        // If the checkbox is unchecked, remove the courseId from the selectedCourses array
        setSelectedCourses(selectedCourses.filter(id => id !== courseId));
        console.log("UNSelected course:", courseId,  selectedCourses);
    }
};

  const filteredCourses = state.courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = async (event) => {
    event.preventDefault();
    if (username && selectedCourses) {
      console.log("final selected courses", selectedCourses);
      try {
        const response = await axios.post('http://localhost:5010/api/students', {
          name: username,
          studentCourses: selectedCourses,
        });
        dispatch({ type: 'ADD_STUDENT', payload: response.data });
        console.log(response.data);

        setIsPopupOpen(false);
        setUsername('');
        setSelectedCourses([]);
        setSearchTerm('');
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  const handleDelete = async (studentId) => {
    if (studentId) {
      try {
        await axios.delete(`http://localhost:5010/api/${studentId}`);
        dispatch({ type: 'DELETE_STUDENT', payload: studentId });
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  return (
    <>
      <table className='table'>
        <thead className="thead-light">
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <Student id={student.id} key={student.id} name={student.name} course={student.course}>
              <button className="btn btn-primary" onClick={() => handleDelete(student.id)}>Delete</button>
            </Student>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={togglePopup}>Add Student</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <form onSubmit={handleAddStudent}>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                  <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} placeholder="Username" required />
                </span>
                
                {/* <input type="text" className="form-control" placeholder="Search courses" value={searchTerm} onChange={handleSearchChange} /> */}

                {/* <select className="form-select" value={selectedCourses} onChange={handleCourseChange} required>
                                    <option value="" disabled>Select a course</option>
                                    {filteredCourses.map(course => (
                                        <option key={course.id} value={course.id}>{course.name}</option>
                                    ))}
                                </select> */}
                <div className="form-check">
                  {filteredCourses.map(course => (
                    <div key={course.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`course-${course.id}`}
                        value={course.id}
                        checked={selectedCourses.includes(course.id)} // Check if the course is selected
                        onChange={handleCourseChange} // Call the handleCourseChange function when the checkbox state changes
                      />
                      <label className="form-check-label" htmlFor={`course-${course.id}`}>
                        {course.name}
                      </label>
                    </div>))}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Student</button>
                <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentList;
