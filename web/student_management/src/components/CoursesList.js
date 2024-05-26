import React, { useContext, useState } from 'react';
import axios from 'axios';

import Course from './Course';
import { AppContext } from '../context/AppContext';

const CoursesList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [coursername, setCoursename] = useState('');
  const [coursedescription, setCoursedesciption] = useState('');

  const url_all_courses = 'http://localhost:5010/api/courses';

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (coursername) {
      axios.post(url_all_courses, {
        "name": coursername,
        "description": coursedescription,
        // "category": null,
        // "instructor": null,
        // "dateCreated": "2024-05-22T20:37:09.296Z",
        // "dateEnded": "2024-05-22T20:37:09.296Z",
      })
        .then(function (response) {
          console.log(response);
          fetchCourses();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleCoursenameChange = (event) => {
    setCoursename(event.target.value);
  };

  const handleCourseDescriptionChange = (event) => {
    setCoursedesciption(event.target.value);
  };

  const fetchCourses = () => {
    axios.get(url_all_courses)
      .then(response => {
        dispatch({ type: 'SET_COURSES', payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = async (courseID) => {
    if (courseID) {
      try {
        await axios.delete(`http://localhost:5010/api/courses/${courseID}`);
        console.log('Course deleted successfully');
        // Update the local state to reflect the deletion
        dispatch({ type: 'DELETE_COURSE', payload: courseID });
        fetchCourses();
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    } else {
      console.log('Course ID is empty. No request sent.');
    }
  };

  return (
    <>
    <table className='table'>
      <thead className="thead-light">
        <tr>
          <th scope="col">Course Name</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {state.courses.map((course) => (
          <Course id={course.id} key={course.id} name={course.name} description={course.description}>
            <button className="btn btn-primary" onClick={() => handleDelete(course.id)}>Delete</button>
          </Course>
        ))}
      </tbody>
    </table>
      <button type="submit" className="btn btn-primary" onClick={togglePopup}>Add New course</button>
      {isPopupOpen && (
      <div className="popup">
        <div className="popup-inner">
          <form>
            <h3>Enter a new course</h3>
            <div className="mb-4 input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input type="text" className="form-control" id="coursename" value={coursername} onChange={handleCoursenameChange} placeholder="Coursename" />
              <input type="text" className="form-control" id="coursedescription" value={coursedescription} onChange={handleCourseDescriptionChange} placeholder="Course description" />
              <button type="submit" className="btn btn-primary" onClick={togglePopup}>Add course</button>
              <button type="submit" className="btn btn-secondary" onClick={togglePopup}>Close</button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
};

export default CoursesList;